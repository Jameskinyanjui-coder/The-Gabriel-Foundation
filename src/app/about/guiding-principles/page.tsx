import React from 'react';
import Link from 'next/link';
import { GUIDING_PRINCIPLES } from '@/data/siteData';
import { ShieldCheck, Lock, Heart, CheckCircle2 } from 'lucide-react';

export default function GuidingPrinciplesPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-crisis" style={{ marginBottom: '0.75rem' }}>SOP Section 2 Standard</span>
        <h1>2.2.2 Guiding Principles</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          These six core principles govern every interaction across both our youth mentoring programs and emergency domestic violence shelter.
        </p>
      </div>

      <div className="grid-2" style={{ gap: '2rem' }}>
        {GUIDING_PRINCIPLES.map((item, idx) => (
          <div key={idx} className="card" style={{ borderLeft: '4px solid var(--color-crisis-dark)', backgroundColor: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span className="badge badge-crisis">{item.sopRef}</span>
              <ShieldCheck size={20} style={{ color: 'var(--color-crisis-dark)' }} />
            </div>
            <h3 style={{ color: 'var(--color-crisis-dark)', marginBottom: '0.75rem' }}>{item.title}</h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--color-text-main)', lineHeight: '1.6' }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="callout-box" style={{ marginTop: '3rem', backgroundColor: '#F8FAFC', borderLeftColor: 'var(--color-primary)' }}>
        <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Public Commitment to Accountability</h4>
        <p style={{ fontSize: '0.95rem', margin: 0 }}>
          Our operational principles are reviewed annually by the Executive Director, Clinical Supervisor, and Board of Directors (SOP Section 14) to maintain the highest standards of survivor safety, trauma-informed care, and non-discrimination.
        </p>
      </div>
    </div>
  );
}
