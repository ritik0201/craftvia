import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoMarqueeSection from "@/components/LogoMarqueeSection";
import ShowcaseGrid from "@/components/ShowcaseGrid";
import Services from "@/components/Services";
import GallerySection from "@/components/GallerySection";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Work from "@/components/Work";
import Reviews3DScrollSection from "@/components/Reviews3DScrollSection";
import KaiAvatarSection from "@/components/KaiAvatarSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingSpeedDial from "@/components/FloatingSpeedDial";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8ff] dark:bg-[#0c1324] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 relative">
      <Header />
      <main className="w-full">
        <Hero />
        <LogoMarqueeSection />
        <ShowcaseGrid />
        <Services />
        <GallerySection />
        <Process />
        <WhyUs />
        <Work />
        <Reviews3DScrollSection />
        <KaiAvatarSection />
        <ContactForm />
      </main>
      <Footer />
      <FloatingSpeedDial />
    </div>
  );
}




