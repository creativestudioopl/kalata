import { ChevronRight, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground font-primary">
      <div className="bg-[#212121] py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-sm">
          {/* Social */}
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <a
              href="https://www.facebook.com/makbudcompl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-primary text-background h-9 w-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80">

              <Facebook size={18} />
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4">
            <a href="tel:+48504281967" className="flex items-center space-x-2 hover:text-primary transition-colors text-foreground/80 hover:text-foreground/100">
              <Phone size={20} className="text-primary" />
              <span className="!whitespace-pre-line">(+48) 796 591 251</span>
            </a>
            <a href="mailto:biuro@mak-bud.com.pl" className="flex items-center space-x-2 hover:text-primary transition-colors text-foreground/80 hover:text-foreground/100">
              <Mail size={20} className="text-primary" />
              <span className="!whitespace-pre-line">Kalata-budownictwo@gmail.com</span>
            </a>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-2.5 justify-center md:justify-end text-center md:text-left text-foreground/80">
            <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
            <div className="text-xs leading-snug">
              <p className="!whitespace-pre-line !whitespace-pre-line">Kalata Budownictwo Firma remontowo-budowlana</p>
              <p className="!whitespace-pre-line !whitespace-pre-line">ul. Bartosza Głowackiego 26, 30-085 Kraków</p>
              <p className="!whitespace-pre-line">NIP: 735-289-25-67</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-5">O nas</h3>
            <p className="text-muted-foreground text-sm leading-relaxed !whitespace-pre-line">Jesteśmy rodzinną firmą budowlaną działającą na rynku od ponad 25 lat. Z pokolenia na pokolenie łączymy doświadczenie, pasję i zaangażowanie, aby każdy projekt był wykonany z najwyższą starannością.

            </p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-border/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-muted-foreground/70 text-center md:text-left order-2 md:order-1 !whitespace-pre-line !w-[98%] !h-full !whitespace-pre-line !whitespace-pre-line">                                                                                                                                                                                                                        Copyright © Kalata Budownictwo</p>
            <a
            href="https://www.s-sols.com/products/wordpress/accelerator?utm_source=usersite&utm_medium=banner&utm_campaign=free_lim_ver&utm_term=accel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground/80 transition-colors group order-1 md:order-2">

              {/* NOTE: Using a placeholder SVG as the original asset was not provided. */}
              <div className="text-xs">
                <p className="font-bold text-foreground/80 group-hover:text-foreground !whitespace-pre-line"></p>
                <p className="text-muted-foreground/70 group-hover:text-muted-foreground/100 !whitespace-pre-line"></p>
              </div>
            </a>
          </div>
      </div>
    </footer>);

};

export default Footer;