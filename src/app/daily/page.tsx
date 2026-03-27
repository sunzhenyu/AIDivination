"use client";

import { useEffect, useState } from "react";
import { TopNav } from "@/components/top-nav";
import { copy } from "@/lib/i18n";
import { useLang } from "@/lib/client";

interface DailyData {
  solarDate: string;
  lunarDate: string;
  yi: string[];
  ji: string[];
  proseTitle: string;
  proseAuthor: string;
  prose: string;
  cached: boolean;
}

function getTodayStr(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function offsetDate(dateStr: string, days: number): string {
  const d = new Date(dateStr + "T12:00:00");
  d.setDate(d.getDate() + days);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export default function DailyPage() {
  const { lang } = useLang();
  const t = copy[lang];
  const [date, setDate] = useState(getTodayStr);
  const [data, setData] = useState<DailyData | null>(null);
  const [loading, setLoading] = useState(true);

  const today = getTodayStr();
  const isToday = date === today;

  useEffect(() => {
    setLoading(true);
    setData(null);
    fetch(`/api/daily?lang=${lang}&date=${date}`)
      .then((r) => r.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [lang, date]);

  // reset to today when language changes
  useEffect(() => {
    setDate(getTodayStr());
  }, [lang]);

  return (
    <div className="appBody">
      <TopNav active="daily" />
      <main className="dailyPage">
        {loading && (
          <p className="dailyLoading">{t.daily.loading}</p>
        )}
        {!loading && data && (
          <>
            <div className="dailyDate">
              <p className="dailySolar">{data.solarDate}</p>
              <p className="dailyLunar">{data.lunarDate}</p>
            </div>

            <div className="dailyAlmanac">
              <div className="dailyAlmanacRow">
                <span className="dailyAlmanacLabel yi">{t.daily.yi}</span>
                <div className="dailyAlmanacTags">
                  {data.yi.map((item, i) => (
                    <span key={i} className="dailyTag">{item}</span>
                  ))}
                </div>
              </div>
              <div className="dailyAlmanacRow">
                <span className="dailyAlmanacLabel ji">{t.daily.ji}</span>
                <div className="dailyAlmanacTags">
                  {data.ji.map((item, i) => (
                    <span key={i} className="dailyTag">{item}</span>
                  ))}
                </div>
              </div>
            </div>

            <hr className="dailyDivider" />

            <div className="dailyProse">
              <p className="dailyProseLabel">{t.daily.prose}</p>
              <p className="dailyProseTitle">{data.proseTitle}</p>
              {data.proseAuthor && (
                <p className="dailyProseAuthor">&mdash; {data.proseAuthor}</p>
              )}
              <p className="dailyProseBody">{data.prose}</p>
            </div>

            <div className="dailyNav">
              <button
                className="dailyNavBtn"
                onClick={() => setDate(d => offsetDate(d, -1))}
              >
                &#8592; {t.daily.prevDay}
              </button>
              <button
                className="dailyNavBtn dailyNavToday"
                onClick={() => setDate(today)}
                disabled={isToday}
                style={{ opacity: isToday ? 0.4 : 1, pointerEvents: isToday ? "none" : "auto" }}
              >
                {t.daily.backToday}
              </button>
              <button
                className="dailyNavBtn"
                onClick={() => setDate(d => offsetDate(d, 1))}
                disabled={isToday}
                style={{ opacity: isToday ? 0.4 : 1, pointerEvents: isToday ? "none" : "auto" }}
              >
                {t.daily.nextDay} &#8594;
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
