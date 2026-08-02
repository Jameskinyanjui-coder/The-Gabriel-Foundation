'use client';

import React, { useState } from 'react';
import { Shield, PhoneCall, CheckCircle2, ArrowRight, Lock, AlertTriangle, ChevronRight, Send, Heart, Laptop } from 'lucide-react';
import { FOUNDATION_META } from '@/data/siteData';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';

export default function IntakeScreener() {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nameOrAlias: '',
    contactInfo: '',
    supportType: 'Mentorship & Sisterhood',
    safeTimeToContact: 'Anytime',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const { error } = await supabase.from('contact_messages').insert([{
        name: formData.nameOrAlias,
        email: formData.contactInfo, // using contactInfo for email/phone field
        interest: formData.supportType,
        message: 'Confidential Intake Request. Safe time to contact: ' + formData.safeTimeToContact + '. Notes: ' + formData.notes
      }]);

      if (error) throw error;
      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card" style={{ backgroundColor: '#FAFDFD', border: '2px solid #99F6E4', boxShadow: 'var(--shadow-md)', padding: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid #CCFBF1', paddingBottom: '0.85rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#CCFBF1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Shield size={20} style={{ color: 'var(--color-secondary)' }} />
          </div>
          <h3 style={{ color: 'var(--color-crisis-dark)', margin: 0, fontSize: '1.2rem' }}>
            Confidential Women's Support Screener
          </h3>
        </div>
        <span className="badge badge-crisis" style={{ backgroundColor: '#DCFCE7', color: '#166534', borderColor: '#86EFAC' }}>
          Step {step} of 3
        </span>
      </div>

      {step === 1 && (
        <div>
          <h4 style={{ color: 'var(--color-crisis-dark)', marginBottom: '0.65rem', fontSize: '1.15rem' }}>
            Step 1: Check Your Immediate Safety
          </h4>
          <p style={{ fontSize: '0.98rem', lineHeight: '1.6', color: 'var(--color-text-main)', marginBottom: '1.5rem' }}>
            Are you or your dependent children in immediate physical danger right now?
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <a href="tel:911" className="btn btn-primary" style={{ backgroundColor: 'var(--color-alert-red)', width: '100%', padding: '0.9rem', textAlign: 'center', justifyContent: 'center' }}>
              <AlertTriangle size={18} />
              <span>Yes — Call 911 Immediate Assistance</span>
            </a>
            <button onClick={() => setStep(2)} className="btn btn-crisis" style={{ width: '100%', padding: '0.9rem', justifyContent: 'center' }}>
              <span>No — Continue to Confidential Intake Form</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h4 style={{ color: 'var(--color-crisis-dark)', marginBottom: '0.65rem', fontSize: '1.15rem' }}>
            Step 2: Select Your Needed Support
          </h4>
          <p style={{ fontSize: '0.92rem', marginBottom: '1rem', lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
            The Gabriel Foundation provides 100% confidential support services for women escaping abuse. Select the lifelines that best fit your situation:
          </p>
          
          <div style={{ backgroundColor: '#F0FDF4', borderRadius: 'var(--radius-md)', padding: '1rem', border: '1px solid #BBF7D0', marginBottom: '1.5rem' }}>
            <ul style={{ paddingLeft: '1rem', fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>1-on-1 Female Mentorship:</strong> Sisterhood support &amp; empowerment.</li>
              <li><strong>Confidential Trauma Counseling:</strong> 1-on-1 therapy &amp; support groups.</li>
              <li><strong>Life Reset ("Reset Up"):</strong> Safe housing assistance &amp; fresh start relocation.</li>
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={() => setStep(1)} className="btn btn-outline" style={{ padding: '0.65rem 1.25rem' }}>
              Back
            </button>
            <button onClick={() => setStep(3)} className="btn btn-crisis" style={{ flex: 1, justifyContent: 'center' }}>
              <span>Step 3: Submit Confidential Request</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <h4 style={{ color: 'var(--color-crisis-dark)', marginBottom: '0.5rem', fontSize: '1.15rem' }}>
                Step 3: Confidential Intake Request
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                Your privacy and safety are completely protected. Alias names are welcomed.
              </p>

              <div style={{ backgroundColor: '#FFFBEB', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #F59E0B', marginBottom: '1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Laptop size={20} style={{ color: '#D97706', flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: '0.85rem', color: '#92400E', margin: 0, lineHeight: 1.5 }}>
                  <strong>Safety Warning:</strong> If you are using a shared device, do <strong>NOT</strong> let your browser save this form data. Consider using Private / Incognito mode.
                </p>
              </div>

              {errorMsg && (
                <div style={{ backgroundColor: '#FEF2F2', color: '#991B1B', padding: '0.75rem', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '1.25rem', border: '1px solid #F87171' }}>
                  {errorMsg}
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--irc-dark)', display: 'block', marginBottom: '4px' }}>
                    First Name or Alias:
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    placeholder="e.g. Sarah M."
                    value={formData.nameOrAlias}
                    onChange={(e) => setFormData({ ...formData, nameOrAlias: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--irc-dark)', display: 'block', marginBottom: '4px' }}>
                    Safe Contact Method (Email or Phone):
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    placeholder="Confidential Email or Phone Number"
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--irc-dark)', display: 'block', marginBottom: '4px' }}>
                    Primary Support Needed:
                  </label>
                  <select
                    value={formData.supportType}
                    onChange={(e) => setFormData({ ...formData, supportType: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '0.9rem', background: '#FFFFFF' }}
                  >
                    <option value="Mentorship & Sisterhood">1-on-1 Female Mentorship &amp; Sisterhood</option>
                    <option value="Confidential Counseling">Confidential Counseling &amp; Therapy</option>
                    <option value="Life Reset & Housing">Life Reset &amp; Safe Housing ("Reset Up")</option>
                    <option value="General Support">General Guidance &amp; Information</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button type="button" onClick={() => setStep(2)} className="btn btn-outline" style={{ padding: '0.65rem 1rem' }}>
                  Back
                </button>
                <button type="submit" disabled={loading} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Sending...' : <><Send size={16} /> Send Confidential Request</>}
                </button>
              </div>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#DCFCE7', color: '#15803D', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <CheckCircle2 size={30} />
              </div>
              <h4 style={{ color: 'var(--irc-dark)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                Confidential Request Received
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Thank you, <strong>{formData.nameOrAlias}</strong>. A dedicated female advocate from <strong>The Gabriel Foundation</strong> will reach out to your safe contact method within 24 hours.
              </p>
              <button onClick={() => { setSubmitted(false); setStep(1); }} className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                Submit Another Request
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
