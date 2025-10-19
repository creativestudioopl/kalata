'use client';

import { Award, CheckCircle, Clock, HardHat, FileText, Calculator } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'WIELOLETNIE DOŚWIADCZENIE',
    description: 'Posiadamy ponad 15 letnie doświadczenie w branży budowlanej, które nieustannie poszerzamy na nowych realizacjach.',
  },
  {
    icon: CheckCircle,
    title: 'WYSOKA JAKOŚĆ USŁUG',
    description: 'Wszystkim Klientom oferujemy najwyższą jakość wykonywanych usług remontowo-budowlanych w Krakowie i okolicach.',
  },
  {
    icon: Clock,
    title: 'TERMINOWA REALIZACJA',
    description: 'Gwarantujemy naszym Klientom wykonanie realizacji w ustalonym terminie bez żadnych dodatkowych opóźnień.',
  },
  {
    icon: HardHat,
    title: 'WYKWALIFIKOWANI PRACOWNICY',
    description: 'Każdy z naszych pracowników posiada wszystkie niezbędne kwalifikacje, które podkreślają wysoką jakość wykonywanych usług.',
  },
  {
    icon: FileText,
    title: 'DARMOWA WYCENA ZLECENIA',
    description: 'Oferujemy wszystkim naszym Klientom darmową i niezobowiązującą wycenę zlecenia, która określi całkowity koszt prac.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-4">
              DLACZEGO WŁAŚNIE MY?
              <div className="h-1 w-24 bg-[#FFD700] mt-4"></div>
            </h2>
            <p className="text-lg text-[#666666] mt-6">
              Nasza firma oferuje najwyższej jakości usługi remontowo-budowlane w Krakowie.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <feature.icon className="w-16 h-16 text-[#FFD700] stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-bold text-[#212121] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#666666] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}