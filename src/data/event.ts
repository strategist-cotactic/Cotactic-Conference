/** Draft content. Source facts and unresolved timing are recorded in Project Brief.md. */
export const event = {
  name: "COTACTIC Connect 2026",
  anniversary: "10th Anniversary",
  theme: "Protect the Core, Explore the White Space",
  hashtag: "#CotacticConnect",
  date: "2026-11-30",
  dateThai: "วันจันทร์ที่ 30 พฤศจิกายน 2026",
  dateEnglish: "30 November 2026",
  registration: "13:00 น.",
  hours: "13:30–17:00 น.",
  venue: "Club Siam, Glowfish",
  transit: "BTS สนามกีฬาแห่งชาติ",
  mapUrl: "https://maps.app.goo.gl/BNGWpnz8exXoMCQt8",
  contacts: [
    { name: "Khun Tok", phone: "061-021-9515" },
    { name: "Khun Jean", phone: "092-256-6598" },
  ],
  invitation:
    "ขอเชิญคุณมาร่วมเปิดมุมมองการตลาดปี 2027 ค้นหาโอกาสใหม่ให้แบรนด์ และฉลอง 10 ปีแห่งการเติบโตไปด้วยกัน",
  thankYou:
    "ตลอด 10 ปี ทุกการเติบโตของ Cotactic มีคุณเป็นส่วนสำคัญ ขอเชิญร่วมฉลองครบรอบ 10 ปี พร้อมแลกเปลี่ยนมุมมองธุรกิจและการตลาด",
};

export const experiences = [
  {
    title: "Fresh perspectives",
    description: "อัปเดตเทรนด์การตลาดปี 2027",
  },
  {
    title: "Explore the White Space",
    description: "ค้นหาสิ่งที่ควรรักษา และเพิ่มโอกาสให้แบรนด์",
  },
];

// Keep supplied time ranges. Do not show the conflicting Keynote duration.
export const agenda = [
  {
    start: "13:00", end: "13:40", title: "A Warm Welcome",
    description: "ลงทะเบียน รับ Welcome Gift และถ่ายภาพ",
  },
  {
    start: "13:40", end: "13:55", title: "Opening Remarks",
    description: "กล่าวต้อนรับและเปิดงานฉลองครบรอบ 10 ปี Cotactic",
  },
  {
    start: "13:55", end: "14:55", title: "Marketing & AI Trends for 2027",
    description: "Keynote อัปเดตเทรนด์การตลาดและ AI เพื่อเตรียมแบรนด์ให้พร้อมสำหรับปี 2027",
    highlight: true,
  },
  {
    start: "14:55", end: "15:10", title: "Coffee Break",
    description: "พักจิบกาแฟ",
  },
  {
    start: "15:10", end: "15:40", title: "Mini Workshop",
    description: "Workshop: สร้างแผนที่แบรนด์ปี 2027 และค้นหา White Space ของคุณ",
    highlight: true,
  },
  {
    start: "15:40", end: "16:00", title: "Celebrating 10 Years Together",
    description: "กล่าวขอบคุณและปิดงานอย่างเป็นทางการ ก่อนพบปะพูดคุยต่อในช่วง Networking",
  },
  {
    start: "16:00", end: "17:00", title: "Networking & Champagne Toast",
    description: "จิบแชมเปญ พบปะพูดคุยไปกับเสียงเพลงจาก DJ พร้อม DIY Notebook, Photo Booth และ Ask the Expert",
  },
];
