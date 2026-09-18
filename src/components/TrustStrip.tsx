import React from 'react';
import { Sparkles, Award, Calendar, MapPin } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    {
      title: 'Braiding Specialist',
      desc: 'Focused exclusively on beautiful protective styles.',
      icon: Sparkles,
    },
    {
      title: 'Professional Experience',
      desc: 'Quality-focused braiding with attention to detail.',
      icon: Award,
    },
    {
      title: 'Convenient Booking',
      desc: 'Request your appointment online with ease.',
      icon: Calendar,
    },
    {
      title: 'Greensboro, NC',
      desc: 'Conveniently located at 2717 Wild Poplar Way.',
      icon: MapPin,
    },
  ];

  return (
    <section
      id="trust-strip"
      className="relative z-10 bg-[#FFFDF9] border-y border-[#EDE4D8] py-8 sm:py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#EDE4D8]">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                id={`trust-item-${index + 1}`}
                className={`flex items-start space-x-4 ${
                  index > 0 ? 'sm:pl-6 pt-4 sm:pt-0' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#EDE4D8] flex items-center justify-center shrink-0 text-[#B88648]">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-sm sm:text-base font-semibold text-[#221612] tracking-tight">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#6B5B54] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
