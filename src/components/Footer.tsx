import React from 'react';
import { NavPath } from '../types';
import safetyFirstLogo from '../assets/safetyfirst-logo.png';

interface FooterProps {
  onNavigate: (path: NavPath) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (path: NavPath) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-deep-navy text-steel-border border-t-2 border-primary-container">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-pure-white px-3 py-2 rounded-xl shadow-md border border-steel-border/20 inline-block">
                <img
                  src={safetyFirstLogo}
                  alt="SafetyFirst Roller Shutters"
                  className="h-9 sm:h-11 w-auto object-contain"
                />
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-steel-border/80 max-w-md">
              Precision-engineered physical security and custom industrial shutter manufacturing for South African industrial zones, logistics parks, marine port facilities, and Durban commercial properties.
            </p>
            <div className="pt-2 space-y-2 text-xs font-technical-code text-steel-border/70">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-badge-teal">verified</span>
                <span>SABS ISO 9001 Compliant Manufacturing Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-safety-amber">domain</span>
                <span>SafetyFirst Industrial Doors (Pty) Ltd | Reg. 2012/084920/07</span>
              </div>
            </div>
          </div>

          {/* Security Shutters */}
          <div>
            <h4 className="font-headline-sm text-headline-sm text-pure-white uppercase tracking-wider mb-4 border-b border-steel-border/20 pb-2">
              Security Shutters
            </h4>
            <ul className="space-y-2 font-body-sm text-body-sm text-steel-border/80">
              <li>
                <button
                  onClick={() => handleNavClick('industrial-shutters')}
                  className="hover:text-pure-white transition-colors text-left"
                >
                  Heavy-Duty Solid Steel
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('industrial-shutters')}
                  className="hover:text-pure-white transition-colors text-left"
                >
                  Perforated &amp; Punched Slats
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('commercial-domestic-shutters')}
                  className="hover:text-pure-white transition-colors text-left"
                >
                  Commercial Fenestra Grilles
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('commercial-domestic-shutters')}
                  className="hover:text-pure-white transition-colors text-left"
                >
                  Domestic Aluminium Roll-Ups
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('industrial-shutters')}
                  className="hover:text-pure-white transition-colors text-left"
                >
                  Coastal Anti-Corrosion Range
                </button>
              </li>
            </ul>
          </div>

          {/* Emergency & Tech */}
          <div>
            <h4 className="font-headline-sm text-headline-sm text-pure-white uppercase tracking-wider mb-4 border-b border-steel-border/20 pb-2">
              Emergency &amp; Tech
            </h4>
            <ul className="space-y-2 font-body-sm text-body-sm text-steel-border/80">
              <li>
                <button
                  onClick={() => handleNavClick('services-and-24h-repairs')}
                  className="hover:text-pure-white transition-colors text-left"
                >
                  24/7 Emergency Repairs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services-and-24h-repairs')}
                  className="hover:text-pure-white transition-colors text-left"
                >
                  Spring Replacements &amp; Motors
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services-and-24h-repairs')}
                  className="hover:text-pure-white transition-colors text-left"
                >
                  Preventative Maintenance
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('shutter-simulator')}
                  className="hover:text-pure-white transition-colors text-left"
                >
                  Custom Sizing Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('quote-and-consultation')}
                  className="hover:text-pure-white transition-colors text-left"
                >
                  On-Site Assessment Request
                </button>
              </li>
            </ul>
          </div>

          {/* Durban Workshop */}
          <div>
            <h4 className="font-headline-sm text-headline-sm text-pure-white uppercase tracking-wider mb-4 border-b border-steel-border/20 pb-2">
              Durban Workshop
            </h4>
            <div className="space-y-3 font-body-sm text-body-sm text-steel-border/80">
              <p className="text-xs text-pure-white font-semibold leading-relaxed">
                378 Sydney Road, Umbilo<br />
                Durban, KwaZulu-Natal, 4001
              </p>
              <p className="text-xs leading-relaxed">
                Direct Line: 079 496 3443<br />
                WhatsApp: +27 79 496 3443<br />
                Email: accounts@rollerdoor.net.za
              </p>
              <div className="pt-2">
                <span className="inline-block bg-safety-amber/20 border border-safety-amber text-safety-amber px-2.5 py-1 text-[11px] font-bold uppercase rounded-md">
                  Rapid Response Unit Durban Metro
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-12 pt-8 border-t border-steel-border/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-technical-code text-steel-border/60">
          <div>© 2025 SafetyFirst Roller Shutters (Pty) Ltd. Durban, South Africa. All Rights Reserved.</div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>SABS Compliant Fabrication</span>
            <span>VAT No: 4890261944</span>
            <span>B-BBEE Level 2 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
