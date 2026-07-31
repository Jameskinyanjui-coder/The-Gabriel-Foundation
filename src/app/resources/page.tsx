import React from 'react';
import ReferralDirectory from '@/components/ReferralDirectory';
import { Download, FileText, ShieldAlert, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '850px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>Helpful Tools &amp; Partners</span>
        <h1>2.8 Community Resources &amp; Safety Planning</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.7', marginTop: '1rem' }}>
          Downloadable guides for families, de-identified safety plans for survivors, and an interactive referral directory of vetted North Texas community partners.
        </p>
      </div>

      {/* Downloadable Guides */}
      <div className="grid-2" style={{ gap: '2rem', marginBottom: '4rem' }}>
        {/* 2.8.1 For Mentees & Families */}
        <div className="card">
          <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileText size={22} style={{ color: 'var(--color-primary)' }} />
            <span>2.8.1 For Mentees &amp; Families</span>
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Downloadable parent orientation handbooks, student goal-setting worksheets, and college prep FAFSA checklists.
          </p>
          <button className="btn btn-outline" style={{ width: '100%', fontSize: '0.9rem' }}>
            <Download size={16} /> Download Mentee Handbook (PDF)
          </button>
        </div>

        {/* 2.8.2 For Survivors */}
        <div className="card hero-track-crisis">
          <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-crisis-dark)' }}>
            <ShieldAlert size={22} style={{ color: 'var(--color-crisis-dark)' }} />
            <span>2.8.2 Survivor Personal Safety Plan</span>
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-main)', marginBottom: '1.25rem' }}>
            A generic, downloadable safety planning template (no location data) covering emergency packing lists, tech safety, and safe contact steps.
          </p>
          <button className="btn btn-crisis" style={{ width: '100%', fontSize: '0.9rem' }}>
            <Download size={16} /> Download Generic Safety Plan (PDF)
          </button>
        </div>
      </div>

      {/* 2.8.3 Interactive Community Referral Directory */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '0.5rem' }}>2.8.3 Community Referral Directory</h2>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Search vetted regional partner agencies providing legal representation, alternative emergency shelters, housing vouchers, and medical assistance.
        </p>
        <ReferralDirectory />
      </div>
    </div>
  );
}
