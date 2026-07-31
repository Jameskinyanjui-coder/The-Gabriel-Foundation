import React from 'react';
import Link from 'next/link';
import { HelpCircle, ArrowRight } from 'lucide-react';

export default function MentoringFAQsPage() {
  const faqs = [
    {
      q: "How are mentors screened and selected?",
      a: "Every adult mentor undergoes comprehensive background checks (including criminal history and sexual offender registries), personal reference checks, and 12 hours of mandatory youth safety orientation (SOP Section 10.1)."
    },
    {
      q: "Is there any cost to enroll a youth in Trailblazers or Turnaround?",
      a: "No. All mentoring, tutoring, college prep workshops, and retreat activities are 100% free of charge to participating youth and families thanks to our donors and grant partners."
    },
    {
      q: "How long is the mentoring match commitment?",
      a: "Mentors and youth commit to an initial 12-month matching window, meeting weekly for 1 to 2 hours of positive activities, tutoring, or community outings."
    },
    {
      q: "Who can refer a youth to the program?",
      a: "Referrals are welcomed from parents, legal guardians, school counselors, teachers, community leaders, or self-referral by older youth."
    }
  ];

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>Family Answers</span>
        <h1>2.3.7 FAQs for Families &amp; Mentees</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Common questions about enrolling, mentor safety screening, and program expectations.
        </p>
      </div>

      <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {faqs.map((faq, idx) => (
          <div key={idx} className="card">
            <h3 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <HelpCircle size={20} /> {faq.q}
            </h3>
            <p style={{ fontSize: '0.96rem', color: 'var(--color-text-main)', lineHeight: '1.6', margin: 0 }}>
              {faq.a}
            </p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link href="/contact" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
          <span>Contact Mentoring Admissions Team</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
