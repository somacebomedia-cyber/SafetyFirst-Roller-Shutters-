import React from 'react';
import { NavPath } from '../types';

interface AboutUsViewProps {
  onNavigate: (path: NavPath) => void;
}

export const AboutUsView: React.FC<AboutUsViewProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-surface pb-20 pt-4 sm:pt-8 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12">
        {/* Header Breadcrumb */}
        <div className="mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container font-technical-code text-[11px] sm:text-xs uppercase mb-2 font-semibold">
            <span className="material-symbols-outlined text-[14px]">history_edu</span>
            <span>Est. 1989 • 378 Sydney Road, Umbilo</span>
          </div>
          <h1 className="font-headline-lg text-2xl sm:text-headline-lg uppercase text-on-surface leading-tight">
            About SafetyFirst Roller Shutters Durban
          </h1>
          <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant max-w-3xl mt-1">
            Over three and a half decades of continuous heavy metal fabrication in Umbilo. We are direct manufacturers, not distributors or catalogue agents.
          </p>
        </div>

        {/* Hero Story Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-pure-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl mb-16">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold mb-2">
              Our Durban Heritage
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface mb-4 leading-tight">
              Forged Along Sydney Road, Umbilo
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
              In 1989, master fabricator Blackie established SafetyFirst Roller Shutters in the heart of Durban’s heavy industrial district on Sydney Road. The founding mission was uncompromising: manufacture roller doors tough enough to withstand both aggressive physical break-in attempts and the punishing corrosive salt air blowing off Durban Harbour.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              While many competitors shifted to reselling thin imported kit doors, SafetyFirst remained committed to local manufacturing. We import raw galvanized steel coils and cold-roll each slat right here in Umbilo to exact millimeter tolerances.
            </p>

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100 text-xs font-technical-code">
              <div>
                <span className="text-on-surface-variant block">Factory Location:</span>
                <strong className="text-on-surface text-sm">378 Sydney Rd, Umbilo</strong>
              </div>
              <div>
                <span className="text-on-surface-variant block">Ownership:</span>
                <strong className="text-on-surface text-sm">100% Proudly South African</strong>
              </div>
              <div>
                <span className="text-on-surface-variant block">Standard:</span>
                <strong className="text-on-surface text-sm">SABS 0140 / SANS 10160</strong>
              </div>
              <div>
                <span className="text-on-surface-variant block">Accreditation:</span>
                <strong className="text-on-surface text-sm">B-BBEE Level 2 Certified</strong>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-deep-navy group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNx5YbdeXxNP6U_HEnPxiy2h0FKpNFcWmpEDn-37URnljP_fa1l6BcxIT1ia6anTX8VAk5m-OPbMecwIZ-s8H-BZYuPvRTJt9BNgIK-GpFs7cmlEFmyQSY3wnT1RNFO3SZzLQ_E4vBEZgu4otWwjXkyMWHDCm2hsGElOCyr13MA-lCTUJeY7odlTVnHiQMB0LN7Sv0sSkjNdH8dN8NkUu7gPXRhBYeGo9ZmVl_WYK0VT0KYZBouyua"
                alt="Welding artisan at Sydney Road workshop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent p-6 text-pure-white">
                <span className="text-xs font-technical-code text-badge-teal uppercase block">Direct Workshop Floor</span>
                <span className="font-headline-sm text-base uppercase">Precision TIG welding &amp; cold-roll forming bay</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Middlemen Hurt Buyers (Direct Manufacturer Advantage) */}
        <div className="bg-deep-navy text-pure-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-steel-border/20 mb-16">
          <div className="max-w-3xl mb-10">
            <span className="font-technical-code text-xs text-primary-fixed uppercase tracking-wider block mb-1">
              Direct Value Proposition
            </span>
            <h3 className="font-headline-lg text-headline-lg uppercase text-pure-white leading-tight">
              Why Dealing Directly With The Umbilo Factory Wins
            </h3>
            <p className="font-body-md text-body-md text-steel-border/80 mt-2">
              Most gate and door companies are merely sales brokers who outsource fabrication and mark up prices. Here is the SafetyFirst difference:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-700/80">
              <div className="w-10 h-10 rounded-xl bg-badge-teal/20 text-badge-teal border border-badge-teal/40 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[24px]">savings</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm uppercase text-pure-white mb-2">
                25% - 35% Cost Savings
              </h4>
              <p className="font-body-sm text-body-sm text-steel-border/80 leading-relaxed">
                By purchasing straight from the fabrication source, you avoid intermediate commission fees and retail showroom markups.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-700/80">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 border border-red-500/40 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[24px]">speed</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm uppercase text-pure-white mb-2">
                Immediate Spares Availability
              </h4>
              <p className="font-body-sm text-body-sm text-steel-border/80 leading-relaxed">
                Need a replacement bottom slat or custom torsion spring? We don’t wait 3 weeks for an overseas container; we cut and wind it on Sydney Road today.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-700/80">
              <div className="w-10 h-10 rounded-xl bg-safety-amber/20 text-safety-amber border border-safety-amber/40 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[24px]">contact_phone</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm uppercase text-pure-white mb-2">
                Direct Engineer Access
              </h4>
              <p className="font-body-sm text-body-sm text-steel-border/80 leading-relaxed">
                No script-reading call center agents. You talk directly with Blackie and experienced riggers who understand structural lintels, motor amperages, and wind dynamics.
              </p>
            </div>
          </div>
        </div>

        {/* Factory Machinery Tour Bento */}
        <div className="bg-pure-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
              Production Machinery
            </span>
            <h3 className="font-headline-lg text-headline-lg uppercase text-on-surface mt-1 mb-2">
              Inside Our 378 Sydney Road Facility
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              High-precision machinery dedicated to manufacturing certified roller shutters from raw steel coils.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-surface-container-low border border-slate-200/70">
              <span className="font-technical-code text-xs text-primary font-bold uppercase block mb-1">
                Machine Bay 01
              </span>
              <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-2">
                Multi-Stage Cold Roll Mill
              </h4>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Forms continuous interlocking curvature across 0.8mm to 1.2mm galvanised steel strips without micro-fracturing zinc coatings.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-low border border-slate-200/70">
              <span className="font-technical-code text-xs text-primary font-bold uppercase block mb-1">
                Machine Bay 02
              </span>
              <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-2">
                Torsion Spring Lathe
              </h4>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Computerized coil winding for oil-tempered spring steel wire, calibrated to counterbalance door weights up to 900kg with effortless lift.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-low border border-slate-200/70">
              <span className="font-technical-code text-xs text-primary font-bold uppercase block mb-1">
                Machine Bay 03
              </span>
              <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-2">
                Hydraulic CNC Perforator
              </h4>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Punches 2.5mm staggered vision micro-holes and rectangular Fenestra grilles for Durban’s premier shopping centres.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-low border border-slate-200/70">
              <span className="font-technical-code text-xs text-primary font-bold uppercase block mb-1">
                Machine Bay 04
              </span>
              <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-2">
                200°C Powder Bake Oven
              </h4>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Thermosetting architectural powder polymers for 1,000+ hour salt-spray durability along Durban’s sub-tropical coastline.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary-container to-red-700 text-pure-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-headline-lg text-headline-lg uppercase leading-tight">
              Visit Our Sydney Road Workshop Or Request A Survey
            </h3>
            <p className="font-body-md text-body-md text-pure-white/90 mt-1 max-w-xl">
              Meet Blackie and inspect slat samples, motor options, and color swatches in person at 378 Sydney Road, Umbilo.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-6 py-3.5 rounded-xl bg-deep-navy hover:bg-slate-900 text-pure-white font-headline-sm text-sm uppercase shadow-lg transition-all cursor-pointer"
            >
              Get Directions &amp; Contact
            </button>
            <button
              onClick={() => onNavigate('quote-and-consultation')}
              className="px-6 py-3.5 rounded-xl bg-pure-white hover:bg-slate-100 text-primary-container font-headline-sm text-sm uppercase shadow-lg transition-all cursor-pointer"
            >
              Request Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
