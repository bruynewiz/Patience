import React from 'react';
import { Phone, Instagram, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/braidingData';

interface FooterProps {
  onBookNowClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookNowClick }) => {
  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Braiding Styles', href: '#styles' },
    { label: 'About', href: '#about' },
    { label: 'Booking', href: '#booking' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#booking') {
      onBookNowClick();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#1C120E] text-[#FAF7F2] border-t border-[#EDE4D8]/10 pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#FAF7F2]/10">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#FFFDF9]">
                PatienceAHB
              </span>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#B88648]">
                African Hair Braiding • Greensboro, NC
              </p>
            </div>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/70 max-w-sm leading-relaxed">
              Specializing exclusively in modern, neat, and long-lasting African braiding protective styles in Greensboro, North Carolina.
            </p>
            <div className="pt-2">
              <a
                id="footer-instagram-btn"
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-[#B88648] hover:text-[#D4A366] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow {BUSINESS_INFO.instagramHandle} on Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#B88648]">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    id={`footer-link-${link.label.toLowerCase()}`}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs sm:text-sm text-[#FAF7F2]/80 hover:text-[#B88648] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3 text-xs sm:text-sm">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#B88648]">
              Salon Location & Phone
            </h4>
            <div className="space-y-2.5 text-[#FAF7F2]/80">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#B88648] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#B88648] shrink-0" />
                <a
                  id="footer-phone-link"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="hover:text-[#B88648] transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Sparkles className="w-4 h-4 text-[#B88648] shrink-0" />
                <span>Specialized Protective Hair Braiding</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-[#FAF7F2]/50 gap-4">
          <p>© 2026 PatienceAHB. All rights reserved.</p>
          <p>Greensboro, North Carolina • Professional African Braiding</p>
        </div>
      </div>
    </footer>
  );
};
