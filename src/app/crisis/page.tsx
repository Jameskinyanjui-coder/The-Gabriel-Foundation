import React from 'react';
import Link from 'next/link';
import { CRISIS_SERVICES, FOUNDATION_META } from '@/data/siteData';
import { Shield, PhoneCall, Lock, AlertTriangle, ArrowRight, CheckCircle2, HeartHandshake, ShieldAlert } from 'lucide-react';
import IntakeScreener from '@/components/IntakeScreener';
import SafetyPlanGenerator from '@/components/SafetyPlanGenerator';

export default function CrisisOverviewPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      
      {/* 24/7 Crisis & Emergency Safety Banner */}
      <div style={{ backgroundColor: 'var(--hrc-blue)', color: 'white', padding: '2.5rem', borderRadius: '16px', marginBottom: '3rem', borderLeft: '8px solid var(--hrc-yellow)', boxShadow: 'var(--shadow-lg)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ maxWidth: '650px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(239,68,68,0.5)', color: '#FCA5A5', padding: '0.35rem 0.8rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              <ShieldAlert size={16} /> 24/7 Women's Emergency Crisis Helpline
            </div>
            <h1 style={{ color: 'white', margin: '0.2rem 0 0.75rem 0', fontSize: '2.4rem' }}>Emergency Crisis & Safe Reset Center</h1>
            <p style={{ color: '#E2E8F0', fontSize: '1.1rem', margin: 0, lineHeight: 1.6 }}>
              Free, 100% confidential emergency shelter lodging, trauma counseling, and relocation support ("Reset Up") for women and children escaping domestic violence or abuse.
            </p>
          </div>

          <div style={{ backgroundColor: '#111827', padding: '1.5rem', borderRadius: '12px', border: '1px solid #374151', maxWidth: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: '0.82rem', color: '#FCA5A5', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              24/7 Confidential Crisis Line
            </div>
            <div style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--hrc-yellow)', margin: '0.3rem 0' }}>
              {FOUNDATION_META.crisisLine247}
            </div>
            <div style={{ fontSize: '0.82rem', color: '#9CA3AF' }}>Zero Cost • 100% Unlisted Safe Location</div>
          </div>
        </div>
      </div>

      {/* Visual Photo Banner */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center', marginBottom: '4rem', background: '#FFFFFF', borderRadius: '16px', border: '1px solid var(--color-border)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
        <div style={{ padding: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--irc-dark)', marginBottom: '1rem' }}>
            Women's Rights Are Human Rights
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            You have the right to live free from intimidation, threat of harm, and physical violence. We walk alongside you to secure protective orders, provide immediate safe lodging, and restore your peace of mind.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#safety-plan" className="btn btn-primary">
              Build Your Safety Plan Below <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div style={{ height: '100%', minHeight: '300px', position: 'relative', background: '#111827' }}>
          <img
            src="/images/womens-rights-sign.jpg"
            alt="Women's Rights Are Human Rights"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Navigation Cards Grid */}
      <div className="grid-3" style={{ gap: '1.5rem', marginBottom: '4rem' }}>
        <div className="card hero-track-crisis" style={{ borderLeft: '5px solid var(--color-alert-red)', padding: '1.75rem' }}>
          <AlertTriangle size={32} style={{ color: 'var(--color-alert-red)', marginBottom: '0.75rem' }} />
          <h3 style={{ color: 'var(--color-crisis-dark)', fontSize: '1.2rem', marginBottom: '0.4rem' }}>In Danger Right Now?</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            Call 911 immediately if in physical danger. Reach our 24/7 hotline at 1-800-555-GABRIEL or text START to 88788.
          </p>
        </div>

        <div className="card hero-track-crisis" style={{ borderLeft: '5px solid var(--fa-green)', padding: '1.75rem' }}>
          <Shield size={32} style={{ color: 'var(--fa-green)', marginBottom: '0.75rem' }} />
          <h3 style={{ color: 'var(--color-crisis-dark)', fontSize: '1.2rem', marginBottom: '0.4rem' }}>Emergency Safe Housing</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            Confidential, unlisted safe house lodging for women (18+) and children with hot meals and medical triage.
          </p>
        </div>

        <div className="card hero-track-crisis" style={{ borderLeft: '5px solid var(--irc-orange)', padding: '1.75rem' }}>
          <HeartHandshake size={32} style={{ color: 'var(--irc-orange)', marginBottom: '0.75rem' }} />
          <h3 style={{ color: 'var(--color-crisis-dark)', fontSize: '1.2rem', marginBottom: '0.4rem' }}>Trauma Counseling & Therapy</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            1-on-1 counseling with licensed therapists to heal emotional wounds and rebuild self-esteem.
          </p>
        </div>
      </div>

      {/* Interactive Safety Plan Generator */}
      <div id="safety-plan" style={{ marginBottom: '4rem' }}>
        <SafetyPlanGenerator />
      </div>

      {/* Confidential Screener Section */}
      <div>
        <IntakeScreener />
      </div>
    </div>
  );
}
