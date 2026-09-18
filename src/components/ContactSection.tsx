import React from 'react';
import { Phone, Instagram, MapPin, Calendar, Sparkles, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/braidingData';

interface ContactSectionProps {
  onBookNowClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onBookNowClick }) => {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#FAF7F2] border-t border-[#EDE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#221612] text-[#FFFDF9] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#B88648]/20 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#B88648]">
                <Sparkles className="w-3.5 h-3.5 text-[#B88648]" />
                <span>Connect With PatienceAHB</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
                Ready for Your Next Protective Style?
              </h2>
              <p className="text-sm sm:text-base text-[#FAF7F2]/80 max-w-xl leading-relaxed">
                Schedule your braiding session in Greensboro or reach out directly with questions about styling, hair length, and availability.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  id="contact-book-appointment-btn"
                  type="button"
                  onClick={onBookNowClick}
                  className="inline-flex items-center space-x-2 px-7 py-3.5 bg-[#B88648] hover:bg-[#D4A366] text-[#FFFDF9] text-xs sm:text-sm font-semibold rounded-full shadow-md transition-all active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book an Appointment</span>
                </button>

                <a
                  id="contact-call-btn"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#FFFDF9]/10 hover:bg-[#FFFDF9]/20 text-[#FFFDF9] text-xs sm:text-sm font-semibold rounded-full border border-[#FFFDF9]/20 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#B88648]" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="lg:col-span-5 space-y-3.5">
              {/* Phone card */}
              <a
                id="contact-phone-card"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-[#FFFDF9]/5 border border-[#FFFDF9]/10 hover:bg-[#FFFDF9]/10 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-[#B88648]/20 flex items-center justify-center text-[#B88648] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#FAF7F2]/60 uppercase tracking-wider">
                    Direct Phone Line
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-[#FFFDF9]">
                    {BUSINESS_INFO.phoneDisplay}
                  </p>
                </div>
              </a>

              {/* Instagram card */}
              <a
                id="contact-instagram-card"
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-[#FFFDF9]/5 border border-[#FFFDF9]/10 hover:bg-[#FFFDF9]/10 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-[#B88648]/20 flex items-center justify-center text-[#B88648] shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#FAF7F2]/60 uppercase tracking-wider">
                    Official Instagram
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-[#FFFDF9]">
                    {BUSINESS_INFO.instagramHandle}
                  </p>
                </div>
              </a>

              {/* Location card */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-[#FFFDF9]/5 border border-[#FFFDF9]/10">
                <div className="w-11 h-11 rounded-xl bg-[#B88648]/20 flex items-center justify-center text-[#B88648] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#FAF7F2]/60 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-[#FFFDF9]">
                    {BUSINESS_INFO.address.full}
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
