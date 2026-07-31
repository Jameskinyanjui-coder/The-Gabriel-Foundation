import React from 'react';
import { FOUNDATION_META } from '@/data/siteData';
import { MapPin, ShieldAlert, CheckCircle } from 'lucide-react';

export default function ServiceAreaPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>Regional Reach</span>
        <h1>2.2.4 Service Area</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Serving Greater Farmers Branch and the surrounding North Texas metropolitan region.
        </p>
      </div>

      <div className="card" style={{ marginBottom: '2.5rem', padding: '2.5rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem' }}>
          <MapPin size={32} style={{ color: 'var(--color-primary)' }} />
          <div>
            <h3 style={{ margin: 0 }}>Primary Geographic Scope</h3>
            <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>Dallas County &amp; Surrounding North Texas Municipalities</p>
          </div>
        </div>

        <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
          The Gabriel Foundation provides youth mentoring, family wraparound assistance, and domestic violence crisis counseling across Farmers Branch, Dallas, Carrollton, Irving, Lewisville, and adjacent North Texas communities.
        </p>

        <div className="callout-box callout-box-crisis" style={{ marginTop: '1.5rem' }}>
          <strong style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ShieldAlert size={18} /> Confidential Location Safeguard (SOP Section 4.1):
          </strong>
          <p style={{ fontSize: '0.92rem', margin: '0.5rem 0 0 0' }}>
            For the safety of shelter residents and staff, our physical emergency shelter address, cross-streets, and facility photographs are strictly confidential and are never published online or disclosed to the public. All administrative mail is processed via our P.O. Box mailing address.
          </p>
        </div>
      </div>
    </div>
  );
}
