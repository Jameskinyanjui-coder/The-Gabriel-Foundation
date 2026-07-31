'use client';

import React, { useState } from 'react';
import { ShieldCheck, CheckSquare, Square, Printer, AlertTriangle, EyeOff, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import { FOUNDATION_META } from '@/data/siteData';

export default function SafetyPlanGenerator() {
  const [activeStep, setActiveStep] = useState(0);
  const [disguised, setDisguised] = useState(false);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const steps = [
    {
      title: '1. Tech & Digital Safety',
      subtitle: 'Covering digital tracks before planning escape',
      items: [
        { id: 't1', text: 'Use a safe computer or phone (e.g. library, friend, work phone) that your abuser cannot access.' },
        { id: 't2', text: 'Clear browser history, cookies, and search cache after reading safety resources.' },
        { id: 't3', text: 'Use incognito or private browsing windows when searching for shelters and legal aid.' },
        { id: 't4', text: 'Create a new secret email account for receiving confidential communications.' },
        { id: 't5', text: 'Disable location sharing, Find My, and GPS tracking on personal mobile devices.' },
      ]
    },
    {
      title: '2. Emergency Go-Bag Essentials',
      subtitle: 'Critical items to stash in a safe place (or with a trusted neighbor)',
      items: [
        { id: 'b1', text: 'Government ID, driver’s license, social security cards, birth certificates (self & children).' },
        { id: 'b2', text: 'Cash, secret credit card, and emergency savings account details.' },
        { id: 'b3', text: 'Prescription medications, medical records, and health insurance cards.' },
        { id: 'b4', text: 'House keys, car keys, and vehicle title/registration paperwork.' },
        { id: 'b5', text: 'Restraining order paperwork, divorce/custody papers, and police report numbers.' },
        { id: 'b6', text: 'Change of clothes for self & kids, comfort toys, and essential toiletries.' },
      ]
    },
    {
      title: '3. Safe Haven & Escape Routes',
      subtitle: 'Identifying where to go during an active escalation',
      items: [
        { id: 's1', text: 'Identify 2 rooms in the house with external exits and no dangerous sharp objects.' },
        { id: 's2', text: 'Memorize the 24/7 Foundation Crisis Line number: ' + FOUNDATION_META.crisisLine247 },
        { id: 's3', text: 'Identify 2 safe destinations: trusted friend, family member, or local emergency shelter.' },
        { id: 's4', text: 'Keep gas tank in car at least half-full at all times with driver side unlocked.' },
        { id: 's5', text: 'Teach children how to dial 911 and escape to a pre-selected neighbor’s home.' },
      ]
    },
    {
      title: '4. Code Words & Children Safety',
      subtitle: 'Establishing subtle emergency communication signals',
      items: [
        { id: 'c1', text: 'Establish a secret code word or phrase with children signaling them to leave the house immediately.' },
        { id: 'c2', text: 'Establish a code word with a trusted neighbor to call 911 on your behalf when sent in a text.' },
        { id: 'c3', text: 'Teach children NEVER to mediate or step between adults during violent arguments.' },
        { id: 'c4', text: 'List authorized emergency pickup contacts at children’s school or daycare.' },
      ]
    },
    {
      title: '5. Legal & Support Action',
      subtitle: 'Securing legal protections and professional backup',
      items: [
        { id: 'l1', text: 'Call our 24/7 Crisis Line for confidential emergency shelter intake.' },
        { id: 'l2', text: 'Consult with legal aid for a Protective Order (Temporary Ex Parte or Final Protective Order).' },
        { id: 'l3', text: 'Document injuries with clear photos, store dates/times of threats in a safe secret location.' },
        { id: 'l4', text: 'Notify employer HR or workplace security if safety threats extend to your workplace.' },
      ]
    }
  ];

  if (disguised) {
    return (
      <div className="card" style={{ padding: '3rem', background: '#F8FAFC', textAlign: 'center' }}>
        <h2 style={{ color: '#0F172A', fontSize: '1.75rem', marginBottom: '0.75rem' }}>Daily Weather Outlook &amp; Forecast</h2>
        <p style={{ color: '#64748B', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
          Partly cloudy today with light winds. High of 78°F, Low of 58°F. Barometric pressure steady.
        </p>
        <button
          onClick={() => setDisguised(false)}
          className="btn btn-outline"
          style={{ fontSize: '0.85rem' }}
        >
          <Sparkles size={14} /> Resume Safety Planner
        </button>
      </div>
    );
  }

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = steps.reduce((acc, s) => acc + s.items.length, 0);

  return (
    <div className="card safety-planner-card" style={{ border: '2px solid var(--fa-green)', background: '#FFFFFF', boxShadow: 'var(--shadow-lg)' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.25rem', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.9rem' }}>Personalized Safety Plan Generator</h2>
          <p style={{ fontSize: '0.98rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
            Use this interactive guide to build your personalized safety plan. Progress is stored temporarily in your local browser.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setDisguised(true)}
            className="btn btn-outline"
            style={{ padding: '0.5rem 0.85rem', fontSize: '0.82rem', borderColor: '#CBD5E1', color: '#475569' }}
            title="Instantly disguise screen with generic weather page"
          >
            <EyeOff size={14} /> Disguise Screen
          </button>
          <button
            onClick={() => window.print()}
            className="btn btn-outline"
            style={{ padding: '0.5rem 0.85rem', fontSize: '0.82rem' }}
          >
            <Printer size={14} /> Print Plan
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '0.4rem' }}>
          <span>Overall Safety Plan Completion</span>
          <span>{completedCount} of {totalCount} items checklist</span>
        </div>
        <div style={{ height: '8px', background: '#E2E8F0', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${(completedCount / totalCount) * 100}%`, background: 'var(--fa-green)', transition: 'width 0.3s ease' }} />
        </div>
      </div>

      {/* Step Tabs */}
      <div className="planner-step-tabs">
        {steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`planner-tab-btn ${activeStep === idx ? 'active' : ''}`}
          >
            <span>Step {idx + 1}</span>
          </button>
        ))}
      </div>

      {/* Current Step Content */}
      <div style={{ background: '#F8FAFC', borderRadius: 'var(--radius-md)', padding: '1.5rem', border: '1px solid var(--color-border)', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', color: 'var(--irc-dark)', marginBottom: '0.25rem' }}>
          {steps[activeStep].title}
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
          {steps[activeStep].subtitle}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {steps[activeStep].items.map((item) => {
            const isChecked = !!checkedItems[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: isChecked ? '#F0FDF4' : 'white',
                  border: isChecked ? '1px solid #86EFAC' : '1px solid #E2E8F0',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ marginTop: '2px', color: isChecked ? 'var(--fa-green)' : '#94A3B8', flexShrink: 0 }}>
                  {isChecked ? <CheckSquare size={20} /> : <Square size={20} />}
                </div>
                <span style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', lineHeight: 1.5, textDecoration: isChecked ? 'line-through' : 'none' }}>
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <button
          onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
          disabled={activeStep === 0}
          className="btn btn-outline"
          style={{ opacity: activeStep === 0 ? 0.5 : 1, cursor: activeStep === 0 ? 'not-allowed' : 'pointer' }}
        >
          <ChevronLeft size={16} /> Previous Step
        </button>

        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--irc-orange)' }}>
          24/7 Crisis Hotline: {FOUNDATION_META.crisisLine247}
        </div>

        <button
          onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
          disabled={activeStep === steps.length - 1}
          className="btn btn-primary"
          style={{ opacity: activeStep === steps.length - 1 ? 0.5 : 1, cursor: activeStep === steps.length - 1 ? 'not-allowed' : 'pointer' }}
        >
          Next Step <ChevronRight size={16} />
        </button>
      </div>

    </div>
  );
}
