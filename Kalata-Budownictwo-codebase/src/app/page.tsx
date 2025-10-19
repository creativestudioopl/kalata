import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import WhyUs from '@/components/sections/why-us';
import StatsSection from '@/components/sections/stats';
import Services from '@/components/sections/services';
import CtaBanner from '@/components/sections/cta-banner';
import PortfolioSection from '@/components/sections/portfolio';
import Testimonials from '@/components/sections/testimonials';
import Partners from '@/components/sections/partners';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhyUs />
        <StatsSection />
        <Services />
        <CtaBanner />
        <PortfolioSection />
        <Testimonials />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}