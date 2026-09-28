import React, { useState } from 'react';
import { NavPath } from '../types';

interface ContactUsViewProps {
  onNavigate: (path: NavPath) => void;
}

export const ContactUsView: React.FC<ContactUsViewProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('New Roller Shutter Enquiry');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);

    const whatsappMsg = encodeURIComponent(
      `*SAFETYFIRST INQUIRY FROM WEBSITE*\n\n` +
      `From: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Subject: ${subject}\n` +
      `Message: ${message}`
    );

    window.open(`https://wa.me/27794963443?text=${whatsappMsg}`, '_blank');
  };

  return (
    <div className="w-full bg-surface pb-20 pt-4 sm:pt-8 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12">
        {/* Header Breadcrumb */}
        <div className="mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container font-technical-code text-[11px] sm:text-xs uppercase mb-2 font-semibold">
            <span className="material-symbols-outlined text-[14px]">location_on</span>
            <span>Umbilo Workshop &amp; Offices</span>
          </div>
          <h1 className="font-headline-lg text-2xl sm:text-headline-lg uppercase text-on-surface leading-tight">
            Contact SafetyFirst Roller Shutters Durban
          </h1>
          <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant max-w-3xl mt-1">
            Reach out directly to our Sydney Road workshop. Whether you need a formal tender quote, an urgent breakdown callout, or want to inspect physical door profiles in person.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-deep-navy text-pure-white rounded-3xl p-6 sm:p-8 shadow-xl border border-steel-border/20">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed font-bold block mb-1">
                Workshop Headquarters
              </span>
              <h2 className="font-headline-md text-headline-md uppercase text-pure-white mb-6">
                378 Sydney Road, Umbilo
              </h2>

              <div className="space-y-6 font-body-sm text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-badge-teal/20 text-badge-teal border border-badge-teal/30 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <div>
                    <strong className="text-pure-white block text-sm">Physical Address:</strong>
                    <span className="text-steel-border/80">
                      378 Sydney Road, Umbilo, Durban<br />
                      KwaZulu-Natal, 4001, South Africa
                    </span>
                    <span className="text-[11px] font-technical-code text-safety-amber block mt-1">
                      (Just off the M4 Southern Freeway / Congella interchange)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-badge-teal/20 text-badge-teal border border-badge-teal/30 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">call</span>
                  </div>
                  <div>
                    <strong className="text-pure-white block text-sm">Phone &amp; WhatsApp:</strong>
                    <a href="tel:+27794963443" className="text-primary-fixed hover:underline block font-bold">
                      079 496 3443 (+27 79 496 3443)
                    </a>
                    <span className="text-steel-border/80 text-xs">Direct to Blackie (Founder / Master Fabricator)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-badge-teal/20 text-badge-teal border border-badge-teal/30 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div>
                    <strong className="text-pure-white block text-sm">Email Correspondence:</strong>
                    <a href="mailto:accounts@rollerdoor.net.za" className="text-primary-fixed hover:underline block">
                      accounts@rollerdoor.net.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-badge-teal/20 text-badge-teal border border-badge-teal/30 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">schedule</span>
                  </div>
                  <div>
                    <strong className="text-pure-white block text-sm">Workshop Operating Hours:</strong>
                    <div className="text-steel-border/80 text-xs space-y-0.5 mt-1 font-technical-code">
                      <p>Monday – Thursday: 07:30 – 16:30</p>
                      <p>Friday: 07:30 – 15:30</p>
                      <p>Saturday: 08:00 – 12:00 (Collections &amp; Urgent)</p>
                      <p className="text-safety-amber font-bold pt-1">
                        24/7 Breakdown Dispatch: 24 Hours / 7 Days
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-steel-border/20 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/27794963443"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] py-3 rounded-xl bg-badge-teal hover:bg-teal-600 text-pure-white font-headline-sm text-xs uppercase font-bold text-center shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span>WhatsApp Blackie</span>
                </a>
                <a
                  href="tel:+27794963443"
                  className="flex-1 min-w-[140px] py-3 rounded-xl bg-primary-container hover:bg-cobalt-hover text-pure-white font-headline-sm text-xs uppercase font-bold text-center shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  <span>Direct Call</span>
                </a>
              </div>
            </div>

            {/* Quick directions tip */}
            <div className="p-6 rounded-3xl bg-pure-white border border-slate-200/90 shadow-sm">
              <h4 className="font-headline-sm text-sm uppercase text-on-surface mb-2 font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-badge-teal">directions_car</span>
                <span>Directions from Durban Port &amp; N3</span>
              </h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Take the M4 Southern Freeway exit onto Umbilo Road / Sydney Road. Our workshop is located at 378 Sydney Road on the harbour side with off-street customer parking and heavy logistics truck loading bays.
              </p>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 bg-pure-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-1">
              Send A Message
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface mb-2 leading-tight">
              Get In Touch With Our Team
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Fill out the form below and we will respond promptly during business hours.
            </p>

            {sent ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-[28px]">check</span>
                </div>
                <h3 className="font-headline-sm text-base uppercase text-emerald-900 font-bold">
                  Message Dispatched!
                </h3>
                <p className="text-xs text-emerald-800">
                  Thank you, {name}. Your inquiry has been forwarded to Blackie and the accounts team. A response is being prepared.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-5 py-2 rounded-xl bg-emerald-700 text-pure-white text-xs font-bold uppercase transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Moodley"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="082 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="david@example.co.za"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                      Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    >
                      <option value="New Roller Shutter Enquiry">New Roller Shutter Enquiry</option>
                      <option value="Urgent 24/7 Breakdown Repair">Urgent 24/7 Breakdown Repair</option>
                      <option value="Free Durban Site Survey Request">Free Durban Site Survey Request</option>
                      <option value="Spare Parts & Counterbalance Springs">Spare Parts &amp; Counterbalance Springs</option>
                      <option value="Corporate Tender / Maintenance Contract">Corporate Tender / Maintenance Contract</option>
                      <option value="Accounts & Invoicing">Accounts &amp; Invoicing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-on-surface mb-1">
                    Your Message / Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details about door dimensions, warehouse location, or repair issues..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-primary-container to-red-700 hover:from-red-700 hover:to-cobalt-hover text-pure-white font-headline-sm text-sm uppercase shadow-lg shadow-red-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>Transmit Inquiry To Sydney Road Office</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
