'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PhoneCall, ShieldAlert, Heart, FileText, Lock, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { FOUNDATION_META } from '@/data/siteData';

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          {/* Foundation Brand & Hotline Callout */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <img
                src="/images/logo.png"
                alt="Gabriel Foundation Logo"
                style={{ height: '52px', width: 'auto', objectFit: 'contain', background: '#FFFFFF', padding: '4px', borderRadius: '8px' }}
              />
              <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', margin: 0 }}>{FOUNDATION_META.name}</h3>
            </div>
            
            <p style={{ fontSize: '0.94rem', lineHeight: '1.7', color: '#CBD5E1' }}>
              A 501(c)(3) nonprofit organization empowering women and girls through sisterhood mentoring, trauma counseling, restoring safety to abuse survivors, and supporting orphaned children through food, shelter, and education.
            </p>

            <div style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '8px',
              padding: '1rem',
              marginTop: '1.25rem',
              maxWidth: '100%',
              boxSizing: 'border-box',
              overflow: 'hidden'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: '#FFFFFF',
                marginBottom: '0.6rem',
                flexWrap: 'wrap',
                lineHeight: 1.4
              }}>
                <ShieldAlert size={18} style={{ color: '#F43F5E', flexShrink: 0, marginTop: '2px' }} />
                <span>National Domestic Violence Hotline (24/7 Free &amp; Confidential)</span>
              </div>
              <a
                href="tel:18007997233"
                style={{
                  display: 'block',
                  fontSize: 'clamp(1rem, 5vw, 1.4rem)',
                  fontWeight: 900,
                  color: 'var(--hrc-yellow)',
                  marginBottom: '0.5rem',
                  wordBreak: 'break-all',
                  overflowWrap: 'break-word',
                  textDecoration: 'none',
                  maxWidth: '100%'
                }}
              >
                1-800-799-7233
              </a>
              <div style={{ fontSize: '0.82rem', color: '#E2E8F0', lineHeight: 1.5 }}>
                Text &apos;START&apos; to 88788 &bull; TTY 1-800-787-3224
              </div>
            </div>
          </div>

          {/* Mentoring Tracks */}
          <div className="footer-column">
            <h4>Mentoring &amp; Youth</h4>
            <ul className="footer-links">
              <li><Link href="/mentoring/trailblazers">Sisterhood Mentorship</Link></li>
              <li><Link href="/orphanage-support" style={{ color: '#FDE047', fontWeight: 700 }}>Orphanage &amp; Children Care</Link></li>
              <li><Link href="/mentoring/turnaround">Turnaround Life Reset</Link></li>
              <li><Link href="/mentoring/higher-ground">Higher Ground Wraparound</Link></li>
              <li><Link href="/mentoring/lunch-friends">Employment Skills</Link></li>
              <li><Link href="/mentoring/success-stories">Success Stories</Link></li>
              <li><Link href="/mentoring/faqs">Mentees &amp; Family FAQs</Link></li>
            </ul>
          </div>

          {/* Crisis Services */}
          <div className="footer-column">
            <h4>Crisis &amp; Shelter</h4>
            <ul className="footer-links">
              <li><Link href="/crisis/emergency" style={{ color: '#FDA4AF', fontWeight: 800 }}>Emergency Help (911)</Link></li>
              <li><Link href="/crisis/shelter-services">Shelter &amp; Intake Protocol</Link></li>
              <li><Link href="/crisis/counseling">Counseling &amp; Clinical</Link></li>
              <li><Link href="/crisis/childrens-services">Children&apos;s Services</Link></li>
              <li><Link href="/crisis/privacy-safety">Tech &amp; Privacy Safety</Link></li>
              <li><Link href="/crisis/friends-family">For Friends &amp; Family</Link></li>
              <li><Link href="/crisis/professionals">Professional Referrals</Link></li>
              <li><Link href="/crisis/grievance">Resident Grievance Policy</Link></li>
            </ul>
          </div>

          {/* Admin & Legal */}
          <div className="footer-column">
            <h4>Administrative &amp; Legal</h4>
            <ul className="footer-links">
              <li><Link href="/about">About Our Mission</Link></li>
              <li><Link href="/about/guiding-principles">Guiding Principles</Link></li>
              <li><Link href="/about/leadership">Leadership &amp; Board</Link></li>
              <li><Link href="/about/financials">Financials &amp; Audit Reports</Link></li>
              <li><Link href="/get-involved/volunteer">Volunteer &amp; Screening</Link></li>
              <li><Link href="/contact">General Contact</Link></li>
              <li style={{ marginTop: '0.65rem', fontSize: '0.85rem', color: '#94A3B8' }}>
                <MapPin size={14} style={{ display: 'inline', marginRight: '4px' }} />
                {FOUNDATION_META.adminAddress}
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Legal Disclosures Bar */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {FOUNDATION_META.name}. All Rights Reserved. EIN: {FOUNDATION_META.ein}
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link href="/legal/privacy">Privacy Policy</Link>
            <Link href="/legal/terms">Terms of Use</Link>
            <Link href="/legal/nondiscrimination">Nondiscrimination</Link>
            <Link href="/legal/accessibility">Accessibility</Link>
            <Link href="/legal/tax-exempt">501(c)(3) Status</Link>
            <Link href="/legal/data-protection">Data Protection &amp; Records</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
