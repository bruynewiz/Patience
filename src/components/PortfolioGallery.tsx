import React, { useState } from 'react';
import { Sparkles, X, Calendar, ArrowRight, Tag, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/braidingData';
import { GalleryItem } from '../types';

interface PortfolioGalleryProps {
  onBookLook: (styleCategory: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onBookLook }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Styles' },
    { id: 'knotless', label: 'Knotless' },
    { id: 'stitch', label: 'Stitch Braids' },
    { id: 'box', label: 'Box Braids' },
    { id: 'fulani', label: 'Fulani' },
    { id: 'boho', label: 'Boho & Curls' },
    { id: 'kids', label: 'Kids Braids' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#FFFDF9] border-t border-[#EDE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#EDE4D8] text-[#B88648]">
            <Sparkles className="w-3.5 h-3.5 text-[#B88648]" />
            <span className="text-xs font-semibold tracking-widest uppercase">
              Salon Portfolio
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#221612]">
            Braids That Speak for Themselves
          </h2>
          <p className="text-base sm:text-lg text-[#6B5B54] leading-relaxed">
            Real finished styles created with precision parting, healthy scalp care, and long-lasting quality.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                id={`gallery-filter-${tab.id}`}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-[#221612] text-[#FFFDF9] shadow-xs'
                    : 'bg-[#FAF7F2] text-[#6B5B54] hover:text-[#221612] hover:bg-[#EDE4D8]/60 border border-[#EDE4D8]/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-card-${item.id}`}
              className="group relative bg-[#FAF7F2] rounded-2xl border border-[#EDE4D8] overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setActiveLightboxItem(item)}
            >
              {/* Image Container with balanced aspect ratios */}
              <div className="relative aspect-4/5 overflow-hidden bg-[#221612]/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#221612]/85 via-[#221612]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase bg-[#FFFDF9]/90 text-[#221612] rounded-md backdrop-blur-xs border border-[#EDE4D8]">
                    {item.styleName}
                  </span>
                </div>

                {/* Zoom Icon Button */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#FAF7F2]/90 text-[#221612] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xs">
                  <ZoomIn className="w-4 h-4 text-[#B88648]" />
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-[#FFFDF9] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-lg sm:text-xl font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#FAF7F2]/90 line-clamp-2 leading-relaxed mb-3">
                    {item.caption}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-[#FAF7F2]/20 text-xs">
                    <span className="text-[#B88648] font-medium flex items-center">
                      <span>Click to inspect & book</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                    <span className="text-[11px] text-[#FAF7F2]/70 uppercase tracking-wider">
                      Greensboro, NC
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 overflow-y-auto bg-[#221612]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLightboxItem(null)}
        >
          <div
            className="relative bg-[#FFFDF9] rounded-3xl max-w-3xl w-full border border-[#EDE4D8] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="close-lightbox-button"
              type="button"
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] rounded-full flex items-center justify-center text-[#221612] border border-[#EDE4D8] transition-colors"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image */}
            <div className="relative aspect-4/3 sm:aspect-16/10 w-full bg-[#221612]/10 overflow-hidden">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Lightbox Body */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#B88648]">
                    {activeLightboxItem.styleName}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-[#221612]">
                    {activeLightboxItem.title}
                  </h3>
                </div>
                <div className="flex items-center space-x-1.5">
                  {activeLightboxItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center text-[11px] font-medium bg-[#FAF7F2] text-[#6B5B54] px-2.5 py-1 rounded-full border border-[#EDE4D8]"
                    >
                      <Tag className="w-3 h-3 mr-1 text-[#B88648]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#6B5B54] leading-relaxed">
                {activeLightboxItem.caption}
              </p>

              {/* Action bar */}
              <div className="pt-4 border-t border-[#EDE4D8] flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-[#6B5B54]">
                  Want this exact look? Mention this reference when submitting your booking request.
                </p>
                <button
                  id="lightbox-book-look-btn"
                  type="button"
                  onClick={() => {
                    onBookLook(activeLightboxItem.category);
                    setActiveLightboxItem(null);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 bg-[#221612] hover:bg-[#36251E] text-[#FFFDF9] text-xs sm:text-sm font-semibold rounded-full shadow-xs transition-all active:scale-95"
                >
                  <Calendar className="w-4 h-4 text-[#B88648]" />
                  <span>Book This Exact Look</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
