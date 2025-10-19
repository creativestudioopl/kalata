import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Package, Clock, Shield, Phone } from 'lucide-react';

export default function ScaffoldingRentalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-20">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Wypożycz szalunki
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Profesjonalne szalunki budowlane dostępne w konkurencyjnych cenach. 
                Oferujemy wynajem wysokiej jakości sprzętu dla firm budowlanych i inwestorów indywidualnych.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <Package className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Szeroki wybór
                </h3>
                <p className="text-muted-foreground">
                  Różnorodne typy i rozmiary szalunków dostosowane do Twoich potrzeb budowlanych
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <Clock className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Elastyczne terminy
                </h3>
                <p className="text-muted-foreground">
                  Wynajem krótko i długoterminowy z możliwością przedłużenia okresu najmu
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Gwarancja jakości
                </h3>
                <p className="text-muted-foreground">
                  Sprzęt regularnie serwisowany i kontrolowany, spełniający wszystkie normy bezpieczeństwa
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Dostępny sprzęt
              </h2>
              <p className="text-lg text-muted-foreground">
                Profesjonalne szalunki i akcesoria budowlane
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blat szalunlowy */}
              <div className="bg-card overflow-hidden">
                <div className="aspect-[4/3] bg-muted">
                  <img 
                    src="https://jhqsmgbkdgvfwgbfoafw.supabase.co/storage/v1/object/public/kalata%20bud/blat_szalunkowy-768x768.jpg" 
                    alt="Blat szalunlowy 0,5x2m" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">
                    Blat szalunlowy 0,5x2m
                  </h3>
                </div>
              </div>

              {/* Dzwigar h20 */}
              <div className="bg-card overflow-hidden">
                <div className="aspect-[4/3] bg-muted">
                  <img 
                    src="https://jhqsmgbkdgvfwgbfoafw.supabase.co/storage/v1/object/public/kalata%20bud/d_wigar_h20-768x768.jpg" 
                    alt="Dzwigar h20" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">
                    Dzwigar h20
                  </h3>
                </div>
              </div>

              {/* Głowica krzyżowa */}
              <div className="bg-card overflow-hidden">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                  <Package className="w-16 h-16 text-muted-foreground/30" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">
                    Głowica krzyżowa
                  </h3>
                </div>
              </div>

              {/* Stemple metalowe */}
              <div className="bg-card overflow-hidden">
                <div className="aspect-[4/3] bg-muted">
                  <img 
                    src="https://jhqsmgbkdgvfwgbfoafw.supabase.co/storage/v1/object/public/kalata%20bud/stemple%20metalowe.jpg" 
                    alt="Stemple metalowe" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">
                    Stemple metalowe
                  </h3>
                </div>
              </div>

              {/* Trojnogi */}
              <div className="bg-card overflow-hidden">
                <div className="aspect-[4/3] bg-muted">
                  <img 
                    src="https://jhqsmgbkdgvfwgbfoafw.supabase.co/storage/v1/object/public/kalata%20bud/trojnog%20szlunkowy.jpg" 
                    alt="Trojnogi" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">
                    Trojnogi
                  </h3>
                </div>
              </div>

              {/* Zacisk sprężynowy */}
              <div className="bg-card overflow-hidden">
                <div className="aspect-[4/3] bg-muted">
                  <img 
                    src="https://jhqsmgbkdgvfwgbfoafw.supabase.co/storage/v1/object/public/kalata%20bud/zacisk%20sprezynowy.jpg" 
                    alt="Zacisk sprężynowy" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">
                    Zacisk sprężynowy
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Info Section */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Indywidualna wycena
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ceny wynajmu ustalamy indywidualnie, w zależności od rodzaju sprzętu, 
                długości okresu najmu oraz ilości zamawianego sprzętu. Skontaktuj się z nami, 
                aby otrzymać bezpłatną wycenę dostosowaną do Twoich potrzeb.
              </p>
              <a
                href="tel:+48504281967"
                className="inline-flex items-center bg-primary text-primary-foreground py-4 px-8 text-lg font-bold hover:opacity-90 transition-opacity !whitespace-pre-line">

                <Phone className="w-5 h-5 mr-2" />Zadzwoń: (+48) 796 591 251

              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="bg-card p-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Masz pytania dotyczące wynajmu?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nasz zespół chętnie doradzi i pomoże dobrać odpowiedni sprzęt
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+48504281967"
                  className="bg-primary text-primary-foreground py-3 px-8 text-base font-bold hover:opacity-90 transition-opacity">

                  Zadzwoń teraz
                </a>
                <a
                  href="mailto:biuro@mak-bud.com.pl"
                  className="bg-secondary text-secondary-foreground py-3 px-8 text-base font-bold hover:opacity-90 transition-opacity">

                  Wyślij email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}