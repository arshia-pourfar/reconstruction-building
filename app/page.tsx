import StructuraHero from "./components/StructuraHero";
import StructuraServices from "./components/StructuraServices";
import StructuraGallery from "./components/StructuraGallery";
import StructuraProcess from "./components/StructuraProcess";
import StructuraContact from "./components/StructuraContact";
import StructuraFooter from "./components/StructuraFooter";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <ScrollReveal>
      <main className="flex flex-col flex-1">
        <StructuraHero />
        <StructuraServices />
        <StructuraGallery />
        <StructuraProcess />
        <StructuraContact />
        <StructuraFooter />
      </main>
    </ScrollReveal>
  );
}
