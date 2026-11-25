import { event } from "@/data/event";

export function Header() {
  return (
    <header className="nav">
      <div className="wrap flex h-full items-center justify-between gap-4">
        <a className="skip-link" href="#main">ข้ามไปยังเนื้อหา</a>
        {/* Text placeholder; replace with the approved Cotactic logo when supplied. */}
        <a href="#top" className="wordmark" aria-label="Cotactic กลับสู่ด้านบน">COTACTIC</a>
        <a href="#agenda" className="m-link m-link--bare header-hashtag">{event.hashtag}</a>
      </div>
    </header>
  );
}
