import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, Calendar, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/braidingData';

interface NavbarProps {
  onBookNowClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookNowClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Braiding Styles', href: '#styles' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'About', href: '#about' },
    { label: 'Booking', href: '#booking' },
    { label: 'Location', href: '#location' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#EDE4D8] py-3'
          : 'bg-[#FAF7F2]/80 backdrop-blur-xs py-4 border-b border-[#221612]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="nav-brand-logo"
            href="#hero"
            className="group flex flex-col focus:outline-hidden"
          >
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#221612] group-hover:text-[#B88648] transition-colors">
              PatienceAHB
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-widest uppercase text-[#B88648] -mt-1">
              African Hair Braiding • Greensboro, NC
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[14px] font-medium text-[#221612]/85 hover:text-[#B88648] transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Social & Book Now CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              id="nav-phone-direct"
              href={`tel:${BUSINESS_INFO.phone}`}
              aria-label="Call salon directly"
              className="inline-flex items-center space-x-1.5 px-3 py-2 text-xs font-medium text-[#221612] bg-[#EDE4D8]/60 hover:bg-[#EDE4D8] rounded-full transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B88648]" />
              <span className="hidden md:inline">{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <a
              id="nav-instagram-direct"
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Instagram profile"
              className="p-2 text-[#221612]/80 hover:text-[#B88648] rounded-full transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <button
              id="nav-book-now-button"
              type="button"
              onClick={onBookNowClick}
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#221612] hover:bg-[#36251E] text-[#FFFDF9] text-xs sm:text-sm font-semibold tracking-wide rounded-full shadow-xs hover:shadow-md transition-all active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-[#B88648]" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              id="mobile-book-now-quick"
              type="button"
              onClick={onBookNowClick}
              className="px-3.5 py-1.5 bg-[#221612] text-[#FFFDF9] text-xs font-semibold rounded-full"
            >
              Book Now
            </button>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#221612] hover:bg-[#EDE4D8]/50 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="sm:hidden bg-[#FAF7F2] border-b border-[#EDE4D8] px-5 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block py-2 text-base font-medium text-[#221612] border-b border-[#EDE4D8]/40"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 space-y-2.5">
            <button
              id="mobile-drawer-book-cta"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookNowClick();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 bg-[#221612] text-[#FFFDF9] text-sm font-semibold rounded-xl shadow-xs"
            >
              <Calendar className="w-4 h-4 text-[#B88648]" />
              <span>Book an Appointment</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                id="mobile-drawer-phone"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center space-x-2 py-2.5 bg-[#EDE4D8]/80 text-[#221612] text-xs font-medium rounded-xl"
              >
                <Phone className="w-3.5 h-3.5 text-[#B88648]" />
                <span>Call Salon</span>
              </a>
              <a
                id="mobile-drawer-instagram"
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-2.5 bg-[#EDE4D8]/80 text-[#221612] text-xs font-medium rounded-xl"
              >
                <Instagram className="w-3.5 h-3.5 text-[#B88648]" />
                <span>Instagram</span>
              </a>
            </div>

            <div className="flex items-center justify-center text-[11px] text-[#6B5B54] pt-1">
              <MapPin className="w-3 h-3 mr-1 text-[#B88648]" />
              <span>2717 Wild Poplar Way, Greensboro, NC</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
