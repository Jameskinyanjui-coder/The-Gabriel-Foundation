import React from 'react';
import { Gift, ShieldAlert, MapPin, CheckCircle2 } from 'lucide-react';
import { FOUNDATION_META } from '@/data/siteData';

export default function WishlistPage() {
  const needs = [
    "Unopened hygiene items (shampoo, soap, toothpaste, feminine hygiene)",
    "New bed pillows, twin sheet sets, and bath towels",
    "Diapers (sizes 4, 5, 6) and baby wipes",
    "New children's clothing and socks (all sizes)",
    "Non-perishable food items, canned goods, and pantry staples",
    "Gift cards for grocery stores (Walmart, Target, Kroger) for emergency resident needs"
  ];

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>In-Kind Support</span>
        <h1>2.5.4 In-Kind Donations &amp; Shelter Wish List</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Providing essential everyday supplies for families arriving at our emergency shelter.
        </p>
      </div>

      {/* Non-Negotiable Safety Safeguard Notice */}
      <div className="card callout-box-crisis" style={{ marginBottom: '2.5rem', padding: '1.75rem' }}>
        <h3 style={{ color: '#991B1B', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <ShieldAlert size={24} /> Strict Drop-Off Location SOP (SOP Section 4.1)
        </h3>
        <p style={{ fontSize: '0.98rem', lineHeight: '1.6', margin: 0 }}>
          For security and confidentiality, <strong>in-kind donation drop-offs are processed strictly via our Administrative Office / Mailing Address</strong>. In-kind donations are NEVER delivered to or dropped off at the emergency shelter facility.
        </p>
        <div style={{ fontWeight: 800, marginTop: '0.75rem', fontSize: '1rem', color: '#7F1D1D' }}>
          Drop-Off / Shipping Address: {FOUNDATION_META.adminAddress}
        </div>
      </div>

      <div className="card">
        <h2 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Gift size={24} style={{ color: 'var(--color-primary)' }} /> Current Shelter Supply Wish List
        </h2>
        <div className="grid-2">
          {needs.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.95rem' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--color-secondary)', flexShrink: 0, marginTop: '2px' }} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
