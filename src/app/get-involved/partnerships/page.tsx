import React from 'react';
import { Building2, HeartHandshake, Award } from 'lucide-react';
import Link from 'next/link';

export default function PartnershipsPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>Corporate Engagement</span>
        <h1>2.5.3 Corporate &amp; Community Partnerships</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Partnering with North Texas corporations and foundations to fund life-changing mentoring and shelter programs.
        </p>
      </div>

      <div className="grid-3" style={{ gap: '2rem' }}>
        <div className="card hero-track-mentoring">
          <Building2 size={32} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
          <h3>Program Sponsorship</h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            Directly sponsor a Trailblazers youth mentoring cohort or fund emergency safe nights for shelter residents.
          </p>
        </div>

        <div className="card hero-track-mentoring">
          <HeartHandshake size={32} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
          <h3>Lunch Friends Mentoring</h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            Host lunchtime career workshops where corporate employees mentor young adults on resume building and workplace skills.
          </p>
        </div>

        <div className="card hero-track-mentoring">
          <Award size={32} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
          <h3>Matching Gifts &amp; Grants</h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            Double your impact through corporate matching gift programs and targeted community foundation grant allocations.
          </p>
        </div>
      </div>
    </div>
  );
}
