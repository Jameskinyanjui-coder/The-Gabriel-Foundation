import React from 'react';
import { Quote, Sparkles, Heart } from 'lucide-react';

export default function SuccessStoriesPage() {
  const stories = [
    {
      quote: "My mentor helped me realize I was capable of big things. Before Trailblazers, I didn't think I would graduate high school. This spring, I started my freshman year at Texas Woman's University with a full academic scholarship.",
      author: "Maya R.",
      program: "Trailblazers Graduate (2-Year Match)",
      consentNote: "Consent on file. De-identified for public release."
    },
    {
      quote: "Turnaround gave me the exact tools I needed—how to write a professional resume, how to handle job interviews, and how to budget my earnings. I secured a promotion at my job within 6 months.",
      author: "David K.",
      program: "Turnaround Program Graduate",
      consentNote: "Consent on file."
    },
    {
      quote: "When our family was struggling with emergency bills and housing security, Higher Ground stepped in with genuine warmth and resources. They didn't just give us advice; they stood by us until we were back on our feet.",
      author: "The Rodriguez Family",
      program: "Higher Ground Wraparound Services",
      consentNote: "Consent on file."
    }
  ];

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>Transformative Impact</span>
        <h1>2.3.6 Consented Success Stories</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Real stories of growth, academic success, and family resilience from our mentoring and empowerment programs.
        </p>
      </div>

      <div className="grid-3" style={{ gap: '2rem' }}>
        {stories.map((s, idx) => (
          <div key={idx} className="card hero-track-mentoring" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <Quote size={32} style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />
              <blockquote style={{ fontSize: '1rem', fontStyle: 'italic', lineHeight: '1.6', color: 'var(--color-text-main)', marginBottom: '1.25rem' }}>
                &ldquo;{s.quote}&rdquo;
              </blockquote>
            </div>

            <div style={{ borderTop: '1px solid #F5C4B1', paddingTop: '1rem' }}>
              <div style={{ fontWeight: 800, color: 'var(--color-primary)' }}>{s.author}</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-main)' }}>{s.program}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '2px', fontStyle: 'italic' }}>
                {s.consentNote}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
