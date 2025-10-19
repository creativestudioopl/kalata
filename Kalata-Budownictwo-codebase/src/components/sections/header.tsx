"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, Facebook, Menu, X, ChevronDown } from 'lucide-react';

const finalNavItems = [
  { href: "/o-nas", label: "O nas" },
  { href: "/oferta", label: "Oferta" },
  { href: "/realizacje", label: "Realizacje" },
  { href: "/wypozycz-szalunki", label: "Wypożycz szalunki" },
  { href: "/kontakt", label: "Kontakt" }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRealizacjeOpen, setIsRealizacjeOpen] = useState(false);

  return (
    <header className="relative z-40 bg-[var(--color-header-background)] shadow-sm font-primary">
      {/* Top Bar */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/" className="block p-8">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/fc01e807-08a1-449d-b059-403915dde895/visual-edit-uploads/1759781915967-69rfols2905.png"
                alt="MAK BUD Logo"
                width={180}
                height={31}
                priority
                className="object-contain" />

            </a>
          </div>
          
          {/* Desktop: Contact & Socials */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-header-border)] bg-[var(--color-header-background)]">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Skontaktuj się z nami</p>
                <a href="tel:+48796591251" className="text-base font-medium text-[var(--color-header-foreground)] hover:text-primary transition-colors">
                  (+48) 796 591 251
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-header-border)] bg-[var(--color-header-background)]">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Wyślij wiadomość</p>
                <a href="mailto:Kalata-budownictwo@gmail.com" className="text-base font-medium text-[var(--color-header-foreground)] hover:text-primary transition-colors">
                  Kalata-budownictwo@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <a href="https://www.facebook.com/people/Kalata-Budownictwo-Firma-Remontowo-Budowlana/100075927164764/" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile: Hamburger Menu */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="p-2" aria-label="Open menu">
              <Menu className="h-8 w-8 text-[var(--color-header-foreground)]" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Navigation */}
      <div className="hidden bg-secondary lg:block">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <nav className="flex space-x-8">
              {finalNavItems.map((item) => {
                if (item.href === "/realizacje") {
                  return (
                    <div key={item.href} className="relative group">
                      <a
                        href={item.href}
                        className="text-secondary-foreground hover:text-primary transition-colors font-medium"
                      >
                        {item.label}
                      </a>
                      <div className="absolute left-0 top-full mt-2 w-48 bg-secondary rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <a
                          href="/realizacje/budowa-domu"
                          className="block px-4 py-2 text-sm text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          Budowa domu
                        </a>
                        <a
                          href="/realizacje/remonty-wykonczenia"
                          className="block px-4 py-2 text-sm text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          Remonty/Wykończenia
                        </a>
                      </div>
                    </div>
                  );
                }
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-secondary-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
            <div>
              <a href="tel:+48796591251" className="bg-[#000000] text-white py-3 px-8 text-base font-bold hover:opacity-90 transition-opacity">
                Zadzwoń teraz
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen &&
      <div className="fixed inset-0 z-50 bg-black/80 lg:hidden" onClick={() => setIsMenuOpen(false)}>
          <div
          className="absolute right-0 top-0 h-full w-[85%] max-w-xs bg-background p-6 shadow-lg flex flex-col"
          onClick={(e) => e.stopPropagation()}>

            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)} className="p-2" aria-label="Close menu">
                <X className="h-8 w-8 text-foreground" />
              </button>
            </div>
            
            <nav className="mt-8 flex flex-col space-y-4">
              {finalNavItems.map((item) => {
                if (item.href === "/realizacje") {
                  return (
                    <React.Fragment key={item.href}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          if (isRealizacjeOpen) {
                            e.preventDefault();
                            setIsRealizacjeOpen(false);
                          } else {
                            setIsMenuOpen(false);
                          }
                        }}
                        className="block py-2 text-lg text-foreground hover:text-primary transition-colors flex items-center justify-between"
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 ml-2 transition-transform duration-200 ${isRealizacjeOpen ? "rotate-180" : ""}`} />
                      </a>
                      {isRealizacjeOpen && (
                        <div className="ml-6 space-y-2">
                          <a
                            href="/realizacje/budowa-domu"
                            className="block py-2 pl-4 -ml-2 border-l-2 border-transparent text-base text-foreground hover:text-primary hover:border-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Budowa domu
                          </a>
                          <a
                            href="/realizacje/remonty-wykonczenia"
                            className="block py-2 pl-4 -ml-2 border-l-2 border-transparent text-base text-foreground hover:text-primary hover:border-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Remonty/Wykończenia
                          </a>
                        </div>
                      )}
                    </React.Fragment>
                  );
                }
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-lg text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <a href="/kontakt" className="mt-8 block w-full text-center bg-primary text-primary-foreground py-3 px-4 text-lg font-bold">
              Zadzwoń teraz
            </a>
            
            <div className="mt-auto pt-8 border-t border-border space-y-6">
              <a href="tel:+48796591251" className="flex items-center space-x-4 text-foreground">
                <Phone className="h-6 w-6 text-primary" />
                <span>(+48) 796 591 251</span>
              </a>
              <a href="mailto:Kalata-budownictwo@gmail.com" className="flex items-center space-x-4 text-foreground">
                <Mail className="h-6 w-6 text-primary" />
                <span>Kalata-budownictwo@gmail.com</span>
              </a>

              <div className="flex justify-center space-x-4 pt-4">
                <a href="https://www.facebook.com/people/Kalata-Budownictwo-Firma-Remontowo-Budowlana/100075927164764/" aria-label="Facebook" className="bg-primary text-primary-foreground rounded-full p-3 flex items-center justify-center">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      }
    </header>
  );
};

export default Header;