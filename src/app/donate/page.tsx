import React from 'react';
import DonationCalculator from '@/components/DonationCalculator';
import { FINANCIALS, FOUNDATION_META } from '@/data/siteData';
import { DollarSign, ShieldCheck, Heart, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DonatePage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '850px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>501(c)(3) Tax-Deductible</span>
        <h1>Support The Gabriel Foundation</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.7', marginTop: '1rem' }}>
          Your financial partnership empowers North Texas youth through mentoring and restores safety to domestic violence survivors fleeing emergency crisis.
        </p>
      </div>

      <div className="grid-2" style={{ gap: '3rem', marginBottom: '4rem' }}>
        <div>
          <DonationCalculator />
        </div>

        <div>
          {/* 2.6.5 Where Your Money Goes */}
          <div className="card" style={{ marginBottom: '2rem', borderTop: '4px solid var(--color-secondary)' }}>
            <h2>2.6.5 Where Your Money Goes</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              We maintain exceptional fiscal responsibility. {FINANCIALS.programExpensePercent}% of every gift directly funds program operations.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid var(--color-border)' }}>
                <strong>Direct Program Services (Mentoring &amp; Shelter)</strong>
                <strong style={{ color: 'var(--color-secondary)' }}>{FINANCIALS.programExpensePercent}%</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid var(--color-border)' }}>
                <span>Administrative &amp; Legal Compliance</span>
                <span>{FINANCIALS.adminPercent}%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0' }}>
                <span>Fundraising &amp; Donor Development</span>
                <span>{FINANCIALS.fundraisingPercent}%</span>
              </div>
            </div>
          </div>

          {/* Giving Options Breakdown */}
          <div className="card" style={{ backgroundColor: '#F8FAFC' }}>
            <h3 style={{ marginBottom: '1rem' }}>Giving Options</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.92rem' }}>
              <li>
                <strong>2.6.1 One-Time Gift:</strong> Instant emergency funding for safe night shelter stays or youth retreat supplies.
              </li>
              <li>
                <strong>2.6.2 Monthly Giving (Hope Circle):</strong> Sustained monthly support ensuring continuous hotline advocates and counseling sessions.
              </li>
              <li>
                <strong>2.6.3 Tribute &amp; Memorial Gifts:</strong> Honor a loved one or celebrate a milestone with a dedicated tribute receipt.
              </li>
              <li>
                <strong>2.6.4 Planned Giving / Legacy:</strong> Include The Gabriel Foundation in your estate plan or bequest to protect future generations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
