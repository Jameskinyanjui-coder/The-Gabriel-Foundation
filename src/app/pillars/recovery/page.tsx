import React from 'react';
import { HeartHandshake, ShieldCheck, FileText, Scale } from 'lucide-react';

export default function CounselingPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-crisis" style={{ marginBottom: '0.75rem' }}>SOP Section 8 Standard</span>
        <h1>2.4.3 Counseling &amp; Group Therapy</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Trauma-informed, evidence-based psychological support delivered by licensed clinicians.
        </p>
      </div>

      <div className="grid-2" style={{ gap: '2rem', marginBottom: '3rem' }}>
        {/* 2.4.3.1 Individual Counseling */}
        <div className="card hero-track-crisis">
          <HeartHandshake size={32} style={{ color: 'var(--color-crisis-dark)', marginBottom: '0.75rem' }} />
          <h3>2.4.3.1 Individual Counseling Overview</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', lineHeight: '1.6' }}>
            Following intake, residents are scheduled for psychosocial assessments and one-on-one counseling sessions with a Licensed Clinical Social Worker (LCSW) or Licensed Professional Counselor (LPC). Sessions focus on processing trauma, managing anxiety/PTSD symptoms, and fostering emotional empowerment (SOP 8.2).
          </p>
        </div>

        {/* 2.4.3.2 Group Therapy */}
        <div className="card hero-track-crisis">
          <ShieldCheck size={32} style={{ color: 'var(--color-crisis-dark)', marginBottom: '0.75rem' }} />
          <h3>2.4.3.2 Group Therapy &amp; Support Groups</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', lineHeight: '1.6' }}>
            Weekly peer support groups provide a safe, confidential environment for survivors to connect, share experiences, and learn healthy boundary creation, coping strategies, and self-worth restoration (SOP 8.3).
          </p>
        </div>
      </div>

      {/* 2.4.3.3 Clinical Standards */}
      <div className="card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--color-crisis-dark)' }}>
        <h3>2.4.3.3 Our Clinical Standards (SOP Section 8.1)</h3>
        <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
          All counseling services operate under strict clinical supervision of a state-licensed supervisor. Counseling participation is 100% voluntary and survivor-centered. Clients may opt in or out of therapy at any point without impacting their emergency shelter stay or case management access.
        </p>
      </div>

      {/* 2.4.3.4 Legal Disclosures [NEW] */}
      <div className="card callout-box" style={{ backgroundColor: '#F8FAFC', borderLeftColor: '#0284C7', padding: '1.75rem' }}>
        <h3 style={{ color: '#0369A1', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <Scale size={22} /> 2.4.3.4 Legal Disclosures: Mandated Reporting &amp; Duty to Warn (SOP Section 8.4)
        </h3>
        <p style={{ fontSize: '0.92rem', lineHeight: '1.6', color: 'var(--color-text-main)', margin: 0 }}>
          Client disclosures in counseling are protected under strict confidentiality. However, per Texas State Law (SOP 8.4), clinicians are mandated reporters and must break confidentiality only in specific statutory circumstances: (1) suspected abuse or neglect of a child, elderly person, or vulnerable adult, or (2) clear evidence of imminent danger of severe physical harm to self or others.
        </p>
      </div>
    </div>
  );
}
