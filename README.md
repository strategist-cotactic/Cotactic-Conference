# COTACTIC Connect 2026

Frontend Draft ของเว็บไซต์การ์ดเชิญแบบ Single Page สำหรับงานครบรอบ 10 ปี Cotactic

## เริ่มใช้งาน

ต้องมี Node.js 20.9 ขึ้นไป (เวอร์ชันที่ใช้ตรวจงาน: 24.19.0)

```sh
npm ci
npm run dev
```

เปิด Local URL ที่แสดงใน Terminal โดยปกติคือ `http://127.0.0.1:3000`

ตรวจและเปิด Production Preview:

```sh
npm run typecheck
npm run build
npm run preview
```

Build ด้วย Webpack เพื่อให้ทำงานได้สม่ำเสมอในสภาพแวดล้อมนี้ ผลลัพธ์เป็น Static Export ใน `out/` ซึ่งเตรียมนำไปใช้บน Static Server ได้ ยังไม่มีการ Deploy หรือแก้ไข Domain ของบริษัท

## โครงสร้าง

- `src/app`: หน้าหลัก Metadata และสไตล์ พร้อม Tailwind CSS v4
- `src/components`: Header, Hero, Invitation, Agenda, Footer และ ButtonLink
- `src/data/event.ts`: ข้อความและข้อมูลกิจกรรมสำหรับปรับแก้ภายหลัง
- `public/images`: ภาพ WebP ที่ใช้จริง
- `assets/source`: ภาพต้นฉบับจากผู้ใช้
- `assets/references`: ภาพอ้างอิงสำหรับการออกแบบ ไม่ถูกเผยแพร่ในเว็บไซต์
- `assets/licenses`: สิทธิ์การใช้งานฟอนต์และที่มาของ Motion Layer
- `.taste-skill`: แผนการออกแบบและหลักฐานการตรวจหน้าจอ
- `artifacts`: ภาพหน้าจอส่วน Hero สำหรับรีวิวทั้งเดสก์ท็อปและมือถือ

## ข้อความและข้อมูลที่ต้องยืนยัน

เกลาคำเชิญและคำอธิบายกิจกรรมเป็นไทย/อังกฤษโดยคงข้อมูลตามบรีฟ ไม่แสดง Duration ของ Keynote ที่ขัดกัน ใช้ชื่องาน COTACTIC Connect 2026 ตามคอมเมนต์ล่าสุด และวันจัดงาน 30 พฤศจิกายน 2026 ส่วนเทรนด์การตลาดและ Brand Map ยังคงปี 2027

ก่อนเผยแพร่จริง ต้องยืนยันเวลาเริ่ม 13:30 / 13:40, ระยะเวลา Keynote, โลโก้ และสีแบรนด์ ดูรายละเอียดใน `Project Brief.md`

ผู้ติดต่อเก็บใน `event.contacts` ที่ `src/data/event.ts`: Khun Tok 061-021-9515 และ Khun Jean 092-256-6598 โดย Footer แสดงเบอร์ตามที่ให้มาและตัดขีดออกในลิงก์ `tel:` อัตโนมัติ

ภาพ Hero เป็น Mood Image ที่ผู้ใช้ให้มา ไม่ได้ระบุว่าเป็นภาพ The Glowfish ส่วน COTACTIC ใน Header และ Footer เป็นข้อความชั่วคราวระหว่างรอโลโก้ที่อนุมัติ

## ขอบเขต

มีการนำทางภายในหน้าและปุ่ม Google Maps ใช้งานจริง ยังไม่มี CMS, Backend, Login, RSVP หรือการเก็บข้อมูลผู้เข้าร่วม Draft ตั้ง `noindex` ไว้เพื่อไม่ให้ถูกทำดัชนีโดยตั้งใจ

## เอกสารเทคนิค

การตั้งค่า Static Export อ้างอิง [Next.js Static Exports](https://nextjs.org/docs/app/guides/static-exports) และ PostCSS อ้างอิง [Tailwind CSS Installation](https://tailwindcss.com/docs/installation/using-postcss)
