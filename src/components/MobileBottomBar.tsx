import React from 'react';
import { Calendar, Phone, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data/braidingData';

interface MobileBottomBarProps {
  onBookNowClick: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onBookNowClick }) => {
  return (
    <aside
      id="mobile-persistent-bottom-bar"
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-t border-[#EDE4D8] px-4 py-2.5 sm:hidden shadow-lg"
    >
      <div className="grid grid-cols-3 gap-2 items-center">
        {/* Call Button */}
        <a
          id="mobile-bottom-call-action"
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#FAF7F2] text-[#221612] border border-[#EDE4D8] active:bg-[#EDE4D8] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#B88648]" />
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Call</span>
        </a>

        {/* Primary Book Now CTA */}
        <button
          id="mobile-bottom-book-action"
          type="button"
          onClick={onBookNowClick}
          className="flex flex-col items-center justify-center py-1.5 px-3 rounded-xl bg-[#221612] text-[#FFFDF9] shadow-xs active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4 text-[#B88648]" />
          <span className="text-[11px] font-bold tracking-tight mt-0.5">Book Now</span>
        </button>

        {/* Instagram Button */}
        <a
          id="mobile-bottom-instagram-action"
          href={BUSINESS_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#FAF7F2] text-[#221612] border border-[#EDE4D8] active:bg-[#EDE4D8] transition-colors"
        >
          <Instagram className="w-4 h-4 text-[#B88648]" />
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Instagram</span>
        </a>
      </div>
    </aside>
  );
};
