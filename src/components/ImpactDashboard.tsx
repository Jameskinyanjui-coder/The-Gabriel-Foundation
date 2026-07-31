'use client';

import React from 'react';
import { ShieldCheck, PieChart, Award, DollarSign, Sparkles } from 'lucide-react';
import { FINANCIALS, FOUNDATION_META } from '@/data/siteData';

export default function ImpactDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      
      {/* Visual Allocation Cards */}
      <div className="grid-3">
        <div className="card" style={{ borderTop: '4px solid var(--fa-green)', textAlign: 'center', padding: '2rem 1.25rem', background: '#FFFFFF' }}>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--fa-green)', lineHeight: 1 }}>
            {FINANCIALS.programExpensePercent}%
          </div>
          <h3 style={{ fontSize: '1.2rem', marginTop: '0.5rem', marginBottom: '0.35rem' }}>Direct Program Operations</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
            Budgeted directly for mentorship matching, trauma counselor support, emergency safe lodging, and basic needs relief.
          </p>
        </div>

        <div className="card" style={{ borderTop: '4px solid var(--hrc-blue)', textAlign: 'center', padding: '2rem 1.25rem', background: '#FFFFFF' }}>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--hrc-blue)', lineHeight: 1 }}>
            {FINANCIALS.adminPercent}%
          </div>
          <h3 style={{ fontSize: '1.2rem', marginTop: '0.5rem', marginBottom: '0.35rem' }}>Management & Governance</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
            Covers compliance, legal privacy safeguards (VAWA alignment), background screening tools, and secure infrastructure.
          </p>
        </div>

        <div className="card" style={{ borderTop: '4px solid var(--irc-orange)', textAlign: 'center', padding: '2rem 1.25rem', background: '#FFFFFF' }}>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--irc-orange)', lineHeight: 1 }}>
            {FINANCIALS.fundraisingPercent}%
          </div>
          <h3 style={{ fontSize: '1.2rem', marginTop: '0.5rem', marginBottom: '0.35rem' }}>Community Outreach</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
            Sustains awareness initiatives, donor stewardship, grant development, and community partner recruitment.
          </p>
        </div>
      </div>

      {/* Visual Efficiency Bar */}
      <div className="card" style={{ background: '#FFFFFF', padding: '2rem' }}>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <PieChart size={22} style={{ color: 'var(--fa-green)' }} /> Projected Donation Allocation
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem', marginBottom: '1.5rem' }}>
          Out of every $1.00 donated to our launch fund, {FINANCIALS.programExpensePercent} cents go directly toward women's mentorship, counseling, and safe relocation programs.
        </p>

        {/* Multi-segmented Bar */}
        <div style={{ height: '24px', borderRadius: 'var(--radius-full)', overflow: 'hidden', display: 'flex', marginBottom: '1rem', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }}>
          <div style={{ width: `${FINANCIALS.programExpensePercent}%`, background: 'var(--fa-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '0.82rem' }}>
            {FINANCIALS.programExpensePercent}% Direct Programs
          </div>
          <div style={{ width: `${FINANCIALS.adminPercent}%`, background: 'var(--hrc-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '0.82rem' }}>
            {FINANCIALS.adminPercent}%
          </div>
          <div style={{ width: `${FINANCIALS.fundraisingPercent}%`, background: 'var(--irc-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '0.82rem' }}>
            {FINANCIALS.fundraisingPercent}%
          </div>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', fontSize: '0.88rem', fontWeight: 700 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--fa-green)' }}>
            <span style={{ width: '12px', height: '12px', background: 'var(--fa-green)', borderRadius: '3px' }} />
            Direct Programs (90%)
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--hrc-blue)' }}>
            <span style={{ width: '12px', height: '12px', background: 'var(--hrc-blue)', borderRadius: '3px' }} />
            Governance (6%)
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--irc-orange)' }}>
            <span style={{ width: '12px', height: '12px', background: 'var(--irc-orange)', borderRadius: '3px' }} />
            Outreach (4%)
          </span>
        </div>
      </div>

      {/* Transparency Commitment */}
      <div className="grid-2" style={{ gap: '1.5rem' }}>
        <div className="card" style={{ background: '#F8FAFC', borderLeft: '4px solid var(--hrc-yellow-dark)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
            <Sparkles size={28} style={{ color: 'var(--hrc-yellow-dark)' }} />
            <div>
              <h4 style={{ fontSize: '1.15rem' }}>Founding Transparency Standard</h4>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>2026 Non-Profit Governance</div>
            </div>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>
            {FOUNDATION_META.name} is built on 100% financial transparency. As a newly founded NGO, all founding donations and grant allocations will be published transparently in annual public reports.
          </p>
        </div>

        <div className="card" style={{ background: '#F8FAFC', borderLeft: '4px solid var(--fa-green)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
            <ShieldCheck size={28} style={{ color: 'var(--fa-green)' }} />
            <div>
              <h4 style={{ fontSize: '1.15rem' }}>501(c)(3) Stewardship</h4>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>GAAP Non-Profit Compliance</div>
            </div>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>
            Our financial statements follow standard U.S. GAAP non-profit accounting principles. EIN: {FOUNDATION_META.ein}.
          </p>
        </div>
      </div>

    </div>
  );
}
