import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Invitation } from "@/components/Invitation";
import { Agenda } from "@/components/Agenda";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Invitation />
        <Agenda />
      </main>
      <Footer />
    </>
  );
}
