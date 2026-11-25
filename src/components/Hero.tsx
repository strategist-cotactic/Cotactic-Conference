import Image from "next/image";
import { event } from "@/data/event";
import { ButtonLink } from "./ButtonLink";

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="event-title">
      <div className="wrap hero-layout">
        <div className="hero-text">
          <p className="eyebrow hero-eyebrow" lang="en">A private gathering · 10th anniversary</p>
          <h1 id="event-title" className="hero-title" lang="en">
            <span>COTACTIC</span>
            <span>CONNECT <em>2026</em></span>
          </h1>
          <p className="hero-theme" lang="en">
            Protect the Core,<br />
            <em>Explore the White Space.</em>
          </p>
          <p className="hero-invitation">{event.invitation}</p>
          <ButtonLink href="#invitation" variant="secondary">ดูรายละเอียดงาน</ButtonLink>
          <div className="hero-facts">
            <time dateTime={event.date} lang="en">{event.dateEnglish}</time>
            <span lang="en">{event.venue}</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo">
            <Image
              src="/images/connect-gathering.webp"
              alt="บรรยากาศการพบปะพูดคุยอย่างเป็นกันเองในพื้นที่แสงธรรมชาติ"
              width={735}
              height={1102}
              priority
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 60vw, 42vw"
              data-source="client"
              data-subject="conference-mood"
            />
          </div>
          <div className="anniversary-seal">
            <Image
              src="/images/10th-anniversary.png"
              alt="ตราฉลองครบรอบ 10 ปี COTACTIC — Growing Together"
              width={1200}
              height={1200}
              sizes="(max-width: 639px) 106px, (max-width: 1199px) 128px, 150px"
              loading="eager"
              data-source="client"
              data-subject="anniversary-badge"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
