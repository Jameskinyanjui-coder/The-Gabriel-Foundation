'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FOUNDATION_META } from '@/data/siteData';
import { PhoneCall, Mail, MapPin, ShieldAlert, CheckCircle2, Send, AlertTriangle, Phone } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'General Foundation Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    const { error } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interest: formData.inquiryType,
          message: formData.message,
        }
      ]);

    setIsSubmitting(false);

    if (error) {
      console.error('Supabase Error:', error);
      setErrorMsg('There was a problem sending your message. Please try again or call us directly.');
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 2.5rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>Reach Our Team</span>
        <h1>2.9 Contact Us</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Connect with our administrative office for mentoring inquiries, media, partnerships, or general information.
        </p>
      </div>

      {/* CRITICAL SEPARATION BANNER */}
      <div className="card callout-box-crisis" style={{ marginBottom: '3rem', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ color: '#991B1B', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
            <AlertTriangle size={24} /> Are You Fleeing Abuse or Need Emergency Shelter?
          </h2>
          <p style={{ margin: 0, fontSize: '0.96rem', color: '#7F1D1D' }}>
            Do NOT submit this general online contact form if you are in immediate danger or need shelter intake. Contact our 24/7 Crisis Hotline directly for immediate, safe assistance.
          </p>
        </div>

        <Link href="/crisis/emergency" className="btn btn-primary" style={{ backgroundColor: 'var(--color-alert-red)', wordBreak: 'break-word', maxWidth: '100%', boxSizing: 'border-box' }}>
          <PhoneCall size={18} />
          Go to Emergency Crisis Help
        </Link>
      </div>

      <div className="grid-2" style={{ gap: '3rem' }}>
        {/* Contact Form */}
        <div className="card">
          <h3>General Administrative Inquiry Form</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            For mentoring applications, volunteer questions, media inquiries, or corporate sponsorship.
          </p>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <CheckCircle2 size={48} style={{ color: 'var(--color-secondary)', margin: '0 auto 1rem' }} />
              <h4>Message Received</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                Thank you for contacting The Gabriel Foundation. An administrative team member will respond within 2 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {errorMsg && (
                <div style={{ backgroundColor: '#FEE2E2', color: '#991B1B', padding: '0.75rem', borderRadius: 'var(--radius-md)', fontSize: '0.9rem' }}>
                  {errorMsg}
                </div>
              )}
              
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Smith"
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

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>Inquiry Type</label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                >
                  <option value="General Foundation Inquiry">General Foundation Inquiry</option>
                  <option value="Women's Mentorship Referral">Women's Mentorship Referral</option>
                  <option value="Volunteer Opportunity">Volunteer Opportunity</option>
                  <option value="Corporate Partnership / Donation">Corporate Partnership / Donation</option>
                  <option value="Media & Public Relations">Media &amp; Public Relations</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can our team help you?"
                  style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontFamily: 'var(--font-sans)' }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }} disabled={isSubmitting}>
                <Send size={16} /> {isSubmitting ? 'Sending...' : 'Submit Message'}
              </button>
            </form>
          )}
        </div>

        {/* Administrative Office Info (NO SHELTER ADDRESS) */}
        <div>
          <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '4px solid var(--color-primary)' }}>
            <h3>Administrative Offices</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
              For postal mail, corporate inquiries, and administrative drop-offs.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.95rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={18} style={{ color: 'var(--color-primary)' }} />
                <span><strong>Mailing:</strong> {FOUNDATION_META.adminAddress}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={18} style={{ color: 'var(--color-primary)' }} />
                <span><strong>Email:</strong> {FOUNDATION_META.adminEmail}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={18} style={{ color: 'var(--color-primary)' }} />
                <span><strong>Admin Phone:</strong> {FOUNDATION_META.adminPhone}</span>
              </li>
            </ul>
          </div>

          <div className="card callout-box" style={{ backgroundColor: '#F8FAFC', borderLeftColor: '#64748B' }}>
            <strong style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem' }}>
              <ShieldAlert size={16} /> Confidential Location Statement:
            </strong>
            <p style={{ fontSize: '0.88rem', margin: '0.35rem 0 0 0', color: 'var(--color-text-muted)' }}>
              In accordance with SOP Section 4.1, our emergency domestic violence shelter location is unlisted and confidential. Physical addresses or cross-streets are never published online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
