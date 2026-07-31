import React from 'react';
import { Heart, CheckCircle2, AlertCircle } from 'lucide-react';

export default function FriendsFamilyPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-crisis" style={{ marginBottom: '0.75rem' }}>Supportive Guidance</span>
        <h1>2.4.6 How to Support a Survivor (Friends &amp; Family)</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Guidelines for offering supportive, non-judgmental assistance without pressuring.
        </p>
      </div>

      <div className="grid-2" style={{ gap: '2rem' }}>
        <div className="card">
          <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={22} /> What HELPS a Survivor
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
            <li><strong>Listen Without Judgment:</strong> Believe her story and validate her feelings.</li>
            <li><strong>Support Her Autonomy:</strong> Respect her decisions, timing, and safety choices.</li>
            <li><strong>Provide Safe Communication:</strong> Help her set up a safe secondary phone or email.</li>
            <li><strong>Share Hotline Info:</strong> Offer the 24/7 Hotline number (1-800-799-7233) without forcing her to call.</li>
          </ul>
        </div>

        <div className="card" style={{ borderLeft: '4px solid var(--color-alert-red)' }}>
          <h3 style={{ color: 'var(--color-alert-red)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <AlertCircle size={22} /> What to AVOID
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
            <li><strong>Avoid Confronting the Abuser:</strong> This often escalates danger for the survivor.</li>
            <li><strong>Do Not Pressure Her to Leave:</strong> Leaving is the statistically most dangerous period.</li>
            <li><strong>Avoid Giving Ultimatums:</strong> Forcing choices replicates abusive control dynamics.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
