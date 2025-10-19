import Header from '@/components/sections/header';
import Services from '@/components/sections/services';
import CtaBanner from '@/components/sections/cta-banner';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import Link from 'next/link';

const serviceCards = [
  {
    id: 1,
    title: "Budowa domów",
    description: "Od fundamentów po dach – generalne wykonawstwo domów jednorodzinnych.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fc01e807-08a1-449d-b059-403915dde895-mak-bud-com-pl/assets/images/Mak-Bud_Realizacje_10_cut-2.jpg",
    href: "/realizacje/budowa-domu"
  },
  {
    id: 2,
    title: "Wykończenia",
    description: "Kompletne wykończenie wnętrz: podłogi, łazienki, kuchnie, malowanie.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fc01e807-08a1-449d-b059-403915dde895-mak-bud-com-pl/assets/images/Mak-Bud_Realizacje_8_cut-3.jpg",
    href: "/realizacje/remonty-wykonczenia"
  },
  {
    id: 3,
    title: "Remonty",
    description: "Modernizacje mieszkań i domów, adaptacje poddaszy, przebudowy.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fc01e807-08a1-449d-b059-403915dde895-mak-bud-com-pl/assets/images/Mak-Bud_Realizacje_19_cut-5.jpg",
    href: "/realizacje/remonty-wykonczenia"
  },
  {
    id: 4,
    title: "Wypożyczanie szalunków",
    description: "Profesjonalny sprzęt budowlany – szalunki, stemple, dźwigary. Elastyczne warunki najmu.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/fc01e807-08a1-449d-b059-403915dde895/generated_images/professional-construction-site-photo-sho-deb506d1-20251012205557.jpg",
    href: "/wypozycz-szalunki"
  }
];

export default function OfferPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Services />
        
        {/* Service Cards Grid Section */}
        <section className="py-20 bg-[var(--color-background)]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCards.map((service) => (
                <Link 
                  key={service.id}
                  href={service.href}
                  className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] overflow-hidden hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition-shadow duration-300 cursor-pointer"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#212121] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#666666] text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}