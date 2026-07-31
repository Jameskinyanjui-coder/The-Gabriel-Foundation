import React from 'react';
import { PhoneCall, AlertTriangle, ShieldAlert, MessageSquare, ExternalLink } from 'lucide-react';
import { FOUNDATION_META } from '@/data/siteData';
import SafetyPlanGenerator from '@/components/SafetyPlanGenerator';

export default function EmergencyPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 2.5rem', textAlign: 'center' }}>
        <span className="badge badge-crisis" style={{ backgroundColor: '#FEE2E2', color: '#991B1B', borderColor: '#FCA5A5', marginBottom: '0.75rem' }}>
          Urgent Assistance
        </span>
        <h1>2.4.1 If You&apos;re in Danger Right Now</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Your immediate physical safety is the highest priority. Please review these crisis response options.
        </p>
      </div>

      {/* 2.4.1.1 Call 911 Guidance */}
      <div className="card callout-box-crisis" style={{ marginBottom: '2rem', padding: '2rem' }}>
        <h2 style={{ color: '#991B1B', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <AlertTriangle size={28} /> 2.4.1.1 Immediate Emergency — Call 911
        </h2>
        <p style={{ fontSize: '1.02rem', lineHeight: '1.6', margin: 0 }}>
          If an abuser is actively threatening you, attempting to enter your space, or if you or your children are in physical harm, <strong>call 911 immediately</strong> from a safe phone. If it is unsafe to speak out loud, call 911 and leave the line open, or text 911 if available in your municipality.
        </p>
      </div>

      <div className="grid-2" style={{ gap: '2rem', marginBottom: '3.5rem' }}>
        {/* 2.4.1.2 24/7 Crisis Line */}
        <div className="card" style={{ borderLeft: '4px solid var(--color-crisis-dark)' }}>
          <h3 style={{ color: 'var(--color-crisis-dark)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <PhoneCall size={22} /> 2.4.1.2 24/7 Foundation Crisis Line
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
            Available 24 hours a day, 7 days a week for emergency shelter screening, safety planning, and warm referrals.
          </p>
          <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-crisis-dark)', marginBottom: '0.5rem' }}>
            {FOUNDATION_META.crisisLine247}
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
            Free, confidential, and compassionate advocates ready to assist you.
          </p>
        </div>

        {/* 2.4.1.3 National Hotline */}
        <div className="card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
          <h3 style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <ShieldAlert size={22} /> 2.4.1.3 National DV Hotline
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
            National Domestic Violence Hotline (800-799-7233) or online chat options.
          </p>
          <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
            1-800-799-7233 (800-799-SAFE)
          </div>
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-main)' }}>
            Text &apos;START&apos; to 88788 | TTY: 1-800-787-3224
          </div>
        </div>
      </div>

      {/* Safety Plan Generator Tool */}
      <SafetyPlanGenerator />
    </div>
  );
}
