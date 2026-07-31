'use client';

import React, { useState } from 'react';
import { DollarSign, Heart, CheckCircle2, ShieldCheck, Sparkles, Lock } from 'lucide-react';
import { FINANCIALS } from '@/data/siteData';

export default function DonationCalculator() {
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('monthly');
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [dedicatedGift, setDedicatedGift] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const presets = [25, 50, 100, 250, 500];

  const getImpactMessage = (amt: number) => {
    if (amt < 35) return "Provides school supplies and emergency hygiene kits for 2 youth in our Trailblazers mentoring program.";
    if (amt < 75) return "Funds 1 week of 1-on-1 career coaching, resume styling, and computer lab access for young adults in Turnaround.";
    if (amt < 150) return "Sponsors 1 full clinical intake & safe emergency welcome package for a mother and child arriving at our shelter.";
    if (amt < 300) return "Covers 1 month of group trauma counseling sessions & therapeutic play materials for resident children.";
    return "Provides full wraparound housing transition support, food security, and emergency utility relief for a recovering family.";
  };

  const selectedVal = customAmount ? parseFloat(customAmount) || 0 : amount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="card" style={{ border: '2px solid var(--color-primary)', background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 100%)', boxShadow: 'var(--shadow-lg)' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
        <h2 style={{ fontSize: '2.1rem' }}>Make a Tax-Deductible Gift</h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.02rem', marginTop: '0.4rem' }}>
          86.4% of every dollar directly funds our Mentoring and Emergency Shelter operations.
        </p>
      </div>

      {submitted ? (
        <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <CheckCircle2 size={64} style={{ color: 'var(--color-secondary)', margin: '0 auto 1.25rem' }} />
          <h3 style={{ fontSize: '1.75rem' }}>Thank You for Your Generous Support!</h3>
          <p style={{ marginTop: '0.5rem', color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
            Your simulated {frequency === 'monthly' ? 'monthly' : 'one-time'} gift of <strong style={{ color: 'var(--color-primary)' }}>${selectedVal}</strong> empowers North Texas families.
          </p>
          <div className="callout-box" style={{ marginTop: '1.75rem', textAlign: 'left' }}>
            <strong>Official 501(c)(3) Receipt:</strong> A tax deduction receipt has been generated for your record. EIN: 75-3928104.
          </div>
          <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ marginTop: '1.25rem' }}>
            Make Another Gift
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Frequency Toggle */}
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.5rem', backgroundColor: '#F1F5F9', padding: '4px', borderRadius: 'var(--radius-full)' }}>
            <button
              type="button"
              onClick={() => setFrequency('monthly')}
              className={`track-btn ${frequency === 'monthly' ? 'track-btn-mentoring active' : ''}`}
              style={{ flex: 1, justifyContent: 'center', padding: '0.75rem' }}
            >
              Give Monthly (Partner)
            </button>
            <button
              type="button"
              onClick={() => setFrequency('once')}
              className={`track-btn ${frequency === 'once' ? 'track-btn-mentoring active' : ''}`}
              style={{ flex: 1, justifyContent: 'center', padding: '0.75rem' }}
            >
              One-Time Gift
            </button>
          </div>

          {/* Amount Presets */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.65rem', marginBottom: '1.25rem' }}>
            {presets.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => { setAmount(p); setCustomAmount(''); }}
                style={{
                  padding: '0.85rem 0.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  cursor: 'pointer',
                  backgroundColor: amount === p && !customAmount ? 'var(--color-primary)' : 'white',
                  color: amount === p && !customAmount ? 'white' : 'var(--color-text-main)',
                  boxShadow: amount === p && !customAmount ? '0 4px 12px rgba(217, 83, 40, 0.3)' : 'none',
                  transition: 'all var(--transition-fast)'
                }}
              >
                ${p}
              </button>
            ))}
          </div>

          {/* Custom Amount Input */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.4rem' }}>
              Or Custom Amount ($):
            </label>
            <input
              type="number"
              min="5"
              placeholder="Enter custom gift amount"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                fontSize: '1.05rem',
                fontFamily: 'var(--font-sans)'
              }}
            />
          </div>

          {/* Impact Statement Box */}
          <div className="callout-box" style={{ borderLeftColor: 'var(--color-secondary)', backgroundColor: '#F0FDF4', marginBottom: '1.5rem', padding: '1.25rem' }}>
            <div style={{ fontWeight: 800, color: 'var(--color-secondary)', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.95rem' }}>
              <Heart size={18} />
              <span>Direct Impact of Your ${selectedVal} Gift:</span>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', margin: 0, lineHeight: '1.6' }}>
              {getImpactMessage(selectedVal)}
            </p>
          </div>

          {/* Dedicated Checkbox */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <input
              type="checkbox"
              id="tribute"
              checked={dedicatedGift}
              onChange={(e) => setDedicatedGift(e.target.checked)}
              style={{ width: '18px', height: '18px', cursor: 'pointer' }}
            />
            <label htmlFor="tribute" style={{ fontSize: '0.92rem', cursor: 'pointer', fontWeight: 600 }}>
              Make this a Tribute or Memorial Gift (In Honor / Memory of someone special)
            </label>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.1rem', fontSize: '1.1rem' }}>
            <Heart size={20} fill="white" />
            <span>Complete {frequency === 'monthly' ? 'Monthly' : 'One-Time'} Gift of ${selectedVal}</span>
          </button>

          <div style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.84rem', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <Lock size={15} style={{ color: '#059669' }} />
            <span>256-Bit SSL Encrypted &bull; 501(c)(3) Tax-Deductible &bull; CPA Audited</span>
          </div>
        </form>
      )}
    </div>
  );
}
