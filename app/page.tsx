import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { EducationSection } from "@/components/education-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <WhatsAppFloat />

      <main>
        <HeroSection />
        <Separator />
        <AboutSection />
        <Separator />
        <EducationSection />
        <Separator />
        <SkillsSection />
        <Separator />
        <ProjectsSection />
        <Separator />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
