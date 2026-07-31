import React from 'react';
import Link from 'next/link';
import { Users, Briefcase, Building2, Gift, ArrowRight } from 'lucide-react';
import VolunteerFormModal from '@/components/VolunteerFormModal';

export default function GetInvolvedPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '850px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>Join Our Community</span>
        <h1>Get Involved &amp; Make a Difference</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.7', marginTop: '1rem' }}>
          Whether you mentor a young person, volunteer with crisis services, partner as a corporate sponsor, or donate supplies, your involvement transforms lives in North Texas.
        </p>
      </div>

      <div className="grid-2" style={{ gap: '2rem', marginBottom: '4rem' }}>
        {/* Volunteer Overview */}
        <div className="card hero-track-mentoring">
          <Users size={32} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
          <h2>2.5.1 Volunteer Programs</h2>
          <p style={{ fontSize: '0.96rem', color: 'var(--color-text-main)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
            Become a youth mentor for Trailblazers/Turnaround or serve as a trained crisis support volunteer. All volunteers complete background screening and trauma-informed orientation (SOP Section 10).
          </p>
          <Link href="/get-involved/volunteer" className="btn btn-primary">
            <span>Apply to Volunteer &amp; Learn Standards</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Corporate Partnerships */}
        <div className="card hero-track-mentoring">
          <Building2 size={32} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
          <h2>2.5.3 Corporate Partnerships</h2>
          <p style={{ fontSize: '0.96rem', color: 'var(--color-text-main)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
            Sponsor program initiatives, host Lunch Friends corporate workshops, or organize employee volunteer days to empower North Texas families.
          </p>
          <Link href="/get-involved/partnerships" className="btn btn-primary">
            <span>Explore Corporate Sponsorships</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Embedded Volunteer Application Modal */}
      <div style={{ marginTop: '2rem' }}>
        <VolunteerFormModal />
      </div>
    </div>
  );
}
