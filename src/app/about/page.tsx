import React from 'react';
import Link from 'next/link';
import { FOUNDATION_META, GUIDING_PRINCIPLES } from '@/data/siteData';
import { Heart, ShieldCheck, Award, ArrowRight, FileText, Users, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '850px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem', fontSize: '0.85rem', padding: '0.4rem 0.9rem' }}>About The Gabriel Foundation</span>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Mission: Protecting Women & Rebuilding Lives</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
          Dedicated to ending violence against women through sisterhood mentorship, trauma counseling, emergency safe housing, and complete life reset ("Reset Up") support.
        </p>
      </div>

      {/* Hero Visual Section */}
      <div className="grid-2" style={{ marginBottom: '4rem', alignItems: 'center', gap: '2.5rem' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--irc-dark)' }}>
            Empowering Women to Break Free from Violence
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '1.2rem' }}>
            {FOUNDATION_META.history}
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '1.5rem' }}>
            Under the leadership of Founder <strong>Ruth M. Kinyanjui</strong>, The Gabriel Foundation bridges immediate emergency safety with long-term sisterhood mentorship and psychological counseling. We ensure that every woman escaping abuse receives the tools, dignity, and resources to rebuild her life safely.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/crisis" className="btn btn-crisis">
              <Shield size={18} /> Emergency Crisis Line
            </Link>
            <Link href="/pillars/sisterhood" className="btn btn-primary">
              <Users size={18} /> Mentorship & Reset Services
            </Link>
          </div>
        </div>

        <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border)' }}>
          <img
            src="/images/future-is-female-activism.jpg"
            alt="The Future is Female - Amplifying Women's Voices"
            style={{ width: '100%', height: '360px', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Community Life Reset Banner */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center', background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)', marginBottom: '4rem' }}>
        <div style={{ height: '300px', borderRadius: '12px', overflow: 'hidden' }}>
          <img
            src="/images/women-community-support.jpg"
            alt="Community Support & Life Reset"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div>
          <span style={{ color: 'var(--fa-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem' }}>
            Community Sanctuary
          </span>
          <h2 style={{ fontSize: '1.8rem', marginTop: '0.4rem', marginBottom: '1rem' }}>
            Building a Sanctuary of Sisterhood & Recovery
          </h2>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, fontSize: '1rem', marginBottom: '1.5rem' }}>
            Our community safe house programs provide hot meals, private rooms, legal advocacy for restraining orders, and warm peer circles where women heal from domestic trauma and regain independence.
          </p>
          <Link href="/donate" className="btn btn-donate-now">
            <Heart size={18} fill="var(--irc-dark)" /> Support Our Shelter & Reset Fund
          </Link>
        </div>
      </div>

      {/* Guiding Operating Principles */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '2.1rem', marginBottom: '0.5rem' }}>Guiding Operating Principles</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Standards strictly governing our emergency shelter, counseling, and mentorship practices</p>
        </div>

        <div className="grid-3" style={{ gap: '1.5rem' }}>
          {GUIDING_PRINCIPLES.map((principle, idx) => (
            <div key={idx} className="card" style={{ borderTop: '4px solid var(--irc-orange)', padding: '1.75rem' }}>
              <span className="badge badge-crisis" style={{ marginBottom: '0.75rem' }}>{principle.sopRef}</span>
              <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-crisis-dark)', fontSize: '1.15rem' }}>{principle.title}</h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
