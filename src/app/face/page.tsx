"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { TopNav } from "@/components/top-nav";
import { TransitionOverlay } from "@/components/transition-overlay";
import { copy } from "@/lib/i18n";
import { useLang, writeSession } from "@/lib/client";

export default function FacePage() {
  const { lang } = useLang();
  const t = copy[lang];
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showTransition, setShowTransition] = useState(false);
  const [fileName, setFileName] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
    };
  }, []);

  function onFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    setFileName(file.name);
    setPreviewUrl(URL.createObjectURL(file));
    setError("");
  }

  async function openCamera(mode: "user" | "environment" = facingMode) {
    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: mode, width: { ideal: 1280 }, height: { ideal: 720 } }
      });
      streamRef.current = stream;
      setCameraOpen(true);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setError("");
    } catch {
      setError(lang === "zh" ? "无法启动相机，请检查浏览器权限设置。" : "Unable to open camera. Check browser permissions.");
    }
  }

  async function switchCamera() {
    const next = facingMode === "user" ? "environment" : "user";
    setFacingMode(next);
    await openCamera(next);
  }

  function closeCamera() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setCameraOpen(false);
  }

  function capturePhoto() {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.drawImage(video, 0, 0);
    canvas.toBlob((blob) => {
      if (!blob) return;
      const file = new File([blob], `face-${Date.now()}.jpg`, { type: "image/jpeg" });
      setSelectedFile(file);
      setFileName(file.name);
      setPreviewUrl(URL.createObjectURL(file));
      closeCamera();
    }, "image/jpeg", 0.92);
  }

  function resetSelection() {
    setSelectedFile(null);
    setFileName("");
    setPreviewUrl("");
    setError("");
  }

  async function analyze() {
    if (!selectedFile) return;
    setLoading(true);
    setShowTransition(true);
    setError("");
    const form = new FormData();
    form.append("image", selectedFile);
    form.append("hint", lang === "zh" ? "请做面部特征解读并给出建议" : "Please provide personality-led face reading and advice.");
    form.append("lang", lang);
    try {
      const started = Date.now();
      const res = await fetch("/api/ai/face", { method: "POST", body: form });
      const elapsed = Date.now() - started;
      if (elapsed < 2200) {
        await new Promise((resolve) => setTimeout(resolve, 2200 - elapsed));
      }
      if (!res.ok) throw new Error("request_failed");
      const data = await res.json();
      writeSession("faceResult", data);
      router.push("/face/result");
    } catch {
      setError(t.common.apiUnavailable);
      setShowTransition(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="shell">
      <TopNav active="face" />
      <section className="panel sectionBlock stack">
        <div className="pageHeader">
          <span className="eyebrow">AI Divination</span>
          <h1 className="title" style={{ maxWidth: "none", marginInline: "auto" }}>{t.face.title}</h1>
          <p className="subtitle">
            {lang === "zh"
              ? "AI 面相解读：上传清晰正脸，获得性格倾向与沟通风格线索。"
              : "AI face reading: upload a clear portrait to uncover personality tendencies and communication cues."}
          </p>
        </div>
        <div className="resultSection" style={{ marginTop: 0 }}>
          <h4>{lang === "zh" ? "上传建议" : "Upload guidance"}</h4>
          <p className="muted">
            {lang === "zh"
              ? "建议使用自然光、无遮挡、正面视角图片，以获得更稳定的分析结果。"
              : "Use natural light, a front-facing angle, and minimal occlusion for best results."}
          </p>
        </div>

        <div className="mediaActions">
          <label className="btn secondary" htmlFor="faceImageInput">{lang === "zh" ? "选择图片" : "Choose image"}</label>
          <button type="button" className="btn secondary" onClick={() => openCamera()}>
            {lang === "zh" ? "开启相机" : "Open camera"}
          </button>
        </div>
        <input id="faceImageInput" className="fileInputHidden" type="file" accept="image/*" onChange={onFileChange} />

        {cameraOpen ? (
          <div className="mediaCard cameraWrap">
            <video ref={videoRef} className="cameraVideo" autoPlay playsInline />
            <div className="mediaActions">
              <button type="button" className="btn secondary" onClick={switchCamera}>{lang === "zh" ? "切换相机" : "Switch camera"}</button>
              <button type="button" className="btn secondary" onClick={capturePhoto}>{lang === "zh" ? "拍照" : "Capture"}</button>
              <button type="button" className="btn secondary" onClick={closeCamera}>{lang === "zh" ? "关闭相机" : "Close camera"}</button>
            </div>
          </div>
        ) : null}

        {previewUrl ? (
          <div className="mediaCard stack">
            <img className="mediaPreview" src={previewUrl} alt="face preview" />
            <p className="muted fileMeta">{fileName}</p>
            <div className="mediaActions">
              <button type="button" className="btn secondary" onClick={resetSelection}>{lang === "zh" ? "重新拍摄/选择" : "Retake"}</button>
              <button type="button" className="btn" disabled={loading} onClick={analyze}>{loading ? t.common.loading : t.face.action}</button>
            </div>
          </div>
        ) : null}

        {error ? <p className="muted">{error}</p> : null}
        <canvas ref={canvasRef} style={{ display: "none" }} />
      </section>
      <TransitionOverlay show={showTransition} icon="🪞" text={t.face.transition} />
    </main>
  );
}
