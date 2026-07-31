'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Users, CheckCircle2, ArrowRight, RefreshCw, Shield, HeartHandshake, Home, Award } from 'lucide-react';
import { PROGRAM_DIVISIONS } from '@/data/siteData';

export default function MentoringMatchQuiz() {
  const [supportType, setSupportType] = useState<string | null>(null);
  const [primaryGoal, setPrimaryGoal] = useState<string | null>(null);
  const [needsHousing, setNeedsHousing] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  const resetQuiz = () => {
    setSupportType(null);
    setPrimaryGoal(null);
    setNeedsHousing(null);
    setShowResult(false);
  };

  const calculateRecommendation = () => {
    if (needsHousing) {
      return {
        program: PROGRAM_DIVISIONS.lifeReset,
        url: '/crisis/shelter-services',
        badge: 'Life Reset & Safe Housing Track',
        icon: Home,
        reason: 'Recommended because you indicated safe shelter, emergency relocation, or restarting your life in safety is your immediate focus.',
      };
    }
    if (primaryGoal === 'counseling') {
      return {
        program: PROGRAM_DIVISIONS.counseling,
        url: '/crisis/counseling',
        badge: 'Trauma Therapy & Counseling Track',
        icon: HeartHandshake,
        reason: 'Recommended for women seeking 1-on-1 confidential counseling, mental health therapy, and trauma processing support.',
      };
    }
    if (primaryGoal === 'advocacy') {
      return {
        program: PROGRAM_DIVISIONS.advocacy,
        url: '/crisis',
        badge: 'Legal Protection & Advocacy Track',
        icon: Shield,
        reason: 'Recommended for women seeking restraining orders, legal aid consultations, and advocacy in court.',
      };
    }
    return {
      program: PROGRAM_DIVISIONS.mentorship,
      url: '/mentoring',
      badge: 'Sisterhood Mentorship Track',
      icon: Users,
      reason: 'Recommended for women seeking a dedicated female mentor to build confidence, establish goals, and join survivor support circles.',
    };
  };

  const result = showResult ? calculateRecommendation() : null;

  return (
    <div className="card hero-track-mentoring" style={{ padding: '2.5rem', background: '#FFFFFF', borderRadius: '16px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ color: 'var(--irc-orange)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
          Interactive Match Screener
        </div>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--irc-dark)' }}>Find Your Best Pillar of Support</h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.96rem', marginTop: '0.35rem' }}>
          Answer 3 brief questions to receive an immediate personalized recommendation.
        </p>
      </div>

      {!showResult ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', maxWidth: '640px', margin: '0 auto' }}>
          {/* Question 1 */}
          <div>
            <label style={{ display: 'block', fontWeight: 800, fontSize: '1rem', color: 'var(--irc-dark)', marginBottom: '0.6rem' }}>
              1. What primary support are you looking for?
            </label>
            <div className="quiz-options-grid">
              {[
                { id: 'mentorship', label: '1-on-1 Female Mentorship & Sisterhood' },
                { id: 'counseling', label: 'Confidential Counseling & Therapy' },
                { id: 'advocacy', label: 'Legal Aid & Protective Orders' },
              ].map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => { setPrimaryGoal(opt.id); setSupportType(opt.id); }}
                  className={`quiz-opt-btn ${primaryGoal === opt.id ? 'active' : ''}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div>
            <label style={{ display: 'block', fontWeight: 800, fontSize: '1rem', color: 'var(--irc-dark)', marginBottom: '0.6rem' }}>
              2. Do you need emergency housing or safe shelter ("Reset Up")?
            </label>
            <div className="quiz-options-grid">
              <button
                type="button"
                onClick={() => setNeedsHousing(true)}
                className={`quiz-opt-btn ${needsHousing === true ? 'active' : ''}`}
              >
                Yes — Immediate Safe Housing Needed
              </button>
              <button
                type="button"
                onClick={() => setNeedsHousing(false)}
                className={`quiz-opt-btn ${needsHousing === false ? 'active' : ''}`}
              >
                No — Seeking Counseling/Mentorship
              </button>
            </div>
          </div>

          {/* Submit */}
          <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            <button
              onClick={() => setShowResult(true)}
              disabled={needsHousing === null}
              className="btn btn-primary"
              style={{ padding: '0.85rem 2rem', fontSize: '1rem', width: '100%', maxWidth: '320px' }}
            >
              <span>See Recommended Program</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      ) : (
        /* Result Screen */
        result && (
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto', padding: '1rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--color-primary-light)', color: 'var(--irc-orange)', border: '1px solid var(--color-primary-border)', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 800, marginBottom: '1rem' }}>
              <Award size={16} /> {result.badge}
            </div>

            <h3 style={{ fontSize: '2rem', color: 'var(--irc-dark)', marginBottom: '0.6rem' }}>
              {result.program.name}
            </h3>
            <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--irc-orange)', marginBottom: '1rem' }}>
              {result.program.tagline}
            </p>

            <p style={{ fontSize: '0.98rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              {result.reason}
            </p>

            <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '1.25rem', textAlign: 'left', marginBottom: '1.75rem', border: '1px solid var(--color-border)' }}>
              <h4 style={{ marginBottom: '0.5rem', color: 'var(--irc-dark)' }}>Key Offerings:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.92rem' }}>
                {result.program.keyActivities.map((f: string) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--fa-green)', flexShrink: 0 }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href={result.url} className="btn btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
                Access Program Details <ArrowRight size={16} />
              </Link>
              <button onClick={resetQuiz} className="btn btn-outline" style={{ padding: '0.85rem 1.5rem' }}>
                <RefreshCw size={16} /> Retake Match Screener
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
