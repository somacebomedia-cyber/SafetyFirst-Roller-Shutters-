import React, { useState } from 'react';

interface FloatingContactWidgetProps {
  onOpenEmergencyModal: () => void;
}

export const FloatingContactWidget: React.FC<FloatingContactWidgetProps> = ({
  onOpenEmergencyModal,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2">
      {expanded && (
        <div className="flex flex-col items-end gap-2 mb-1 animate-fadeIn max-w-[calc(100vw-32px)]">
          <a
            href="tel:+27794963443"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-pure-white px-3.5 py-2 rounded-full shadow-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all transform hover:scale-105 whitespace-nowrap"
          >
            <span>Call 079 496 3443</span>
            <span className="material-symbols-outlined text-[16px]">call</span>
          </a>

          <a
            href="https://wa.me/27794963443?text=Hi%20SafetyFirst%20Roller%20Shutters,%20I%20would%20like%20to%20request%20a%20quote%20/%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-pure-white px-3.5 py-2 rounded-full shadow-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all transform hover:scale-105 whitespace-nowrap"
          >
            <span>WhatsApp Durban Workshop</span>
            <span className="material-symbols-outlined text-[16px]">chat</span>
          </a>

          <button
            onClick={onOpenEmergencyModal}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 px-3.5 py-2 rounded-full shadow-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <span>24/7 Breakdown Dispatch</span>
            <span className="material-symbols-outlined text-[16px]">emergency</span>
          </button>
        </div>
      )}

      {/* Main Trigger Toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary-container to-red-700 text-pure-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-transform hover:scale-105 cursor-pointer border-2 border-white"
        aria-label="Contact options"
      >
        <span className="material-symbols-outlined text-[24px] sm:text-[28px]">
          {expanded ? 'close' : 'support_agent'}
        </span>
      </button>
    </div>
  );
};
