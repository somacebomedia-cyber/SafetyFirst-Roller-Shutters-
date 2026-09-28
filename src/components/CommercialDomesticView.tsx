import React, { useState } from 'react';
import { NavPath, ShutterConfig, SlatFinish } from '../types';

interface CommercialDomesticViewProps {
  onNavigate: (path: NavPath) => void;
  onPreconfigureQuote: (config: Partial<ShutterConfig>) => void;
}

export const CommercialDomesticView: React.FC<CommercialDomesticViewProps> = ({
  onNavigate,
  onPreconfigureQuote,
}) => {
  const [selectedColor, setSelectedColor] = useState<SlatFinish>('charcoal');

  const colorSwatches: { id: SlatFinish; label: string; hex: string; desc: string }[] = [
    { id: 'charcoal', label: 'Charcoal Anthracite', hex: '#2b2d33', desc: 'Modern commercial architectural standard (RAL 7016)' },
    { id: 'traffic-white', label: 'Traffic White', hex: '#f8fafc', desc: 'Clean retail shopfront & domestic garage aesthetic (RAL 9016)' },
    { id: 'bronze', label: 'Coastal Bronze', hex: '#4a3b32', desc: 'Traditional estate & luxury home exterior finish' },
    { id: 'dove-grey', label: 'Dove Grey', hex: '#64748b', desc: 'Neutral contemporary industrial & retail tone (RAL 7038)' },
    { id: 'galvanised', label: 'Bright Galvanised', hex: '#94a3b8', desc: 'Raw zinc spangle for heavy industrial back-of-house' },
    { id: 'safety-red', label: 'SafetyFirst Red / Corporate Match', hex: '#dc2626', desc: 'Official SafetyFirst high-gloss red or precision corporate RAL matching' },
  ];

  const commercialDoors = [
    {
      id: 'perforated',
      title: 'Perforated Vision Slat Doors',
      category: 'RETAIL MALL & STOREFRONTS',
      highlight: '45% Natural Airflow & Backlit Visibility',
      description:
        'Thousands of precision 2.5mm punched micro-holes allow interior display lighting to illuminate stock after closing while denying unauthorized reach-through and physical tampering.',
      idealFor: 'Shopping mall retail units, electronics stores, boutiques, and secure car park ventilation bays.',
      specs: ['0.8mm or 1.0mm cold-rolled galvanised steel', 'Micro-punched 2.5mm hole pattern', 'Internal light transmission rating: 45%', 'Architectural powder coat finishes'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0BcGgd2nF2WxIAXdPdZaySu-5xrgc2JBG9VYnYnzgphLcTEXN2Sco0OmFn_XPXw_AvQuZcK0VN9eGKQQbZpx2pJGf7IsBk_oDVIfVJYPbEFl9rY_mBDBZh1W9J0QXdMK0NDNUeRGyOYbR8nGXE8oIzpTXD5QBTtlY1KDUmMmjEKbDYW3Q6KcDLmP1aSiQYGtp8rFMpCD8HpXEe7a5WuBNZvH32sZzbg6wbetkFGzLWtwWULajt27H',
    },
    {
      id: 'fenestra',
      title: 'Fenestra Rectangular Grilles',
      category: 'SHOWROOMS & HIGH-END MALLS',
      highlight: 'Polycarbonate Glazing Options Available',
      description:
        'Clean horizontal punched rectangular viewing windows. Can be specified open for free ventilation or fitted with shatter-proof transparent polycarbonate inserts to keep dust out while showcasing premium goods.',
      idealFor: 'Jewelry boutiques, car dealerships, Gateway Umhlanga & Pavilion tenant criteria compliance.',
      specs: ['Staggered brick-bond or inline rectangular apertures', 'Optional UV-stabilized Lexan polycarbonate inserts', 'Sleek extruded aluminium or steel guides', 'Quiet motorized operation with remote controls'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlT5WMHygBmTeDHtI8PBqZ3DC8aqCUp7tY7a_E2yQ3XCeRz2y7FGUYC8hGpjIn1Ymz0Nhxri7-ykrfKICzTdXCri283bKWR_0vgHJndD9gqjKcqTni7BZRety3zdDbLjO-kLKQXC12Usicj8dPmMvG4A-29b5lQUjX2h8nmqHH-zVrboYs4vN2Y4UFm60nvX8J0VEYMiXeWFUqmjeqIddu0upuxRp356iPurQCowOQEDixWBZQ8tX4',
    },
    {
      id: 'domestic-aluminium',
      title: 'Domestic Marine Aluminium Roll-Ups',
      category: 'RESIDENTIAL GARAGES & COASTAL HOMES',
      highlight: '100% Rust-Proof Coastal Marine Grade',
      description:
        'Double-walled extruded aluminium slats designed for coastal Durban homes, Zimbali, Sibaya, and Umhlanga Rocks where rust destroys steel doors. Whisper-quiet motorization with smart remote control.',
      idealFor: 'Luxury residential garage openings, patio storm protection, coastal holiday apartments.',
      specs: ['High-grade marine architectural aluminium alloy', 'Double-wall insulated slat profiles', 'Quiet tubular motor with smart smartphone receiver', 'Loadshedding battery backup UPS included'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK2igjUiVgJTFce14Y--zWUr7LkdQ0-uu0xiA5JXCvwoT87HVSzBLHOR_4k1RoVxG9SlIZCBGn38zMK2hYAoRMjruUZc5JwL7VQGWglWJMRRI0zj3R1TkGc25APwTOqx5rbFPPFuzo1hxweHpHl8WQukGg_dVb9HYHauDBNtrZ_crXT1Jj5ICGkW1dHe5NmV-w7hwXOHC0jw5IHDy2QA3rZ5grOMfbVzc3-CixgAMqNuvOfsJNmiNB',
    },
    {
      id: 'servery-counter',
      title: 'Counter & Servery Security Shutters',
      category: 'CANTEENS, BARS & PHARMACIES',
      highlight: 'Compact Coil & Low Overhead Clearance',
      description:
        'Engineered for low-lintel countertops, school canteens, hospital dispensary kiosks, and sports club bars. Lightweight spring balance allows smooth single-handed lift and secure bottom cylinder keyed locking.',
      idealFor: 'Canteen serving hatches, pharmacy dispensaries, reception desks, ticket booths.',
      specs: ['Miniature 50mm curved or extruded slats', 'Low headroom requirement (minimum 250mm overhead)', 'Smooth keyed bottom cylinder lock', 'Anodised silver or matching color finish'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNhIvNIY0aog_SlWkRhp8el0PCmlnJJaTyHUQ_cWJGIalrJIfRP-TvOCLYEznH_J5a3l-Py2Ft_DjcoPzNqs9msg0JUsCjLlNK49Eh_yKUfKx-MaQ6JPlZMI1110mtz8nUOa8NKMjBAdj_O4TxvokLatlZ1KrxqiwyoK_PLmnPrmtNGlmLW9oCyvK-a5Z306AS53GWhevlOux-SfNBFEB7FCbtAZdntcHNMigMHMD0NjgLq8QYYkrv',
    },
  ];

  const handleSelectDoor = (doorId: string) => {
    onPreconfigureQuote({
      doorStyle: doorId === 'perforated' ? 'perforated' : doorId === 'fenestra' ? 'fenestra' : 'roller',
      material: doorId === 'domestic-aluminium' ? 'aluminium' : 'galvanised-steel',
      color: selectedColor === 'charcoal' ? 'charcoal' : selectedColor === 'traffic-white' ? 'traffic-white' : selectedColor === 'bronze' ? 'coastal-bronze' : selectedColor === 'dove-grey' ? 'dove-grey' : selectedColor === 'galvanised' ? 'galvanised' : 'safety-red',
      environment: doorId === 'domestic-aluminium' ? 'domestic' : 'commercial',
      slatType: doorId === 'perforated' ? 'perforated' : doorId === 'fenestra' ? 'fenestra' : doorId === 'domestic-aluminium' ? 'aluminium' : 'solid',
      finish: selectedColor,
      hasBatteryBackup: true,
    });
    onNavigate('quote-and-consultation');
  };

  return (
    <div className="w-full bg-surface pb-20 pt-4 sm:pt-8 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container font-technical-code text-[11px] sm:text-xs uppercase mb-2 font-semibold">
            <span className="material-symbols-outlined text-[14px]">storefront</span>
            <span>Commercial &amp; Residential Division</span>
          </div>
          <h1 className="font-headline-lg text-2xl sm:text-headline-lg uppercase text-on-surface leading-tight">
            Commercial &amp; Domestic Roller Shutters Durban
          </h1>
          <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant max-w-3xl mt-1">
            Custom manufactured for KwaZulu-Natal retail malls, storefronts, architectural homes, and counter serveries. Offering high-aesthetic finishes, transparent vision grilles, and corrosion-proof marine aluminium.
          </p>
        </div>

        {/* 4 Commercial Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {commercialDoors.map((door) => (
            <div
              key={door.id}
              className="bg-pure-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] bg-deep-navy overflow-hidden">
                <img
                  src={door.img}
                  alt={door.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 bg-deep-navy/95 backdrop-blur-sm text-pure-white font-technical-code text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {door.category}
                </span>
                <span className="absolute bottom-4 right-4 bg-badge-teal text-pure-white font-technical-code text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                  {door.highlight}
                </span>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-2">
                    {door.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
                    {door.description}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 mb-5 text-xs">
                    <span className="font-bold text-on-surface uppercase block mb-1">Recommended Application:</span>
                    <span className="text-on-surface-variant">{door.idealFor}</span>
                  </div>

                  <div className="space-y-1.5 mb-6">
                    {door.specs.map((s, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-on-surface">
                        <span className="material-symbols-outlined text-[15px] text-badge-teal shrink-0">check</span>
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleSelectDoor(door.id)}
                    className="flex-1 min-w-[160px] py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-primary-container hover:from-red-700 hover:to-cobalt-hover text-pure-white font-headline-sm text-sm uppercase text-center shadow-md transition-all cursor-pointer"
                  >
                    Request Quote for this Door
                  </button>
                  <button
                    onClick={() => {
                      onPreconfigureQuote({
                        doorStyle: door.id === 'perforated' ? 'perforated' : door.id === 'fenestra' ? 'fenestra' : 'roller',
                        material: door.id === 'domestic-aluminium' ? 'aluminium' : 'galvanised-steel',
                        color: selectedColor === 'charcoal' ? 'charcoal' : selectedColor === 'traffic-white' ? 'traffic-white' : selectedColor === 'bronze' ? 'coastal-bronze' : selectedColor === 'dove-grey' ? 'dove-grey' : selectedColor === 'galvanised' ? 'galvanised' : 'safety-red',
                        environment: door.id === 'domestic-aluminium' ? 'domestic' : 'commercial',
                        slatType: door.id === 'perforated' ? 'perforated' : door.id === 'fenestra' ? 'fenestra' : door.id === 'domestic-aluminium' ? 'aluminium' : 'solid',
                        finish: selectedColor,
                      });
                      onNavigate('shutter-simulator');
                    }}
                    className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-deep-navy font-headline-sm text-sm uppercase transition-all cursor-pointer"
                  >
                    Test in Simulator
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Architectural Powder Coating Selector */}
        <div className="bg-pure-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8 pb-6 border-b border-slate-100">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-1">
                Custom Finishing Studio
              </span>
              <h3 className="font-headline-lg text-headline-lg uppercase text-on-surface leading-tight">
                Architectural Powder Coating Palette
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">
                Baked thermoset polyester powder coating tested for 1,000+ hours salt-spray resistance. Select your finish to preview on Durban projects.
              </p>
            </div>

            {/* Selected Color Badge preview */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-surface-container-low border border-slate-200 shadow-sm shrink-0">
              <div
                className="w-8 h-8 rounded-full border-2 border-slate-400 shadow-inner"
                style={{
                  backgroundColor: colorSwatches.find((c) => c.id === selectedColor)?.hex,
                }}
              />
              <div className="flex flex-col">
                <span className="text-[10px] font-technical-code text-on-surface-variant uppercase">
                  Active Finish
                </span>
                <span className="font-headline-sm text-sm uppercase text-on-surface font-bold">
                  {colorSwatches.find((c) => c.id === selectedColor)?.label}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {colorSwatches.map((swatch) => (
              <button
                key={swatch.id}
                onClick={() => setSelectedColor(swatch.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-4 ${
                  selectedColor === swatch.id
                    ? 'border-primary-container bg-red-50/70 shadow-md ring-2 ring-primary-container/20'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div
                  className="w-12 h-12 rounded-xl shadow-inner border border-black/20 shrink-0 mt-0.5"
                  style={{ backgroundColor: swatch.hex }}
                />
                <div className="flex flex-col">
                  <span className="font-headline-sm text-base uppercase text-on-surface font-bold">
                    {swatch.label}
                  </span>
                  <span className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                    {swatch.desc}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
