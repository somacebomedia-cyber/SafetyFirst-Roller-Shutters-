import React, { useState } from 'react';
import { NavPath, EmergencyRepairRequest } from '../types';

interface ServicesRepairsViewProps {
  onNavigate: (path: NavPath) => void;
}

export const ServicesRepairsView: React.FC<ServicesRepairsViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<EmergencyRepairRequest>({
    fullName: '',
    contactNumber: '',
    facilityLocation: '',
    urgency: 'critical-blocked',
    issueType: 'truck-impact',
    notes: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleWhatsAppEmergency = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = encodeURIComponent(
      `*URGENT SAFETYFIRST 24H REPAIR DISPATCH*\n\n` +
      `Contact Name: ${formData.fullName || 'Site Manager'}\n` +
      `Phone: ${formData.contactNumber || 'Urgent'}\n` +
      `Location: ${formData.facilityLocation || 'Durban Metro'}\n` +
      `Priority: ${formData.urgency.toUpperCase()}\n` +
      `Issue: ${formData.issueType.toUpperCase()}\n` +
      `Details: ${formData.notes || 'Please dispatch technician immediately.'}`
    );

    window.open(`https://wa.me/27794963443?text=${text}`, '_blank');
  };

  const dispatchZones = [
    { zone: 'Durban Harbour / Point / Maydon Wharf', eta: '< 25 Mins', note: 'Priority Port & Customs Area' },
    { zone: 'Umbilo / Sydney Rd / Congella', eta: '< 20 Mins', note: 'Immediate Factory Workshop Proximity' },
    { zone: 'Jacobs / Mobeni / Clairwood', eta: '< 30 Mins', note: 'Industrial Logistics Basin' },
    { zone: 'Pinetown / Westmead / New Germany', eta: '< 40 Mins', note: 'Highway Quick Response Unit' },
    { zone: 'Springfield / Riverhorse Valley / Briardene', eta: '< 35 Mins', note: 'Distribution Hub Access' },
    { zone: 'Umhlanga / Cornubia / Mount Edgecombe', eta: '< 45 Mins', note: 'North Coast Commercial Parks' },
  ];

  return (
    <div className="w-full bg-surface pb-20 pt-4 sm:pt-8 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 font-technical-code text-[11px] sm:text-xs uppercase mb-2 font-semibold">
            <span className="material-symbols-outlined text-[14px] animate-pulse">emergency</span>
            <span>24/7 Rapid Emergency Response Team</span>
          </div>
          <h1 className="font-headline-lg text-2xl sm:text-headline-lg uppercase text-on-surface leading-tight">
            24/7 Roller Shutter Repairs &amp; Maintenance Durban
          </h1>
          <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant max-w-3xl mt-1">
            When a loading bay door fails, dispatch stops and cargo is exposed. SafetyFirst operates 24-hour emergency field service bakkies fully stocked with replacement slats, high-torque torsion springs, and motor components across Durban Metro.
          </p>
        </div>

        {/* Emergency Callout Card Banner */}
        <div className="bg-gradient-to-r from-red-700 via-deep-navy to-deep-navy text-pure-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-red-500/40 mb-16 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/30 border border-red-400/40 text-red-200 text-xs font-technical-code font-bold uppercase mb-3">
                Emergency Hotline Standing By
              </div>
              <h2 className="font-headline-lg text-headline-lg uppercase leading-tight mb-2">
                Door Jammed or Struck By Forklift?
              </h2>
              <p className="font-body-md text-body-md text-steel-border/90 mb-6">
                Direct hotline connects straight to master fabricator Blackie. Emergency field teams equipped with hydraulic cutters, port-a-pack spring winders, and replacement guide channels.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="tel:+27794963443"
                  className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-500 text-pure-white font-headline-sm text-headline-sm uppercase px-7 py-3.5 rounded-xl shadow-lg shadow-red-600/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span className="material-symbols-outlined text-[20px] animate-bounce">call</span>
                  <span>Call Emergency: 079 496 3443</span>
                </a>
                <a
                  href="https://wa.me/27794963443?text=EMERGENCY%20REPAIR%20REQUEST:%20My%20roller%20shutter%20is%20stuck%20/%20damaged%20at%20[Location].%20Please%20dispatch%20urgently."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-pure-white font-headline-sm text-headline-sm uppercase px-6 py-3.5 rounded-xl shadow-lg transition-all"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>WhatsApp Dispatch</span>
                </a>
              </div>
            </div>

            {/* Quick Emergency Dispatch Form */}
            <div className="lg:col-span-5 bg-pure-white text-on-surface p-6 sm:p-7 rounded-2xl shadow-xl border border-slate-200">
              <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-1 font-bold">
                Instant Dispatch Dispatcher
              </h3>
              <p className="text-xs text-on-surface-variant mb-4">
                Sends full technical breakdown telemetry straight to Blackie’s phone.
              </p>

              <form onSubmit={handleWhatsAppEmergency} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                    Your Name / Company
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sipho / Bay Freight Logistics"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-red-600 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="082 123 4567"
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-red-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                      Area / Suburb
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mobeni / Jacobs"
                      value={formData.facilityLocation}
                      onChange={(e) => setFormData({ ...formData, facilityLocation: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-red-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                    Nature of Breakdown
                  </label>
                  <select
                    value={formData.issueType}
                    onChange={(e) => setFormData({ ...formData, issueType: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-red-600 focus:outline-none"
                  >
                    <option value="truck-impact">Vehicle / Forklift Impact Damage</option>
                    <option value="snapped-spring">Snapped Torsion Counterbalance Spring</option>
                    <option value="motor-failure">Motor Burnt Out / Won't Lift</option>
                    <option value="derailed-curtain">Curtain Came Out of Channel Guides</option>
                    <option value="lock-jammed">Center Lock Jammed / Key Snapped</option>
                    <option value="other">Other Emergency Failure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                    Site Notes / Opening Dimensions
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Approx door size, height jammed, security threat..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-red-600 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-pure-white font-headline-sm text-sm uppercase shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>Dispatch WhatsApp Emergency Request</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 6 Key Emergency Services Handled */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
              Rapid Repair Capabilities
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface mt-1 mb-2">
              Common Breakdowns Solved On-Site
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Because we manufacture roller shutters from raw steel in Umbilo, our field technicians carry genuine replacement parts, matching slat profiles, and calibrated spring coils.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-pure-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[24px]">all_inclusive</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-2">
                Torsion Spring Replacements
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                When a counterbalance spring snaps with a loud bang, the door becomes dangerously heavy. We measure, re-wind, and tension oil-tempered helical springs to exact door weight specifications.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-pure-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-red-50 text-primary border border-red-200 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[24px]">electric_meter</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-2">
                Motor &amp; UPS Loadshedding Repairs
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Diagnostics and repair for 380V 3-phase flange motors, 220V tubular motors, capacitor replacements, internal limit switches, remote receivers, and battery inverter backup modules.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-pure-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-safety-amber border border-amber-200 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[24px]">car_crash</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-2">
                Truck &amp; Forklift Impact Repairs
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Bent guide channels and crumpled bottom rails can trap freight inside. Our mobile crew cuts out buckled sections, splices new high-tensile slats, and straightens channels on-site.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-pure-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-teal-50 text-badge-teal border border-teal-200 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[24px]">swap_horiz</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-2">
                Curtain Re-Tracking &amp; Derailment
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                If wind gusts or obstructions knock slats out of the vertical channels, running the motor will crush the curtain. We safely release tension, re-thread the slats, and install wind lock clips.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-pure-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[24px]">lock_reset</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-2">
                Emergency Locksmith &amp; Pin Locks
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Overnight lockouts caused by damaged center cylinder locks, seized side slide bolts, or broken padlocks. We open jammed doors without destroying the curtain structure.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-pure-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-800 border border-slate-300 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[24px]">health_and_safety</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-2">
                Scheduled Service Contracts (SLA)
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Comprehensive preventative maintenance contracts for warehouses and retail centres. Includes spring tension calibration, guide lubrication, safety brake inspection, and OHS compliance certificates.
              </p>
            </div>
          </div>
        </div>

        {/* Durban Response Times Grid */}
        <div className="bg-pure-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl mb-16">
          <div className="max-w-2xl mb-8">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-1">
              Field Dispatch Logistics
            </span>
            <h3 className="font-headline-lg text-headline-lg uppercase text-on-surface leading-tight">
              Rapid Response ETAs Across Greater Durban
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Strategic proximity to the N2, N3, and M4 corridor from our 378 Sydney Road workshop ensures rapid dispatch times.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dispatchZones.map((z, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-surface-container-low border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-headline-sm text-base uppercase text-on-surface font-bold">
                      {z.zone}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant">{z.note}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[11px] font-technical-code text-on-surface-variant uppercase">
                    Typical Arrival:
                  </span>
                  <span className="font-headline-sm text-sm text-badge-teal font-bold uppercase">
                    {z.eta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
