import React from 'react';
import { NavPath } from '../types';

interface HomeViewProps {
  onNavigate: (path: NavPath) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-deep-navy text-pure-white -mt-[100px] sm:-mt-[116px] pt-[124px] sm:pt-[156px] pb-14 sm:pb-24 lg:pb-32">
        {/* Atmospheric Logistics Bay Background */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCIev6kohM6zLT2zP0XayId7bOOSJiHu_gt59ImMovJr_6WUiSRhepIhQnRjWt6UkmvWfME_kz7PZ1iqBeOGVJMXQ3-eLoATtFlRdupudOJWntuDaZcBfEnSuEedT9p8bej4Fmdt3oxlIvQ3OC2o7_bNOYXKIRgd7B1aJk_So_moZNgATwpSzJ3nr8_X3w8A6cZm2z-xOEyrpG12PVQnqyaYGx6Zxyd8y2q97W-v-LRCUrfKRrhZBjc')`,
          }}
        />
        {/* Precision Blueprint Grid Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/80 via-deep-navy/90 to-deep-navy pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-container/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-primary-container/30 border border-primary-fixed/30 backdrop-blur-sm text-primary-fixed mb-4 sm:mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[13px] sm:text-[15px] text-badge-teal">verified</span>
              <span className="font-technical-code text-[11px] sm:text-technical-code uppercase tracking-wider">
                Umbilo Direct Fabrication • Durban Metro
              </span>
            </div>
            
            <h1 className="font-display-xl text-3xl sm:text-5xl lg:text-display-xl tracking-tight uppercase leading-[0.95] text-pure-white mb-4 sm:mb-6">
              Built For Security.<br />
              <span className="text-primary-fixed">Engineered To Last.</span>
            </h1>
            
            <p className="font-body-lg text-sm sm:text-base lg:text-body-lg text-steel-border/90 mb-6 sm:mb-10 max-w-2xl leading-relaxed">
              KwaZulu-Natal manufacturers of industrial, commercial, and architectural roller shutter doors — designed, built, and supported directly from our Umbilo workshop to withstand high-salinity coastal wind loads.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('shutter-simulator')}
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-primary-container to-red-700 hover:from-red-700 hover:to-cobalt-hover text-pure-white font-headline-sm text-sm sm:text-headline-sm uppercase px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-red-600/30 hover:shadow-red-600/50 border-t border-white/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">tune</span>
                <span>Launch Shutter Simulator</span>
              </button>

              <button
                onClick={() => onNavigate('industrial-shutters')}
                className="group inline-flex items-center justify-center gap-2 bg-pure-white/10 hover:bg-pure-white/15 text-pure-white font-headline-sm text-sm sm:text-headline-sm uppercase px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-white/20 backdrop-blur-md hover:border-white/40 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore Doors</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
              
              <a
                href="tel:+27794963443"
                className="group inline-flex items-center justify-center gap-2 bg-badge-teal/20 hover:bg-badge-teal/30 text-pure-white font-headline-sm text-xs sm:text-headline-sm uppercase px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl border border-badge-teal/40 backdrop-blur-md transition-all hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined text-[16px] text-safety-amber group-hover:rotate-12 transition-transform">
                  call
                </span>
                <span>079 496 3443</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4-COLUMN METRIC BAR */}
      <section className="w-full bg-deep-navy text-pure-white relative z-10 border-t border-b border-steel-border/15 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-5 sm:py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div className="flex flex-col items-center sm:items-start p-1 sm:p-2 text-center sm:text-left">
              <div className="flex items-baseline gap-1">
                <span className="font-metric-counter text-2xl sm:text-4xl lg:text-metric-counter text-pure-white">35+</span>
                <span className="text-primary-fixed font-headline-md text-base sm:text-headline-md">Years</span>
              </div>
              <span className="font-label-sm text-[10px] sm:text-label-sm uppercase tracking-wider text-steel-border/70 mt-0.5">
                Master KZN Engineering
              </span>
            </div>

            <div className="flex flex-col items-center sm:items-start p-1 sm:p-2 text-center sm:text-left">
              <div className="flex items-baseline gap-1">
                <span className="font-metric-counter text-2xl sm:text-4xl lg:text-metric-counter text-pure-white">1,200+</span>
              </div>
              <span className="font-label-sm text-[10px] sm:text-label-sm uppercase tracking-wider text-steel-border/70 mt-0.5">
                Durban Projects Installed
              </span>
            </div>

            <div className="flex flex-col items-center sm:items-start p-1 sm:p-2 text-center sm:text-left">
              <div className="flex items-baseline gap-1">
                <span className="font-metric-counter text-2xl sm:text-4xl lg:text-metric-counter text-safety-amber">&lt; 45m</span>
              </div>
              <span className="font-label-sm text-[10px] sm:text-label-sm uppercase tracking-wider text-steel-border/70 mt-0.5">
                Rapid Emergency Callout ETA
              </span>
            </div>

            <div className="flex flex-col items-center sm:items-start p-1 sm:p-2 text-center sm:text-left">
              <div className="flex items-baseline gap-1">
                <span className="font-metric-counter text-2xl sm:text-4xl lg:text-metric-counter text-badge-teal">100%</span>
              </div>
              <span className="font-label-sm text-[10px] sm:text-label-sm uppercase tracking-wider text-steel-border/70 mt-0.5">
                SABS 0140 &amp; Marine Rated
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE: A MANUFACTURER, NOT A MIDDLEMAN */}
      <section className="relative w-full bg-pure-white py-20 lg:py-28 overflow-hidden">
        {/* Subtle diagonal micro-slat watermark pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #0037b0 0, #0037b0 1px, transparent 0, transparent 16px)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Industrial Workshop Photography */}
            <div className="lg:col-span-6 relative">
              <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(11,28,59,0.14)] border border-slate-200/80 bg-deep-navy aspect-[4/3] group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt="An artisan welder in a heavy industrial safety apron operating specialized TIG welding torch on thick corrugated steel roller door slat components in SafetyFirst's Sydney Road factory."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNx5YbdeXxNP6U_HEnPxiy2h0FKpNFcWmpEDn-37URnljP_fa1l6BcxIT1ia6anTX8VAk5m-OPbMecwIZ-s8H-BZYuPvRTJt9BNgIK-GpFs7cmlEFmyQSY3wnT1RNFO3SZzLQ_E4vBEZgu4otWwjXkyMWHDCm2hsGElOCyr13MA-lCTUJeY7odlTVnHiQMB0LN7Sv0sSkjNdH8dN8NkUu7gPXRhBYeGo9ZmVl_WYK0VT0KYZBouyua"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent p-7 text-pure-white">
                  <span className="inline-flex items-center gap-1.5 text-xs font-technical-code text-badge-teal uppercase mb-1">
                    <span className="material-symbols-outlined text-[14px]">factory</span> 378 Sydney Road, Umbilo
                  </span>
                  <p className="font-headline-sm text-headline-sm tracking-wide uppercase">
                    Durban Direct Precision Cold-Rolling Bay
                  </p>
                </div>
              </div>
              {/* Decorative Stamp Float */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary-container to-red-700 text-pure-white p-5 rounded-2xl shadow-[0_12px_28px_rgba(220,38,38,0.35)] border border-white/20 hidden sm:flex flex-col items-center justify-center text-center backdrop-blur-sm">
                <span className="font-headline-md text-headline-md leading-none">NO AGENTS</span>
                <span className="font-technical-code text-[10px] tracking-widest uppercase opacity-90 mt-1">
                  Direct Factory Price
                </span>
              </div>
            </div>

            {/* Right: Content & 4 Value Pillars */}
            <div className="lg:col-span-6 flex flex-col">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold mb-2">
                Who We Are
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface mb-4 leading-tight">
                A Manufacturer, Not a Middleman
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                SafetyFirst Roller Shutters is a dedicated KwaZulu-Natal manufacturing powerhouse. By controlling every single phase — from raw high-tensile steel slitting and spring coil engineering to on-site rigging — we eliminate third-party markups and deliver certified security doors engineered to outlast Durban's relentless coastal humidity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                <div className="p-5 rounded-2xl bg-surface-container-low/70 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(220,38,38,0.08)] hover:-translate-y-1.5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-50 to-surface-container border border-red-200/60 flex items-center justify-center text-primary mb-3.5 shadow-sm">
                    <span className="material-symbols-outlined text-[22px]">precision_manufacturing</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-1.5">
                    Local Manufacturing
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Doors built to exact millimeter specifications in our Umbilo workshop with high-grade components.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-surface-container-low/70 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(220,38,38,0.08)] hover:-translate-y-1.5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-50 to-surface-container border border-red-200/60 flex items-center justify-center text-primary mb-3.5 shadow-sm">
                    <span className="material-symbols-outlined text-[22px]">water_drop</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-1.5">
                    Coastal Engineering
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Passivated zinc coating and extruded marine aluminium resisting corrosive sub-tropical salt fog.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-surface-container-low/70 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(220,38,38,0.08)] hover:-translate-y-1.5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-50 to-surface-container border border-red-200/60 flex items-center justify-center text-primary mb-3.5 shadow-sm">
                    <span className="material-symbols-outlined text-[22px]">verified_user</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-1.5">
                    Quality Assured
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Continuous compliance with SABS 0140 standards and high-load safety braking counterbalances.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-surface-container-low/70 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(220,38,38,0.08)] hover:-translate-y-1.5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-50 to-surface-container border border-red-200/60 flex items-center justify-center text-primary mb-3.5 shadow-sm">
                    <span className="material-symbols-outlined text-[22px]">build_circle</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-1.5">
                    24/7 Repairs
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Dedicated rapid response technicians on 24-hour standby for spring snaps, motor failure, and derailments.
                  </p>
                </div>
              </div>

              <div>
                <button
                  onClick={() => onNavigate('about-us')}
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-primary-container to-red-700 hover:from-red-700 hover:to-cobalt-hover text-pure-white font-headline-sm text-headline-sm uppercase px-7 py-3.5 rounded-xl shadow-lg shadow-red-600/25 hover:shadow-red-600/40 border-t border-white/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>More About SafetyFirst Umbilo</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR RANGE: DOORS FOR EVERY APPLICATION */}
      <section className="relative w-full bg-slate-surface py-20 lg:py-28 overflow-hidden">
        {/* Engineering dot-matrix pattern background with soft edge fading */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `radial-gradient(#2563eb 1.2px, transparent 1.2px)`,
            backgroundSize: `24px 24px`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
              Our Range
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface mt-1 mb-3">
              Doors For Every Durban Application
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              From heavy-duty high-cycle logistics shutters to architectural shopfront grilles, every SafetyFirst door is custom-engineered and installed to perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-pure-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_22px_45px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col group">
              <div className="relative aspect-[16/11] bg-surface-container overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  alt="Solid galvanized steel roller shutter door fitted at a heavy distribution depot loading dock in Durban Harbour."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYYB2T58UQ6Fh5tRHTIn-dT8qrpodn8mnzHE_s014UWF_5cyb_LSIAkkLSW8jcFNIkBb7V9ZEDwI8W-r9twdE1-Tj6jLMrIOkCysZAWE9EWmteglxqgWFNg641E7Kd270SztSraSBHKf31gl3CIuaj8dRI4hBJQdzKnWvozcACX58SzSzsjiJ-LO8xN-AEEskOFn6AnbWiwQuHrK7e2HtKOLdRKetoZ1dEWDH7eNjR6mNBK9MPITYW"
                />
                <span className="absolute top-3 left-3 bg-deep-navy/95 backdrop-blur-sm text-pure-white font-technical-code text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  HEAVY INDUSTRIAL
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold mb-1">
                  Industrial &amp; Logistics
                </span>
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-2">
                  Solid Steel Industrial Door
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">
                  Engineered with 0.8mm to 1.2mm galvanised cold-rolled steel slats for distribution centers, manufacturing bays, and harbor bond stores.
                </p>
                <button
                  onClick={() => onNavigate('industrial-shutters')}
                  className="group/btn inline-flex items-center gap-1.5 font-label-md text-label-md uppercase text-primary font-bold hover:text-cobalt-hover pt-1 text-left cursor-pointer"
                >
                  <span>View Product</span>
                  <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1.5 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-pure-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_22px_45px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col group">
              <div className="relative aspect-[16/11] bg-surface-container overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  alt="Perforated micro-hole roller shutter door installed on a storefront showing back-lit retail merchandise."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0BcGgd2nF2WxIAXdPdZaySu-5xrgc2JBG9VYnYnzgphLcTEXN2Sco0OmFn_XPXw_AvQuZcK0VN9eGKQQbZpx2pJGf7IsBk_oDVIfVJYPbEFl9rY_mBDBZh1W9J0QXdMK0NDNUeRGyOYbR8nGXE8oIzpTXD5QBTtlY1KDUmMmjEKbDYW3Q6KcDLmP1aSiQYGtp8rFMpCD8HpXEe7a5WuBNZvH32sZzbg6wbetkFGzLWtwWULajt27H"
                />
                <span className="absolute top-3 left-3 bg-primary-container/95 backdrop-blur-sm text-pure-white font-technical-code text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  VENTILATED / VISUAL
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold mb-1">
                  Commercial &amp; Retail
                </span>
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-2">
                  Perforated Vision Slat Door
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">
                  Precision 2.5mm micro-punched openings that maintain 45% natural airflow and after-hours merchandise visibility while denying unauthorized reach-through.
                </p>
                <button
                  onClick={() => onNavigate('commercial-domestic-shutters')}
                  className="group/btn inline-flex items-center gap-1.5 font-label-md text-label-md uppercase text-primary font-bold hover:text-cobalt-hover pt-1 text-left cursor-pointer"
                >
                  <span>View Product</span>
                  <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1.5 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-pure-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_22px_45px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col group">
              <div className="relative aspect-[16/11] bg-surface-container overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  alt="Fenestra commercial security shutter with clean rectangular punched openings on a modern mall store entrance."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlT5WMHygBmTeDHtI8PBqZ3DC8aqCUp7tY7a_E2yQ3XCeRz2y7FGUYC8hGpjIn1Ymz0Nhxri7-ykrfKICzTdXCri283bKWR_0vgHJndD9gqjKcqTni7BZRety3zdDbLjO-kLKQXC12Usicj8dPmMvG4A-29b5lQUjX2h8nmqHH-zVrboYs4vN2Y4UFm60nvX8J0VEYMiXeWFUqmjeqIddu0upuxRp356iPurQCowOQEDixWBZQ8tX4"
                />
                <span className="absolute top-3 left-3 bg-secondary/95 backdrop-blur-sm text-pure-white font-technical-code text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  SHOPFRONT GRILLE
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold mb-1">
                  Malls &amp; Showrooms
                </span>
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-2">
                  Fenestra Rectangular Grille
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">
                  Clean rectangular apertures with optional clear polycarbonate inserts, designed to meet strict Durban shopping centre aesthetic criteria.
                </p>
                <button
                  onClick={() => onNavigate('commercial-domestic-shutters')}
                  className="group/btn inline-flex items-center gap-1.5 font-label-md text-label-md uppercase text-primary font-bold hover:text-cobalt-hover pt-1 text-left cursor-pointer"
                >
                  <span>View Product</span>
                  <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1.5 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-pure-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_22px_45px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col group">
              <div className="relative aspect-[16/11] bg-surface-container overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  alt="Heavy industrial shutter motorized automation gear system with barrel motor, chain hoist backup, and smart battery controller."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnqrRSMrP--yvuVOPQI1DG3QJ3z_dKCD4QUCrhdl8AI8NaW3SNPlWl1CHUQpoOd8ki2Q6CdtONyhYP6Cn3LY3PBaal9TnCKHVXHPb51menQPI48bPWv_xFyuWzfm8-jbfGWKTMHVi9vHnZab5hCP2unDfTmRaHNwytICY17kqlrPOKjq2Sjuo_todbaY1eXHOTc7KkfYxsDTRfyZW3Ns_8HaMy3xEYgl7rqapP3UCKXbyiNp0ijQ1R"
                />
                <span className="absolute top-3 left-3 bg-badge-teal/95 backdrop-blur-sm text-pure-white font-technical-code text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  SMART AUTOMATION
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold mb-1">
                  Motors &amp; Automation
                </span>
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-2">
                  Motorised UPS Backup Systems
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">
                  High-torque flange motors and tubular operators integrated with loadshedding battery banks and manual override chain mechanisms.
                </p>
                <button
                  onClick={() => onNavigate('services-and-24h-repairs')}
                  className="group/btn inline-flex items-center gap-1.5 font-label-md text-label-md uppercase text-primary font-bold hover:text-cobalt-hover pt-1 text-left cursor-pointer"
                >
                  <span>View Product</span>
                  <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1.5 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('industrial-shutters')}
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-primary-container to-red-700 hover:from-red-700 hover:to-cobalt-hover text-pure-white font-headline-sm text-headline-sm uppercase px-8 py-3.5 rounded-xl shadow-lg shadow-red-600/25 hover:shadow-red-600/40 border-t border-white/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>View All Shutter Specifications</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SAFETYFIRST */}
      <section className="relative w-full bg-pure-white py-20 lg:py-28 overflow-hidden">
        {/* Subtle cross-grid watermark */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#dc2626 1px, transparent 1px), linear-gradient(90deg, #dc2626 1px, transparent 1px)`,
            backgroundSize: `32px 32px`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Technical Arguments */}
            <div className="lg:col-span-6">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold mb-2">
                Local Engineering Leadership
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface mb-4 leading-tight">
                Why Choose SafetyFirst Roller Shutters?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                Founded with master engineering roots on Sydney Road, SafetyFirst has engineered security barriers for Durban’s harshest marine conditions, container terminals, and retail properties. Our localized experience ensures you receive custom, uncompromised safety.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3.5 p-3 rounded-2xl transition-colors hover:bg-slate-50">
                  <div className="w-8 h-8 rounded-xl bg-badge-teal/10 text-badge-teal flex items-center justify-center shrink-0 shadow-sm mt-0.5 border border-badge-teal/20">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                  </div>
                  <div>
                    <strong className="font-label-md text-label-md uppercase text-on-surface block">
                      SABS 0140 &amp; Coastal Wind-Rated Construction
                    </strong>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Built to handle intense south-westerly gales along the KZN coastline without slat blowouts.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5 p-3 rounded-2xl transition-colors hover:bg-slate-50">
                  <div className="w-8 h-8 rounded-xl bg-badge-teal/10 text-badge-teal flex items-center justify-center shrink-0 shadow-sm mt-0.5 border border-badge-teal/20">
                    <span className="material-symbols-outlined text-[18px]">engineering</span>
                  </div>
                  <div>
                    <strong className="font-label-md text-label-md uppercase text-on-surface block">
                      Direct Umbilo Workshop Fabrication
                    </strong>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      No middleman fees or import delays. You deal straight with Blackie and our fabrication engineers.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5 p-3 rounded-2xl transition-colors hover:bg-slate-50">
                  <div className="w-8 h-8 rounded-xl bg-badge-teal/10 text-badge-teal flex items-center justify-center shrink-0 shadow-sm mt-0.5 border border-badge-teal/20">
                    <span className="material-symbols-outlined text-[18px]">timer</span>
                  </div>
                  <div>
                    <strong className="font-label-md text-label-md uppercase text-on-surface block">
                      Fastest Lead Times in eThekwini
                    </strong>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Rapid precision turnaround from on-site survey and laser-measurement to prompt delivery.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5 p-3 rounded-2xl transition-colors hover:bg-slate-50">
                  <div className="w-8 h-8 rounded-xl bg-badge-teal/10 text-badge-teal flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-badge-teal/20">
                    <span className="material-symbols-outlined text-[18px]">support_agent</span>
                  </div>
                  <div>
                    <strong className="font-label-md text-label-md uppercase text-on-surface block">
                      24/7 Rapid Emergency Breakdown Support
                    </strong>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Emergency field vehicles equipped with industrial coil springs, slats, and motors standing by.
                    </span>
                  </div>
                </li>
              </ul>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('about-us')}
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-primary-container to-red-700 hover:from-red-700 hover:to-cobalt-hover text-pure-white font-headline-sm text-headline-sm uppercase px-7 py-3.5 rounded-xl shadow-lg shadow-red-600/25 hover:shadow-red-600/40 border-t border-white/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Learn More About Us</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>

                <a
                  href="tel:+27794963443"
                  className="group inline-flex items-center gap-2 text-on-surface hover:text-primary font-headline-sm text-headline-sm uppercase px-5 py-3 rounded-xl border border-slate-200 hover:border-red-200 hover:bg-red-50/40 transition-all hover:-translate-y-0.5"
                >
                  <span className="material-symbols-outlined text-[20px] text-badge-teal group-hover:scale-110 transition-transform">
                    call
                  </span>
                  <span>079 496 3443</span>
                </a>
              </div>
            </div>

            {/* Right: Bento Craftsmanship Image Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-3xl overflow-hidden aspect-[16/9] shadow-[0_16px_36px_rgba(11,28,59,0.12)] border border-slate-200/80 bg-deep-navy group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt="Durban engineering machine operator assembling precision counterbalance coil springs inside a cylindrical heavy steel drum for industrial doors at the Umbilo factory."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNhIvNIY0aog_SlWkRhp8el0PCmlnJJaTyHUQ_cWJGIalrJIfRP-TvOCLYEznH_J5a3l-Py2Ft_DjcoPzNqs9msg0JUsCjLlNK49Eh_yKUfKx-MaQ6JPlZMI1110mtz8nUOa8NKMjBAdj_O4TxvokLatlZ1KrxqiwyoK_PLmnPrmtNGlmLW9oCyvK-a5Z306AS53GWhevlOux-SfNBFEB7FCbtAZdntcHNMigMHMD0NjgLq8QYYkrv"
                />
              </div>

              <div className="rounded-3xl overflow-hidden aspect-square shadow-[0_12px_28px_rgba(11,28,59,0.1)] border border-slate-200/80 bg-deep-navy group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt="Technician wearing safety goggles grinding heavy-duty steel lock bracket guides for high-security commercial roller doors."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK2igjUiVgJTFce14Y--zWUr7LkdQ0-uu0xiA5JXCvwoT87HVSzBLHOR_4k1RoVxG9SlIZCBGn38zMK2hYAoRMjruUZc5JwL7VQGWglWJMRRI0zj3R1TkGc25APwTOqx5rbFPPFuzo1hxweHpHl8WQukGg_dVb9HYHauDBNtrZ_crXT1Jj5ICGkW1dHe5NmV-w7hwXOHC0jw5IHDy2QA3rZ5grOMfbVzc3-CixgAMqNuvOfsJNmiNB"
                />
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-primary-container to-red-700 text-pure-white p-6 flex flex-col justify-center items-center text-center shadow-[0_16px_36px_rgba(220,38,38,0.25)] border border-white/20 hover:-translate-y-1 transition-transform">
                <span className="material-symbols-outlined text-[38px] text-primary-fixed mb-2 drop-shadow-sm">
                  shield_lock
                </span>
                <span className="font-headline-md text-headline-md uppercase tracking-tight">
                  TRUSTED SINCE 1989
                </span>
                <p className="font-technical-code text-technical-code opacity-90 mt-1">
                  SABS ISO 9001 COMPLIANT STANDARDS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED ACROSS KWAZULU-NATAL INDUSTRY */}
      <section className="relative w-full bg-slate-surface py-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(30deg, #0b1c30 12%, transparent 12.5%, transparent 87%, #0b1c30 87.5%, #0b1c30), linear-gradient(150deg, #0b1c30 12%, transparent 12.5%, transparent 87%, #0b1c30 87.5%, #0b1c30), linear-gradient(30deg, #0b1c30 12%, transparent 12.5%, transparent 87%, #0b1c30 87.5%, #0b1c30), linear-gradient(150deg, #0b1c30 12%, transparent 12.5%, transparent 87%, #0b1c30 87.5%, #0b1c30), linear-gradient(60deg, #0b1c30 25%, transparent 25.5%, transparent 75%, #0b1c30 75%, #0b1c30), linear-gradient(60deg, #0b1c30 25%, transparent 25.5%, transparent 75%, #0b1c30 75%, #0b1c30)`,
            backgroundSize: `40px 70px`,
            backgroundPosition: `0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-2">
            Industrial Validation
          </span>
          <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-10">
            Trusted Across KwaZulu-Natal Logistics, Ports &amp; Retail
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-pure-white p-5 rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(29,78,216,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-[26px] text-secondary">directions_boat</span>
              </div>
              <span className="font-headline-sm text-[16px] uppercase text-on-surface font-bold">Port Logistics</span>
              <span className="text-[11px] font-technical-code text-on-surface-variant">Durban Harbour Hub</span>
            </div>

            <div className="bg-pure-white p-5 rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(29,78,216,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-[26px] text-secondary">warehouse</span>
              </div>
              <span className="font-headline-sm text-[16px] uppercase text-on-surface font-bold">Mobeni Heavy</span>
              <span className="text-[11px] font-technical-code text-on-surface-variant">Manufacturing Basin</span>
            </div>

            <div className="bg-pure-white p-5 rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(29,78,216,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-[26px] text-secondary">storefront</span>
              </div>
              <span className="font-headline-sm text-[16px] uppercase text-on-surface font-bold">Umhlanga Mall</span>
              <span className="text-[11px] font-technical-code text-on-surface-variant">Retail Center Shutter</span>
            </div>

            <div className="bg-pure-white p-5 rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(29,78,216,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-[26px] text-secondary">local_shipping</span>
              </div>
              <span className="font-headline-sm text-[16px] uppercase text-on-surface font-bold">Pinetown Freight</span>
              <span className="text-[11px] font-technical-code text-on-surface-variant">Distribution Fleet</span>
            </div>

            <div className="bg-pure-white p-5 rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(29,78,216,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-[26px] text-secondary">domain</span>
              </div>
              <span className="font-headline-sm text-[16px] uppercase text-on-surface font-bold">Cornubia Node</span>
              <span className="text-[11px] font-technical-code text-on-surface-variant">Industrial Logistics</span>
            </div>

            <div className="bg-pure-white p-5 rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(29,78,216,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-[26px] text-secondary">cottage</span>
              </div>
              <span className="font-headline-sm text-[16px] uppercase text-on-surface font-bold">Ballito Coastal</span>
              <span className="text-[11px] font-technical-code text-on-surface-variant">Marine Estates</span>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS SECTION */}
      <section className="relative w-full bg-pure-white py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#0037b0 1px, transparent 1px)`,
            backgroundSize: `20px 20px`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-badge-teal mb-3">
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">
                  Verified Google Reviews
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface leading-tight">
                What Durban Clients Say
              </h2>
            </div>

            <div className="flex items-center gap-2 mt-4 md:mt-0 px-4 py-2 rounded-2xl bg-surface-container-low border border-slate-200/70 shadow-sm">
              <span className="font-headline-md text-headline-md text-on-surface">5.0</span>
              <div className="flex text-safety-amber">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
              <span className="font-technical-code text-technical-code text-on-surface-variant ml-1">
                (180+ Reviews)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="p-7 rounded-3xl bg-pure-white border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(29,78,216,0.08)] hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-between">
              <div>
                <div className="flex text-safety-amber mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="material-symbols-outlined text-[19px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface italic mb-6 leading-relaxed">
                  "We had a major truck collision bend the loading bay tracks at our Jacobs warehouse at 04:30 AM. Blackie dispatched an emergency crew who cut out the damaged slats, replaced the runners, and had the bay operational before our 08:00 AM freight dispatch."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-container to-red-700 text-pure-white flex items-center justify-center font-bold shadow-sm">
                  DS
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface font-bold leading-tight">
                    Dylan Schoeman
                  </h4>
                  <span className="font-technical-code text-[11px] text-on-surface-variant">
                    Operations Director, Bay Freight KZN
                  </span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="p-7 rounded-3xl bg-pure-white border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(29,78,216,0.08)] hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-between">
              <div>
                <div className="flex text-safety-amber mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="material-symbols-outlined text-[19px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface italic mb-6 leading-relaxed">
                  "Manufactured custom aluminium perforated shutters for our beachfront Umhlanga cafe. The salt spray would corrode normal doors in months, but SafetyFirst's marine powder-coated slats still look brand new after three severe storm seasons."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-deep-navy to-slate-800 text-pure-white flex items-center justify-center font-bold shadow-sm">
                  JW
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface font-bold leading-tight">
                    Jackie Williams
                  </h4>
                  <span className="font-technical-code text-[11px] text-on-surface-variant">
                    The Promenade Bistro, Umhlanga
                  </span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="p-7 rounded-3xl bg-pure-white border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(29,78,216,0.08)] hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-between">
              <div>
                <div className="flex text-safety-amber mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="material-symbols-outlined text-[19px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface italic mb-6 leading-relaxed">
                  "Direct manufacturer pricing without annoying sales intermediaries. Measured on Monday, fabricated by Friday, and bolted into our Mobeni factory over the weekend without disrupting assembly line production."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-badge-teal to-teal-700 text-pure-white flex items-center justify-center font-bold shadow-sm">
                  KP
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface font-bold leading-tight">
                    Keaton du Plooy
                  </h4>
                  <span className="font-technical-code text-[11px] text-on-surface-variant">
                    Facility Manager, Durban Plastics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SHUTTER TESTING CALLOUT */}
      <section className="w-full bg-deep-navy text-pure-white py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-container/50 via-deep-navy/90 to-deep-navy p-8 lg:p-12 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_24px_60px_rgba(0,0,0,0.35)] border border-primary-container/30">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-safety-amber/20 border border-safety-amber/30 text-safety-amber font-technical-code text-[11px] font-bold uppercase mb-3.5 backdrop-blur-sm">
                <span className="material-symbols-outlined text-[16px]">tune</span> Online Engineering Tool
              </div>
              <h3 className="font-headline-lg text-headline-lg uppercase text-pure-white leading-tight mb-2">
                Try Our Interactive Shutter Simulator
              </h3>
              <p className="font-body-md text-body-md text-steel-border/80">
                Configure custom widths, heights, slat thickness, motor speeds, and test virtual open/close resistance against simulated Durban high winds directly in your browser.
              </p>
            </div>
            <button
              onClick={() => onNavigate('shutter-simulator')}
              className="group inline-flex items-center gap-2.5 bg-pure-white hover:bg-slate-50 text-deep-navy font-headline-sm text-headline-sm uppercase px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all shrink-0 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] border border-white relative z-10 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px] text-primary group-hover:scale-110 transition-transform">
                play_arrow
              </span>
              <span>Launch Shutter Simulator</span>
            </button>
          </div>
        </div>
      </section>

      {/* CALL-TO-ACTION BANNER */}
      <section className="relative w-full bg-gradient-to-r from-primary-container via-red-700 to-primary-container text-pure-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 20px)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="font-technical-code text-technical-code uppercase tracking-widest text-primary-fixed block mb-1">
                Free Durban On-Site Survey
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase text-pure-white leading-tight">
                Need Help Choosing The Right Door?
              </h2>
              <p className="font-body-md text-body-md text-pure-white/90 max-w-xl mt-1 leading-relaxed">
                Our Umbilo workshop specialists can inspect, measure, and calculate the exact security profile for your commercial, logistics, or domestic property.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('quote-and-consultation')}
                className="group inline-flex items-center justify-center bg-deep-navy hover:bg-inverse-surface text-pure-white font-headline-sm text-headline-sm uppercase px-8 py-3.5 rounded-xl shadow-lg border border-steel-border/20 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
              >
                <span>Request Free Consultation</span>
              </button>
              <a
                href="tel:+27794963443"
                className="group inline-flex items-center justify-center gap-2 bg-pure-white text-primary-container hover:bg-slate-50 font-headline-sm text-headline-sm uppercase px-7 py-3.5 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-[20px] group-hover:rotate-12 transition-transform">
                  phone_in_talk
                </span>
                <span>Call 079 496 3443</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
