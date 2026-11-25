import { event, experiences } from "@/data/event";
import { ButtonLink } from "./ButtonLink";

export function Invitation() {
  return (
    <section id="invitation" className="invitation-section" aria-labelledby="invitation-title">
      <div className="wrap invitation-layout">
        <div className="invitation-story">
          <p className="eyebrow" lang="en">A little thank you. A new beginning.</p>
          <h2 id="invitation-title" className="section-title" lang="en">
            10 years of<br /><em>growing together.</em>
          </h2>
          <p className="story-copy">{event.thankYou}</p>
          <div className="experience-list">
            {experiences.map((experience) => (
              <div key={experience.title} className="experience-row">
                <h3 lang="en">{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="date-card" id="venue">
          <p className="eyebrow" lang="en">Save the afternoon</p>
          <time dateTime={event.date} className="date-display" aria-label={event.dateThai}>
            <span className="date-day">30</span>
            <span className="date-month" lang="en">November <span>2026</span></span>
          </time>
          <div className="event-times grid grid-cols-2 gap-4">
            <div><p className="detail-label">ลงทะเบียน</p><p className="detail-value">{event.registration}</p></div>
            <div><p className="detail-label">เวลาจัดงาน</p><p className="detail-value">{event.hours}</p></div>
          </div>
          <div className="venue-details">
            <p className="detail-label">แล้วพบกันที่</p>
            <h3 lang="en">{event.venue}</h3>
            <p>{event.transit}</p>
            <ButtonLink href={event.mapUrl} external>ดูแผนที่ Google Maps</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
