"use client";

type TransitionOverlayProps = {
  show: boolean;
  icon: string;
  text: string;
};

export function TransitionOverlay({ show, icon, text }: TransitionOverlayProps) {
  if (!show) return null;
  return (
    <div className="mysticalTransition active">
      <div className="transitionContent">
        <div className="mysticalSymbol">{icon}</div>
        <div className="techLines" />
        <div className="transitionText">{text}</div>
        <div className="loadingDots">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
