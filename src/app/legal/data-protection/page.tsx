import React from 'react';

export default function DataProtectionPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem', maxWidth: '900px' }}>
      <h1>2.10.6 Data Protection &amp; Client Records Statement</h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>SOP Section 11 &amp; Appendix B Standards</p>

      <div className="card" style={{ borderLeft: '4px solid var(--color-crisis-dark)', lineHeight: '1.7' }}>
        <h2 style={{ color: 'var(--color-crisis-dark)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
          Recordkeeping, Retention &amp; Data Security (SOP Section 11)
        </h2>
        <p style={{ fontSize: '0.98rem', marginBottom: '1rem' }}>
          The Gabriel Foundation implements stringent electronic and physical safeguards for all client records:
        </p>

        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>
            <strong>Encrypted Databases:</strong> Client case files are stored in 256-bit AES encrypted, password-protected databases accessible exclusively to assigned clinical and case management staff.
          </li>
          <li>
            <strong>De-Identified Reporting:</strong> All reporting to federal, state, or private grant funders (under VAWA, FVPSA, and 2 CFR 200 standards) uses aggregated, non-identifying data. Names, birth dates, and shelter locations are never shared (SOP 11.2).
          </li>
          <li>
            <strong>Retention &amp; Breach Protocol:</strong> Records are retained in strict accordance with statutory retention schedules and securely shredded upon expiration. Any potential data incident triggers immediate notification and remediation protocols under SOP Section 11.3.
          </li>
        </ul>
      </div>
    </div>
  );
}
