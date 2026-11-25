# Assets and typography

- ภาพ Hero: Vibe.png จากไฟล์ Google Drive ที่เจ้าของโปรเจกต์ระบุให้ใช้ ภาพที่เผยแพร่แปลงเป็น WebP โดยไม่เปลี่ยนเนื้อหาภาพ
- Ref. Card1.jpg และ Ref. Card2.jpg ใช้อ้างอิงองค์ประกอบการจัดวางเท่านั้น ไม่แสดงภาพอ้างอิงในเว็บไซต์
- Instrument Serif และ IBM Plex Sans Thai: ใช้ผ่านแพ็กเกจ Fontsource เก็บ License ของแต่ละฟอนต์ไว้ในโฟลเดอร์นี้
- `src/app/motion.css` และ `public/assets/motion/motion.js` คัดลอกจากสกิล design-taste-frontend ที่ติดตั้งในเครื่อง ใช้ชั้น Hover / Focus / Reduced Motion โดยคง Source ของ Layer เดิมไว้
- ยังไม่ได้รับไฟล์โลโก้ Cotactic จึงใช้ชื่อแบรนด์เป็น Text Placeholder
- Montserrat: เพิ่มตามคำสั่งเจ้าของโปรเจกต์วันที่ 24 พฤศจิกายน 2026 ผ่าน Fontsource เก็บ License ใน `Montserrat.txt`
- ภาพตราครบรอบ: `10Th.png` จากไฟล์แนบของเจ้าของโปรเจกต์ คัดลอกโดยไม่เปลี่ยนเนื้อหาหรือความโปร่งใสเป็น `public/images/10th-anniversary.png` ใช้แทนตรา CSS เดิม
- Texture กระดาษฉีกสร้างใหม่ด้วย ImageGen แบบพื้นหลังโปร่งใส ไม่ใช่ภาพสแกนที่ถ่ายจากกระดาษจริง เก็บต้นฉบับใน `assets/source/torn-paper-generated.png` และ Prompt ใน `assets/source/torn-paper.prompt.txt`; ไฟล์ใช้จริง `public/textures/torn-paper-edge.webp` เป็นส่วนขอบที่ตัดและบีบอัดเพื่อแสดงบนเว็บ
