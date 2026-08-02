import React from 'react';
import Link from 'next/link';
import { MENTORING_PROGRAMS } from '@/data/siteData';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function TrailblazersPage() {
  const prog = MENTORING_PROGRAMS.find(p => p.id === 'mentorship') || MENTORING_PROGRAMS[0];

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>Women's Mentorship Track</span>
        <h1>1-on-1 Sisterhood Mentorship</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          {prog.tagline} — {prog.audience}
        </p>
      </div>

      <div className="grid-2" style={{ marginBottom: '3rem', alignItems: 'center' }}>
        <div>
          <h2>Who It Serves</h2>
          <p style={{ fontSize: '1.02rem', lineHeight: '1.7' }}>
            Empowerment &amp; Sisterhood Mentorship serves women navigating life transitions, emotional recovery, or seeking personal and professional guidance after experiencing hardship or abuse. We provide a safe, encouraging space where women build confidence, self-worth, and resilience.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>Key Activities &amp; Support</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {prog.keyActivities.map((act, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--color-primary)' }} />
                <span>{act}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card" style={{ borderTop: '4px solid var(--color-primary)', backgroundColor: '#FFFDF9' }}>
          <h3>How to Connect with a Mentor</h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Intake requests are open for mentees and volunteer mentor applications.
          </p>

          <ol style={{ paddingLeft: '1.2rem', fontSize: '0.92rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
            {prog.enrollmentSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>

          <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
            <span>Submit Mentorship Inquiry</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
