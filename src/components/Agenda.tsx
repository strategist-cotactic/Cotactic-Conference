import { agenda, event } from "@/data/event";
import { DisplayText } from "./DisplayText";

export function Agenda() {
  return (
    <section id="agenda" className="agenda-section paper-edges" aria-labelledby="agenda-title">
      <div className="wrap agenda-layout">
        <div className="agenda-intro">
          <p className="eyebrow">กำหนดการ</p>
          <h2 id="agenda-title" className="section-title" lang="en">An afternoon<br /><em>to connect<br />and celebrate.</em></h2>
          <p className="agenda-description">เติมมุมมองใหม่ให้แบรนด์</p>
          <p className="agenda-date" lang="en"><time dateTime={event.date}>{event.dateEnglish}</time><br />13:00–17:00 · {event.venue}</p>
        </div>
        <ol className="agenda-list">
          {agenda.map((item) => (
            <li key={item.start} className="agenda-row">
              <div className="agenda-time" lang="en" aria-label={`${item.start} ถึง ${item.end} นาฬิกา`}>
                <time dateTime={`${event.date}T${item.start}:00+07:00`}>{item.start}</time>
                <span aria-hidden="true">—</span>
                <time dateTime={`${event.date}T${item.end}:00+07:00`}>{item.end}</time>
              </div>
              <div>
                <h3 lang="en" className={item.highlight ? "agenda-highlight" : ""}><DisplayText text={item.title} /></h3>
                <p className="whitespace-pre-line">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
