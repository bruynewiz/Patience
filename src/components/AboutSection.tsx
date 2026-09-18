import React from 'react';
import { Sparkles, MapPin, Heart, Shield, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/braidingData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FFFDF9] border-t border-[#EDE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-3xl p-3 bg-[#FAF7F2] border border-[#EDE4D8] shadow-xl overflow-hidden">
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-[#221612]/5">
                  <img
                    id="about-salon-image"
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85"
                    alt="PatienceAHB African Braiding Salon in Greensboro NC"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#221612]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-[#FFFDF9]">
                    <p className="text-xs uppercase tracking-widest text-[#B88648] font-semibold">
                      Dedicated Braiding Space
                    </p>
                    <p className="font-serif text-xl font-medium">
                      2717 Wild Poplar Way • Greensboro, NC
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative badge */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-[#FAF7F2] border border-[#EDE4D8] rounded-2xl p-4 shadow-lg items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#221612] text-[#B88648] flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#221612]">Tension-Free Promise</p>
                  <p className="text-[11px] text-[#6B5B54]">Gentle on edges & scalp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#B88648]">
                <Sparkles className="w-3.5 h-3.5 text-[#B88648]" />
                <span>African Braiding Specialist</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#221612]">
                Meet PatienceAHB
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#6B5B54] leading-relaxed">
              <p>
                PatienceAHB is a specialist African hair braiding destination located in Greensboro, North Carolina. We are dedicated solely to the craft of protective hair styling, offering knotless braids, stitch braids, cornrows, box braids, Fulani styles, and children’s protective braids.
              </p>
              <p>
                Our philosophy centers around providing clients with a clean, welcoming, and professional environment. Every hairstyle is approached with care—prioritizing healthy scalp tension, neat grid sectioning, and lasting beauty so you can wear your braids with absolute pride and confidence.
              </p>
            </div>

            {/* Modular highlights structured for owner customization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EDE4D8]">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#221612] mb-1">
                  <Shield className="w-4 h-4 text-[#B88648]" />
                  <span>Salon Philosophy</span>
                </div>
                <p className="text-xs text-[#6B5B54] leading-relaxed">
                  Careful tension control to preserve natural hairlines and promote long-term hair health.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EDE4D8]">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#221612] mb-1">
                  <MapPin className="w-4 h-4 text-[#B88648]" />
                  <span>Greensboro Location</span>
                </div>
                <p className="text-xs text-[#6B5B54] leading-relaxed">
                  Conveniently situated at {BUSINESS_INFO.address.street} with hassle-free client parking.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-[#221612]">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#EDE4D8]">
                <Check className="w-3.5 h-3.5 text-[#B88648] mr-1.5" />
                Adults & Children Welcome
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#EDE4D8]">
                <Check className="w-3.5 h-3.5 text-[#B88648] mr-1.5" />
                Dedicated Chair Time
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#EDE4D8]">
                <Check className="w-3.5 h-3.5 text-[#B88648] mr-1.5" />
                SMS Schedule Updates
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
