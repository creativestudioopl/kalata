import Header from '@/components/sections/header';
import PortfolioSection from '@/components/sections/portfolio';
import Testimonials from '@/components/sections/testimonials';
import Partners from '@/components/sections/partners';
import Footer from '@/components/sections/footer';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PortfolioSection />
        <Testimonials />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}