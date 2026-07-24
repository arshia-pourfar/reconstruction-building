import Hero from "./components/Hero";
import BeforeAfter from "./components/BeforeAfter";
import StyleCards from "./components/StyleCards";
import Calculator from "./components/Calculator";
import FreeConsultation from "./components/FreeConsultation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <BeforeAfter />
      <StyleCards />
      <Calculator />
      <FreeConsultation />
      <Footer />
    </main>
  );
}
