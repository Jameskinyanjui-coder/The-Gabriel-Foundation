import React from 'react';
import { Home, Zap, HeartHandshake, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function HigherGroundPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>Family Stabilization</span>
        <h1>2.3.4 Higher Ground Family Wraparound Services</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Providing holistic family stabilization through housing assistance, energy relief, and confidential intervention pathways.
        </p>
      </div>

      <div className="grid-3" style={{ marginBottom: '3rem' }}>
        {/* 2.3.4.1 Housing Assistance */}
        <div className="card">
          <Home size={32} style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }} />
          <h3>2.3.4.1 Housing Assistance</h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            Rental subsidy advocacy, rapid re-housing coordination, and emergency housing placement guidance for families experiencing lease transitions.
          </p>
        </div>

        {/* 2.3.4.2 Energy Assistance */}
        <div className="card">
          <Zap size={32} style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }} />
          <h3>2.3.4.2 Energy &amp; Utility Assistance</h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            Application assistance for federal and state utility relief grants (LIHEAP) to prevent electric, water, or heating shut-offs.
          </p>
        </div>

        {/* 2.3.4.3 Drug & Alcohol Intervention Referrals */}
        <div className="card">
          <HeartHandshake size={32} style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }} />
          <h3>2.3.4.3 Substance Recovery Referrals</h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            Confidential warm referral pathways to licensed outpatient and residential substance treatment providers in North Texas.
          </p>
        </div>
      </div>
    </div>
  );
}
