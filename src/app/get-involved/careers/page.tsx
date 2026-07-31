import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
  const positions = [
    {
      title: "Bilingual Residential Advocate (Full-Time / Evening Shift)",
      department: "Shelter Operations",
      description: "Provides 24/7 crisis line answering, trauma-informed resident intake, emergency triage, and supportive crisis care."
    },
    {
      title: "Licensed Clinical Counselor (LCSW / LPC)",
      department: "Clinical Services",
      description: "Delivers individual counseling, facilitates support groups, and conducts clinical assessments for adult and youth clients."
    },
    {
      title: "Youth Mentoring Coordinator",
      department: "Mentoring Division",
      description: "Coordinates mentor-mentee matching, conducts mentor background screenings, and manages monthly youth retreat logistics."
    }
  ];

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>Join Our Staff Team</span>
        <h1>2.5.2 Careers &amp; Open Positions</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Build a rewarding career empowering North Texas youth and supporting domestic violence survivors.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {positions.map((pos, idx) => (
          <div key={idx} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge badge-mentoring">{pos.department}</span>
              <h3 style={{ margin: '0.35rem 0' }}>{pos.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', margin: 0 }}>{pos.description}</p>
            </div>

            <Link href="/contact" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.88rem' }}>
              <span>Apply / Inquiry</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
