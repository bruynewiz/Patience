import React from 'react';
import { Sparkles, Shield, Palette, CalendarCheck, Check } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/braidingData';

export const WhyPatience: React.FC = () => {
  const icons = [Sparkles, Shield, Palette, CalendarCheck];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#EDE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EDE4D8]/80 text-[#B88648]">
            <Sparkles className="w-3.5 h-3.5 text-[#B88648]" />
            <span className="text-xs font-semibold tracking-widest uppercase">
              Our Core Principles
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#221612]">
            Why Choose PatienceAHB
          </h2>
          <p className="text-base sm:text-lg text-[#6B5B54] leading-relaxed">
            Specializing solely in African hair braiding allows us to bring dedicated technique, gentle tension, and neat precision to every appointment.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.title}
                id={`why-card-${index + 1}`}
                className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-7 border border-[#EDE4D8] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#EDE4D8] flex items-center justify-center text-[#B88648]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#221612]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B5B54] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EDE4D8]/60 flex items-center space-x-2 text-[11px] text-[#B88648] font-semibold tracking-wider uppercase">
                  <Check className="w-3.5 h-3.5" />
                  <span>Greensboro Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
