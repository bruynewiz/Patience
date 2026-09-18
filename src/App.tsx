import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { StylesSection } from './components/StylesSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { WhyPatience } from './components/WhyPatience';
import { AboutSection } from './components/AboutSection';
import { BookingScheduler } from './components/BookingScheduler';
import { BookingInfoPrep } from './components/BookingInfoPrep';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [schedulerStyleId, setSchedulerStyleId] = useState<string>('knotless-braids');

  const scrollToBooking = (styleId?: string) => {
    if (styleId) {
      setSchedulerStyleId(styleId);
    }
    const bookingElem = document.getElementById('booking');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStyles = () => {
    const stylesElem = document.getElementById('styles');
    if (stylesElem) {
      stylesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="patienceahb-app" className="min-h-screen bg-[#FAF7F2] text-[#221612] flex flex-col selection:bg-[#B88648]/20 selection:text-[#221612]">
      {/* Sticky Header Navigation */}
      <Navbar onBookNowClick={() => scrollToBooking()} />

      {/* Main Content Sections */}
      <main id="main-content" className="grow">
        {/* 1. Hero Section */}
        <Hero
          onBookAppointmentClick={() => scrollToBooking()}
          onExploreStylesClick={scrollToStyles}
        />

        {/* 2. Trust / Value Strip */}
        <TrustStrip />

        {/* 3. Braiding Styles Section */}
        <StylesSection onSelectStyleForBooking={(styleId) => scrollToBooking(styleId)} />

        {/* 4. Portfolio / Gallery Section */}
        <PortfolioGallery
          onBookLook={(category) => {
            // Map category to style ID
            const categoryMapping: Record<string, string> = {
              knotless: 'knotless-braids',
              stitch: 'stitch-braids',
              box: 'box-braids',
              cornrows: 'cornrows',
              fulani: 'fulani-braids',
              boho: 'boho-braids',
              kids: 'kids-braids',
            };
            const mappedStyle = categoryMapping[category] || 'knotless-braids';
            scrollToBooking(mappedStyle);
          }}
        />

        {/* 5. Why PatienceAHB */}
        <WhyPatience />

        {/* 6. About PatienceAHB */}
        <AboutSection />

        {/* 7. Dedicated Booking Scheduler with SMS Reminders */}
        <BookingScheduler initialStyleId={schedulerStyleId} />

        {/* 8. Booking Guidance & Hair Preparation Information */}
        <BookingInfoPrep />

        {/* 9. Instagram Gallery & Follow Section */}
        <InstagramSection />

        {/* 10. Location Section with Google Maps Embed */}
        <LocationSection onBookNowClick={() => scrollToBooking()} />

        {/* 11. Contact Section */}
        <ContactSection onBookNowClick={() => scrollToBooking()} />
      </main>

      {/* Footer */}
      <Footer onBookNowClick={() => scrollToBooking()} />

      {/* Persistent Mobile Bottom Action Bar (Call / Book Now / Instagram) */}
      <MobileBottomBar onBookNowClick={() => scrollToBooking()} />
    </div>
  );
}
