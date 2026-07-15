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
  VideoReviewsSection,
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
        <VideoReviewsSection />
        <TargetAudienceSection />
        <ExpertsSection />
        <ProgramSection />
        <PricingSection />
        <LessonsBannerSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
