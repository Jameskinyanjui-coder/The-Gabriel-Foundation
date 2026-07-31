'use client';

import React, { useState } from 'react';
import { Users, ShieldCheck, CheckCircle2, FileCheck, X } from 'lucide-react';

interface VolunteerFormModalProps {
  defaultTrack?: 'mentoring' | 'crisis';
}

export default function VolunteerFormModal({ defaultTrack = 'mentoring' }: VolunteerFormModalProps) {
  const [track, setTrack] = useState<'mentoring' | 'crisis'>(defaultTrack);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    availability: 'Weekdays',
    agreedToBackgroundCheck: false,
    agreedToConfidentiality: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="card" style={{ border: '2px solid var(--color-primary)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Users size={22} style={{ color: 'var(--color-primary)' }} />
          <span>Volunteer Application</span>
        </h3>
        <span className="badge badge-mentoring">SOP Section 10 Screened</span>
      </div>

      {submitted ? (
        <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <CheckCircle2 size={52} style={{ color: 'var(--color-secondary)', margin: '0 auto 1rem' }} />
          <h3>Application Submitted Successfully!</h3>
          <p style={{ marginTop: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            Thank you, {formData.fullName}. Our Volunteer Coordinator will contact you within 3 business days regarding orientation and background check verification.
          </p>
          <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ marginTop: '1.25rem' }}>
            Submit Another Application
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Volunteer Track Selection */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
              Select Volunteer Opportunity:
            </label>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={() => setTrack('mentoring')}
                style={{
                  flex: 1,
                  padding: '0.65rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  backgroundColor: track === 'mentoring' ? 'var(--color-primary)' : 'white',
                  color: track === 'mentoring' ? 'white' : 'var(--color-text-main)'
                }}
              >
                Youth Mentor (Trailblazers / Turnaround)
              </button>
              <button
                type="button"
                onClick={() => setTrack('crisis')}
                style={{
                  flex: 1,
                  padding: '0.65rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  backgroundColor: track === 'crisis' ? 'var(--color-crisis-dark)' : 'white',
                  color: track === 'crisis' ? 'white' : 'var(--color-text-main)'
                }}
              >
                Crisis Support Volunteer
              </button>
            </div>
          </div>

          {/* Form Inputs */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="grid-responsive">
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>Full Name *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Jane Doe"
                style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@example.com"
                style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }} className="grid-responsive">
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(972) 555-0199"
                style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>Availability</label>
              <select
                value={formData.availability}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
              >
                <option value="Weekdays">Weekdays (Daytime)</option>
                <option value="Evenings">Weekday Evenings</option>
                <option value="Weekends">Weekends</option>
                <option value="Flexible">Flexible Schedule</option>
              </select>
            </div>
          </div>

          {/* SOP Section 10 Screening Disclosures */}
          <div className="callout-box" style={{ backgroundColor: '#F8FAFC', borderLeftColor: '#0EA5E9', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
            <strong style={{ color: '#0369A1', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '0.35rem' }}>
              <FileCheck size={16} /> Screening &amp; Safety Requirements (SOP Section 10.1 &amp; 10.3):
            </strong>
            <p style={{ margin: 0 }}>
              To ensure safety for youth and shelter residents, all accepted applicants must undergo criminal background screening, reference verification, and complete 12 hours of trauma-informed orientation.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <label style={{ fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                required
                checked={formData.agreedToBackgroundCheck}
                onChange={(e) => setFormData({ ...formData, agreedToBackgroundCheck: e.target.checked })}
              />
              <span>I consent to standard background check screening (SOP Section 10.1).</span>
            </label>

            <label style={{ fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                required
                checked={formData.agreedToConfidentiality}
                onChange={(e) => setFormData({ ...formData, agreedToConfidentiality: e.target.checked })}
              />
              <span>I agree to sign and abide by strict client confidentiality protocols (SOP Section 10.3).</span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
            Submit Volunteer Application
          </button>
        </form>
      )}
    </div>
  );
}
