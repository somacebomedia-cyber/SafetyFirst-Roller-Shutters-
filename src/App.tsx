/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavPath, ShutterConfig } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ShutterSimulator } from './components/ShutterSimulator';
import { IndustrialShuttersView } from './components/IndustrialShuttersView';
import { CommercialDomesticView } from './components/CommercialDomesticView';
import { ServicesRepairsView } from './components/ServicesRepairsView';
import { AboutUsView } from './components/AboutUsView';
import { QuoteConsultationView } from './components/QuoteConsultationView';
import { ContactUsView } from './components/ContactUsView';
import { EmergencyModal } from './components/EmergencyModal';
import { FloatingContactWidget } from './components/FloatingContactWidget';

export default function App() {
  const [currentPath, setCurrentPath] = useState<NavPath>('home');
  const [preconfiguredConfig, setPreconfiguredConfig] = useState<ShutterConfig | null>(null);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState<boolean>(false);

  const handleNavigate = (path: NavPath) => {
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTransferToQuote = (config: ShutterConfig) => {
    setPreconfiguredConfig(config);
    setCurrentPath('quote-and-consultation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePreconfigure = (partialConfig: Partial<ShutterConfig>) => {
    setPreconfiguredConfig((prev) => ({
      widthMeters: partialConfig.widthMeters ?? prev?.widthMeters ?? 4.0,
      heightMeters: partialConfig.heightMeters ?? prev?.heightMeters ?? 3.2,
      doorStyle: partialConfig.doorStyle ?? prev?.doorStyle ?? 'roller',
      material: partialConfig.material ?? prev?.material ?? 'galvanised-steel',
      color: partialConfig.color ?? prev?.color ?? 'charcoal',
      environment: partialConfig.environment ?? prev?.environment ?? 'industrial',
      slatType: partialConfig.slatType ?? prev?.slatType ?? 'solid',
      gauge: partialConfig.gauge ?? prev?.gauge ?? '1.0mm',
      operation: partialConfig.operation ?? prev?.operation ?? 'motor-flange',
      finish: partialConfig.finish ?? prev?.finish ?? 'galvanised',
      windLocks: partialConfig.windLocks ?? prev?.windLocks ?? true,
      hasBatteryBackup: partialConfig.hasBatteryBackup ?? prev?.hasBatteryBackup ?? true,
    }));
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col font-body-md text-on-surface antialiased selection:bg-primary selection:text-on-primary">
      {/* Top Header */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-[96px] sm:pt-[116px] bg-surface flex-1 min-h-[calc(100vh-96px)] sm:min-h-[calc(100vh-116px)]">
        {currentPath === 'home' && <HomeView onNavigate={handleNavigate} />}

        {currentPath === 'shutter-simulator' && (
          <ShutterSimulator onTransferToQuote={handleTransferToQuote} />
        )}

        {currentPath === 'industrial-shutters' && (
          <IndustrialShuttersView
            onNavigate={handleNavigate}
            onPreconfigureQuote={handlePreconfigure}
          />
        )}

        {currentPath === 'commercial-domestic-shutters' && (
          <CommercialDomesticView
            onNavigate={handleNavigate}
            onPreconfigureQuote={handlePreconfigure}
          />
        )}

        {currentPath === 'services-and-24h-repairs' && (
          <ServicesRepairsView onNavigate={handleNavigate} />
        )}

        {currentPath === 'about-us' && <AboutUsView onNavigate={handleNavigate} />}

        {currentPath === 'quote-and-consultation' && (
          <QuoteConsultationView
            onNavigate={handleNavigate}
            preconfiguredConfig={preconfiguredConfig}
          />
        )}

        {currentPath === 'contact-us' && <ContactUsView onNavigate={handleNavigate} />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* 24/7 Emergency Dispatch Modal */}
      <EmergencyModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
        onNavigateToServices={() => handleNavigate('services-and-24h-repairs')}
      />

      {/* Floating Action Button for Quick Calls & WhatsApp */}
      <FloatingContactWidget
        onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
      />
    </div>
  );
}
