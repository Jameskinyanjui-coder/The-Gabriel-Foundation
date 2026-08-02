import React from 'react';
import Link from 'next/link';
import { Heart, BookOpen, ShieldCheck, Home, Smile, ArrowRight, CheckCircle } from 'lucide-react';
import { FOUNDATION_META } from '@/data/siteData';

export default function OrphanageSupportPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '850px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>Children & Youth Care</span>
        <h1>Orphanage &amp; Children Care Support</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.7', marginTop: '1rem' }}>
          Providing safe lodging, educational scholarships, clothing, nutrition, and holistic emotional care for orphaned and vulnerable children.
        </p>
      </div>

      {/* Core Services Grid */}
      <div className="grid-3" style={{ gap: '2rem', marginBottom: '3.5rem' }}>
        <div className="card">
          <Home size={32} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
          <h3>Safe Lodging &amp; Shelter</h3>
          <p style={{ fontSize: '0.94rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            Supporting partner orphanages and children's homes with safe bedding, structural repairs, clean water systems, and emergency shelter care.
          </p>
        </div>

        <div className="card">
          <BookOpen size={32} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
          <h3>Education &amp; School Supplies</h3>
          <p style={{ fontSize: '0.94rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            Funding school tuition fees, textbooks, uniforms, backpack kits, and digital learning tools to ensure every child thrives academically.
          </p>
        </div>

        <div className="card">
          <Heart size={32} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
          <h3>Nutrition &amp; Healthcare</h3>
          <p style={{ fontSize: '0.94rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            Delivering daily balanced meals, vitamin supplements, hygiene care packages, and routine pediatric healthcare checkups.
          </p>
        </div>
      </div>

      {/* Detailed Impact Section */}
      <div className="card" style={{ padding: '2.5rem', marginBottom: '3.5rem', borderLeft: '5px solid var(--color-primary)' }}>
        <h2 style={{ marginBottom: '1rem' }}>Holistic Support for Every Child</h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '1.5rem' }}>
          At <strong>The Gabriel Foundation</strong>, we believe every child deserves a nurturing environment filled with love, dignity, and opportunity. Our Orphanage Support initiative bridges critical gaps for children who have lost parental care.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="grid-responsive">
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <CheckCircle size={20} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '3px' }} />
            <div>
              <h4 style={{ margin: '0 0 0.25rem 0' }}>Emotional Counseling &amp; Play Therapy</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: '1.5' }}>
                Trauma-informed care and recreational therapy to help children process loss and build resilience.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <CheckCircle size={20} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '3px' }} />
            <div>
              <h4 style={{ margin: '0 0 0.25rem 0' }}>Life Skills &amp; Youth Mentorship</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: '1.5' }}>
                Pairing older children with positive mentors for career guidance and transition to adult independence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="card hero-track-mentoring" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
        <Smile size={40} style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />
        <h2>Sponsor an Orphaned Child Today</h2>
        <p style={{ maxWidth: '650px', margin: '0.75rem auto 1.75rem auto', color: 'var(--color-text-muted)', fontSize: '1.02rem', lineHeight: '1.6' }}>
          Your contribution provides nutritious food, school supplies, clothing, and safe shelter for a vulnerable child in need.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }} className="dual-cta-row">
          <Link href="/donate" className="btn btn-primary">
            <span>Sponsor a Child ($35/mo)</span>
            <ArrowRight size={16} />
          </Link>
          <Link href="/get-involved" className="btn btn-outline">
            <span>Volunteer Care Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
