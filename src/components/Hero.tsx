import React from 'react';
import { Calendar, ArrowRight, MapPin, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/braidingData';

interface HeroProps {
  onBookAppointmentClick: () => void;
  onExploreStylesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookAppointmentClick,
  onExploreStylesClick,
}) => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F6F0E6] to-[#FAF7F2]"
    >
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#B88648]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-[#EDE4D8]/70 blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text & CTAs Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#221612]/5 border border-[#B88648]/25 text-[#B88648]">
              <Sparkles className="w-3.5 h-3.5 text-[#B88648]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
                AFRICAN HAIR BRAIDING • GREENSBORO, NC
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1
                id="hero-main-heading"
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#221612] leading-[1.08]"
              >
                Beautiful Braids.{' '}
                <span className="italic font-normal block sm:inline text-[#B88648]">
                  Made to Last.
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-[#6B5B54] max-w-2xl font-normal leading-relaxed">
              Professional African braiding designed around your style, your schedule, and your confidence.
            </p>

            {/* Location & Trust Signals */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#221612]/80 pt-1">
              <span className="inline-flex items-center font-medium bg-[#FFFDF9] px-3 py-1.5 rounded-full border border-[#EDE4D8] shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#B88648] mr-1.5" />
                Greensboro, North Carolina
              </span>
              <span className="inline-flex items-center font-medium bg-[#FFFDF9] px-3 py-1.5 rounded-full border border-[#EDE4D8] shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B88648] mr-1.5" />
                Protective Styling Specialist
              </span>
              <span className="inline-flex items-center font-medium bg-[#FFFDF9] px-3 py-1.5 rounded-full border border-[#EDE4D8] shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B88648] mr-1.5" />
                SMS Reminders & Zero Guesswork
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                id="hero-cta-book-appointment"
                type="button"
                onClick={onBookAppointmentClick}
                className="inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 bg-[#221612] hover:bg-[#36251E] text-[#FFFDF9] text-sm sm:text-base font-semibold rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <Calendar className="w-4 h-4 text-[#B88648]" />
                <span>Book an Appointment</span>
              </button>

              <button
                id="hero-cta-explore-styles"
                type="button"
                onClick={onExploreStylesClick}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#FAF7F2] hover:bg-[#EDE4D8]/60 text-[#221612] text-sm sm:text-base font-semibold rounded-full border border-[#221612]/20 transition-all hover:border-[#221612]/40"
              >
                <span>Explore Braiding Styles</span>
                <ArrowRight className="w-4 h-4 text-[#B88648]" />
              </button>
            </div>

            {/* Micro reassurance info */}
            <p className="text-[12px] text-[#6B5B54] pt-1">
              Located at {BUSINESS_INFO.address.street} • Questions? Call{' '}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="font-semibold text-[#221612] hover:underline"
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </p>
          </div>

          {/* Hero Imagery Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="relative rounded-3xl p-2 sm:p-3 bg-[#FFFDF9] shadow-xl border border-[#EDE4D8]">
                <div className="relative overflow-hidden rounded-2xl aspect-4/5 bg-[#221612]/5">
                  <img
                    id="hero-campaign-image"
                    src="https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=1200&q=85"
                    alt="African woman with beautifully styled neat protective braids at PatienceAHB salon"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-102"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle warm lighting gradient overlay for high contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#221612]/60 via-transparent to-transparent opacity-80" />

                  {/* Overlay badge in photo */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#EDE4D8]/80 text-[#221612]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-semibold tracking-wider uppercase text-[#B88648]">
                          Specialist Craft
                        </p>
                        <p className="text-sm font-semibold text-[#221612]">
                          Precision Parting & Long-Lasting Wear
                        </p>
                      </div>
                      <span className="text-xs bg-[#221612] text-[#FFFDF9] px-2.5 py-1 rounded-md font-medium">
                        Greensboro
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-[#FFFDF9] border border-[#EDE4D8] rounded-2xl p-3.5 shadow-lg items-center space-x-3 max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#B88648]/30 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-[#B88648]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#221612]">Exclusively Braiding</p>
                  <p className="text-[11px] text-[#6B5B54]">
                    Dedicated to healthy natural hair & clean protective styles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
