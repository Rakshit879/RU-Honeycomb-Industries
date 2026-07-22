import Container from "@/components/common/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-12">
      
      {/* Decorative Background */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />

      <Container>
        <div className="grid min-h-screen items-center gap-12 py-16 lg:grid-cols-2 lg:gap-20">

          <HeroContent />

          <HeroImage />

        </div>

        <HeroStats />

      </Container>
    </section>
  );
}