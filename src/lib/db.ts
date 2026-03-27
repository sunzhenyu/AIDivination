import Database from "better-sqlite3";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "daily.db");

let _db: Database.Database | null = null;
let _dbFailed = false;

function getDb(): Database.Database | null {
  if (_dbFailed) return null;
  if (!_db) {
    try {
      _db = new Database(DB_PATH);
      _db.exec(`
        CREATE TABLE IF NOT EXISTS daily_readings (
          date TEXT NOT NULL,
          lang TEXT NOT NULL,
          solar_date TEXT NOT NULL,
          lunar_date TEXT NOT NULL,
          yi TEXT NOT NULL,
          ji TEXT NOT NULL,
          prose_title TEXT NOT NULL,
          prose TEXT NOT NULL,
          prose_author TEXT NOT NULL DEFAULT '',
          created_at TEXT NOT NULL,
          UNIQUE(date, lang)
        )
      `);
      // migrate existing DBs that lack prose_author
      try { _db.exec("ALTER TABLE daily_readings ADD COLUMN prose_author TEXT NOT NULL DEFAULT ''"); } catch { /* column already exists */ }
    } catch (err) {
      console.warn("SQLite initialization failed (expected on Vercel):", err);
      _dbFailed = true;
      return null;
    }
  }
  return _db;
}

export interface DailyReading {
  date: string;
  lang: string;
  solarDate: string;
  lunarDate: string;
  yi: string[];
  ji: string[];
  proseTitle: string;
  proseAuthor: string;
  prose: string;
  createdAt: string;
}

export function getDailyReading(date: string, lang: string): DailyReading | null {
  const db = getDb();
  if (!db) return null;

  const row = db.prepare(
    "SELECT * FROM daily_readings WHERE date = ? AND lang = ?"
  ).get(date, lang) as Record<string, string> | undefined;

  if (!row) return null;

  return {
    date: row.date,
    lang: row.lang,
    solarDate: row.solar_date,
    lunarDate: row.lunar_date,
    yi: JSON.parse(row.yi),
    ji: JSON.parse(row.ji),
    proseTitle: row.prose_title,
    proseAuthor: row.prose_author ?? "",
    prose: row.prose,
    createdAt: row.created_at,
  };
}

export function saveDailyReading(reading: DailyReading): void {
  const db = getDb();
  if (!db) return; // silently skip caching on Vercel

  db.prepare(`
    INSERT OR REPLACE INTO daily_readings
      (date, lang, solar_date, lunar_date, yi, ji, prose_title, prose, prose_author, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    reading.date,
    reading.lang,
    reading.solarDate,
    reading.lunarDate,
    JSON.stringify(reading.yi),
    JSON.stringify(reading.ji),
    reading.proseTitle,
    reading.prose,
    reading.proseAuthor,
    reading.createdAt
  );
}
