import React from 'react';
import { Instagram, Heart, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, INSTAGRAM_POSTS } from '../data/braidingData';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#EDE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center sm:text-left space-y-2">
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#B88648]">
              <Instagram className="w-4 h-4 text-[#B88648]" />
              <span>@patience_ahb</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#221612]">
              More Styles on Instagram
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5B54]">
              Follow our daily salon work, fresh installations, and client transformations in Greensboro.
            </p>
          </div>

          <a
            id="instagram-follow-cta"
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#221612] hover:bg-[#36251E] text-[#FFFDF9] text-xs sm:text-sm font-semibold rounded-full shadow-xs transition-all active:scale-95 shrink-0"
          >
            <Instagram className="w-4 h-4 text-[#B88648]" />
            <span>Follow @patience_ahb</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Instagram Visual Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#221612]/5 border border-[#EDE4D8] block"
              aria-label={`View Instagram post: ${post.caption}`}
            >
              <img
                src={post.image}
                alt="PatienceAHB braided hairstyles showcase"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#221612]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center text-[#FFFDF9]">
                <Instagram className="w-6 h-6 text-[#B88648] mb-1.5" />
                <div className="flex items-center space-x-1 text-xs font-semibold">
                  <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                  <span>{post.likes}</span>
                </div>
                <p className="text-[10px] text-[#FAF7F2]/90 line-clamp-2 mt-1 px-1">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
