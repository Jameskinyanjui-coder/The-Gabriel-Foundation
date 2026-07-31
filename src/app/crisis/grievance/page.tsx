import React from 'react';
import { Shield, Clock, FileCheck, CheckCircle2 } from 'lucide-react';

export default function GrievanceProcedurePage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-crisis" style={{ marginBottom: '0.75rem' }}>SOP Section 14 Standard</span>
        <h1>2.4.8 Resident Rights &amp; Grievance Procedure</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Ensuring dignified, trauma-informed care and formal conflict resolution without fear of retaliation.
        </p>
      </div>

      <div className="grid-2" style={{ gap: '2rem', marginBottom: '3rem' }}>
        <div className="card" style={{ borderLeft: '4px solid var(--color-crisis-dark)' }}>
          <h3>Resident Rights Commitment</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-text-main)' }}>
            Every shelter resident has the right to safe, dignified, non-discriminatory care (SOP 2.5). Residents may express concerns, request case manager reassignments, or submit formal grievances without fear of losing housing or program access.
          </p>
        </div>

        <div className="card" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
          <h3>5-Business-Day Written Response Guarantee (SOP 14.1)</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-text-main)' }}>
            Written grievances submitted to the Shelter Manager or Executive Director are formally investigated. The Foundation guarantees a written response, resolution review, and outcome explanation within 5 business days.
          </p>
        </div>
      </div>
    </div>
  );
}
