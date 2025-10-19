import Header from '@/components/sections/header';
import AboutSection from '@/components/sections/about';
import WhyUsSection from '@/components/sections/why-us';
import StatsSection from '@/components/sections/stats';
import Testimonials from '@/components/sections/testimonials';
import Footer from '@/components/sections/footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AboutSection />
        <WhyUsSection />
        <StatsSection />
        <Testimonials />
        
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-[#212121] mb-8">
              Certyfikaty i nagrody
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#212121] font-medium mr-2">•</span>
                <span className="text-[#666666] text-lg">
                  Uprawnienia budowlane bez ograniczeń – konstrukcyjno-budowlane
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#212121] font-medium mr-2">•</span>
                <span className="text-[#666666] text-lg">
                  Certyfikat ISO 9001:2015 – Zarządzanie jakością
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#212121] font-medium mr-2">•</span>
                <span className="text-[#666666] text-lg">
                  Laureat konkursu "Solidna Firma" 2024
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}