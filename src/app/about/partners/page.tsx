import React from 'react';
import { Building, GraduationCap, ShieldCheck, HeartHandshake, Scale } from 'lucide-react';

export default function PartnersPage() {
  const partnerCategories = [
    {
      title: "Women's Advocacy & Support Networks",
      icon: GraduationCap,
      description: "Partnering with North Texas community centers, women's shelters, and advocacy groups to connect women with our Sisterhood Mentorship Circle."
    },
    {
      title: "State Domestic Violence Coalitions",
      icon: ShieldCheck,
      description: "Active members of the Texas Council on Family Violence (TCFV) ensuring alignment with state and national trauma-informed shelter best practices."
    },
    {
      title: "Legal Aid & Judicial Networks",
      icon: Scale,
      description: "Coordinating with Legal Aid of NorthWest Texas and family law advocates to provide survivors with free legal protection representation."
    },
    {
      title: "Community Churches & Civic Groups",
      icon: HeartHandshake,
      description: "Engaging local faith groups and service organizations for volunteer mentor recruitment, meal sponsorship, and annual fundraising events."
    }
  ];

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>Collaborative Network</span>
        <h1>2.2.6 Partners &amp; Affiliations</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          We work hand-in-hand with school districts, legal networks, state DV coalitions, and civic partners.
        </p>
      </div>

      <div className="grid-2">
        {partnerCategories.map((partner, idx) => {
          const IconComp = partner.icon;
          return (
            <div key={idx} className="card">
              <IconComp size={32} style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '0.5rem' }}>{partner.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                {partner.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
