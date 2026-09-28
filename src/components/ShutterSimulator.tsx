import React, { useState, useEffect } from 'react';
import {
  ShutterConfig,
  DoorStyle,
  DoorMaterial,
  DoorColor,
  OpeningEnvironment,
  OperationType,
} from '../types';

interface ShutterSimulatorProps {
  onTransferToQuote: (config: ShutterConfig) => void;
}

export const ShutterSimulator: React.FC<ShutterSimulatorProps> = ({ onTransferToQuote }) => {
  // Config state
  const [doorStyle, setDoorStyle] = useState<DoorStyle>('roller');
  const [material, setMaterial] = useState<DoorMaterial>('galvanised-steel');
  const [color, setColor] = useState<DoorColor>('charcoal');
  const [environment, setEnvironment] = useState<OpeningEnvironment>('industrial');
  const [widthMeters, setWidthMeters] = useState<number>(4.0);
  const [heightMeters, setHeightMeters] = useState<number>(3.2);
  const [operation, setOperation] = useState<OperationType>('motor-flange');
  const [windLocks, setWindLocks] = useState<boolean>(true);
  const [hasBatteryBackup, setHasBatteryBackup] = useState<boolean>(true);

  // Simulation interaction state
  const [openPercent, setOpenPercent] = useState<number>(20); // 0 = closed, 100 = open
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [animationDirection, setAnimationDirection] = useState<'opening' | 'closing' | null>(null);
  const [windSpeedKmH, setWindSpeedKmH] = useState<number>(35); // 0 to 140 km/h

  // Auto animation loop
  useEffect(() => {
    if (!isAnimating || !animationDirection) return;

    const interval = setInterval(() => {
      setOpenPercent((prev) => {
        if (animationDirection === 'opening') {
          if (prev >= 98) {
            setIsAnimating(false);
            setAnimationDirection(null);
            return 100;
          }
          return prev + 2;
        } else {
          if (prev <= 2) {
            setIsAnimating(false);
            setAnimationDirection(null);
            return 0;
          }
          return prev - 2;
        }
      });
    }, 35);

    return () => clearInterval(interval);
  }, [isAnimating, animationDirection]);

  const handleOpen = () => {
    setIsAnimating(true);
    setAnimationDirection('opening');
  };

  const handleClose = () => {
    setIsAnimating(true);
    setAnimationDirection('closing');
  };

  const handleStop = () => {
    setIsAnimating(false);
    setAnimationDirection(null);
  };

  // Color Definitions
  const colorPalette: Record<DoorColor, { hex: string; border: string; name: string; ral: string }> = {
    charcoal: { hex: '#2b2d33', border: '#1e2024', name: 'Anthracite Charcoal', ral: 'RAL 7016' },
    'traffic-white': { hex: '#f8fafc', border: '#cbd5e1', name: 'Traffic White', ral: 'RAL 9016' },
    'coastal-bronze': { hex: '#45352b', border: '#2e231c', name: 'Coastal Bronze', ral: 'Architectural' },
    'dove-grey': { hex: '#64748b', border: '#475569', name: 'Dove Grey', ral: 'RAL 7038' },
    galvanised: { hex: '#94a3b8', border: '#64748b', name: 'Galvanised Zinc', ral: 'Raw Spangle' },
    'signal-blue': { hex: '#1d4ed8', border: '#1e40af', name: 'Marine Signal Blue', ral: 'RAL 5005' },
    'crimson-red': { hex: '#dc2626', border: '#991b1b', name: 'Safety Red', ral: 'RAL 3000' },
    'safety-red': { hex: '#dc2626', border: '#991b1b', name: 'SafetyFirst Red', ral: 'RAL 3020' },
    'jet-black': { hex: '#18181b', border: '#09090b', name: 'Jet Black', ral: 'RAL 9005' },
  };

  // Material multipliers
  const materialWeights: Record<DoorMaterial, number> = {
    'galvanised-steel': 12.4, // kg/m2
    aluminium: 7.8,
    'insulated-pu': 11.0,
    polycarbonate: 9.5,
  };

  const materialBasePrice: Record<DoorMaterial, number> = {
    'galvanised-steel': 1650,
    aluminium: 2650,
    'insulated-pu': 2350,
    polycarbonate: 2850,
  };

  const styleBasePrice: Record<DoorStyle, number> = {
    roller: 0,
    sectional: 2200, // track hardware & springs
    'rapid-roll': 5500, // high-speed motor & radar
    perforated: 600,
    fenestra: 900,
  };

  // Calculations
  const areaM2 = Number((widthMeters * heightMeters).toFixed(2));
  const curtainWeightKg = Math.round(areaM2 * materialWeights[material]);
  const requiredTorqueNm = Math.max(50, Math.round(curtainWeightKg * 0.95));

  // Wind load and deflection
  const windPressurePa = Math.round(0.5 * 1.225 * Math.pow(windSpeedKmH / 3.6, 2));
  const maxSafeWind = windLocks ? 125 : 75;
  const isOverSafeWind = windSpeedKmH > maxSafeWind;
  const visualDeflectionPx = Math.min(22, Math.round((windSpeedKmH / 140) * (windLocks ? 10 : 22)));

  // Cost estimates
  const operationPrice =
    operation === 'manual-push'
      ? 2800
      : operation === 'chain-hoist'
      ? 4200
      : operation === 'motor-flange'
      ? 8900
      : 7400;

  const batteryPrice = hasBatteryBackup ? 2600 : 0;
  const finishPrice = color === 'galvanised' ? 0 : Math.round(areaM2 * 280);
  const estimatedMinZAR = Math.round(
    areaM2 * materialBasePrice[material] +
      styleBasePrice[doorStyle] +
      operationPrice +
      batteryPrice +
      finishPrice
  );
  const estimatedMaxZAR = Math.round(estimatedMinZAR * 1.16);

  const activeColor = colorPalette[color];

  const handleTransfer = () => {
    onTransferToQuote({
      widthMeters,
      heightMeters,
      doorStyle,
      material,
      color,
      environment,
      operation,
      windLocks,
      hasBatteryBackup,
      slatType: doorStyle === 'perforated' ? 'perforated' : doorStyle === 'fenestra' ? 'fenestra' : 'solid',
      finish: color === 'galvanised' ? 'galvanised' : color === 'charcoal' ? 'charcoal' : 'traffic-white',
    });
  };

  return (
    <div className="w-full bg-surface pb-20 pt-4 sm:pt-8 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12">
        {/* Header Breadcrumb */}
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container font-technical-code text-[11px] sm:text-xs uppercase mb-2 font-semibold">
            <span className="material-symbols-outlined text-[14px]">tune</span>
            <span>Virtual Shutter Lab • Umbilo Workshop</span>
          </div>
          <h1 className="font-headline-lg text-2xl sm:text-headline-lg uppercase text-on-surface leading-tight">
            Interactive Shutter Simulator
          </h1>
          <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant max-w-3xl mt-1">
            Test shutter styles, high-tensile materials, and architectural colors on simulated industrial, commercial, and domestic Durban door openings in real time.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* LEFT: Live Interactive Canvas & Opening Backdrop */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 w-full">
            {/* Environment Scene Switcher Tabs */}
            <div className="bg-pure-white p-2 rounded-2xl border border-slate-200/90 shadow-sm flex items-center gap-1.5 overflow-x-auto">
              <span className="text-[11px] font-technical-code text-on-surface-variant uppercase font-bold px-2 whitespace-nowrap">
                Opening Backdrop:
              </span>
              {[
                { id: 'industrial', label: 'Industrial Logistics Bay', icon: 'warehouse' },
                { id: 'domestic', label: 'Domestic Coastal Garage', icon: 'garage' },
                { id: 'commercial', label: 'Retail Mall Shopfront', icon: 'storefront' },
              ].map((env) => (
                <button
                  key={env.id}
                  onClick={() => setEnvironment(env.id as OpeningEnvironment)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                    environment === env.id
                      ? 'bg-deep-navy text-pure-white shadow-sm font-bold'
                      : 'text-on-surface-variant hover:bg-slate-100'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">{env.icon}</span>
                  <span>{env.label}</span>
                </button>
              ))}
            </div>

            {/* Stage Container */}
            <div className="bg-deep-navy text-pure-white rounded-3xl p-4 sm:p-7 shadow-2xl border border-steel-border/20 relative overflow-hidden">
              {/* Header inside Stage */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 sm:pb-4 border-b border-steel-border/20 text-xs font-technical-code">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      isAnimating
                        ? 'bg-safety-amber animate-pulse'
                        : openPercent === 0
                        ? 'bg-red-400'
                        : 'bg-badge-teal'
                    }`}
                  />
                  <span className="font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                    {isAnimating
                      ? `${animationDirection === 'opening' ? 'OPENING...' : 'CLOSING...'}`
                      : openPercent === 0
                      ? 'LOCKED & SEALED'
                      : openPercent === 100
                      ? 'FULLY RAISED (100%)'
                      : `PARTIAL (${openPercent}%)`}
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs">
                  <span className="text-steel-border/70">
                    Style: <strong className="text-pure-white uppercase">{doorStyle}</strong>
                  </span>
                  <span className="text-steel-border/70">
                    Finish: <strong className="text-primary-fixed">{activeColor.name}</strong>
                  </span>
                </div>
              </div>

              {/* Architectural Opening Scene */}
              <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-2xl my-4 sm:my-5 overflow-hidden flex flex-col items-center justify-end border border-slate-700/80 shadow-2xl">
                {/* 1. Environment Background Layer */}
                {environment === 'industrial' && (
                  <div className="absolute inset-0 bg-gradient-to-b from-[#111928] via-[#1a263d] to-[#0d1424] flex flex-col justify-between">
                    {/* Logistics bay wall & crane */}
                    <div className="w-full h-8 bg-slate-800/80 border-b border-slate-700 flex items-center justify-between px-4 text-[9px] font-technical-code text-slate-400">
                      <span>BAY 04 • HIGH CLEARANCE DOCK</span>
                      <span>378 SYDNEY RD UMBILO</span>
                    </div>
                    {/* Interior warehouse lighting */}
                    <div className="flex-1 w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-300/10 via-transparent to-transparent flex items-center justify-center">
                      <div className="w-48 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
                    </div>
                  </div>
                )}

                {environment === 'domestic' && (
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1b2537] via-[#24334a] to-[#121c2d] flex flex-col justify-between">
                    {/* Coastal Home Facade lintel with warm lighting */}
                    <div className="w-full h-10 bg-stone-800/90 border-b border-stone-700 flex items-center justify-between px-4 text-[9px] font-technical-code text-stone-300">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        <span>COASTAL RESIDENTIAL GARAGE OPENING</span>
                      </span>
                      <span>ARCHITECTURAL FINISH</span>
                    </div>
                    {/* Warm interior garage light */}
                    <div className="flex-1 w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-200/15 via-transparent to-transparent" />
                  </div>
                )}

                {environment === 'commercial' && (
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1a202c] via-[#2d3748] to-[#171923] flex flex-col justify-between">
                    {/* Mall retail fascia */}
                    <div className="w-full h-10 bg-slate-900 border-b border-slate-700 flex items-center justify-between px-4 text-[9px] font-technical-code text-slate-300">
                      <span>RETAIL CONCOURSE STOREFRONT</span>
                      <span>SECURITY VISION SHUTTER</span>
                    </div>
                    {/* Illuminated storefront mannequin / display interior */}
                    <div className="flex-1 w-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-400/10 via-transparent to-transparent flex items-center justify-center">
                      <span className="text-slate-500/40 font-headline-sm uppercase text-xs tracking-widest">
                        SHOWROOM MERCHANDISE
                      </span>
                    </div>
                  </div>
                )}

                {/* 2. Top Overhead Housing (Roller Drum vs Sectional Ceiling Tracks) */}
                {doorStyle === 'sectional' ? (
                  <div className="w-[90%] sm:w-[86%] h-8 bg-slate-800/95 border-b-2 border-slate-700 flex items-center justify-between px-4 relative z-30 shadow-md">
                    <span className="text-[9px] font-technical-code text-slate-300 uppercase tracking-widest font-bold">
                      Overhead Ceiling Horizontal Tracks &amp; Torsion Spring
                    </span>
                    <span className="text-[9px] font-technical-code text-badge-teal font-semibold">
                      Sectional Hardware
                    </span>
                  </div>
                ) : (
                  <div className="w-[90%] sm:w-[86%] h-10 sm:h-12 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 rounded-t-xl border-b-2 border-slate-900 shadow-md flex items-center justify-between px-3 sm:px-4 relative z-30">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-900 border border-slate-400 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-technical-code text-slate-900 font-bold uppercase tracking-wider">
                        Barrel Drum Coil Housing
                      </span>
                    </div>
                    <span className="text-[9px] font-technical-code text-slate-900 font-bold uppercase">
                      Ø 168mm High-Tensile
                    </span>
                  </div>
                )}

                {/* 3. The Door Bay Frame & Moving Curtain/Panels */}
                <div
                  className="relative w-[90%] sm:w-[86%] flex-1 bg-black/40 border-x-4 sm:border-x-8 border-slate-700 flex flex-col justify-start overflow-hidden"
                  style={{
                    boxShadow: 'inset 0 0 25px rgba(0,0,0,0.6)',
                  }}
                >
                  {/* Moving Door Curtain / Panel */}
                  <div
                    className="w-full transition-all duration-75 relative z-10 overflow-hidden shadow-2xl"
                    style={{
                      height: `${100 - openPercent}%`,
                      transform: `translateX(${visualDeflectionPx}px)`,
                    }}
                  >
                    {/* SECTIONAL OVERHEAD DOOR PANELS */}
                    {doorStyle === 'sectional' ? (
                      <div
                        className="w-full h-full flex flex-col justify-between"
                        style={{
                          backgroundColor: activeColor.hex,
                          borderColor: activeColor.border,
                        }}
                      >
                        {/* 4 Large Sectional Panels */}
                        {[0, 1, 2, 3].map((panelIdx) => (
                          <div
                            key={panelIdx}
                            className="flex-1 w-full border-b-2 border-black/40 relative flex items-center justify-between px-3 overflow-hidden shadow-inner"
                            style={{
                              background: `linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(0,0,0,0.2) 100%)`,
                            }}
                          >
                            {/* Embossed Cassette Rectangles */}
                            <div className="w-full flex items-center justify-around gap-2 px-2">
                              <div className="h-6 sm:h-9 flex-1 rounded border border-black/30 shadow-inner bg-black/10 flex items-center justify-center">
                                {material === 'polycarbonate' && (
                                  <span className="w-full h-full bg-sky-200/30 backdrop-blur-xs flex items-center justify-center text-[8px] text-sky-200">
                                    GLAZED
                                  </span>
                                )}
                              </div>
                              <div className="h-6 sm:h-9 flex-1 rounded border border-black/30 shadow-inner bg-black/10 flex items-center justify-center">
                                {material === 'polycarbonate' && (
                                  <span className="w-full h-full bg-sky-200/30 backdrop-blur-xs flex items-center justify-center text-[8px] text-sky-200">
                                    GLAZED
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Heavy Side Roller Hinges */}
                            <span className="absolute left-1 top-1/2 -translate-y-1/2 w-2 h-4 bg-slate-300 rounded-sm border border-slate-700" />
                            <span className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-4 bg-slate-300 rounded-sm border border-slate-700" />
                          </div>
                        ))}

                        {/* Bottom Weather Rubber Seal */}
                        <div className="w-full h-4 bg-slate-900 border-t border-slate-700 flex items-center justify-center">
                          <span className="text-[8px] font-technical-code text-slate-400 uppercase tracking-widest">
                            EPDM BULB SEAL
                          </span>
                        </div>
                      </div>
                    ) : doorStyle === 'rapid-roll' ? (
                      /* RAPID HIGH-SPEED FABRIC / SPIRAL DOOR */
                      <div
                        className="w-full h-full flex flex-col justify-between"
                        style={{
                          backgroundColor: activeColor.hex,
                        }}
                      >
                        {Array.from({ length: 8 }).map((_, idx) => (
                          <div
                            key={idx}
                            className="w-full flex-1 border-b border-black/30 flex items-center justify-center relative"
                            style={{
                              background:
                                idx % 2 === 0
                                  ? 'rgba(0,0,0,0.15)'
                                  : 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.2) 100%)',
                            }}
                          >
                            {/* Horizontal wind reinforcement rib */}
                            <div className="w-full h-1 bg-amber-400/90 shadow-sm" />
                          </div>
                        ))}
                        {/* Hazard warning bottom stripe */}
                        <div
                          className="w-full h-6 border-t-2 border-black flex items-center justify-center"
                          style={{
                            backgroundImage: `repeating-linear-gradient(45deg, #eab308, #eab308 10px, #000 10px, #000 20px)`,
                          }}
                        />
                      </div>
                    ) : (
                      /* ROLLER SHUTTER SLATS (Continuous, Perforated, or Fenestra) */
                      <div
                        className="w-full h-full flex flex-col justify-start"
                        style={{
                          backgroundColor: activeColor.hex,
                          borderColor: activeColor.border,
                        }}
                      >
                        {Array.from({ length: 26 }).map((_, idx) => (
                          <div
                            key={idx}
                            className="w-full h-3 sm:h-3.5 border-b border-black/30 flex items-center justify-between px-2 relative overflow-hidden"
                            style={{
                              background:
                                doorStyle === 'perforated'
                                  ? `radial-gradient(circle, rgba(0,0,0,0.6) 1.5px, transparent 1.5px) 0 0/8px 8px, ${activeColor.hex}`
                                  : doorStyle === 'fenestra'
                                  ? idx % 2 === 0
                                    ? 'linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.2) 100%)'
                                    : 'rgba(0,0,0,0.25)'
                                  : `linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(0,0,0,0.25) 100%)`,
                            }}
                          >
                            {/* Fenestra viewing windows */}
                            {doorStyle === 'fenestra' && idx % 3 === 0 && (
                              <div className="w-full flex justify-around">
                                <span className="w-8 h-2 bg-sky-200/40 border border-white/40 rounded-sm" />
                                <span className="w-8 h-2 bg-sky-200/40 border border-white/40 rounded-sm" />
                                <span className="w-8 h-2 bg-sky-200/40 border border-white/40 rounded-sm" />
                              </div>
                            )}

                            {/* Wind lock end clips */}
                            {windLocks && (
                              <>
                                <span className="absolute left-0 top-0 bottom-0 w-1.5 sm:w-2 bg-amber-400/90 border-r border-amber-600" />
                                <span className="absolute right-0 top-0 bottom-0 w-1.5 sm:w-2 bg-amber-400/90 border-l border-amber-600" />
                              </>
                            )}
                          </div>
                        ))}

                        {/* Bottom T-Bar */}
                        <div className="w-full h-5 sm:h-6 bg-slate-900 border-t-2 border-slate-600 flex items-center justify-between px-3 mt-auto">
                          <span className="w-2.5 h-1 bg-amber-400 rounded-sm" />
                          <span className="text-[8px] sm:text-[9px] font-technical-code text-slate-300 font-bold uppercase tracking-widest">
                            SAFETYFIRST REINFORCED BOTTOM T-BAR
                          </span>
                          <span className="w-2.5 h-1 bg-amber-400 rounded-sm" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Ground Threshold */}
                <div className="w-[94%] sm:w-[90%] h-3 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 rounded-b border-t border-slate-500 shadow-md" />
              </div>

              {/* Movement & Height Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-steel-border/20">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleOpen}
                    disabled={openPercent >= 100}
                    className="flex-1 sm:flex-initial px-3 sm:px-4 py-2 rounded-xl bg-badge-teal hover:bg-teal-600 text-pure-white font-headline-sm text-xs sm:text-sm uppercase font-bold transition-all shadow-md disabled:opacity-50 cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
                    <span>Open</span>
                  </button>

                  <button
                    onClick={handleStop}
                    className="flex-1 sm:flex-initial px-3 sm:px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-pure-white font-headline-sm text-xs sm:text-sm uppercase font-bold transition-all shadow-md cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">pause</span>
                    <span>Stop</span>
                  </button>

                  <button
                    onClick={handleClose}
                    disabled={openPercent <= 0}
                    className="flex-1 sm:flex-initial px-3 sm:px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-pure-white font-headline-sm text-xs sm:text-sm uppercase font-bold transition-all shadow-md disabled:opacity-50 cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                    <span>Close</span>
                  </button>
                </div>

                {/* Height Slider */}
                <div className="flex items-center gap-2 w-full sm:w-auto flex-1 max-w-xs">
                  <span className="text-[11px] font-technical-code text-steel-border/70 whitespace-nowrap">
                    Height:
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={openPercent}
                    onChange={(e) => setOpenPercent(Number(e.target.value))}
                    className="w-full accent-primary-container cursor-pointer"
                  />
                  <span className="text-xs font-bold text-pure-white w-9 text-right font-technical-code">
                    {openPercent}%
                  </span>
                </div>
              </div>

              {/* Coastal Gale Wind Load Slider */}
              <div className="mt-4 pt-3 border-t border-steel-border/20 bg-slate-900/60 p-3 sm:p-4 rounded-xl">
                <div className="flex items-center justify-between mb-1.5 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-sky-400">storm</span>
                    <span className="font-headline-sm uppercase text-pure-white">
                      Coastal Wind Load: {windSpeedKmH} km/h ({windPressurePa} Pa)
                    </span>
                  </div>
                  <span
                    className={`font-technical-code text-[10px] px-2 py-0.5 rounded-full ${
                      !isOverSafeWind
                        ? 'bg-badge-teal/20 text-badge-teal border border-badge-teal/40'
                        : 'bg-red-500/20 text-red-400 border border-red-500/40'
                    }`}
                  >
                    {!isOverSafeWind ? 'SABS 0140 PASS' : 'GALE WARNING'}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="140"
                  value={windSpeedKmH}
                  onChange={(e) => setWindSpeedKmH(Number(e.target.value))}
                  className="w-full accent-sky-400 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Customizer Controls (Styles, Materials, Colors & Sizing) */}
          <div className="lg:col-span-5 flex flex-col gap-5 w-full">
            <div className="bg-pure-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-md">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-1">
                Customise Shutter
              </span>
              <h2 className="font-headline-md text-xl sm:text-headline-md uppercase text-on-surface mb-5">
                Styles, Materials &amp; Colors
              </h2>

              {/* 1. Shutter Style Selection */}
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase text-on-surface mb-2">
                  1. Shutter Style
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'roller', label: 'Continuous Roller', desc: 'Overhead drum coil' },
                    { id: 'sectional', label: 'Sectional Overhead', desc: 'Ceiling track panels' },
                    { id: 'rapid-roll', label: 'High-Speed Rapid', desc: 'Fast logistics cycle' },
                    { id: 'perforated', label: 'Perforated Vision', desc: '45% ventilation mesh' },
                    { id: 'fenestra', label: 'Fenestra Grille', desc: 'Mall shopfront glazed' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setDoorStyle(s.id as DoorStyle)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        doorStyle === s.id
                          ? 'bg-red-50 border-primary-container text-primary-container shadow-sm font-bold ring-2 ring-primary-container/20'
                          : 'bg-white border-slate-200 text-on-surface hover:bg-slate-50'
                      }`}
                    >
                      <div className="font-headline-sm text-xs uppercase leading-tight">{s.label}</div>
                      <div className="text-[10px] text-on-surface-variant font-normal mt-0.5 leading-tight">
                        {s.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Material Selection */}
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase text-on-surface mb-2">
                  2. Slat / Panel Material
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    {
                      id: 'galvanised-steel',
                      label: 'Cold-Rolled Galvanised Steel',
                      desc: 'Heavy physical protection',
                    },
                    {
                      id: 'aluminium',
                      label: 'Marine Extruded Aluminium',
                      desc: '100% rust-proof coastal grade',
                    },
                    {
                      id: 'insulated-pu',
                      label: '40mm Insulated PU Sandwich',
                      desc: 'Thermal & sound barrier',
                    },
                    {
                      id: 'polycarbonate',
                      label: 'Impact Polycarbonate Glazed',
                      desc: 'Crystal-clear vision strength',
                    },
                  ].map((mat) => (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setMaterial(mat.id as DoorMaterial)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        material === mat.id
                          ? 'bg-red-50 border-primary-container text-primary-container shadow-sm font-bold ring-2 ring-primary-container/20'
                          : 'bg-white border-slate-200 text-on-surface hover:bg-slate-50'
                      }`}
                    >
                      <div className="font-headline-sm text-xs uppercase leading-tight">{mat.label}</div>
                      <div className="text-[10px] text-on-surface-variant font-normal mt-0.5 leading-tight">
                        {mat.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Color Selection */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold uppercase text-on-surface">
                    3. Architectural Color Finish
                  </label>
                  <span className="text-[11px] font-technical-code text-primary-container font-semibold">
                    {activeColor.name} ({activeColor.ral})
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {(Object.keys(colorPalette) as DoorColor[]).map((cKey) => {
                    const c = colorPalette[cKey];
                    return (
                      <button
                        key={cKey}
                        type="button"
                        onClick={() => setColor(cKey)}
                        className={`p-2 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                          color === cKey
                            ? 'border-primary-container ring-2 ring-primary-container/30 bg-red-50'
                            : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <span
                          className="w-6 h-6 rounded-full border border-black/20 shadow-inner"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span className="text-[10px] font-technical-code text-on-surface leading-tight text-center truncate w-full">
                          {c.name.split(' ')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. Dimensions Sliders */}
              <div className="mb-5 pt-3 border-t border-slate-100">
                <label className="block text-xs font-bold uppercase text-on-surface mb-2">
                  4. Opening Sizing
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-on-surface-variant">Width:</span>
                      <strong className="text-primary-container">{widthMeters}m</strong>
                    </div>
                    <input
                      type="range"
                      min="1.5"
                      max="8.0"
                      step="0.1"
                      value={widthMeters}
                      onChange={(e) => setWidthMeters(Number(e.target.value))}
                      className="w-full accent-primary-container cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-on-surface-variant">Height:</span>
                      <strong className="text-primary-container">{heightMeters}m</strong>
                    </div>
                    <input
                      type="range"
                      min="2.0"
                      max="6.0"
                      step="0.1"
                      value={heightMeters}
                      onChange={(e) => setHeightMeters(Number(e.target.value))}
                      className="w-full accent-primary-container cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* 5. Additional Hardware Toggles */}
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <label className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                  <div className="flex flex-col">
                    <span className="font-bold text-on-surface">Coastal Wind-Lock Clips</span>
                    <span className="text-[10px] text-on-surface-variant">
                      Reinforces curtain against storm blowouts
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={windLocks}
                    onChange={(e) => setWindLocks(e.target.checked)}
                    className="w-4 h-4 text-primary-container rounded cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                  <div className="flex flex-col">
                    <span className="font-bold text-on-surface">Loadshedding UPS Battery Inverter</span>
                    <span className="text-[10px] text-on-surface-variant">
                      Operates door during municipal blackouts
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={hasBatteryBackup}
                    onChange={(e) => setHasBatteryBackup(e.target.checked)}
                    className="w-4 h-4 text-primary-container rounded cursor-pointer"
                  />
                </label>
              </div>
            </div>

            {/* Calculated Output & Quote CTA Card */}
            <div className="bg-gradient-to-br from-deep-navy to-slate-900 text-pure-white rounded-3xl p-5 sm:p-7 shadow-xl border border-steel-border/20">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed font-bold block mb-1">
                Engineering Calculation
              </span>
              <h3 className="font-headline-md text-lg sm:text-headline-md uppercase text-pure-white mb-3">
                Live Specification Summary
              </h3>

              <div className="grid grid-cols-2 gap-2 text-xs font-technical-code py-3 border-y border-steel-border/20 mb-4">
                <div>
                  <span className="text-steel-border/70 block">Dimensions:</span>
                  <strong className="text-pure-white text-xs sm:text-sm">
                    {widthMeters}m × {heightMeters}m ({areaM2} m²)
                  </strong>
                </div>
                <div>
                  <span className="text-steel-border/70 block">Estimated Mass:</span>
                  <strong className="text-pure-white text-xs sm:text-sm">{curtainWeightKg} kg</strong>
                </div>
                <div>
                  <span className="text-steel-border/70 block">Recommended Motor:</span>
                  <strong className="text-pure-white text-xs sm:text-sm">{requiredTorqueNm} Nm Torque</strong>
                </div>
                <div>
                  <span className="text-steel-border/70 block">Coastal Rating:</span>
                  <strong className="text-badge-teal text-xs sm:text-sm">SABS 0140 Compliant</strong>
                </div>
              </div>

              {/* Price Estimate */}
              <div className="mb-4 bg-slate-800/80 p-3.5 rounded-xl border border-steel-border/20">
                <span className="text-[10px] font-technical-code text-steel-border/70 uppercase tracking-wider block">
                  Estimated Factory Direct Price (Excl. VAT):
                </span>
                <div className="font-display-xl text-2xl sm:text-3xl text-primary-fixed font-bold mt-0.5">
                  R {estimatedMinZAR.toLocaleString()} - R {estimatedMaxZAR.toLocaleString()}
                </div>
                <span className="text-[9px] text-steel-border/60 block mt-0.5">
                  *Includes Umbilo direct manufacturing &amp; hardware.
                </span>
              </div>

              <button
                onClick={handleTransfer}
                className="w-full group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-primary-container to-red-700 hover:from-red-700 hover:to-cobalt-hover text-pure-white font-headline-sm text-sm uppercase py-3.5 rounded-xl shadow-lg shadow-red-600/30 hover:shadow-red-600/50 border-t border-white/25 transition-all cursor-pointer"
              >
                <span>Request Quote for this Selection</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
