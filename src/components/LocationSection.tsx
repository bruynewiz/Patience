import React from 'react';
import { MapPin, Phone, Navigation, Clock, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/braidingData';

interface LocationSectionProps {
  onBookNowClick: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onBookNowClick }) => {
  return (
    <section id="location" className="py-20 sm:py-28 bg-[#FFFDF9] border-t border-[#EDE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#EDE4D8] text-[#B88648]">
            <MapPin className="w-3.5 h-3.5 text-[#B88648]" />
            <span className="text-xs font-semibold tracking-widest uppercase">
              Greensboro, NC Location
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#221612]">
            Visit PatienceAHB
          </h2>
          <p className="text-sm sm:text-base text-[#6B5B54]">
            Conveniently situated in Greensboro, North Carolina with dedicated parking and a welcoming environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Location Info Card */}
          <div className="lg:col-span-5 bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#EDE4D8] flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-[#221612]">
                  PatienceAHB Braiding Salon
                </h3>
                <p className="text-xs text-[#B88648] font-medium tracking-wide uppercase mt-0.5">
                  African Hair Braiding Destination
                </p>
              </div>

              {/* Address details */}
              <div className="space-y-3 text-sm text-[#221612]">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFFDF9] border border-[#EDE4D8] text-[#B88648] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#6B5B54] uppercase tracking-wider">
                      Salon Address
                    </p>
                    <p className="font-medium text-sm sm:text-base text-[#221612]">
                      2717 Wild Poplar Way
                    </p>
                    <p className="text-xs text-[#6B5B54]">
                      Greensboro, NC 27405 • United States
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFFDF9] border border-[#EDE4D8] text-[#B88648] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#6B5B54] uppercase tracking-wider">
                      Telephone
                    </p>
                    <a
                      id="location-call-link"
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="font-medium text-sm sm:text-base text-[#221612] hover:text-[#B88648] hover:underline"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                    <p className="text-[11px] text-[#6B5B54]">
                      Call or SMS for inquiries
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFFDF9] border border-[#EDE4D8] text-[#B88648] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#6B5B54] uppercase tracking-wider">
                      Operating Schedule
                    </p>
                    <p className="font-medium text-xs sm:text-sm text-[#221612]">
                      Monday – Saturday: By Appointment
                    </p>
                    <p className="text-[11px] text-[#6B5B54]">
                      Sunday: Reserved for special requests
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="space-y-2.5 pt-4 border-t border-[#EDE4D8]">
              <a
                id="location-get-directions-btn"
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-3.5 bg-[#221612] hover:bg-[#36251E] text-[#FFFDF9] text-xs sm:text-sm font-semibold rounded-2xl shadow-xs transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4 text-[#B88648]" />
                <span>Get Directions</span>
              </a>

              <button
                id="location-book-btn"
                type="button"
                onClick={onBookNowClick}
                className="w-full inline-flex items-center justify-center space-x-2 py-3 bg-[#FFFDF9] hover:bg-[#EDE4D8]/60 text-[#221612] text-xs sm:text-sm font-semibold rounded-2xl border border-[#EDE4D8] transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#B88648]" />
                <span>Book Appointment Online</span>
              </button>
            </div>
          </div>

          {/* Google Maps Embed Column (Exact Embed) */}
          <div className="lg:col-span-7 bg-[#FAF7F2] rounded-3xl p-3 sm:p-4 border border-[#EDE4D8] shadow-md overflow-hidden flex flex-col justify-center min-h-[380px] sm:min-h-[440px]">
            <div className="relative w-full h-full min-h-[360px] sm:min-h-[420px] rounded-2xl overflow-hidden bg-[#221612]/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.0489046537073!2d-79.7423507!3d36.1410225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88531f89846c0001%3A0x68d99ef8cccce60c!2sPatienceAHB!5e0!3m2!1sen!2scm!4v1789764956746!5m2!1sen!2scm"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '360px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="PatienceAHB Google Maps Location in Greensboro NC"
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
