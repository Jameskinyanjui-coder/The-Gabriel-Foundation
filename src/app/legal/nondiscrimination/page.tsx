import React from 'react';

export default function NondiscriminationPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem', maxWidth: '900px' }}>
      <h1>2.10.3 Nondiscrimination Statement</h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>SOP Section 2.5 Compliance</p>

      <div className="card" style={{ borderLeft: '4px solid var(--color-primary)', lineHeight: '1.7' }}>
        <p style={{ fontSize: '1.05rem' }}>
          The Gabriel Foundation complies with all applicable federal, state, and local civil rights laws. Services across both our Youth Mentoring &amp; Empowerment division and Crisis Support &amp; Emergency Shelter division are provided to all eligible individuals without regard to race, color, national origin, religion, creed, age, mental or physical disability, sexual orientation, gender identity, income level, or immigration status.
        </p>
      </div>
    </div>
  );
}
