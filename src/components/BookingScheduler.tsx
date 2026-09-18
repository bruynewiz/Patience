import React, { useState, useEffect } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Smartphone,
  Sparkles,
  AlertCircle,
  Scissors,
  Check,
  Phone,
  Info,
  CalendarDays
} from 'lucide-react';
import { BRAIDING_STYLES, BUSINESS_INFO } from '../data/braidingData';
import { BookingRequest } from '../types';

interface BookingSchedulerProps {
  initialStyleId?: string | null;
  onBookingSubmitted?: (request: BookingRequest) => void;
}

const HAIR_LENGTHS = [
  { id: 'mid-back', label: 'Mid-Back Length', desc: 'Standard elegant length' },
  { id: 'waist', label: 'Waist Length', desc: 'Most popular versatile length' },
  { id: 'butt-length', label: 'Butt / Hip Length', desc: 'Dramatic statement drop' },
  { id: 'thigh-length', label: 'Thigh Length', desc: 'Extra long luxury style' },
];

const BRAID_SIZES = [
  { id: 'small', label: 'Small', desc: 'Very fine, full density' },
  { id: 'smedium', label: 'Smedium', desc: 'Balance of density & time' },
  { id: 'medium', label: 'Medium', desc: 'Classic standard width' },
  { id: 'large', label: 'Large / Jumbo', desc: 'Bold chunky sections' },
];

const TIME_SLOTS = [
  { time: '09:00 AM', period: 'Morning' },
  { time: '10:30 AM', period: 'Morning' },
  { time: '12:00 PM', period: 'Midday' },
  { time: '01:30 PM', period: 'Afternoon' },
  { time: '03:30 PM', period: 'Afternoon' },
  { time: '05:00 PM', period: 'Late Afternoon' },
];

export const BookingScheduler: React.FC<BookingSchedulerProps> = ({
  initialStyleId,
  onBookingSubmitted,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialStyleId || 'knotless-braids'
  );
  const [selectedHairLength, setSelectedHairLength] = useState<string>('waist');
  const [selectedBraidSize, setSelectedBraidSize] = useState<string>('medium');

  // Calendar dates setup (next 14 days starting tomorrow)
  const [availableDates, setAvailableDates] = useState<
    { dateStr: string; displayDay: string; displayDate: string; monthName: string; isWeekend: boolean }[]
  >([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('09:00 AM');

  // Client info state
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [hairCondition, setHairCondition] = useState('Washed, fully blow-dried, and ready for braiding');
  const [smsConsent, setSmsConsent] = useState(true);
  const [notes, setNotes] = useState('');
  const [validationError, setValidationError] = useState('');

  // Confirmation state
  const [confirmedBooking, setConfirmedBooking] = useState<BookingRequest | null>(null);

  useEffect(() => {
    if (initialStyleId) {
      setSelectedServiceId(initialStyleId);
    }
  }, [initialStyleId]);

  // Generate real upcoming booking dates
  useEffect(() => {
    const dates: {
      dateStr: string;
      displayDay: string;
      displayDate: string;
      monthName: string;
      isWeekend: boolean;
    }[] = [];
    const now = new Date();

    for (let i = 1; i <= 21; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() + i);

      // We allow Monday through Saturday
      const dayOfWeek = d.getDay(); // 0 is Sunday
      if (dayOfWeek !== 0) {
        const dateStr = d.toISOString().split('T')[0];
        const displayDay = d.toLocaleDateString('en-US', { weekday: 'short' });
        const displayDate = d.getDate().toString();
        const monthName = d.toLocaleDateString('en-US', { month: 'short' });
        const isWeekend = dayOfWeek === 6;

        dates.push({ dateStr, displayDay, displayDate, monthName, isWeekend });
      }
    }
    setAvailableDates(dates);
    if (dates.length > 0 && !selectedDate) {
      setSelectedDate(dates[0].dateStr);
    }
  }, []);

  const selectedService = BRAIDING_STYLES.find((s) => s.id === selectedServiceId) || BRAIDING_STYLES[0];

  const handleNextStep = () => {
    setValidationError('');
    if (currentStep === 1) {
      if (!selectedServiceId) {
        setValidationError('Please select a braiding style to continue.');
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!selectedDate) {
        setValidationError('Please select a preferred date.');
        return;
      }
      setCurrentStep(3);
    } else if (currentStep === 3) {
      if (!selectedTime) {
        setValidationError('Please select an appointment time.');
        return;
      }
      setCurrentStep(4);
    } else if (currentStep === 4) {
      if (!fullName.trim()) {
        setValidationError('Please enter your full name.');
        return;
      }
      if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
        setValidationError('Please provide a valid 10-digit mobile number for appointment & SMS confirmations.');
        return;
      }
      if (!email.trim() || !email.includes('@')) {
        setValidationError('Please provide a valid email address.');
        return;
      }

      // Submit booking request
      const bookingData: BookingRequest = {
        id: `PAHB-${Math.floor(1000 + Math.random() * 9000)}`,
        clientName: fullName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        serviceId: selectedService.id,
        serviceName: selectedService.name,
        hairLength: HAIR_LENGTHS.find((l) => l.id === selectedHairLength)?.label || selectedHairLength,
        braidSize: BRAID_SIZES.find((s) => s.id === selectedBraidSize)?.label || selectedBraidSize,
        preferredDate: selectedDate,
        preferredTime: selectedTime,
        hairCondition,
        smsConsent,
        notes: notes.trim() || undefined,
        createdAt: new Date().toISOString(),
        status: 'pending',
      };

      // Store in localStorage for client persistence
      try {
        const existing = JSON.parse(localStorage.getItem('patienceahb_bookings') || '[]');
        localStorage.setItem('patienceahb_bookings', JSON.stringify([bookingData, ...existing]));
      } catch (e) {
        console.error('Storage note:', e);
      }

      if (onBookingSubmitted) {
        onBookingSubmitted(bookingData);
      }
      setConfirmedBooking(bookingData);
      setCurrentStep(5);
    }
  };

  const handlePreviousStep = () => {
    setValidationError('');
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setConfirmedBooking(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setNotes('');
  };

  // Google Calendar Link generator
  const createGoogleCalendarUrl = (booking: BookingRequest) => {
    const title = encodeURIComponent(`African Hair Braiding Appointment: ${booking.serviceName} at PatienceAHB`);
    const details = encodeURIComponent(
      `Appointment with PatienceAHB African Braiding Salon in Greensboro.\nService: ${booking.serviceName}\nLength: ${booking.hairLength}\nSize: ${booking.braidSize}\nLocation: 2717 Wild Poplar Way, Greensboro, NC 27405\nPhone: +1 336-987-3572\n\nPreparation Reminder: Please arrive with hair washed, blown dry, and free of heavy grease or oils.`
    );
    const location = encodeURIComponent('2717 Wild Poplar Way, Greensboro, NC 27405');
    const dateFormatted = booking.preferredDate.replace(/-/g, '');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dateFormatted}T130000Z/${dateFormatted}T170000Z`;
  };

  return (
    <section id="booking" className="py-20 sm:py-28 bg-gradient-to-b from-[#FAF7F2] via-[#F4EDE2] to-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EDE4D8] text-[#B88648]">
            <CalendarIcon className="w-3.5 h-3.5 text-[#B88648]" />
            <span className="text-xs font-semibold tracking-widest uppercase">
              Online Appointment Scheduler
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#221612]">
            Book Your Appointment
          </h2>
          <p className="text-sm sm:text-base text-[#6B5B54]">
            Select your desired braiding style, date, and preferred time. We will send you an automated SMS confirmation and 24-hour reminder.
          </p>
        </div>

        {/* Multi-step Container */}
        <div className="bg-[#FFFDF9] rounded-3xl border border-[#EDE4D8] shadow-xl overflow-hidden">
          {/* Step Progress Header */}
          <div className="bg-[#FAF7F2] border-b border-[#EDE4D8] px-4 sm:px-8 py-4">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {[
                { step: 1, label: 'Style' },
                { step: 2, label: 'Date' },
                { step: 3, label: 'Time' },
                { step: 4, label: 'Details' },
                { step: 5, label: 'Confirm' },
              ].map((s) => (
                <div key={s.step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                        currentStep === s.step
                          ? 'bg-[#221612] text-[#FFFDF9] ring-4 ring-[#B88648]/20'
                          : currentStep > s.step
                          ? 'bg-[#B88648] text-[#FFFDF9]'
                          : 'bg-[#EDE4D8] text-[#6B5B54]'
                      }`}
                    >
                      {currentStep > s.step ? <Check className="w-4 h-4" /> : s.step}
                    </div>
                    <span className="text-[11px] font-medium text-[#6B5B54] mt-1 hidden sm:block">
                      {s.label}
                    </span>
                  </div>
                  {s.step < 5 && (
                    <div
                      className={`h-0.5 w-6 sm:w-16 mx-1 sm:mx-2 transition-colors ${
                        currentStep > s.step ? 'bg-[#B88648]' : 'bg-[#EDE4D8]'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Validation Notice */}
          {validationError && (
            <div className="m-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-center space-x-3 text-xs sm:text-sm animate-in fade-in">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* Step Body */}
          <div className="p-6 sm:p-10">
            {/* STEP 1: CHOOSE STYLE & SIZING */}
            {currentStep === 1 && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#221612]">
                    Step 1: Choose Your Braiding Style & Options
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B5B54]">
                    Select the braiding category and desired length for your protective style.
                  </p>
                </div>

                {/* Service Cards Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  {BRAIDING_STYLES.map((style) => (
                    <button
                      key={style.id}
                      type="button"
                      onClick={() => setSelectedServiceId(style.id)}
                      className={`text-left p-3.5 rounded-2xl border transition-all flex flex-col justify-between ${
                        selectedServiceId === style.id
                          ? 'border-[#221612] bg-[#FAF7F2] ring-2 ring-[#B88648]/30 shadow-xs'
                          : 'border-[#EDE4D8] hover:border-[#221612]/40 bg-[#FFFDF9]'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <img
                          src={style.image}
                          alt={style.name}
                          className="w-12 h-12 rounded-xl object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="text-xs sm:text-sm font-semibold text-[#221612]">
                            {style.name}
                          </p>
                          <p className="text-[11px] text-[#B88648] font-medium">
                            {style.category}
                          </p>
                        </div>
                      </div>
                      <p className="text-[11px] text-[#6B5B54] line-clamp-2">
                        {style.tagline}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Hair Length & Braid Size selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#EDE4D8]">
                  {/* Length */}
                  <div className="space-y-3">
                    <label className="text-xs sm:text-sm font-semibold text-[#221612] flex items-center space-x-1.5">
                      <Scissors className="w-4 h-4 text-[#B88648]" />
                      <span>Preferred Hair Length</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {HAIR_LENGTHS.map((len) => (
                        <button
                          key={len.id}
                          type="button"
                          onClick={() => setSelectedHairLength(len.id)}
                          className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                            selectedHairLength === len.id
                              ? 'border-[#221612] bg-[#221612] text-[#FFFDF9]'
                              : 'border-[#EDE4D8] text-[#221612] bg-[#FAF7F2] hover:border-[#221612]/30'
                          }`}
                        >
                          <p className="font-semibold">{len.label}</p>
                          <p
                            className={`text-[10px] ${
                              selectedHairLength === len.id ? 'text-[#FAF7F2]/80' : 'text-[#6B5B54]'
                            }`}
                          >
                            {len.desc}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Size */}
                  <div className="space-y-3">
                    <label className="text-xs sm:text-sm font-semibold text-[#221612] flex items-center space-x-1.5">
                      <Sparkles className="w-4 h-4 text-[#B88648]" />
                      <span>Braid Thickness / Size</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {BRAID_SIZES.map((size) => (
                        <button
                          key={size.id}
                          type="button"
                          onClick={() => setSelectedBraidSize(size.id)}
                          className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                            selectedBraidSize === size.id
                              ? 'border-[#221612] bg-[#221612] text-[#FFFDF9]'
                              : 'border-[#EDE4D8] text-[#221612] bg-[#FAF7F2] hover:border-[#221612]/30'
                          }`}
                        >
                          <p className="font-semibold">{size.label}</p>
                          <p
                            className={`text-[10px] ${
                              selectedBraidSize === size.id ? 'text-[#FAF7F2]/80' : 'text-[#6B5B54]'
                            }`}
                          >
                            {size.desc}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: CHOOSE DATE */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#221612]">
                    Step 2: Choose Preferred Appointment Date
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B5B54]">
                    Select from available appointment days at our Greensboro salon (Monday through Saturday).
                  </p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {availableDates.map((item) => (
                    <button
                      key={item.dateStr}
                      type="button"
                      onClick={() => setSelectedDate(item.dateStr)}
                      className={`p-3.5 rounded-2xl text-center border transition-all flex flex-col items-center justify-center ${
                        selectedDate === item.dateStr
                          ? 'border-[#221612] bg-[#221612] text-[#FFFDF9] shadow-md ring-2 ring-[#B88648]/40 scale-102'
                          : 'border-[#EDE4D8] bg-[#FAF7F2] text-[#221612] hover:border-[#221612]/30 hover:bg-[#EDE4D8]/50'
                      }`}
                    >
                      <span
                        className={`text-[11px] font-semibold uppercase tracking-wider ${
                          selectedDate === item.dateStr ? 'text-[#B88648]' : 'text-[#6B5B54]'
                        }`}
                      >
                        {item.displayDay}
                      </span>
                      <span className="text-xl sm:text-2xl font-bold my-0.5">
                        {item.displayDate}
                      </span>
                      <span
                        className={`text-[11px] ${
                          selectedDate === item.dateStr ? 'text-[#FAF7F2]/80' : 'text-[#6B5B54]'
                        }`}
                      >
                        {item.monthName}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EDE4D8] flex items-start space-x-3 text-xs text-[#6B5B54]">
                  <Info className="w-4 h-4 text-[#B88648] shrink-0 mt-0.5" />
                  <p>
                    All appointment slots are scheduled as dedicated single-chair sessions so your braider can give full focus to your protective style without rushing.
                  </p>
                </div>
              </div>
            )}

            {/* STEP 3: CHOOSE TIME */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#221612]">
                    Step 3: Choose Your Arrival Time
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B5B54]">
                    Select your preferred check-in time for{' '}
                    <span className="font-semibold text-[#221612]">{selectedDate}</span>.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => setSelectedTime(slot.time)}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        selectedTime === slot.time
                          ? 'border-[#221612] bg-[#221612] text-[#FFFDF9] shadow-md ring-2 ring-[#B88648]/40'
                          : 'border-[#EDE4D8] bg-[#FAF7F2] text-[#221612] hover:border-[#221612]/30'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <p className="text-sm sm:text-base font-semibold">{slot.time}</p>
                        <p
                          className={`text-xs ${
                            selectedTime === slot.time ? 'text-[#FAF7F2]/80' : 'text-[#6B5B54]'
                          }`}
                        >
                          {slot.period} slot
                        </p>
                      </div>
                      <Clock
                        className={`w-4 h-4 ${
                          selectedTime === slot.time ? 'text-[#B88648]' : 'text-[#6B5B54]'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EDE4D8] flex items-center space-x-3 text-xs text-[#6B5B54]">
                  <CheckCircle2 className="w-4 h-4 text-[#B88648] shrink-0" />
                  <span>
                    Selected: <strong>{selectedService.name}</strong> on{' '}
                    <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>.
                  </span>
                </div>
              </div>
            )}

            {/* STEP 4: CLIENT INFORMATION & SMS REMINDER TOGGLE */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#221612]">
                    Step 4: Contact & Hair Preparation Details
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B5B54]">
                    Provide your contact info to receive instant appointment confirmation and SMS reminders.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#221612] uppercase tracking-wider">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        id="booking-input-name"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Maya Johnson"
                        className="w-full px-4 py-3 rounded-xl border border-[#EDE4D8] bg-[#FAF7F2] text-[#221612] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#B88648]/40 focus:border-[#221612]"
                        required
                      />
                      <User className="absolute right-3.5 top-3.5 w-4 h-4 text-[#6B5B54]" />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#221612] uppercase tracking-wider">
                      Phone Number (Mobile for SMS) *
                    </label>
                    <div className="relative">
                      <input
                        id="booking-input-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (336) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-[#EDE4D8] bg-[#FAF7F2] text-[#221612] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#B88648]/40 focus:border-[#221612]"
                        required
                      />
                      <Smartphone className="absolute right-3.5 top-3.5 w-4 h-4 text-[#6B5B54]" />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-semibold text-[#221612] uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      id="booking-input-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. maya@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#EDE4D8] bg-[#FAF7F2] text-[#221612] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#B88648]/40 focus:border-[#221612]"
                      required
                    />
                  </div>
                </div>

                {/* Hair Condition Selection */}
                <div className="space-y-2 pt-2 border-t border-[#EDE4D8]">
                  <label className="text-xs font-semibold text-[#221612] uppercase tracking-wider">
                    Hair Preparation Status & Texture
                  </label>
                  <select
                    id="booking-select-condition"
                    value={hairCondition}
                    onChange={(e) => setHairCondition(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#EDE4D8] bg-[#FAF7F2] text-[#221612] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#B88648]/40 focus:border-[#221612]"
                  >
                    <option value="Washed, fully blow-dried, and ready for braiding">
                      Clean: Washed, blown dry, ready for braiding (Recommended)
                    </option>
                    <option value="Natural 4C texture (tender scalp / gentle care required)">
                      Natural 4C texture (sensitive scalp / gentle care needed)
                    </option>
                    <option value="Transitioning / Relaxed hair">
                      Transitioning / Relaxed hair texture
                    </option>
                    <option value="Short natural edges / need delicate grip">
                      Delicate hairline / shorter edges
                    </option>
                  </select>
                </div>

                {/* SMS Reminder Checkbox (Requested Feature) */}
                <div className="p-4 rounded-2xl bg-[#F5EFE6] border border-[#B88648]/30 flex items-start space-x-3">
                  <input
                    id="booking-sms-consent"
                    type="checkbox"
                    checked={smsConsent}
                    onChange={(e) => setSmsConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded-sm text-[#221612] focus:ring-[#B88648] accent-[#221612]"
                  />
                  <label htmlFor="booking-sms-consent" className="text-xs sm:text-sm text-[#221612] cursor-pointer">
                    <span className="font-semibold block text-[#221612]">
                      📱 Enable automated SMS confirmation & 24-hour reminder
                    </span>
                    <span className="text-[#6B5B54] text-xs block mt-0.5">
                      Receive an instant text confirmation plus a helpful 24h reminder to keep your spot locked and prevent no-shows.
                    </span>
                  </label>
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#221612] uppercase tracking-wider">
                    Special Inspo Notes or Preferred Parting (Optional)
                  </label>
                  <textarea
                    id="booking-input-notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    placeholder="e.g. Triangle parts, honey blonde color highlights, or link to your Instagram inspo photo..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EDE4D8] bg-[#FAF7F2] text-[#221612] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#B88648]/40 focus:border-[#221612]"
                  />
                </div>
              </div>
            )}

            {/* STEP 5: CONFIRMATION SCREEN */}
            {currentStep === 5 && confirmedBooking && (
              <div className="space-y-6 text-center animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 bg-[#B88648]/15 rounded-full flex items-center justify-center mx-auto text-[#B88648]">
                  <CheckCircle2 className="w-10 h-10 text-[#B88648]" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#B88648]">
                    Appointment Request Received
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#221612]">
                    Thank You, {confirmedBooking.clientName}!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B5B54] max-w-md mx-auto">
                    Your appointment request has been recorded for PatienceAHB in Greensboro.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="bg-[#FAF7F2] rounded-2xl border border-[#EDE4D8] p-6 text-left max-w-lg mx-auto space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#EDE4D8]">
                    <span className="text-xs text-[#6B5B54] font-medium">Reference Code</span>
                    <span className="text-xs font-bold text-[#221612] bg-[#FFFDF9] px-2.5 py-1 rounded-md border border-[#EDE4D8]">
                      {confirmedBooking.id}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div>
                      <p className="text-[11px] text-[#6B5B54] uppercase tracking-wider font-semibold">
                        Service
                      </p>
                      <p className="font-semibold text-[#221612]">{confirmedBooking.serviceName}</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-[#6B5B54] uppercase tracking-wider font-semibold">
                        Length & Size
                      </p>
                      <p className="font-medium text-[#221612]">
                        {confirmedBooking.hairLength} • {confirmedBooking.braidSize}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] text-[#6B5B54] uppercase tracking-wider font-semibold">
                        Date
                      </p>
                      <p className="font-semibold text-[#221612]">{confirmedBooking.preferredDate}</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-[#6B5B54] uppercase tracking-wider font-semibold">
                        Arrival Time
                      </p>
                      <p className="font-semibold text-[#221612]">{confirmedBooking.preferredTime}</p>
                    </div>
                  </div>

                  {confirmedBooking.smsConsent && (
                    <div className="pt-3 border-t border-[#EDE4D8] flex items-center space-x-2 text-xs text-[#221612]">
                      <Smartphone className="w-4 h-4 text-[#B88648]" />
                      <span>
                        Automated SMS confirmation & reminder enabled for{' '}
                        <strong>{confirmedBooking.phone}</strong>.
                      </span>
                    </div>
                  )}

                  <div className="pt-2 text-[11px] text-[#6B5B54] border-t border-[#EDE4D8]">
                    📍 Salon Address: {BUSINESS_INFO.address.full}
                  </div>
                </div>

                {/* Calendar Add & Direct Call Options */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    id="add-google-calendar-btn"
                    href={createGoogleCalendarUrl(confirmedBooking)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#221612] hover:bg-[#36251E] text-[#FFFDF9] text-xs sm:text-sm font-semibold rounded-full shadow-xs transition-colors"
                  >
                    <CalendarDays className="w-4 h-4 text-[#B88648]" />
                    <span>Add to Google Calendar</span>
                  </a>

                  <a
                    id="confirmation-call-btn"
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#EDE4D8] hover:bg-[#EDE4D8]/80 text-[#221612] text-xs sm:text-sm font-semibold rounded-full transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#B88648]" />
                    <span>Call Salon: {BUSINESS_INFO.phoneDisplay}</span>
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs text-[#6B5B54] hover:text-[#221612] underline"
                  >
                    Submit another booking request
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Action Navigation Footer */}
          {currentStep < 5 && (
            <div className="bg-[#FAF7F2] border-t border-[#EDE4D8] px-6 sm:px-10 py-4 flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  id="scheduler-back-btn"
                  type="button"
                  onClick={handlePreviousStep}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-[#221612] hover:text-[#B88648] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              <button
                id="scheduler-next-btn"
                type="button"
                onClick={handleNextStep}
                className="inline-flex items-center space-x-2 px-6 sm:px-8 py-3 bg-[#221612] hover:bg-[#36251E] text-[#FFFDF9] text-xs sm:text-sm font-semibold rounded-full shadow-xs hover:shadow-md transition-all active:scale-95"
              >
                <span>{currentStep === 4 ? 'Confirm & Schedule' : 'Continue'}</span>
                <ChevronRight className="w-4 h-4 text-[#B88648]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
