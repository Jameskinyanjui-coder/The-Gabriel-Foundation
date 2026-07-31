import React from 'react';
import { LEADERSHIP } from '@/data/siteData';
import { UserCheck, Award, Shield, Briefcase } from 'lucide-react';

export default function LeadershipPage() {
  const president = LEADERSHIP.find(l => l.type === 'executive');
  const boardMembers = LEADERSHIP.filter(l => l.type === 'board');
  const staffRoles = LEADERSHIP.filter(l => l.type === 'staff');

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>Governance &amp; Leadership</span>
        <h1>2.2.3 Leadership &amp; Board of Directors</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Dedicated community leaders, clinical supervisors, and fiscal stewards driving our vision with integrity and transparency.
        </p>
      </div>

      {/* 2.2.3.1 President Profile */}
      {president && (
        <div className="card" style={{ marginBottom: '3.5rem', background: 'linear-gradient(135deg, #FFF9F5 0%, #FAF0E6 100%)', border: '2px solid var(--color-primary)' }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ width: '90px', height: '90px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 800 }}>
              RK
            </div>
            <div style={{ flex: 1 }}>
              <span className="badge badge-mentoring">2.2.3.1 Founder Profile</span>
              <h2 style={{ color: 'var(--color-primary)', marginTop: '0.35rem', marginBottom: '0.35rem' }}>{president.name}</h2>
              <div style={{ fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>{president.role}</div>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
                {president.bio}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 2.2.3.2 Board of Directors */}
      <div style={{ marginBottom: '3.5rem' }}>
        <h2 style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          2.2.3.2 Board of Directors (SOP Section 3.1)
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
          Our Board of Directors serves a vital fiduciary and oversight role—approving annual budgets, reviewing CPA audit results, and safeguarding organizational adherence to 2 CFR 200 grant compliance.
        </p>
        <div className="grid-3">
          {boardMembers.map((member, idx) => (
            <div key={idx} className="card">
              <UserCheck size={28} style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{member.name}</h3>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>{member.role}</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2.2.3.3 Staff Leadership Functional Roles */}
      <div>
        <h2 style={{ marginBottom: '1rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          2.2.3.3 Staff Leadership Roles (SOP Section 3.2)
        </h2>
        <div className="callout-box" style={{ backgroundColor: '#F0F7F9', borderLeftColor: 'var(--color-crisis-dark)', marginBottom: '1.5rem' }}>
          <strong>Safety Note:</strong> Staff profiles are described by functional responsibility and professional credentials only. Individual employee shift schedules and physical shelter locations are kept strictly confidential to preserve resident safety.
        </div>

        <div className="grid-3">
          {staffRoles.map((staff, idx) => (
            <div key={idx} className="card" style={{ borderLeft: '3px solid var(--color-crisis-dark)' }}>
              <Briefcase size={26} style={{ color: 'var(--color-crisis-dark)', marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>{staff.name}</h3>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-crisis-main)', marginBottom: '0.75rem' }}>{staff.role}</div>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>{staff.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
