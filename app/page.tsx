import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Program from "@/components/Program";
import Highlights from "@/components/Highlights";
import Venue from "@/components/Venue";
import Hotels from "@/components/Hotels";
import Attractions from "@/components/Attractions";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Program />
        <Highlights />
        <Venue />
        <Hotels />
        <Attractions />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
