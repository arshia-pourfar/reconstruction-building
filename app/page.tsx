import ScrollRenovationHero from "./components/ScrollRenovationHero";
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

      {/* 2. Scroll-driven cinematic renovation hero */}
      <ScrollRenovationHero />

      {/* 3. Featured Portfolio */}
      <FeaturedPortfolio />

      {/* 4. Interactive Cost Estimator + Lead Form */}
      <Calculator />

      {/* 6. Process Timeline */}
      <ProcessTimeline />
      {/* 5. Services & Material Palette */}
      <ServicesMaterialGrid />


      {/* 8. Quick Contact & Lead Form */}
      <QuickContact />
      {/* 7. Rules & Guarantees */}
      <RulesGuarantees />


      {/* 9. Footer */}
      <Footer />
    </main>
  );
}
