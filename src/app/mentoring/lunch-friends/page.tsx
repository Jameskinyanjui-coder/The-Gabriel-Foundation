import React from 'react';
import { Briefcase, Building2, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function LunchFriendsPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>Vocational Mentorship</span>
        <h1>2.3.5 Lunch Friends Employment Focus</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Connecting North Texas job seekers with corporate mentors over interactive lunchtime skill workshops.
        </p>
      </div>

      <div className="grid-2" style={{ gap: '2rem', marginBottom: '3rem' }}>
        {/* 2.3.5.1 Job Skills Workshops */}
        <div className="card">
          <Briefcase size={32} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
          <h3>2.3.5.1 Job Skills Workshops</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
            Bi-weekly interactive workshops led by corporate volunteers covering LinkedIn optimization, salary negotiation, workplace communication, and professional dress ethics.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle size={16} style={{ color: 'var(--color-primary)' }} /> 1-on-1 resume feedback from corporate hiring managers</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle size={16} style={{ color: 'var(--color-primary)' }} /> Elevator pitch &amp; networking confidence coaching</li>
          </ul>
        </div>

        {/* 2.3.5.2 Employer Partnerships */}
        <div className="card">
          <Building2 size={32} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
          <h3>2.3.5.2 Employer Partnerships</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
            We partner with North Texas employers committed to inclusive hiring practices, providing direct job placement referrals for our program graduates.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle size={16} style={{ color: 'var(--color-primary)' }} /> Corporate volunteer lunch sponsorship opportunities</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle size={16} style={{ color: 'var(--color-primary)' }} /> Guaranteed interview matching with vetting partners</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
