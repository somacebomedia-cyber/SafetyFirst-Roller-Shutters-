import React, { useState } from 'react';
import { NavPath } from '../types';
import safetyFirstLogo from '../assets/safetyfirst-logo.png';

interface HeaderProps {
  currentPath: NavPath;
  onNavigate: (path: NavPath) => void;
  onOpenEmergencyModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenEmergencyModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; path: NavPath }[] = [
    { label: 'Home', path: 'home' },
    { label: 'Shutter Simulator', path: 'shutter-simulator' },
    { label: 'Industrial', path: 'industrial-shutters' },
    { label: 'Domestic & Commercial', path: 'commercial-domestic-shutters' },
    { label: 'Services & 24H Repairs', path: 'services-and-24h-repairs' },
    { label: 'About Us', path: 'about-us' },
    { label: 'Contact Us', path: 'contact-us' },
  ];

  const handleNavClick = (path: NavPath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-pure-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-steel-border/30">
      {/* Top Utility & Emergency Bar */}
      <div className="bg-deep-navy text-pure-white text-[11px] sm:text-[12px] leading-4 border-b border-steel-border/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12 h-8 sm:h-9 flex items-center justify-between font-technical-code">
          <div className="flex items-center gap-2 sm:gap-6 overflow-hidden text-ellipsis whitespace-nowrap">
            <a
              href="https://wa.me/27794963443?text=Hi%20SafetyFirst%20Roller%20Shutters,%20I%20would%20like%20an%20urgent%20quote%20/%20repair%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-1.5 hover:text-primary-fixed transition-colors text-[11px] sm:text-xs"
            >
              <span className="material-symbols-outlined text-[13px] sm:text-[15px] text-badge-teal">call</span>
              <span>WhatsApp: <strong>079 496 3443</strong></span>
            </a>
            <a
              href="mailto:accounts@rollerdoor.net.za"
              className="hidden md:flex items-center gap-1.5 text-steel-border/80 hover:text-pure-white transition-colors"
            >
              <span className="material-symbols-outlined text-[14px] text-surface-container-high">mail</span>
              <span>accounts@rollerdoor.net.za</span>
            </a>
            <span className="hidden xl:flex items-center gap-1.5 text-steel-border/80">
              <span className="material-symbols-outlined text-[14px] text-safety-amber">location_on</span>
              <span>378 Sydney Road, Umbilo, Durban</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-surface-container-lowest shrink-0">
            <button
              onClick={() => {
                if (onOpenEmergencyModal) {
                  onOpenEmergencyModal();
                } else {
                  handleNavClick('services-and-24h-repairs');
                }
              }}
              className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full bg-badge-teal/90 hover:bg-badge-teal text-pure-white text-[9px] sm:text-[10px] font-bold tracking-wide shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              24/7 REPAIRS
            </button>
            <span className="hidden sm:inline text-steel-border/60 text-[10px] sm:text-[11px]">DURBAN METRO</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left group shrink min-w-0 cursor-pointer"
          aria-label="SafetyFirst Roller Shutters Durban Home"
        >
          <img
            src={safetyFirstLogo}
            alt="SafetyFirst Roller Shutters"
            className="h-9 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.03]"
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 h-full">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`h-full flex items-center font-label-md text-label-md uppercase tracking-wider transition-colors px-1 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-primary-container font-bold border-b-2 border-primary-container'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons & Mobile Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('quote-and-consultation')}
            className="group inline-flex items-center justify-center bg-gradient-to-r from-red-600 via-primary-container to-red-700 hover:from-red-700 hover:to-cobalt-hover text-pure-white font-headline-sm text-xs sm:text-headline-sm uppercase px-2.5 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl shadow-md shadow-red-600/20 hover:shadow-lg hover:shadow-red-600/35 border-t border-white/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all tracking-wide cursor-pointer whitespace-nowrap"
          >
            <span className="hidden sm:inline">Request a Quote</span>
            <span className="sm:hidden">Quote</span>
          </button>

          <a
            href="tel:+27794963443"
            title="Call Workshop: 079 496 3443"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-primary to-deep-navy text-on-primary flex items-center justify-center shrink-0 shadow-md ring-2 ring-primary/20 hover:scale-105 transition-transform"
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[19px]">call</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg text-deep-navy hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-pure-white border-t border-steel-border/50 px-4 py-3 shadow-xl transition-all max-h-[calc(100vh-100px)] overflow-y-auto">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center justify-between py-2 px-3 rounded-lg text-left text-xs uppercase tracking-wider font-semibold cursor-pointer ${
                    isActive
                      ? 'bg-red-50 text-primary-container border-l-4 border-primary-container font-bold'
                      : 'text-on-surface-variant hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="material-symbols-outlined text-[16px] opacity-40">chevron_right</span>
                </button>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:+27794963443"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-deep-navy text-pure-white font-headline-sm text-xs uppercase"
              >
                <span className="material-symbols-outlined text-[16px] text-safety-amber">call</span>
                <span>Call Blackie: 079 496 3443</span>
              </a>
              <a
                href="https://wa.me/27794963443"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-badge-teal text-pure-white font-headline-sm text-xs uppercase"
              >
                <span>WhatsApp Umbilo Workshop</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
