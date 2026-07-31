import React from 'react';
import { FOUNDATION_META } from '@/data/siteData';

export default function TaxExemptPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem', maxWidth: '900px' }}>
      <h1>2.10.5 501(c)(3) Tax-Exempt Status Disclosure</h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Public Fiscal Disclosure</p>

      <div className="card" style={{ lineHeight: '1.7' }}>
        <p style={{ fontSize: '1.05rem' }}>
          The Gabriel Foundation is a recognized tax-exempt public charity under Section 501(c)(3) of the Internal Revenue Code. Contributions to The Gabriel Foundation are tax-deductible to the fullest extent permitted by law.
        </p>
        <div style={{ marginTop: '1.25rem', padding: '1rem', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
          <strong>Employer Identification Number (EIN):</strong> {FOUNDATION_META.ein}
        </div>
      </div>
    </div>
  );
}
