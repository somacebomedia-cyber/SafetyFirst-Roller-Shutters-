import React, { useState } from 'react';
import { NavPath, ShutterConfig } from '../types';

interface IndustrialShuttersViewProps {
  onNavigate: (path: NavPath) => void;
  onPreconfigureQuote: (config: Partial<ShutterConfig>) => void;
}

export const IndustrialShuttersView: React.FC<IndustrialShuttersViewProps> = ({
  onNavigate,
  onPreconfigureQuote,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<string>('solid-heavy');

  const products = [
    {
      id: 'solid-heavy',
      title: 'Heavy-Duty Solid Steel Slat Door',
      badge: 'FLAGSHIP HEAVY INDUSTRIAL',
      gaugeRange: '0.8mm - 1.2mm Cold-Rolled Galvanised',
      maxSpan: 'Up to 9.0m Width × 8.0m Height',
      windRating: 'SABS 0140 Class 4 (Gale Wind Rated)',
      description:
        'Our core Durban harbor workhorse. Interlocking 75mm curved or flat slats cold-formed from high-tensile galvanised steel coils in our Umbilo factory. Fitted with heavy-duty end locks to prevent slat displacement under high wind pressure.',
      applications: [
        'Harbor bonded warehouses & container terminals',
        'Distribution logistics parks & cross-docking bays',
        'Manufacturing plants & heavy vehicle workshops',
        'Sugar terminals and coastal chemical storage',
      ],
      features: [
        'Continuous interlocking cold-rolled steel slats',
        'Cast iron or steel wind-lock end clips',
        'Heavy 75mm or 100mm structural channel guides',
        'Bottom inverted T-bar with EPDM weather seal',
        'High-cycle torsion springs rated for 25,000+ operations',
      ],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYYB2T58UQ6Fh5tRHTIn-dT8qrpodn8mnzHE_s014UWF_5cyb_LSIAkkLSW8jcFNIkBb7V9ZEDwI8W-r9twdE1-Tj6jLMrIOkCysZAWE9EWmteglxqgWFNg641E7Kd270SztSraSBHKf31gl3CIuaj8dRI4hBJQdzKnWvozcACX58SzSzsjiJ-LO8xN-AEEskOFn6AnbWiwQuHrK7e2HtKOLdRKetoZ1dEWDH7eNjR6mNBK9MPITYW',
    },
    {
      id: 'high-cycle-logistics',
      title: 'High-Cycle Logistics Bay Doors',
      badge: 'AUTOMATED FLEET ACCESS',
      gaugeRange: '1.0mm Galvanised / Marine Alloy',
      maxSpan: 'Up to 7.5m Width × 6.5m Height',
      windRating: 'SABS 0140 Class 3 / 120 km/h',
      description:
        'Engineered for 24/7 continuous duty loading bays handling hundreds of truck turnarounds per day. Features precision ball-bearing overhead drum assemblies, high-speed 3-phase flange motors, and automatic safety light curtains.',
      applications: [
        'FMCG distribution hubs (Mobeni, Prospecton, Cornubia)',
        'Cold chain logistics loading docks',
        'Courier and express parcel depots',
        'Airport airfreight sorting hangars',
      ],
      features: [
        'High-torque industrial flange motor with failsafe brake',
        'Emergency hand-chain override for grid power loss',
        'Infrared safety photo-beams & sensing bottom edge',
        'Self-lubricating heavy-duty barrel bearing mounts',
        'Programmable PLC logic with dock leveler interlocking',
      ],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnqrRSMrP--yvuVOPQI1DG3QJ3z_dKCD4QUCrhdl8AI8NaW3SNPlWl1CHUQpoOd8ki2Q6CdtONyhYP6Cn3LY3PBaal9TnCKHVXHPb51menQPI48bPWv_xFyuWzfm8-jbfGWKTMHVi9vHnZab5hCP2unDfTmRaHNwytICY17kqlrPOKjq2Sjuo_todbaY1eXHOTc7KkfYxsDTRfyZW3Ns_8HaMy3xEYgl7rqapP3UCKXbyiNp0ijQ1R',
    },
    {
      id: 'marine-anti-corrosion',
      title: 'Coastal Marine Galvanised & Passivated',
      badge: 'SALINITY & CORROSION SHIELD',
      gaugeRange: 'Z275 Heavy Zinc / Marine Powder Coat',
      maxSpan: 'Up to 8.0m Width × 7.0m Height',
      windRating: '140 km/h Coastal Gale Resistance',
      description:
        'Durban’s sub-tropical maritime atmosphere eats standard mild steel for breakfast. SafetyFirst’s Coastal Marine Range incorporates Z275 hot-dipped galvanised steel, chemical passivation, and 80-micron architectural thermoset powder coating.',
      applications: [
        'Durban Point Waterfront & harbour frontage',
        'Maydon Wharf and Bluff maritime zones',
        'Seafood processing and cold stores',
        'Coastal beachfront resorts and marinas',
      ],
      features: [
        'Z275 heavy zinc continuous galvanic protection',
        'Stainless steel fasteners and lock components',
        'Marine-grade polyester powder coating baked at 200°C',
        'Corrosion-inhibiting polymer guide channel liners',
        'Treated internal counterbalance springs',
      ],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNx5YbdeXxNP6U_HEnPxiy2h0FKpNFcWmpEDn-37URnljP_fa1l6BcxIT1ia6anTX8VAk5m-OPbMecwIZ-s8H-BZYuPvRTJt9BNgIK-GpFs7cmlEFmyQSY3wnT1RNFO3SZzLQ_E4vBEZgu4otWwjXkyMWHDCm2hsGElOCyr13MA-lCTUJeY7odlTVnHiQMB0LN7Sv0sSkjNdH8dN8NkUu7gPXRhBYeGo9ZmVl_WYK0VT0KYZBouyua',
    },
  ];

  const current = products.find((p) => p.id === selectedProduct) || products[0];

  const handleConfigureInSimulator = (productType: string) => {
    onPreconfigureQuote({
      doorStyle: 'roller',
      material: productType === 'marine-anti-corrosion' ? 'aluminium' : 'galvanised-steel',
      environment: 'industrial',
      slatType: productType === 'marine-anti-corrosion' ? 'aluminium' : 'solid',
      gauge: productType === 'solid-heavy' ? '1.2mm' : '1.0mm',
      windLocks: true,
      operation: 'motor-flange',
    });
    onNavigate('shutter-simulator');
  };

  const handleRequestQuote = (productType: string) => {
    onPreconfigureQuote({
      doorStyle: 'roller',
      material: productType === 'marine-anti-corrosion' ? 'aluminium' : 'galvanised-steel',
      environment: 'industrial',
      slatType: productType === 'marine-anti-corrosion' ? 'aluminium' : 'solid',
      gauge: productType === 'solid-heavy' ? '1.2mm' : '1.0mm',
      operation: 'motor-flange',
    });
    onNavigate('quote-and-consultation');
  };

  return (
    <div className="w-full bg-surface pb-20 pt-4 sm:pt-8 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container font-technical-code text-[11px] sm:text-xs uppercase mb-2 font-semibold">
            <span className="material-symbols-outlined text-[14px]">warehouse</span>
            <span>Umbilo Heavy Industrial Engineering</span>
          </div>
          <h1 className="font-headline-lg text-2xl sm:text-headline-lg uppercase text-on-surface leading-tight">
            Industrial Roller Shutter Doors Durban
          </h1>
          <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant max-w-3xl mt-1">
            Engineered, roll-formed, and installed directly by SafetyFirst across Durban Metro, Pinetown, Mobeni, Jacobs, and KwaZulu-Natal. Designed for heavy daily logistics cycles, maximum physical breach resistance, and severe coastal wind loads.
          </p>
        </div>

        {/* Product Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 p-1.5 bg-slate-200/60 rounded-2xl max-w-3xl">
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedProduct(p.id)}
              className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl font-headline-sm text-sm uppercase transition-all cursor-pointer text-left ${
                selectedProduct === p.id
                  ? 'bg-deep-navy text-pure-white shadow-md font-bold'
                  : 'text-on-surface hover:bg-white/80'
              }`}
            >
              <div className="text-[10px] opacity-75 font-technical-code">{p.badge}</div>
              <div className="truncate">{p.title}</div>
            </button>
          ))}
        </div>

        {/* Detailed Product Spotlight Card */}
        <div className="bg-pure-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            {/* Left Photo & Visual Highlights */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-slate-200 bg-deep-navy shadow-inner group">
                <img
                  src={current.img}
                  alt={current.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-deep-navy/90 backdrop-blur-sm text-pure-white font-technical-code text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  {current.badge}
                </span>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent p-5 text-pure-white">
                  <div className="text-xs font-technical-code text-badge-teal">FABRICATION STANDARDS</div>
                  <div className="font-headline-sm text-base uppercase">{current.windRating}</div>
                </div>
              </div>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-surface-container-low border border-slate-200/70 text-xs font-technical-code">
                <div>
                  <span className="text-on-surface-variant block">Steel Gauge:</span>
                  <strong className="text-on-surface">{current.gaugeRange}</strong>
                </div>
                <div>
                  <span className="text-on-surface-variant block">Max Span:</span>
                  <strong className="text-on-surface">{current.maxSpan}</strong>
                </div>
                <div>
                  <span className="text-on-surface-variant block">Wind Load:</span>
                  <strong className="text-badge-teal font-bold">{current.windRating}</strong>
                </div>
              </div>
            </div>

            {/* Right Information & Action */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-1">
                  Product Details &amp; Engineering
                </span>
                <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface mb-3 leading-tight">
                  {current.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  {current.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-headline-sm text-sm uppercase text-on-surface mb-2 font-bold">
                    Key Engineering Specifications:
                  </h4>
                  <ul className="space-y-2">
                    {current.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-on-surface">
                        <span className="material-symbols-outlined text-[16px] text-badge-teal shrink-0">
                          check_circle
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-headline-sm text-sm uppercase text-on-surface mb-2 font-bold">
                    Ideal Durban Applications:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {current.applications.map((app, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-slate-100 text-on-surface text-xs font-technical-code"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleRequestQuote(current.id)}
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-primary-container to-red-700 hover:from-red-700 hover:to-cobalt-hover text-pure-white font-headline-sm text-headline-sm uppercase px-7 py-3 rounded-xl shadow-lg shadow-red-600/30 transition-all cursor-pointer"
                >
                  <span>Request Factory Quote</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>

                <button
                  onClick={() => handleConfigureInSimulator(current.id)}
                  className="group inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-deep-navy font-headline-sm text-headline-sm uppercase px-6 py-3 rounded-xl border border-slate-300 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] text-primary">tune</span>
                  <span>Simulate in 3D Tester</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Anatomy / Blueprint Section */}
        <div className="bg-deep-navy text-pure-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-steel-border/20 mb-16">
          <div className="max-w-2xl mb-10">
            <span className="font-technical-code text-xs text-primary-fixed uppercase tracking-wider block mb-1">
              Precision Construction Blueprint
            </span>
            <h3 className="font-headline-lg text-headline-lg uppercase text-pure-white leading-tight">
              Anatomy of a SafetyFirst Industrial Shutter
            </h3>
            <p className="font-body-md text-body-md text-steel-border/80 mt-2">
              Every millimeter of our doors is fabricated to withstand physical ram attacks, salt-air galvanic reaction, and high cycle wear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-700/80">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">view_column</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm uppercase text-pure-white mb-2">
                1. Structural Guide Channels
              </h4>
              <p className="font-body-sm text-body-sm text-steel-border/80 leading-relaxed">
                Cold-formed 75mm × 50mm or 100mm × 65mm heavy-gauge steel channels bolted to masonry or structural steel columns with M12 high-tensile anchors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-700/80">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">all_inclusive</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm uppercase text-pure-white mb-2">
                2. Counterbalance Spring Drum
              </h4>
              <p className="font-body-sm text-body-sm text-steel-border/80 leading-relaxed">
                Heavy seamless steel tube housing oil-tempered helical torsion springs, calculated precisely to counterbalance curtain weight for effortless manual or motorized lift.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-700/80">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">horizontal_distribute</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm uppercase text-pure-white mb-2">
                3. Interlocking Slat Curtain
              </h4>
              <p className="font-body-sm text-body-sm text-steel-border/80 leading-relaxed">
                Roll-formed continuous hinge joint profile that articulates tightly around the barrel while maintaining horizontal structural stiffness against wind deflection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-700/80">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">shield</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm uppercase text-pure-white mb-2">
                4. Heavy Bottom T-Bar &amp; Locks
              </h4>
              <p className="font-body-sm text-body-sm text-steel-border/80 leading-relaxed">
                Twin inverted angle iron rails sandwiching bottom slats with EPDM rubber seal and heavy padlock hasps / slide bolts penetrating deep into side guides.
              </p>
            </div>
          </div>
        </div>

        {/* Free Measurement Callout */}
        <div className="bg-gradient-to-r from-red-600 to-primary-container text-pure-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-headline-lg text-headline-lg uppercase text-pure-white leading-tight">
              Need Accurate Laser Measurements For An Industrial Opening?
            </h3>
            <p className="font-body-md text-body-md text-pure-white/90 mt-1 max-w-xl">
              Blackie or our senior installation rigging team will visit your facility in Umbilo, Mobeni, Jacobs, Pinetown, or anywhere in Durban to survey lintel clearances and power supplies.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('quote-and-consultation')}
              className="px-6 py-3.5 rounded-xl bg-deep-navy hover:bg-slate-900 text-pure-white font-headline-sm text-sm uppercase shadow-lg transition-all cursor-pointer"
            >
              Book Site Survey
            </button>
            <a
              href="tel:+27794963443"
              className="px-6 py-3.5 rounded-xl bg-pure-white hover:bg-slate-100 text-primary-container font-headline-sm text-sm uppercase shadow-lg transition-all"
            >
              Call 079 496 3443
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
