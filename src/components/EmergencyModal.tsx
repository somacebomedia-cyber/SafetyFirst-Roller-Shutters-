import React from 'react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToServices: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({
  isOpen,
  onClose,
  onNavigateToServices,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-deep-navy/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-pure-white w-full max-w-lg rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-red-500 animate-scaleUp max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-red-700 to-deep-navy text-pure-white p-4 sm:p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px] sm:text-[20px]">close</span>
          </button>
          <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5">
            <span className="material-symbols-outlined text-red-300 text-[20px] sm:text-[24px] animate-pulse">
              emergency
            </span>
            <span className="font-technical-code text-[10px] sm:text-xs uppercase tracking-widest text-red-200 font-bold">
              24/7 Field Dispatch Hotline
            </span>
          </div>
          <h2 className="font-headline-lg text-lg sm:text-2xl uppercase tracking-tight text-white leading-tight">
            Urgent Roller Shutter Breakdown?
          </h2>
          <p className="text-[11px] sm:text-xs text-steel-border/90 mt-1">
            Emergency technician bakkies standing by across Durban Metro, Mobeni, Jacobs, Pinetown, and Umhlanga.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 overflow-y-auto flex-1">
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-red-50 border border-red-200 text-xs text-red-950 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-red-700 uppercase">
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">alarm</span>
              <span>Immediate Response (&lt;45m ETA)</span>
            </div>
            <p className="text-[11px] sm:text-xs">
              Forklift impacts, snapped torsion counterbalance springs, burnt out motors, and derailed curtains handled on-site 24 hours a day.
            </p>
          </div>

          <div className="space-y-2.5 pt-1">
            <a
              href="tel:+27794963443"
              className="w-full py-3 sm:py-4 rounded-xl bg-red-600 hover:bg-red-700 text-pure-white font-headline-sm text-sm sm:text-base uppercase font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all"
            >
              <span className="material-symbols-outlined text-[20px] sm:text-[22px] animate-bounce">call</span>
              <span>Call Blackie: 079 496 3443</span>
            </a>

            <a
              href="https://wa.me/27794963443?text=EMERGENCY%20REPAIR%20DISPATCH:%20My%20industrial%20roller%20shutter%20is%20stuck%20or%20damaged.%20Please%20dispatch%20technician%20urgently."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 sm:py-3.5 rounded-xl bg-badge-teal hover:bg-teal-600 text-pure-white font-headline-sm text-xs sm:text-sm uppercase font-bold flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span className="material-symbols-outlined text-[18px] sm:text-[20px]">chat</span>
              <span>Send WhatsApp Dispatch Location</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onNavigateToServices();
              }}
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-deep-navy font-headline-sm text-xs uppercase transition-all cursor-pointer"
            >
              View Full Repair Services &amp; Coverage Zones
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
