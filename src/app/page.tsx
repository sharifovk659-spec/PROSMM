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
import { PromoBanner } from "@/components/ui/PromoBanner";

export default function Home() {
  return (
    <>
      <PromoBanner />
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
