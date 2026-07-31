import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem', maxWidth: '900px' }}>
      <h1>2.10.1 Website Privacy Policy</h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Last updated: July 2026</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.7' }}>
        <section>
          <h2>1. Public Website Data Handling</h2>
          <p>
            The Gabriel Foundation respects the privacy of every site visitor. This Privacy Policy governs information collected via our public website. Please note that public website data handling is governed separately from client case file confidentiality rules (SOP Section 4.2).
          </p>
        </section>

        <section>
          <h2>2. Zero Tracking on Crisis Pages</h2>
          <p>
            In compliance with our safety protocol, no analytics scripts, advertising pixels, or third-party tracking tools are active on any Crisis Support subpages (/crisis/*) to protect visitor anonymity.
          </p>
        </section>

        <section>
          <h2>3. Information We Collect</h2>
          <p>
            We collect personal information (such as name, email, phone number) only when voluntarily submitted through our contact, volunteer, or donation forms. We never sell, trade, or lease donor or visitor information to third parties.
          </p>
        </section>
      </div>
    </div>
  );
}
