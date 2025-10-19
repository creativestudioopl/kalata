import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-20">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Kontakt
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Skontaktuj się z nami, aby omówić szczegóły Twojego projektu. 
                Jesteśmy do Twojej dyspozycji i chętnie odpowiemy na wszystkie pytania.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Phone */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <Phone className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Telefon
                </h3>
                <a href="tel:+48504281967" className="text-muted-foreground hover:text-primary transition-colors">
                  (+48) 796 591 251
                </a>
              </div>

              {/* Email */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <Mail className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Email
                </h3>
                <a href="mailto:biuro@mak-bud.com.pl" className="text-muted-foreground hover:text-primary transition-colors break-all">
                  Kalata-budownictwo@gmail.com
                </a>
              </div>

              {/* Address */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Adres
                </h3>
                <p className="text-muted-foreground">
                  ul. Bartosza Głowackiego 26<br />
                  30-085 Kraków
                </p>
              </div>

              {/* Hours */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <Clock className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Godziny pracy
                </h3>
                <p className="text-muted-foreground">
                  Pon - Pt: 7:00 - 18:00<br />
                  Sob: 8:00 - 15:00
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Details Section */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Dane firmowe
              </h2>
              <div className="bg-card p-8 space-y-4">
                <div className="flex justify-between border-b border-border pb-4">
                  <span className="font-medium text-foreground">Nazwa firmy:</span>
                  <span className="text-muted-foreground text-right">Kalata Budownictwo Firma remontowo-budowlana</span>
                </div>
                <div className="flex justify-between border-b border-border pb-4">
                  <span className="font-medium text-foreground">NIP:</span>
                  <span className="text-muted-foreground">735-289-25-67</span>
                </div>
                <div className="flex justify-between border-b border-border pb-4">
                  <span className="font-medium text-foreground">Adres:</span>
                  <span className="text-muted-foreground text-right">ul. Bartosza Głowackiego 26, 30-085 Kraków</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-foreground">Telefon:</span>
                  <span className="text-muted-foreground">(+48) 796 591 251</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media & CTA */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Śledź nas w mediach społecznościowych
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Bądź na bieżąco z naszymi realizacjami i aktualnościami
              </p>
              <div className="flex justify-center space-x-4 mb-12">
                <a 
                  href="https://www.facebook.com/makbudcompl" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  <Facebook className="h-7 w-7" />
                </a>
              </div>
              <a 
                href="tel:+48504281967" 
                className="inline-block bg-primary text-primary-foreground py-4 px-8 text-lg font-bold hover:opacity-90 transition-opacity"
              >
                Zadzwoń teraz
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}