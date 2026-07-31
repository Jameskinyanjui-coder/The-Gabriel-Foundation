import React from 'react';

export default function TermsPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem', maxWidth: '900px' }}>
      <h1>2.10.2 Terms of Use</h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Last updated: July 2026</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.7' }}>
        <section>
          <h2>1. Use of Website Material</h2>
          <p>
            The content provided on this website is for informational, educational, and crisis support purposes. While we strive to maintain current legal and referral resources, website content does not constitute formal legal counsel.
          </p>
        </section>

        <section>
          <h2>2. Emergency Services Disclaimer</h2>
          <p>
            This website is not a replacement for emergency 911 services. If you are in immediate danger, please dial 911 or call our 24/7 Crisis Hotline directly.
          </p>
        </section>
      </div>
    </div>
  );
}
