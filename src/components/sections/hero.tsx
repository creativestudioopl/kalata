import React from 'react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: "url(https://jhqsmgbkdgvfwgbfoafw.supabase.co/storage/v1/object/public/kalata%20bud/budowanie%20strona%20glowna.jpg)"
      }}>

      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      
      <div className="relative flex items-center min-h-[700px] xl:min-h-[860px]">
        <div className="container w-full mx-auto px-4">
          <div className="w-full lg:w-1/2">
            
            <div className="bg-white p-8 sm:p-12 md:p-16">
              
              <h1 className="text-primary font-bold text-[40px] leading-tight mb-2">
                Budujemy i wykańczamy domy pod klucz 
              </h1>
              
              <h2 className="text-[#212121] font-bold leading-none mb-2 !text-[35px]">
                od projektu do realizacji
              </h2>
              
              <p className="text-[#666666] text-base leading-relaxed mb-8">
                Firma remontowa Kalata Budownictwo oferuje wykończenia wnętrz mieszkań i domów. Kompleksowa obsługa inwestycji: projekt, formalności, budowa, instalacje i wykończenie. Jeden zespół, pełna odpowiedzialność.
              </p>
              
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-yellow-500 text-primary-foreground font-bold text-base rounded-none py-4 px-10 h-auto">

                <a href="https://www.mak-bud.com.pl/kontakt-firma-remontowa-budowlana-wroclaw/">
                  Skontaktuj się
                </a>
              </Button>

            </div>
          </div>
        </div>
      </div>
    </section>);

}