import {
  Header,
  Footer,
  HeroSection,
  CourseBenefitsSection,
  TargetAudienceSection,
  ExpertsSection,
  ProgramSection,
  PricingSection,
  LessonsBannerSection,
  EarningsSection,
  ViewsSection,
  FaqSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />

      <main className="relative bg-black">
        <HeroSection />
        <CourseBenefitsSection />
        <TargetAudienceSection />
        <ExpertsSection />
        <ProgramSection />
        <PricingSection />
        <LessonsBannerSection />
        <EarningsSection />
        <ViewsSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
