import React, { useState, useEffect } from 'react';
import {
  NavPath,
  ShutterConfig,
  QuoteFormData,
  DoorStyle,
  DoorMaterial,
  DoorColor,
  OpeningEnvironment,
  OperationType,
} from '../types';

interface QuoteConsultationViewProps {
  onNavigate: (path: NavPath) => void;
  preconfiguredConfig: ShutterConfig | null;
}

export const QuoteConsultationView: React.FC<QuoteConsultationViewProps> = ({
  onNavigate,
  preconfiguredConfig,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    customerName: '',
    companyName: '',
    phone: '',
    email: '',
    locationArea: 'Umbilo / Sydney Road',
    installationType: 'new-installation',
    doorStyle: preconfiguredConfig?.doorStyle || 'roller',
    material: preconfiguredConfig?.material || 'galvanised-steel',
    color: preconfiguredConfig?.color || 'charcoal',
    environment: preconfiguredConfig?.environment || 'industrial',
    widthMeters: preconfiguredConfig?.widthMeters || 4.0,
    heightMeters: preconfiguredConfig?.heightMeters || 3.2,
    operation: preconfiguredConfig?.operation || 'motor-flange',
    notes: '',
    preferredContact: 'whatsapp',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [quoteReference, setQuoteReference] = useState<string>('');

  // Sync with incoming preconfigured parameters if available
  useEffect(() => {
    if (preconfiguredConfig) {
      setFormData((prev) => ({
        ...prev,
        doorStyle: preconfiguredConfig.doorStyle || prev.doorStyle,
        material: preconfiguredConfig.material || prev.material,
        color: preconfiguredConfig.color || prev.color,
        environment: preconfiguredConfig.environment || prev.environment,
        widthMeters: preconfiguredConfig.widthMeters || prev.widthMeters,
        heightMeters: preconfiguredConfig.heightMeters || prev.heightMeters,
        operation: preconfiguredConfig.operation || prev.operation,
      }));
    }
  }, [preconfiguredConfig]);

  // Live price calculation
  const areaM2 = Number((formData.widthMeters * formData.heightMeters).toFixed(2));
  const materialBasePrice: Record<DoorMaterial, number> = {
    'galvanised-steel': 1650,
    aluminium: 2650,
    'insulated-pu': 2350,
    polycarbonate: 2850,
  };
  const styleBasePrice: Record<DoorStyle, number> = {
    roller: 0,
    sectional: 2200,
    'rapid-roll': 5500,
    perforated: 600,
    fenestra: 900,
  };
  const operationPrice: Record<OperationType, number> = {
    'manual-push': 2800,
    'chain-hoist': 4200,
    'motor-flange': 8900,
    'tubular-ups': 7400,
  };

  const finishCost = formData.color === 'galvanised' ? 0 : Math.round(areaM2 * 280);
  const estimatedTotalZAR = Math.round(
    areaM2 * materialBasePrice[formData.material] +
      styleBasePrice[formData.doorStyle] +
      operationPrice[formData.operation] +
      finishCost
  );
  const estimatedMaxZAR = Math.round(estimatedTotalZAR * 1.15);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `SF-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteReference(ref);
    setSubmitted(true);

    if (formData.preferredContact === 'whatsapp') {
      const msg = encodeURIComponent(
        `*SAFETYFIRST DURBAN QUOTE REQUEST [Ref: ${ref}]*\n\n` +
        `Name: ${formData.customerName}\n` +
        `Company: ${formData.companyName || 'Private'}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email}\n` +
        `Area: ${formData.locationArea}\n` +
        `Job Type: ${formData.installationType}\n` +
        `Style: ${formData.doorStyle.toUpperCase()}\n` +
        `Material: ${formData.material.toUpperCase()}\n` +
        `Color: ${formData.color.toUpperCase()}\n` +
        `Backdrop: ${formData.environment.toUpperCase()}\n` +
        `Dimensions: ${formData.widthMeters}m W × ${formData.heightMeters}m H (${areaM2} m²)\n` +
        `Operation: ${formData.operation}\n` +
        `Notes: ${formData.notes || 'Please provide formal quotation and site survey.'}`
      );
      window.open(`https://wa.me/27794963443?text=${msg}`, '_blank');
    }
  };

  return (
    <div className="w-full bg-surface pb-20 pt-4 sm:pt-8 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12">
        {/* Header Breadcrumb */}
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container font-technical-code text-[11px] sm:text-xs uppercase mb-2 font-semibold">
            <span className="material-symbols-outlined text-[14px]">request_quote</span>
            <span>Umbilo Factory Direct Quotation</span>
          </div>
          <h1 className="font-headline-lg text-2xl sm:text-headline-lg uppercase text-on-surface leading-tight">
            Request A Factory Quote &amp; Free Durban Site Survey
          </h1>
          <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant max-w-3xl mt-1">
            Receive custom factory-direct pricing with zero middleman markups. Our senior fabrication engineers assess lintel headroom, sideroom clearances, and electrical supply.
          </p>
        </div>

        {submitted ? (
          <div className="bg-pure-white rounded-3xl p-6 sm:p-12 border border-emerald-200 shadow-xl max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-[32px] sm:text-[36px]">check_circle</span>
            </div>
            <span className="font-technical-code text-xs text-badge-teal uppercase tracking-widest block font-bold mb-1">
              Quotation Request Received
            </span>
            <h2 className="font-headline-lg text-xl sm:text-headline-lg uppercase text-on-surface mb-2">
              Thank You, {formData.customerName}!
            </h2>
            <div className="inline-block bg-slate-100 text-slate-800 px-3 py-1 rounded-lg text-xs sm:text-sm font-technical-code font-bold mb-4">
              Reference: {quoteReference}
            </div>
            <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant max-w-lg mx-auto mb-6">
              Blackie and our Umbilo estimating office have received your specifications for {formData.widthMeters}m × {formData.heightMeters}m ({formData.doorStyle.toUpperCase()}) at {formData.locationArea}. A formal quote and survey confirmation will be sent shortly.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <a
                href={`https://wa.me/27794963443?text=Hi%20Blackie,%20following%20up%20on%20quote%20request%20${quoteReference}%20for%20${formData.customerName}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-badge-teal hover:bg-teal-600 text-pure-white font-headline-sm text-xs sm:text-sm uppercase px-5 py-3 rounded-xl shadow-md transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>Chat Direct on WhatsApp</span>
              </a>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-on-surface font-headline-sm text-xs sm:text-sm uppercase transition-all cursor-pointer"
              >
                Configure Another Door
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Form */}
            <div className="lg:col-span-7 bg-pure-white rounded-3xl p-4 sm:p-8 border border-slate-200/90 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-headline-sm text-base sm:text-headline-sm uppercase text-on-surface mb-3 pb-2 border-b border-slate-100 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">person</span>
                    <span>1. Client &amp; Location Details</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sipho Ndlovu"
                        value={formData.customerName}
                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Bay Logistics KZN"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 082 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.co.za"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                        Durban Suburb / Area
                      </label>
                      <select
                        value={formData.locationArea}
                        onChange={(e) => setFormData({ ...formData, locationArea: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                      >
                        <option value="Umbilo / Sydney Road">Umbilo / Sydney Road</option>
                        <option value="Mobeni / Jacobs / Clairwood">Mobeni / Jacobs / Clairwood</option>
                        <option value="Durban Harbour / Point / Maydon Wharf">Durban Harbour / Point / Maydon Wharf</option>
                        <option value="Pinetown / Westmead / New Germany">Pinetown / Westmead / New Germany</option>
                        <option value="Springfield / Riverhorse Valley">Springfield / Riverhorse Valley</option>
                        <option value="Prospecton / Amanzimtoti">Prospecton / Amanzimtoti</option>
                        <option value="Umhlanga / Cornubia / Mount Edgecombe">Umhlanga / Cornubia / Mount Edgecombe</option>
                        <option value="Ballito / North Coast">Ballito / North Coast</option>
                        <option value="Other KZN Location">Other KZN Location</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                        Job Scope
                      </label>
                      <select
                        value={formData.installationType}
                        onChange={(e) => setFormData({ ...formData, installationType: e.target.value as any })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                      >
                        <option value="new-installation">New Shutter Installation</option>
                        <option value="replacement">Replacement of Existing Door</option>
                        <option value="emergency-repair">Emergency Repair / Slat Replacement</option>
                        <option value="maintenance">Routine Annual Maintenance Contract</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Shutter Specification Inputs */}
                <div>
                  <h3 className="font-headline-sm text-base sm:text-headline-sm uppercase text-on-surface mb-3 pb-2 border-b border-slate-100 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">tune</span>
                    <span>2. Door Style &amp; Material Selection</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                        Shutter Style
                      </label>
                      <select
                        value={formData.doorStyle}
                        onChange={(e) => setFormData({ ...formData, doorStyle: e.target.value as DoorStyle })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                      >
                        <option value="roller">Continuous Roller Shutter</option>
                        <option value="sectional">Sectional Overhead Panel Door</option>
                        <option value="rapid-roll">High-Speed Rapid Roll Door</option>
                        <option value="perforated">Perforated Vision Shutter</option>
                        <option value="fenestra">Fenestra Retail Grille</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                        Material
                      </label>
                      <select
                        value={formData.material}
                        onChange={(e) => setFormData({ ...formData, material: e.target.value as DoorMaterial })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                      >
                        <option value="galvanised-steel">Cold-Rolled Galvanised Steel</option>
                        <option value="aluminium">Extruded Marine Aluminium</option>
                        <option value="insulated-pu">40mm Insulated PU Sandwich</option>
                        <option value="polycarbonate">Impact Polycarbonate Glazed</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                        Architectural Color
                      </label>
                      <select
                        value={formData.color}
                        onChange={(e) => setFormData({ ...formData, color: e.target.value as DoorColor })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                      >
                        <option value="charcoal">Anthracite Charcoal (RAL 7016)</option>
                        <option value="traffic-white">Traffic White (RAL 9016)</option>
                        <option value="coastal-bronze">Coastal Architectural Bronze</option>
                        <option value="dove-grey">Dove Grey (RAL 7038)</option>
                        <option value="galvanised">Raw Galvanised Spangle</option>
                        <option value="signal-blue">Marine Signal Blue (RAL 5005)</option>
                        <option value="crimson-red">Safety Red (RAL 3000)</option>
                        <option value="jet-black">Jet Black (RAL 9005)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                        Clear Width (m)
                      </label>
                      <input
                        type="number"
                        min="1.0"
                        max="12.0"
                        step="0.1"
                        value={formData.widthMeters}
                        onChange={(e) => setFormData({ ...formData, widthMeters: Number(e.target.value) })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                        Clear Height (m)
                      </label>
                      <input
                        type="number"
                        min="1.5"
                        max="10.0"
                        step="0.1"
                        value={formData.heightMeters}
                        onChange={(e) => setFormData({ ...formData, heightMeters: Number(e.target.value) })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                      Operation System
                    </label>
                    <select
                      value={formData.operation}
                      onChange={(e) => setFormData({ ...formData, operation: e.target.value as OperationType })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    >
                      <option value="motor-flange">3-Phase Industrial Flange Motor</option>
                      <option value="tubular-ups">Single-Phase Tubular Motor + Battery UPS</option>
                      <option value="chain-hoist">Reduction Chain Gear Hoist</option>
                      <option value="manual-push">Manual Spring Counterbalance</option>
                    </select>
                  </div>
                </div>

                {/* Additional site notes */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                    Site Access, Headroom, or Power Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Low overhead beam, 380V power available, urgent installation..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-primary-container to-red-700 hover:from-red-700 hover:to-cobalt-hover text-pure-white font-headline-sm text-sm uppercase shadow-lg shadow-red-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>Submit Quote Request To Umbilo Estimators</span>
                </button>
              </form>
            </div>

            {/* Price Preview Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-deep-navy text-pure-white rounded-3xl p-5 sm:p-7 shadow-xl border border-steel-border/20">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed font-bold block mb-1">
                  Instant Estimate Preview
                </span>
                <h3 className="font-headline-md text-base sm:text-headline-md uppercase text-pure-white mb-3">
                  Preliminary Quotation Breakdown
                </h3>

                <div className="space-y-2 text-xs font-technical-code py-3 border-y border-steel-border/20 mb-4">
                  <div className="flex justify-between">
                    <span className="text-steel-border/80">Dimensions:</span>
                    <strong className="text-pure-white">{formData.widthMeters}m × {formData.heightMeters}m ({areaM2} m²)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-steel-border/80">Style:</span>
                    <strong className="text-pure-white uppercase">{formData.doorStyle}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-steel-border/80">Material:</span>
                    <strong className="text-pure-white uppercase">{formData.material}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-steel-border/80">Color:</span>
                    <strong className="text-pure-white uppercase">{formData.color}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-steel-border/80">Operation:</span>
                    <strong className="text-pure-white uppercase">{formData.operation}</strong>
                  </div>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-xl border border-steel-border/20 mb-4">
                  <span className="text-[10px] font-technical-code text-steel-border/70 uppercase tracking-wider block">
                    Estimated Factory Direct Price (Excl. VAT):
                  </span>
                  <div className="font-display-xl text-2xl sm:text-3xl text-primary-fixed font-bold mt-0.5">
                    R {estimatedTotalZAR.toLocaleString()} - R {estimatedMaxZAR.toLocaleString()}
                  </div>
                  <span className="text-[9px] text-steel-border/60 block mt-0.5">
                    *Excludes VAT. Final binding price issued following on-site laser survey.
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-badge-teal/10 border border-badge-teal/30 text-steel-border/90 text-xs">
                  <div className="flex items-center gap-1.5 text-badge-teal font-bold uppercase mb-1">
                    <span className="material-symbols-outlined text-[15px]">verified</span>
                    <span>SafetyFirst Price Guarantee</span>
                  </div>
                  <p className="text-[11px] leading-tight">
                    Direct Umbilo workshop pricing. If you have an active competing quotation for SABS 0140 compliant doors in Durban, we will review and match or beat verified specs.
                  </p>
                </div>
              </div>

              {/* Direct Call Workshop */}
              <div className="p-4 sm:p-5 rounded-2xl bg-pure-white border border-slate-200/90 shadow-sm flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-headline-sm text-xs sm:text-sm uppercase text-on-surface truncate">
                      Talk To Blackie
                    </h4>
                    <p className="text-[11px] text-on-surface-variant truncate">
                      Direct factory hotline
                    </p>
                  </div>
                </div>
                <a
                  href="tel:+27794963443"
                  className="px-3 py-2 rounded-xl bg-deep-navy hover:bg-slate-800 text-pure-white font-headline-sm text-xs uppercase shrink-0 transition-all"
                >
                  079 496 3443
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
