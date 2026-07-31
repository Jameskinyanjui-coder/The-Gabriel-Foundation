import React from 'react';
import Link from 'next/link';
import { GraduationCap, Briefcase, Laptop, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TurnaroundPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>Life Skills &amp; Career Prep</span>
        <h1>2.3.3 Turnaround Program</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Equipping women and young adult women with essential life reset skills for personal independence and career success.
        </p>
      </div>

      <div className="grid-3" style={{ marginBottom: '3rem' }}>
        {/* 2.3.3.1 College Prep Track */}
        <div className="card hero-track-mentoring">
          <GraduationCap size={32} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
          <h3>2.3.3.1 College Preparation Track</h3>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} /> FAFSA &amp; Financial Aid Assistance</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} /> Admissions Essay Coaching</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} /> North Texas College Campus Tours</li>
          </ul>
        </div>

        {/* 2.3.3.2 Job Interview & Resume */}
        <div className="card hero-track-mentoring">
          <Briefcase size={32} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
          <h3>2.3.3.2 Job Interview &amp; Resume Track</h3>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} /> Professional Resume Styling</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} /> Mock Interview Practice Sessions</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} /> Professional Attire Closet Access</li>
          </ul>
        </div>

        {/* 2.3.3.3 Computer & Leadership */}
        <div className="card hero-track-mentoring">
          <Laptop size={32} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
          <h3>2.3.3.3 Computer &amp; Leadership Track</h3>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} /> Digital Literacy Certification</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} /> Personal Finance &amp; Budgeting</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} /> Public Speaking &amp; Leadership Workshops</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link href="/contact" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
          <span>Register for Turnaround Program Cohort</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
