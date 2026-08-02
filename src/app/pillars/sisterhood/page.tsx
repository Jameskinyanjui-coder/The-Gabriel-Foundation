import React from 'react';
import Link from 'next/link';
import { MENTORING_PROGRAMS } from '@/data/siteData';
import { Users, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import MentoringMatchQuiz from '@/components/MentoringMatchQuiz';

export default function MentoringOverviewPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      
      {/* Header Banner */}
      <div style={{ maxWidth: '850px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--color-primary-light)', color: 'var(--irc-orange)', border: '1px solid var(--color-primary-border)', padding: '0.35rem 0.85rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 800, marginBottom: '1rem' }}>
          <Users size={16} /> Sisterhood & Peer Empowerment
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Women's Mentorship & Support Circle</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: '1.75' }}>
          Connecting women and girls escaping violence with compassionate, trained female mentors to build confidence, heal emotional trauma, and navigate life rebuilding ("Reset Up").
        </p>
      </div>

      {/* Hero Photo Banner */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center', marginBottom: '4rem', background: '#FFFFFF', borderRadius: '16px', border: '1px solid var(--color-border)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
        <div style={{ padding: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--irc-dark)', marginBottom: '1rem' }}>
            Standing Hand-in-Hand Against Violence
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Isolation is one of the most dangerous tools used by abusers. Our Sisterhood Mentorship Network ensures no woman ever has to fight her battles alone. You will be matched with a dedicated mentor who listens, supports, and guides you toward independence.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/get-involved" className="btn btn-primary">
              Become a Female Mentor <Users size={18} />
            </Link>
            <Link href="/crisis" className="btn btn-crisis">
              Need Immediate Crisis Help? <Shield size={18} />
            </Link>
          </div>
        </div>

        <div style={{ height: '100%', minHeight: '320px', position: 'relative', background: '#111827' }}>
          <img
            src="/images/girls-power-group.jpg"
            alt="Girls Power Mentorship Group"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Interactive Quiz Matcher */}
      <div style={{ marginBottom: '4rem' }}>
        <MentoringMatchQuiz />
      </div>

      {/* Program Navigation Grid */}
      <div className="grid-2" style={{ gap: '2rem', marginBottom: '4rem' }}>
        {MENTORING_PROGRAMS.map((prog) => (
          <div key={prog.id} className="card" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '4px solid var(--irc-orange)', background: '#FFFFFF' }}>
            <div>
              <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.4rem', fontSize: '1.4rem' }}>{prog.name}</h2>
              <p style={{ fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '1rem' }}>{prog.tagline}</p>
              <p style={{ fontSize: '0.96rem', color: 'var(--color-text-main)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                {prog.description}
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)' }}>Core Features:</strong>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem' }}>
                  {prog.keyActivities.slice(0, 3).map((act, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle size={15} style={{ color: 'var(--fa-green)' }} /> {act}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link href="/crisis" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
              <span>Connect with a Mentor</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>

      {/* How Mentorship Works */}
      <div className="card" style={{ borderLeft: '5px solid var(--color-primary)', backgroundColor: '#FFFFFF', padding: '2.5rem', borderRadius: '16px' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.25rem' }}>How Our Sisterhood Mentorship Matching Works</h2>
        <div className="grid-3" style={{ gap: '1.5rem' }}>
          <div>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.4rem' }}>1. Confidential Intake</h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Survivors complete a confidential intake. Background checks and safety parameters are verified to ensure 100% security.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.4rem' }}>2. 1-on-1 Sisterhood Match</h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              You are thoughtfully paired with a background-screened mentor based on your personal goals, recovery timeline, and interests.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.4rem' }}>3. Life Reset & Healing</h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Weekly check-ins, sisterhood retreats, and continuous encouragement to achieve safe housing, independence, and psychological peace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
