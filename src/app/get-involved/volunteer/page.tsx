import React from 'react';
import VolunteerFormModal from '@/components/VolunteerFormModal';
import { ShieldCheck, FileCheck, Users, HeartHandshake } from 'lucide-react';

export default function VolunteerPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>Community Action</span>
        <h1>2.5.1 Volunteer Opportunities</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Explore volunteer roles and review our background screening standards.
        </p>
      </div>

      <div className="grid-2" style={{ gap: '2rem', marginBottom: '3rem' }}>
        {/* 2.5.1.1 Become a Mentor */}
        <div className="card">
          <Users size={32} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
          <h3>2.5.1.1 Become a Female Peer Mentor</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            Commit to 1 to 2 hours weekly or bi-weekly, encouraging a woman in personal confidence, goal setting, and emotional resilience.
          </p>
        </div>

        {/* 2.5.1.2 Volunteer for Crisis Support Services */}
        <div className="card">
          <HeartHandshake size={32} style={{ color: 'var(--color-crisis-dark)', marginBottom: '0.75rem' }} />
          <h3>2.5.1.2 Crisis Support Volunteer</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            Assist administrative operations, holiday drive logistics, or community outreach. Crisis volunteers sign strict confidentiality agreements and have zero direct access to confidential shelter client files (SOP 10.3).
          </p>
        </div>
      </div>

      {/* 2.5.1.3 Volunteer & Staff Screening Standards [NEW SOP 10.1 - 10.3] */}
      <div className="card callout-box" style={{ backgroundColor: '#F8FAFC', borderLeftColor: '#0EA5E9', marginBottom: '3rem', padding: '2rem' }}>
        <h2 style={{ color: '#0369A1', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <ShieldCheck size={26} /> 2.5.1.3 Volunteer &amp; Staff Screening Standards (SOP Section 10)
        </h2>
        <p style={{ fontSize: '0.96rem', lineHeight: '1.6', color: 'var(--color-text-main)', marginBottom: '1rem' }}>
          To ensure safety across both women's mentorship programs and emergency shelter operations, every volunteer and staff applicant undergoes a multi-step vetting process prior to onboarding:
        </p>
        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.92rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-text-main)' }}>
          <li><strong>Background Checks (SOP 10.1):</strong> Criminal history search, national sex offender registry check, and professional reference verification.</li>
          <li><strong>Trauma-Informed Training (SOP 10.2):</strong> Mandatory 12-hour orientation covering child safety protocols, active listening, and domestic violence dynamics.</li>
          <li><strong>Confidentiality Agreement (SOP 10.3):</strong> Binding confidentiality covenant protecting client identities and administrative security.</li>
        </ul>
      </div>

      {/* Embedded Form Modal */}
      <VolunteerFormModal />
    </div>
  );
}
