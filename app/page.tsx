import Hero from "./components/Hero";
import BeforeAfter from "./components/BeforeAfter";
import FeaturedPortfolio from "./components/FeaturedPortfolio";
import Calculator from "./components/Calculator";
import ServicesMaterialGrid from "./components/ServicesMaterialGrid";
import ProcessTimeline from "./components/ProcessTimeline";
import RulesGuarantees from "./components/RulesGuarantees";
import QuickContact from "./components/QuickContact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      {/* 1. Navbar — rendered in layout.tsx */}

      {/* 2. Hero + Before/After Slider */}
      <Hero />
      <BeforeAfter />

      {/* 3. Featured Portfolio */}
      <FeaturedPortfolio />

      {/* 4. Interactive Cost Estimator + Lead Form */}
      <Calculator />

      {/* 5. Services & Material Palette */}
      <ServicesMaterialGrid />

      {/* 6. Process Timeline */}
      <ProcessTimeline />

      {/* 7. Rules & Guarantees */}
      <RulesGuarantees />

      {/* 8. Quick Contact & Lead Form */}
      <QuickContact />

      {/* 9. Footer */}
      <Footer />
    </main>
  );
}
