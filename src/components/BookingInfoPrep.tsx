import React from 'react';
import { Phone, Instagram, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, PREPARATION_CHECKLIST } from '../data/braidingData';

export const BookingInfoPrep: React.FC = () => {
  return (
    <section id="prep-info" className="py-16 sm:py-20 bg-[#FFFDF9] border-t border-[#EDE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Preparation Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#B88648]">
                <Sparkles className="w-3.5 h-3.5 text-[#B88648]" />
                <span>Appointment Preparation</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#221612]">
                Please Arrive Prepared for Your Appointment
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5B54] leading-relaxed">
                To ensure a smooth, comfortable session and long-lasting protective style, please review these arrival guidelines:
              </p>
            </div>

            <div className="space-y-3">
              {PREPARATION_CHECKLIST.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#EDE4D8]/80 text-xs sm:text-sm text-[#221612]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#B88648] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Questions & Contact Directly Card */}
          <div className="lg:col-span-5 bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#EDE4D8] space-y-6 shadow-xs">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#FFFDF9] border border-[#EDE4D8] flex items-center justify-center text-[#B88648]">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl font-semibold text-[#221612]">
                Have Questions Before Booking?
              </h4>
              <p className="text-xs sm:text-sm text-[#6B5B54] leading-relaxed">
                Contact us directly before scheduling if you have questions regarding hair length, specific parting styles, or scheduling availability.
              </p>
            </div>

            <div className="space-y-3">
              {/* Direct Phone */}
              <a
                id="prep-contact-phone"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#FFFDF9] border border-[#EDE4D8] hover:border-[#221612]/30 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] text-[#B88648] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#6B5B54] uppercase tracking-wider">
                      Call or Text
                    </p>
                    <p className="text-sm font-semibold text-[#221612] group-hover:text-[#B88648] transition-colors">
                      {BUSINESS_INFO.phoneDisplay}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#221612] bg-[#FAF7F2] px-3 py-1.5 rounded-full">
                  Direct Call
                </span>
              </a>

              {/* Direct Instagram */}
              <a
                id="prep-contact-instagram"
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-[#FFFDF9] border border-[#EDE4D8] hover:border-[#221612]/30 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] text-[#B88648] flex items-center justify-center">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#6B5B54] uppercase tracking-wider">
                      Direct Message
                    </p>
                    <p className="text-sm font-semibold text-[#221612] group-hover:text-[#B88648] transition-colors">
                      {BUSINESS_INFO.instagramHandle}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#221612] bg-[#FAF7F2] px-3 py-1.5 rounded-full">
                  Instagram
                </span>
              </a>
            </div>

            <p className="text-[11px] text-[#6B5B54] text-center pt-2">
              📍 2717 Wild Poplar Way, Greensboro, NC 27405
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
