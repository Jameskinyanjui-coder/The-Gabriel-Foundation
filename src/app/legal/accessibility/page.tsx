import React from 'react';

export default function AccessibilityPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem', maxWidth: '900px' }}>
      <h1>2.10.4 Accessibility Statement</h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>WCAG 2.1 AA Commitment</p>

      <div className="card" style={{ borderLeft: '4px solid var(--color-secondary)', lineHeight: '1.7' }}>
        <p style={{ fontSize: '1.02rem' }}>
          The Gabriel Foundation is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards, aiming to conform to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
        </p>
        <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Accessibility Features Implemented:</h3>
        <ul style={{ paddingLeft: '1.2rem' }}>
          <li>High contrast colors exceeding 4.5:1 ratio requirements</li>
          <li>Keyboard navigability with clear visual focus indicators</li>
          <li>ARIA labels and landmark regions for screen reader software</li>
          <li>Quick exit ESC key listeners and persistent touch targets</li>
        </ul>
      </div>
    </div>
  );
}
