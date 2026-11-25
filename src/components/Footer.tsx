import { event } from "@/data/event";

export function Footer() {
  return (
    <footer id="contact" className="closing">
      <div className="wrap">
        <div className="footer-invitation">
          <div>
            <p className="eyebrow" lang="en">With appreciation from all of us.</p>
            <h2 className="section-title" lang="en">Here’s to <em>what’s next.</em></h2>
            <p>ขอบคุณที่เป็นส่วนหนึ่งของ 10 ปีที่ผ่านมา<br />และหวังว่าจะได้ฉลองก้าวต่อไปด้วยกัน</p>
          </div>
          <div className="footer-contact">
            <p className="detail-label">สอบถามการเดินทาง</p>
            <ul className="contact-list">
              {event.contacts.map((contact) => (
                <li key={contact.name}>
                  <p className="contact-name">{contact.name}</p>
                  <a
                    className="m-link contact-phone"
                    href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                    aria-label={`โทรหา ${contact.name} ${contact.phone}`}
                  >
                    {contact.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom flex flex-wrap items-center justify-between gap-6">
          <img className="wordmark wordmark--footer" src="/images/cotactic-logo.png" alt="COTACTIC" width={1185} height={263} />
          <span lang="en">10 years of growing together.</span>
          <a href="#top" className="m-link m-link--bare">กลับสู่ด้านบน</a>
        </div>
      </div>
    </footer>
  );
}
