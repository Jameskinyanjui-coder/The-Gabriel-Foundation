import React from 'react';
import { School, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ChildrensServicesPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-crisis" style={{ marginBottom: '0.75rem' }}>SOP Section 9 Standard</span>
        <h1>2.4.4 Children&apos;s Support Services</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Restoring routine, education, and healing for children residing in our emergency shelter.
        </p>
      </div>

      <div className="grid-2" style={{ gap: '2rem' }}>
        {/* 2.4.4.1 School Enrollment */}
        <div className="card hero-track-crisis">
          <School size={32} style={{ color: 'var(--color-crisis-dark)', marginBottom: '0.75rem' }} />
          <h3>2.4.4.1 School Enrollment Support</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', lineHeight: '1.6' }}>
            Under the federal McKinney-Vento Homeless Assistance Act, our case managers immediately coordinate with local school district liaisons so resident children remain enrolled in school or transfer seamlessly without missing class days or transportation.
          </p>
        </div>

        {/* 2.4.4.2 Age-Appropriate Therapeutic Support */}
        <div className="card hero-track-crisis">
          <Heart size={32} style={{ color: 'var(--color-crisis-dark)', marginBottom: '0.75rem' }} />
          <h3>2.4.4.2 Age-Appropriate Therapeutic Support</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', lineHeight: '1.6' }}>
            Children receive specialized art, play, and emotional expression activities supervised by child advocates. We provide a peaceful computer lab, after-school tutoring, and recreational outdoor play areas inside the confidential shelter perimeter.
          </p>
        </div>
      </div>
    </div>
  );
}
