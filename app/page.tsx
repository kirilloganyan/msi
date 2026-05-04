import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { Cases } from "@/components/Cases";
import { Contact } from "@/components/Contact";
import { Experts } from "@/components/Experts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Approach />
        <Services />
        <Cases />
        <Experts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
