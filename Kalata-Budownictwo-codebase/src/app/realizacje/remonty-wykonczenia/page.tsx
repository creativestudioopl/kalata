import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const remontyProjects = [
  {
    id: 1,
    title: "Wykończenie wnętrz - Apartament we Wrocławiu",
    category: "Wykończenie wnętrz",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fc01e807-08a1-449d-b059-403915dde895-mak-bud-com-pl/assets/images/Mak-Bud_Realizacje_10_cut-2.jpg"
  },
  {
    id: 2,
    title: "Łazienka - Salon kąpielowy w beżowej aranżacji",
    category: "Remont łazienki",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fc01e807-08a1-449d-b059-403915dde895-mak-bud-com-pl/assets/images/Mak-Bud_Realizacje_8_cut-3.jpg"
  },
  {
    id: 3,
    title: "Lokal usługowy - Salon bielizny damskiej",
    category: "Wykończenie lokalu",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fc01e807-08a1-449d-b059-403915dde895-mak-bud-com-pl/assets/images/Mak-Bud_Realizacje_19_cut-5.jpg"
  },
  {
    id: 4,
    title: "Remont mieszkania - Mieszkanie z lat 70-tych",
    category: "Remont mieszkania",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fc01e807-08a1-449d-b059-403915dde895-mak-bud-com-pl/assets/images/Mak-Bud_Realizacje_61_cut-6.jpg"
  },
  {
    id: 5,
    title: "Wykończenie wnętrz - Nowoczesny apartament",
    category: "Wykończenie wnętrz",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fc01e807-08a1-449d-b059-403915dde895-mak-bud-com-pl/assets/images/Mak-Bud_Realizacje_56_cut-7.jpg"
  },
  {
    id: 6,
    title: "Kompleksowy remont kuchni",
    category: "Remont kuchni",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fc01e807-08a1-449d-b059-403915dde895-mak-bud-com-pl/assets/images/Mak-Bud_Realizacje_10_cut-2.jpg"
  }
];

interface Testimonial {
  name: string;
  date: string;
  review: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: 'Aleksandra Buczek',
    date: '3 miesiące temu',
    review: 'Polecam prace Pana Jakuba, wykonał 2 łazienki zgodnie z przedstawionymi projektami oraz naszymi ustaleniami powstałymi na bieżąco. Zaangażowanie, fachowe doradztwo, dokładność oraz dobre zaplecze narzędziowe. Życzę wszystkim takich Wykonawców.'
  },
  {
    name: 'Beata Bugaj',
    date: '5 miesięcy temu',
    review: 'Bardzo długo szukałam kogoś kto zrobi mi łazienkę i kuchnię. Kontakt z Panem Jakubem świetny, wszystkie moje prośby uwzględnione. Jest starannie, estetycznie i profesjonalnie.'
  },
  {
    name: 'kamil xx',
    date: '5 miesięcy temu',
    review: 'Serdecznie polecam tę firmę! Łazienka została wykonana solidnie, z dbałością o każdy detal. Efekt końcowy przerósł moje oczekiwania – łazienka wygląda nowocześnie i estetycznie. Zdecydowanie godny zaufania specjalista. Polecam!'
  },
  {
    name: 'Klient',
    date: '2 lata temu',
    review: 'Polecam, bardzo profesjonalni pracownicy, widać, że Panowie są doświadczeni i w 100 procentach wywiązują się z umowy.'
  },
  {
    name: 'Krzysztof',
    date: '12.10.2021',
    review: 'Firma godna polecenia bez dwóch zdań od samego początku do końca. Profesjonalny sprzęt, podejście oraz umiejętności, które także oceniam po efekcie końcowym. W trakcie mogliśmy liczyć na szereg rad oraz rozwiązań...'
  },
  {
    name: 'Krystian',
    date: '11.09.2021',
    review: 'Precyzja, dokładność oraz znajomość fachu na najwyższym poziomie. Najlepsza ekipa budowlana jaką miałem. Wszystkim gorąco polecam...'
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.1)] p-10 flex flex-col h-full">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-[#FFC107] fill-[#FFC107]" />
        ))}
      </div>
      <p className="mt-6 text-[#666666] text-base leading-relaxed flex-grow">
        {testimonial.review}
      </p>
      <div className="mt-auto pt-6 flex justify-between items-end">
        <div>
          <p className="font-bold text-[#212121] text-base">{testimonial.name}</p>
          <p className="text-sm text-[#707070] mt-1">{testimonial.date}</p>
        </div>
        <Quote className="h-20 w-20 text-primary opacity-40 -mr-4 -mb-4"/>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section 
      className="bg-background"
      style={{
        backgroundImage: "url('https://www.mak-bud.com.pl/wp-content/uploads/2021/11/Mak-Bud_tlo_B_jasny_wzor.jpg')",
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center center',
      }}
    >
      <div className="bg-black/70 py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">
              Opinie naszych klientów
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              Wielokrotnie nasza firma była oceniana na portalach branżowych. Jesteśmy dumni z naszej pracy. Sprawdź więcej informacji w zakładce{' '}
              <a
                href="https://www.mak-bud.com.pl/o-nas-firma-remontowa-budowlana-wroclaw/"
                className="text-primary hover:underline"
              >
                O nas
              </a>
              .
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function RemontyWykonczeniaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[var(--color-deep-black)] py-20">
          <div className="absolute inset-0 bg-[url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fc01e807-08a1-449d-b059-403915dde895-mak-bud-com-pl/assets/images/beautiful-architecture-office-business-building-with-glass-windo-19.jpg')] bg-cover bg-center opacity-30"></div>
          <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-pure-white)] mb-4">
              Remonty i Wykończenia
            </h1>
            <p className="text-lg text-[var(--color-light-gray)] max-w-3xl mx-auto">
              Profesjonalne wykończenia wnętrz pod klucz, kompleksowe remonty mieszkań, 
              domów i lokali usługowych w Krakowie i okolicach.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-[var(--color-background)]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remontyProjects.map((project) => (
                <div key={project.id} className="group relative overflow-hidden bg-[var(--color-card)] cursor-pointer">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium text-[var(--color-primary)] mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        {/* CTA Section */}
        <section className="py-16 bg-[var(--color-secondary)]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-pure-white)] mb-6">
              Planujesz remont lub wykończenie?
            </h2>
            <p className="text-lg text-[var(--color-light-gray)] mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami, aby otrzymać bezpłatną wycenę i omówić szczegóły projektu.
            </p>
            <a 
              href="/kontakt" 
              className="inline-block bg-[var(--color-primary)] text-[var(--color-primary-foreground)] px-12 py-4 text-lg font-bold hover:opacity-90 transition-opacity"
            >
              Skontaktuj się
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}