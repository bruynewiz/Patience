import React from 'react';
import { X, Check, Calendar, Sparkles, Shield, Heart } from 'lucide-react';
import { BraidingStyle } from '../types';

interface StyleModalProps {
  style: BraidingStyle | null;
  onClose: () => void;
  onBookStyle: (styleId: string) => void;
}

export const StyleModal: React.FC<StyleModalProps> = ({ style, onClose, onBookStyle }) => {
  if (!style) return null;

  return (
    <div
      id="style-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#221612]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FFFDF9] rounded-3xl max-w-2xl w-full border border-[#EDE4D8] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-style-modal-button"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] rounded-full flex items-center justify-center text-[#221612] border border-[#EDE4D8] transition-colors"
          aria-label="Close style modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Banner */}
        <div className="relative h-64 sm:h-72 w-full bg-[#221612]/10 overflow-hidden">
          <img
            src={style.image}
            alt={style.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#221612]/80 via-[#221612]/20 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5 text-[#FFFDF9]">
            {style.badge && (
              <span className="inline-block px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase bg-[#B88648] text-[#FFFDF9] rounded-full mb-1.5">
                {style.badge}
              </span>
            )}
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold">{style.name}</h3>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/90 italic font-light">
              {style.tagline}
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#B88648] mb-1.5">
              Style Overview
            </h4>
            <p className="text-sm sm:text-base text-[#6B5B54] leading-relaxed">
              {style.description}
            </p>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#B88648] mb-2.5 flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1 text-[#B88648]" />
              Key Features & Benefits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {style.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-2 text-xs sm:text-sm text-[#221612] bg-[#FAF7F2] p-2.5 rounded-xl border border-[#EDE4D8]/60"
                >
                  <Check className="w-4 h-4 text-[#B88648] shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Hair Type & Maintenance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 border-t border-[#EDE4D8]">
            <div className="space-y-1">
              <div className="flex items-center text-xs font-semibold uppercase text-[#221612]">
                <Shield className="w-3.5 h-3.5 mr-1 text-[#B88648]" />
                Recommended Hair
              </div>
              <p className="text-xs text-[#6B5B54] leading-relaxed">
                {style.recommendedHairType}
              </p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center text-xs font-semibold uppercase text-[#221612]">
                <Heart className="w-3.5 h-3.5 mr-1 text-[#B88648]" />
                Maintenance Tip
              </div>
              <p className="text-xs text-[#6B5B54] leading-relaxed">
                {style.maintenanceTip}
              </p>
            </div>
          </div>

          {/* Action footer */}
          <div className="pt-3 border-t border-[#EDE4D8] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-[#6B5B54]">
              Appointment requests confirmed with automated SMS reminders.
            </span>
            <button
              id={`modal-book-${style.id}`}
              type="button"
              onClick={() => {
                onBookStyle(style.id);
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#221612] hover:bg-[#36251E] text-[#FFFDF9] text-sm font-semibold rounded-full shadow-md transition-all active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#B88648]" />
              <span>Book This Style</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
