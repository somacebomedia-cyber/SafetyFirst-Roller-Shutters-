export type NavPath =
  | 'home'
  | 'about-us'
  | 'industrial-shutters'
  | 'commercial-domestic-shutters'
  | 'services-and-24h-repairs'
  | 'shutter-simulator'
  | 'quote-and-consultation'
  | 'contact-us';

export type DoorStyle = 'roller' | 'sectional' | 'rapid-roll' | 'perforated' | 'fenestra';
export type DoorMaterial = 'galvanised-steel' | 'aluminium' | 'insulated-pu' | 'polycarbonate';
export type DoorColor =
  | 'charcoal'
  | 'traffic-white'
  | 'coastal-bronze'
  | 'dove-grey'
  | 'galvanised'
  | 'signal-blue'
  | 'crimson-red'
  | 'safety-red'
  | 'jet-black';

export type OpeningEnvironment = 'industrial' | 'domestic' | 'commercial';

export type SlatType = 'solid' | 'perforated' | 'fenestra' | 'aluminium';
export type OperationType = 'manual-push' | 'chain-hoist' | 'motor-flange' | 'tubular-ups';
export type SteelGauge = '0.8mm' | '1.0mm' | '1.2mm';
export type SlatFinish = 'galvanised' | 'charcoal' | 'traffic-white' | 'bronze' | 'dove-grey' | 'custom-ral' | 'safety-red';

export interface ShutterConfig {
  widthMeters: number;
  heightMeters: number;
  doorStyle: DoorStyle;
  material: DoorMaterial;
  color: DoorColor;
  environment: OpeningEnvironment;
  gauge?: SteelGauge;
  operation: OperationType;
  windLocks: boolean;
  hasBatteryBackup: boolean;
  slatType?: SlatType;
  finish?: SlatFinish;
}

export interface QuoteFormData {
  customerName: string;
  companyName?: string;
  phone: string;
  email: string;
  locationArea: string;
  installationType: 'new-installation' | 'replacement' | 'emergency-repair' | 'maintenance';
  doorStyle: DoorStyle;
  material: DoorMaterial;
  color: DoorColor;
  environment: OpeningEnvironment;
  widthMeters: number;
  heightMeters: number;
  operation: OperationType;
  notes: string;
  preferredContact: 'whatsapp' | 'phone' | 'email';
}

export interface EmergencyRepairRequest {
  fullName: string;
  contactNumber: string;
  facilityLocation: string;
  urgency: 'critical-blocked' | 'urgent-today' | 'routine-repair';
  issueType: 'truck-impact' | 'snapped-spring' | 'motor-failure' | 'derailed-curtain' | 'lock-jammed' | 'other';
  notes: string;
}
