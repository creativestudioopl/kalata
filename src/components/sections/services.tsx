import React from 'react';
import Link from 'next/link';
import { PaintRoller, Home, Wrench, Hammer, MessageSquare, FileText, TrendingUp, Award } from 'lucide-react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  button?: {
    text: string;
    href: string;
    className: string;
  };
  badge?: string;
  cardClassName?: string;
  textClassName?: string;
  titleClassName?: string;
  iconWrapperClassName?: string;
};

const ServiceCard = ({
  icon,
  title,
  description,
  button,
  badge,
  cardClassName = 'bg-white',
  textClassName = 'text-zinc-600',
  titleClassName = 'text-zinc-900',
  iconWrapperClassName = 'text-primary'
}: ServiceCardProps) => (
  <div className={`relative flex h-full flex-col p-10 shadow-lg ${cardClassName}`}>
    {badge && (
      <div className="absolute top-0 right-0 bg-[#28a745] text-white text-xs font-bold py-1 px-3">
        {badge}
      </div>
    )}
    <div className={`h-12 w-12 ${iconWrapperClassName}`}>
      {icon}
    </div>
    <h3 className={`mt-6 text-2xl font-bold leading-tight ${titleClassName}`}>
      {title}
    </h3>
    <p className={`mt-4 text-base leading-relaxed flex-grow ${textClassName}`}>
      {description}
    </p>
    {button && (
      <div className="mt-8">
        <Link href={button.href} passHref legacyBehavior>
          <a className={`inline-block px-6 py-3 text-sm font-bold text-white transition-colors duration-300 ${button.className}`}>
            {button.text}
          </a>
        </Link>
      </div>
    )}
  </div>
);

const Services = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 text-center mb-12">
          Jak działamy?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 flex items-center justify-center">
                <MessageSquare size={64} strokeWidth={1.5} className="text-zinc-800" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">
                Bezpłatna konsultacja<br />i wstępna wycena
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Spotkaj się z nami bez żadnych zobowiązań! Omówimy Twoje potrzeby, 
                doradzimy najlepsze rozwiązania i przygotujemy wstępną wycenę 
                dostosowaną do Twojego budżetu.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 flex items-center justify-center">
                <FileText size={64} strokeWidth={1.5} className="text-zinc-800" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">
                Umowa<br />i harmonogram prac
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Po akceptacji wyceny przygotowujemy jasną umowę oraz szczegółowy 
                harmonogram prac, dzięki czemu wiesz dokładnie, kiedy i co będzie realizowane.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 flex items-center justify-center">
                <Hammer size={64} strokeWidth={1.5} className="text-zinc-800" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">
                Realizacja<br />i cotygodniowe raporty
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Nasza ekipa przystępuje do pracy zgodnie z ustalonym planem. 
                Co tydzień otrzymujesz raport zostępów – zdjęcia i informacje, 
                abyś był na bieżąco.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 flex items-center justify-center">
                <Award size={64} strokeWidth={1.5} className="text-zinc-800" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">
                Odbiór końcowy<br />i gwarancja
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Po zakończeniu prac dokonujemy wspólnego odbioru, dbając o każdy szczegół. 
                Na wszystkie wykonane prace udzielamy gwarancji, abyś czuł się pewnie i bezpiecznie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;