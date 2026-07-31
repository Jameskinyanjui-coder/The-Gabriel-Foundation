import React from 'react';
import { ShieldCheck, PhoneCall, FileText } from 'lucide-react';
import { FOUNDATION_META } from '@/data/siteData';

export default function ProfessionalReferralsPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-crisis" style={{ marginBottom: '0.75rem' }}>Professional Intake</span>
        <h1>2.4.7 Professional Referrals</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Guidelines for law enforcement officers, healthcare providers, social workers, and clergy making client referrals.
        </p>
      </div>

      <div className="card" style={{ marginBottom: '2.5rem', borderLeft: '4px solid var(--color-crisis-dark)' }}>
        <h2>Making a Confidential Referral</h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', marginTop: '0.75rem' }}>
          To maintain absolute shelter security (SOP 4.1), professional referral sources should contact our 24/7 Crisis Hotline alongside the client or provide our contact information directly to the survivor.
        </p>

        <div className="callout-box" style={{ backgroundColor: '#F0F7F9', borderLeftColor: 'var(--color-crisis-dark)', marginTop: '1.25rem' }}>
          <strong style={{ fontSize: '1.1rem', color: 'var(--color-crisis-dark)' }}>
            Professional Intake Hotline: {FOUNDATION_META.crisisLine247}
          </strong>
          <p style={{ fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>
            Advocates are available 24 hours a day to verify bed availability, conduct danger screening, and coordinate secure intake transport.
          </p>
        </div>
      </div>
    </div>
  );
}
