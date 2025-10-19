import { Star, Quote } from 'lucide-react';

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


const TestimonialCard = ({ testimonial }: {testimonial: Testimonial;}) => {
  return (
    <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.1)] p-10 flex flex-col h-full">
      <div className="flex">
        {[...Array(5)].map((_, i) =>
        <Star key={i} className="h-5 w-5 text-[#FFC107] fill-[#FFC107]" />
        )}
      </div>
      <p className="mt-6 text-[#666666] text-base leading-relaxed flex-grow">
        {testimonial.review}
      </p>
      <div className="mt-auto pt-6 flex justify-between items-end">
        <div>
          <p className="font-bold text-[#212121] text-base">{testimonial.name}</p>
          <p className="text-sm text-[#707070] mt-1">{testimonial.date}</p>
        </div>
        <Quote className="h-20 w-20 text-primary opacity-40 -mr-4 -mb-4" />
      </div>
    </div>);

};

const Testimonials = () => {
  return (
    <section
      className="bg-background"
      style={{
        backgroundImage: "url('https://www.mak-bud.com.pl/wp-content/uploads/2021/11/Mak-Bud_tlo_B_jasny_wzor.jpg')",
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center center'
      }}>

      <div className="bg-black/70 py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">
              Opinie naszych klientów
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300 !whitespace-pre-line">
              Wielokrotnie nasza firma była oceniana na portalach branżowych. Jesteśmy dumni z naszej pracy.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonialsData.map((testimonial, index) =>
            <TestimonialCard key={index} testimonial={testimonial} />
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default Testimonials;