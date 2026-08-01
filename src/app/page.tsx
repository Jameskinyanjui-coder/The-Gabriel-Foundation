'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FOUNDATION_META, IMPACT_STATS, GALLERY_IMAGES, HERO_IMAGE, PILLAR_IMAGES } from '@/data/siteData';
import {
  Users, Shield, Heart, ArrowRight,
  CheckCircle2, ShieldCheck, HeartHandshake, Home, Handshake, ChevronDown, ChevronUp
} from 'lucide-react';
import IntakeScreener from '@/components/IntakeScreener';
import ReferralDirectory from '@/components/ReferralDirectory';

export default function HomePage() {
  const [showAllGallery, setShowAllGallery] = useState(false);

  const displayedGallery = showAllGallery ? GALLERY_IMAGES : GALLERY_IMAGES.slice(0, 4);

  return (
    <div>

      {/* ── Hero Section: Protecting Women & Rebuilding Lives ── */}
      <section style={{ background: '#FFFFFF', borderBottom: '1px solid var(--color-border)', paddingTop: '2.5rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="hero-promo-grid" style={{ alignItems: 'center' }}>

            {/* Left Content Area */}
            <div className="hero-text-area">
              <h1 style={{ marginBottom: '1.25rem', lineHeight: '1.08', fontSize: 'clamp(2.1rem, 5vw, 3.8rem)' }}>
                Rising Strong Against Violence & Abuse.<br />
                <span style={{ color: 'var(--irc-orange)' }}>Mentorship. Counseling. Life Reset.</span>
              </h1>

              <p style={{ fontSize: '1.18rem', color: 'var(--color-text-muted)', lineHeight: '1.75', maxWidth: '580px', marginBottom: '2rem' }}>
                {FOUNDATION_META.mission}
              </p>

              {/* Action CTAs */}
              <div className="dual-cta-row" style={{ marginBottom: '2.25rem', gap: '0.85rem' }}>
                <Link href="/crisis" className="btn btn-crisis" style={{ padding: '0.95rem 1.85rem', fontSize: '1.05rem', maxWidth: '100%', boxSizing: 'border-box', wordBreak: 'break-word' }}>
                  <Shield size={19} /> Get Support Now
                </Link>
                <Link href="/mentoring" className="btn btn-primary" style={{ padding: '0.95rem 1.85rem', fontSize: '1.05rem', maxWidth: '100%', boxSizing: 'border-box', wordBreak: 'break-word' }}>
                  <Users size={19} /> Mentorship & Reset Services
                </Link>
                <Link href="/donate" className="btn btn-donate-now" style={{ padding: '0.95rem 1.85rem', fontSize: '1.05rem', maxWidth: '100%', boxSizing: 'border-box', wordBreak: 'break-word' }}>
                  <Heart size={19} fill="var(--irc-dark)" /> Support Our Launch
                </Link>
              </div>

              {/* Verified Trust Metrics */}
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.95rem', color: 'var(--color-text-muted)', borderTop: '1px solid var(--color-border)', paddingTop: '1.25rem' }}>
                <span><strong style={{ color: 'var(--irc-dark)' }}>Newly Launched</strong> NGO</span>
                <span><strong style={{ color: 'var(--irc-dark)' }}>100%</strong> Confidential & Safe</span>
                <span><strong style={{ color: 'var(--irc-dark)' }}>Open</strong> Mentee & Volunteer Intake</span>
              </div>
            </div>

            {/* Right Hero Image Card (Dedicated Hero Photo: woman-rising-silhouette.jpg) */}
            <div className="hero-image-area">
              <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border)' }}>
                <div style={{ position: 'relative', width: '100%', minHeight: '320px', height: '100%' }}>
                  <img
                    src={HERO_IMAGE.url}
                    alt={HERO_IMAGE.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', minHeight: '320px' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(17,24,39,0.95) 0%, rgba(17,24,39,0.2) 60%, transparent 100%)' }} />
                  
                  <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', color: '#FFFFFF' }}>
                    <div style={{ background: 'var(--hrc-yellow)', color: 'var(--irc-dark)', fontSize: '0.78rem', fontWeight: 900, textTransform: 'uppercase', padding: '0.3rem 0.7rem', borderRadius: '4px', display: 'inline-block', marginBottom: '0.5rem' }}>
                      {HERO_IMAGE.badge}
                    </div>
                    <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', fontWeight: 800, lineHeight: 1.25, marginBottom: '0.35rem' }}>
                      "{HERO_IMAGE.title}"
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#E2E8F0', lineHeight: 1.5 }}>
                      {HERO_IMAGE.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Impact Strip: Launch Metrics ── */}
      <section style={{ background: 'var(--fa-green)' }}>
        <div className="container">
          <div className="stat-strip">
            {IMPACT_STATS.map((stat, idx) => (
              <div key={idx} className="stat-strip-item">
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Three Core Pillars Section ── */}
      <section style={{ padding: '4.5rem 0', background: 'var(--color-bg-main)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <div style={{ color: 'var(--irc-orange)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              How We Help Women Escape Abuse
            </div>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem' }}>Our 3 Pillars of Empowerment & Safety</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              We walk alongside women through every step of their journey — from crisis emergency safety to 1-on-1 counseling, sisterhood mentorship, and complete life rebuilding.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '2rem' }}>
            
            {/* Pillar 1: Mentorship */}
            <div className="pillar-card">
              <div className="pillar-img-container">
                <img src={PILLAR_IMAGES.mentorship.url} alt={PILLAR_IMAGES.mentorship.alt} />
                <span className="gallery-badge">Pillar 1 • Sisterhood</span>
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--irc-dark)', marginBottom: '0.6rem' }}>
                  1. Women's Mentorship & Sisterhood
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.25rem', flex: 1 }}>
                  Pairing women with trained female mentors to build confidence, establish personal goals, navigate emotional hurdles, and form strong survivor support networks.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--fa-green)" /> 1-on-1 Peer Mentorship Matches</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--fa-green)" /> Sisterhood Empowerment Circles</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--fa-green)" /> Emotional Resilience Coaching</li>
                </ul>
                <Link href="/mentoring" className="btn btn-secondary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                  Explore Mentorship Circle <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Pillar 2: Counseling */}
            <div className="pillar-card">
              <div className="pillar-img-container">
                <img src={PILLAR_IMAGES.counseling.url} alt={PILLAR_IMAGES.counseling.alt} />
                <span className="gallery-badge">Pillar 2 • Recovery</span>
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--irc-dark)', marginBottom: '0.6rem' }}>
                  2. Confidential Counseling & Therapy
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.25rem', flex: 1 }}>
                  Licensed trauma therapists provide 1-on-1 counseling and support groups to process psychological wounds, reclaim self-worth, and heal from domestic violence.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--fa-green)" /> Licensed Trauma-Informed Therapists</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--fa-green)" /> Weekly Confidential Support Groups</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--fa-green)" /> Mother & Child Healing Sessions</li>
                </ul>
                <Link href="/crisis/counseling" className="btn btn-secondary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                  Access Counseling Services <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Pillar 3: Life Reset ('Reset Up') */}
            <div className="pillar-card">
              <div className="pillar-img-container">
                <img src={PILLAR_IMAGES.lifeReset.url} alt={PILLAR_IMAGES.lifeReset.alt} />
                <span className="gallery-badge">Pillar 3 • Fresh Start</span>
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--irc-dark)', marginBottom: '0.6rem' }}>
                  3. Life Reset & Safe Housing ("Reset Up")
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.25rem', flex: 1 }}>
                  Providing confidential emergency shelter, relocation funds, legal protective orders, household setup, and career guidance to start fresh in complete safety.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--fa-green)" /> Confidential Unlisted Shelter Lodging</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--fa-green)" /> Relocation &amp; New Apartment Setup</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--fa-green)" /> Job Training &amp; Financial Independence</li>
                </ul>
                <Link href="/crisis/shelter-services" className="btn btn-secondary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                  Learn About 'Reset Up' <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Pillar 4: Orphanage & Children Support */}
            <div className="pillar-card">
              <div className="pillar-img-container">
                <img src={PILLAR_IMAGES.orphanCare.url} alt={PILLAR_IMAGES.orphanCare.alt} />
                <span className="gallery-badge">Pillar 4 • Youth Care</span>
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--irc-dark)', marginBottom: '0.6rem' }}>
                  4. Orphanage &amp; Children Care Support
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.25rem', flex: 1 }}>
                  Providing safe lodging, school supply kits, nutrition, clothes, and holistic emotional care for orphaned and vulnerable children in need.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--fa-green)" /> Educational Scholarships &amp; Books</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--fa-green)" /> Daily Meal Kits &amp; Pediatric Care</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--fa-green)" /> Safe Orphanage Shelter Upgrades</li>
                </ul>
                <Link href="/orphanage-support" className="btn btn-secondary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                  Orphanage Care Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Voices of Courage Photo Showcase Gallery (Displays 4 Photos Initially with 'View More' Button) ── */}
      <section style={{ padding: '4.5rem 0', background: '#FFFFFF', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <div style={{ color: 'var(--irc-orange)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              Empowerment & Activism Gallery
            </div>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem' }}>Voices of Courage, Dignity & Hope</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Every woman deserves safety, bodily autonomy, and a life free from fear. Here are moments of solidarity, strength, and community rebuilding.
            </p>
          </div>

          {/* 4 Cards Per Row Grid */}
          <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {displayedGallery.map((item, idx) => (
              <div key={idx} className="gallery-card">
                <div className="gallery-image-wrapper">
                  <img src={item.url} alt={item.alt} />
                  <span className="gallery-badge">{item.badge}</span>
                </div>
                <div className="gallery-content">
                  <h3 className="gallery-title">{item.title}</h3>
                  <p className="gallery-subtitle">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View More / View Less Button */}
          {GALLERY_IMAGES.length > 4 && (
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <button
                type="button"
                onClick={() => setShowAllGallery(!showAllGallery)}
                className="btn btn-outline"
                style={{ padding: '0.85rem 2rem', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '8px', border: '2px solid var(--irc-orange)', color: 'var(--irc-orange)', fontWeight: 800 }}
              >
                {showAllGallery ? (
                  <>Show Fewer Photos <ChevronUp size={18} /></>
                ) : (
                  <>View More Photos ({GALLERY_IMAGES.length - 4} More) <ChevronDown size={18} /></>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Confidential Intake Screener & Immediate Hotline Link ── */}
      <section style={{ padding: '4.5rem 0', background: 'var(--color-bg-main)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
            
            {/* Interactive Screener */}
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Confidential Support & Intake Request</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  If you or someone you know is seeking mentorship, counseling, or safe reset assistance, fill out this brief confidential intake to get in touch.
                </p>
              </div>
              <IntakeScreener />
            </div>

            {/* Emergency Info Box linking to National Helpline */}
            <div style={{ background: 'var(--hrc-blue)', color: '#FFFFFF', padding: '2.25rem', borderRadius: '16px', borderLeft: '6px solid var(--hrc-yellow)', boxShadow: 'var(--shadow-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--hrc-yellow)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                <Shield size={20} /> Emergency Crisis Resources
              </div>

              <h3 style={{ color: '#FFFFFF', fontSize: '1.8rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                In Danger Right Now?
              </h3>
              <p style={{ color: '#CBD5E1', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                If you are in immediate physical danger, please call 911 immediately. For 24/7 confidential crisis support, connect with national emergency lifelines below:
              </p>

              <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.15)', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.82rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 800 }}>National Domestic Violence Hotline</div>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--hrc-yellow)', margin: '0.2rem 0' }}>
                  {FOUNDATION_META.nationalHotline}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#E2E8F0' }}>{FOUNDATION_META.hotlineText} • Free &amp; 24/7</div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.15)', marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.82rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 800 }}>Gabriel Foundation Email Intake</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', margin: '0.2rem 0' }}>
                  {FOUNDATION_META.adminEmail}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#E2E8F0' }}>Confidential Response within 24 Hours</div>
              </div>

              <Link href="/crisis" className="btn btn-crisis" style={{ width: '100%', textAlign: 'center', justifyContent: 'center', padding: '0.9rem 1.25rem', fontSize: '1rem' }}>
                <Shield size={18} /> View Crisis Resources & Safety Plan
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Partner Network Invitation ── */}
      <section style={{ padding: '4.5rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
            <div style={{ color: 'var(--irc-orange)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              Community Collaboration
            </div>
            <h2 style={{ fontSize: '2.1rem', marginBottom: '0.75rem' }}>Building Our Partner Network</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, fontSize: '1.05rem' }}>
              As a newly established non-profit organization, <strong>The Gabriel Foundation</strong> is actively building partnerships with legal aid groups, healthcare providers, local businesses, and community shelters. We invite organizations and advocates to join our mission.
            </p>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <Link href="/get-involved" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1.05rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Handshake size={20} /> Partner With Us / Become a Founding Partner
            </Link>
          </div>

          <ReferralDirectory />
        </div>
      </section>

      {/* ── Final Call to Action ── */}
      <section style={{ background: 'var(--irc-dark)', color: '#FFFFFF', padding: '4.5rem 0', textAlign: 'center', borderTop: '4px solid var(--irc-orange)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ color: '#FFFFFF', fontSize: '2.4rem', marginBottom: '1.2rem' }}>
            Together, We Can End Violence Against Women
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', lineHeight: 1.7, marginBottom: '2.25rem' }}>
            Join us in founding a sanctuary of hope. Your support enables 1-on-1 counseling, sisterhood mentorship, and safe life reset opportunities for women rebuilding their lives.
          </p>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1.25rem', justifyContent: 'center', alignItems: 'center' }} className="cta-buttons-row">
            <Link href="/donate" className="btn btn-donate-now" style={{ padding: '1rem 2rem', fontSize: '1.05rem', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Heart size={20} fill="var(--irc-dark)" /> Support Our Launch
            </Link>
            <Link href="/get-involved" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.05rem', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Become a Volunteer Mentor <Users size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
