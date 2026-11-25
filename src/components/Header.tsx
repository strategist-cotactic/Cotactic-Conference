import { event } from "@/data/event";

export function Header() {
  return (
    <header className="nav">
      <div className="wrap flex h-full items-center justify-between gap-4">
        <a className="skip-link" href="#main">ข้ามไปยังเนื้อหา</a>
        <a href="#top" className="wordmark" aria-label="COTACTIC กลับสู่ด้านบน">
          <img src="/images/cotactic-logo.png" alt="COTACTIC" width={1185} height={263} />
        </a>
        <a href="#agenda" className="m-link m-link--bare header-hashtag">{event.hashtag}</a>
      </div>
    </header>
  );
}
