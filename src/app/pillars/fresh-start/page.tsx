import React from 'react';
import { Shield, CheckCircle, Clock, Heart, Lock, FileText } from 'lucide-react';
import Link from 'next/link';

export default function ShelterServicesPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-crisis" style={{ marginBottom: '0.75rem' }}>SOP Sections 5, 6 &amp; 9 Standard</span>
        <h1>2.4.2 How Our Shelter &amp; Services Work</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Safe, confidential lodging and comprehensive case management for adult women and children.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* 2.4.2.1 Eligibility */}
        <div className="card" style={{ borderLeft: '4px solid var(--color-crisis-dark)' }}>
          <h2 style={{ color: 'var(--color-crisis-dark)', fontSize: '1.35rem', marginBottom: '0.5rem' }}>
            2.4.2.1 Eligibility (SOP Section 6.1)
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            Our emergency shelter serves adult women (ages 18 and older), with or without dependent children, who are actively fleeing domestic violence, intimate partner abuse, or imminent danger. Services are provided free of charge, with zero income, credit, or immigration status barriers. If our facility is at full capacity, advocates provide immediate warm referrals to partner shelters within the regional crisis network (SOP 5).
          </p>
        </div>

        {/* 2.4.2.2 What Happens When You Call */}
        <div className="card" style={{ borderLeft: '4px solid var(--color-crisis-dark)' }}>
          <h2 style={{ color: 'var(--color-crisis-dark)', fontSize: '1.35rem', marginBottom: '0.5rem' }}>
            2.4.2.2 What Happens When You Call (SOP Section 5)
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            When you call our 24/7 Crisis Line, an advocate will complete a brief, compassionate danger assessment and intake screening. We evaluate immediate safety needs, confirm lodging availability, and coordinate confidential, safe transportation to our shelter facility.
          </p>
        </div>

        {/* 2.4.2.3 What to Expect at Intake */}
        <div className="card" style={{ borderLeft: '4px solid var(--color-crisis-dark)' }}>
          <h2 style={{ color: 'var(--color-crisis-dark)', fontSize: '1.35rem', marginBottom: '0.5rem' }}>
            2.4.2.3 What to Expect at Intake (SOP Section 6.2)
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Upon arrival, your immediate physical needs come first: a private room, fresh linens, warm meals, hygiene kits, and medical triage. You will meet with your case manager to review shelter guidelines, complete confidentiality agreements, and co-create an individualized safety plan tailored to your goals.
          </p>
          <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem', color: 'var(--color-text-main)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <li>Private bedrooms for single women and mothers with children.</li>
            <li>Secure shared kitchen, laundry facilities, and children&apos;s play area.</li>
            <li>24/7 advocate staffing and exterior security monitoring (SOP Section 7).</li>
          </ul>
        </div>

        {/* 2.4.2.4 Length of Stay & Case Management */}
        <div className="card" style={{ borderLeft: '4px solid var(--color-crisis-dark)' }}>
          <h2 style={{ color: 'var(--color-crisis-dark)', fontSize: '1.35rem', marginBottom: '0.5rem' }}>
            2.4.2.4 Length of Stay &amp; Case Management (SOP Section 6.3)
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            Residents receive structured, temporary emergency shelter with biweekly case management reviews. Case managers assist with transitional housing applications, employment coaching, legal aid coordination, and emotional recovery support to prepare residents for permanent stability.
          </p>
        </div>

        {/* 2.4.2.5 Exit Planning & Optional Follow-Up [NEW] */}
        <div className="card" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
          <h2 style={{ color: 'var(--color-secondary)', fontSize: '1.35rem', marginBottom: '0.5rem' }}>
            2.4.2.5 Exit Planning &amp; Optional Follow-Up (SOP Section 9)
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            Prior to exiting the shelter, every resident completes a personalized Exit Safety Plan. To support long-term stability, we offer voluntary, de-identified 30-day and 90-day check-in follow-ups via a secure contact method chosen exclusively by the survivor. Follow-up is always optional and never required.
          </p>
        </div>
      </div>
    </div>
  );
}
