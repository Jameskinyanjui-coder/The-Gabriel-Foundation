import React from 'react';
import Link from 'next/link';
import { HelpCircle, ArrowRight } from 'lucide-react';

export default function MentoringFAQsPage() {
  const faqs = [
    {
      q: "How are female mentors screened and selected?",
      a: "Every female mentor undergoes comprehensive background checks (including criminal history registries), personal reference verification, and 12 hours of mandatory trauma-informed orientation (SOP Section 10.1)."
    },
    {
      q: "Is there any cost to join our Sisterhood Mentorship Circle?",
      a: "No. All mentorship, counseling referrals, career prep workshops, and support circle activities are 100% free of charge to participating women thanks to our donors and founding grant partners."
    },
    {
      q: "How long is the mentorship matching commitment?",
      a: "Mentors and mentees commit to a flexible 6 to 12 month matching window, meeting weekly or bi-weekly for 1-on-1 support check-ins, goal planning, and empowerment circles."
    },
    {
      q: "Who can request mentorship support?",
      a: "Self-referrals are welcomed directly online by women seeking support, as well as referrals from community allies, legal advocates, counselors, or family members."
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
