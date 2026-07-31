import React from 'react';
import Link from 'next/link';
import { MENTORING_PROGRAMS } from '@/data/siteData';
import { Users, CheckCircle, ArrowRight, Sparkles, School } from 'lucide-react';

export default function TrailblazersPage() {
  const prog = MENTORING_PROGRAMS.find(p => p.id === 'trailblazers')!;

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>Youth Mentoring Track</span>
        <h1>2.3.2 Trailblazers Youth Mentoring</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          {prog.tagline} — {prog.audience}
        </p>
      </div>

      <div className="grid-2" style={{ marginBottom: '3rem', alignItems: 'center' }}>
        <div>
          <h2>2.3.2.1 Who It Serves</h2>
          <p style={{ fontSize: '1.02rem', lineHeight: '1.7' }}>
            Trailblazers serves North Texas middle and high school students (ages 11–18) who are navigating academic challenges, social pressures, or economic hardship. We provide a safe, encouraging space where youth develop confidence, leadership skills, and positive life goals.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>2.3.2.2 What Mentors &amp; Mentees Do Together</h3>
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
          <h3>2.3.2.3 How to Enroll a Youth</h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Referrals are welcomed from parents, legal guardians, school counselors, or self-referral.
          </p>

          <ol style={{ paddingLeft: '1.2rem', fontSize: '0.92rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
            {prog.enrollmentSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>

          <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
            <span>Submit Youth Enrollment Inquiry</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
