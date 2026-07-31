import React from 'react';
import { Lock, ShieldAlert, Laptop, EyeOff, ExternalLink } from 'lucide-react';

export default function PrivacySafetyPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-crisis" style={{ marginBottom: '0.75rem' }}>SOP Section 4 Standard</span>
        <h1>2.4.5 Your Privacy &amp; Technology Safety</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Understanding digital tracking risks and our absolute commitment to survivor confidentiality.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* 2.4.5.1 Confidentiality Commitment */}
        <div className="card" style={{ borderLeft: '4px solid var(--color-crisis-dark)' }}>
          <h2 style={{ color: 'var(--color-crisis-dark)', fontSize: '1.35rem', marginBottom: '0.5rem' }}>
            2.4.5.1 Confidentiality Commitment (VAWA &amp; FVPSA Aligned)
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            Under the Violence Against Women Act (VAWA) and Family Violence Prevention and Services Act (FVPSA) standards (SOP Section 4.1 &amp; 4.2), The Gabriel Foundation strictly protects client identity, records, and shelter residence. We will never confirm or deny a resident&apos;s presence to any third party without an explicit, voluntary, time-limited written Release of Information signed by the client.
          </p>
        </div>

        {/* 2.4.5.2 Technology Safety Tips */}
        <div className="card callout-box-crisis">
          <h2 style={{ color: '#991B1B', fontSize: '1.35rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Laptop size={24} /> 2.4.5.2 Critical Technology &amp; Digital Safety Tips (SOP Section 4.3)
          </h2>
          <ul style={{ paddingLeft: '1.2rem', fontSize: '0.98rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#7F1D1D' }}>
            <li>
              <strong>Browser History Clearing:</strong> Internet browsing can be monitored by an abuser. Always clear your cache and history after visiting crisis sites, or use InPrivate / Incognito mode.
            </li>
            <li>
              <strong>Use a Safe Device:</strong> If you suspect your phone or computer has spyware or location tracking, try to use a trusted friend&apos;s phone, library computer, or a safe prepaid device.
            </li>
            <li>
              <strong>GPS &amp; Location Tracking:</strong> Disable location permissions for social media apps, vehicle GPS tracking, and shared family phone accounts.
            </li>
            <li>
              <strong>Email &amp; Password Security:</strong> Change account passwords from a safe computer and enable multi-factor authentication sent to a private phone number.
            </li>
          </ul>
        </div>

        {/* 2.4.5.3 Quick-Exit Instructions */}
        <div className="card" style={{ borderLeft: '4px solid var(--color-alert-red)' }}>
          <h2 style={{ color: 'var(--color-alert-red)', fontSize: '1.35rem', marginBottom: '0.5rem' }}>
            2.4.5.3 Quick-Exit Instructions
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            If an abuser enters the room while you are reading this website, click the red <strong>QUICK EXIT</strong> button at the top right of your screen or press the <code>Escape (ESC)</code> key on your keyboard. Your browser session will immediately be replaced with Weather.com to prevent an abuser from using your back button.
          </p>
        </div>
      </div>
    </div>
  );
}
