import React, { useState } from 'react';
import { ArrowRight, Calendar, Sparkles, Info } from 'lucide-react';
import { BRAIDING_STYLES } from '../data/braidingData';
import { BraidingStyle } from '../types';
import { StyleModal } from './StyleModal';

interface StylesSectionProps {
  onSelectStyleForBooking: (styleId: string) => void;
}

export const StylesSection: React.FC<StylesSectionProps> = ({ onSelectStyleForBooking }) => {
  const [selectedStyle, setSelectedStyle] = useState<BraidingStyle | null>(null);

  return (
    <section id="styles" className="py-20 sm:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EDE4D8]/80 text-[#B88648]">
            <Sparkles className="w-3.5 h-3.5 text-[#B88648]" />
            <span className="text-xs font-semibold tracking-widest uppercase">
              Specialized Protective Services
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#221612]">
            Find Your Next Braid Style
          </h2>
          <p className="text-base sm:text-lg text-[#6B5B54] font-normal leading-relaxed">
            Explore beautiful protective styles created for different looks, occasions, and personalities.
          </p>
        </div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {BRAIDING_STYLES.map((style) => (
            <div
              key={style.id}
              id={`style-card-${style.id}`}
              className="group bg-[#FFFDF9] rounded-2xl border border-[#EDE4D8] overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Badges */}
              <div>
                <div
                  className="relative aspect-4/3 overflow-hidden bg-[#221612]/5 cursor-pointer"
                  onClick={() => setSelectedStyle(style)}
                >
                  <img
                    src={style.image}
                    alt={`${style.name} protective hair braiding style at PatienceAHB`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#221612]/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {style.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase bg-[#221612]/90 backdrop-blur-xs text-[#FFFDF9] rounded-md border border-[#EDE4D8]/20">
                      {style.badge}
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedStyle(style);
                    }}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-[#FAF7F2]/90 text-[#221612] hover:bg-[#FAF7F2] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    title="View details"
                    aria-label={`View details for ${style.name}`}
                  >
                    <Info className="w-4 h-4 text-[#B88648]" />
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-2.5">
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl font-semibold text-[#221612] group-hover:text-[#B88648] transition-colors">
                      {style.name}
                    </h3>
                    <p className="text-xs font-medium text-[#B88648] italic">
                      {style.tagline}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6B5B54] line-clamp-3 leading-relaxed">
                    {style.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons: View Style & Book This Style (NO prices displayed) */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2 border-t border-[#EDE4D8]/60 mt-3">
                <button
                  id={`btn-view-${style.id}`}
                  type="button"
                  onClick={() => setSelectedStyle(style)}
                  className="py-2.5 px-3 text-center text-xs font-semibold text-[#221612] bg-[#FAF7F2] hover:bg-[#EDE4D8]/70 rounded-xl transition-colors flex items-center justify-center space-x-1"
                >
                  <span>View Style</span>
                </button>
                <button
                  id={`btn-book-${style.id}`}
                  type="button"
                  onClick={() => onSelectStyleForBooking(style.id)}
                  className="py-2.5 px-3 text-center text-xs font-semibold text-[#FFFDF9] bg-[#221612] hover:bg-[#36251E] rounded-xl transition-colors shadow-2xs flex items-center justify-center space-x-1"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#B88648]" />
                  <span>Book Style</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom inquiry strip below styles */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] border border-[#EDE4D8] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-semibold text-[#221612]">
              Have a custom braiding idea or reference photo?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B5B54]">
              You can specify your custom parting, length, and photo notes directly in the booking scheduler.
            </p>
          </div>
          <button
            id="styles-request-custom-btn"
            type="button"
            onClick={() => onSelectStyleForBooking('knotless-braids')}
            className="shrink-0 inline-flex items-center space-x-2 px-6 py-3 bg-[#221612] hover:bg-[#36251E] text-[#FFFDF9] text-xs sm:text-sm font-semibold rounded-full shadow-xs transition-all active:scale-95"
          >
            <span>Request Appointment</span>
            <ArrowRight className="w-4 h-4 text-[#B88648]" />
          </button>
        </div>
      </div>

      {/* Style Details Lightbox Modal */}
      <StyleModal
        style={selectedStyle}
        onClose={() => setSelectedStyle(null)}
        onBookStyle={onSelectStyleForBooking}
      />
    </section>
  );
};
