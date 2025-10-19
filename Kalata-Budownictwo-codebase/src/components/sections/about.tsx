"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const AboutSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'Budowa domu',
    description: '',
    file: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <section className="bg-white py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="text-left">
              <h1 className="text-[48px] font-bold text-[#212121] leading-tight mb-6">
                O nas
              </h1>
              <p className="text-[18px] text-[#666666] leading-relaxed mb-6">
                Jesteśmy rodzinną firmą budowlaną działającą na rynku od ponad 25 lat. Z pokolenia na
                pokolenie łączymy doświadczenie, pasję i zaangażowanie, aby każdy projekt był
                wykonany z najwyższą starannością.
              </p>
              <p className="text-[18px] text-[#666666] leading-relaxed mb-6">
                Specjalizujemy się w budowie i wykończeniach domów oraz mieszkań, dbając o każdy
                detal – od fundamentów, aż po ostatni element wykończenia wnętrz. Dzięki
                indywidualnemu podejściu do klienta realizujemy marzenia o funkcjonalnym i pięknym
                domu, dostosowanym do Twoich potrzeb.
              </p>
              <p className="text-[18px] text-[#666666] leading-relaxed">
                Stawiamy na solidność, terminowość i pełną transparentność. Zaufaj doświadczeniu
                naszej rodziny i pozwól nam zrealizować Twój projekt bez stresu i niespodzianek.
              </p>
            </div>

            <div className="w-full h-full flex items-start justify-center px-4 sm:px-0 !text-[#ffd700] !bg-[#ffd700]">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/fc01e807-08a1-449d-b059-403915dde895/visual-edit-uploads/1759880227158-hfedam40bjl.jpg"
                  alt="Zespół MAK BUD"
                  width={600}
                  height={700}
                  className="object-cover !w-full !h-full !max-w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-24 sm:py-32">
        <div className="container mx-auto px-4 !w-[1536px] !h-full !max-w-screen-2xl">
          <div className="mx-auto bg-white rounded-lg shadow-sm p-8 !w-[1200px] !h-full !max-w-6xl">
            <h2 className="text-2xl font-bold text-[#212121] mb-6 text-center">
              Zapytanie o dostępność i cenę
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#666666] mb-2">Imię i nazwisko</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jan Kowalski"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-[#E0E0E0] rounded-sm focus:outline-none focus:border-[#212121]"
                    required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#666666] mb-2">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+48 123 456 789"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-[#E0E0E0] rounded-sm focus:outline-none focus:border-[#212121]"
                    required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#666666] mb-2">Rodzaj usługi</label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#E0E0E0] rounded-sm focus:outline-none focus:border-[#212121]"
                  required>

                  <option value="Budowa domu">Budowa domu</option>
                  <option value="Wykończenie wnętrz">Wykończenie wnętrz</option>
                  <option value="Remont">Remont</option>
                  <option value="Wypożycz szalunki">Wypożycz szalunki</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#666666] mb-2">Opis</label>
                <textarea
                  name="description"
                  placeholder="Opisz zakres prac, metraż, lokalizację..."
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border border-[#E0E0E0] rounded-sm focus:outline-none focus:border-[#212121]" />

              </div>
              <div>
                <label className="block text-sm font-medium text-[#666666] mb-2">Załącz plik/projekt (opcjonalnie)</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full p-3 border border-[#E0E0E0] rounded-sm focus:outline-none focus:border-[#212121]" />

                <p className={`text-sm ${formData.file ? 'text-[#212121]' : 'text-[#999999]'} mt-1`}>
                  {formData.file ? formData.file.name : 'Nie wybrano pliku'}
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-[#000000] text-white py-3 rounded-sm font-bold hover:bg-[#333333] transition-colors">

                Poproś o wycenę
              </button>
            </form>
          </div>
        </div>
      </section>
    </>);

};

export default AboutSection;