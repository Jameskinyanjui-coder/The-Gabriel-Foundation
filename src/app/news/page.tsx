import React from 'react';
import { Newspaper, Calendar, Megaphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NewsPage() {
  const articles = [
    {
      type: "2.7.1 Foundation News",
      title: "The Gabriel Foundation Expands Trailblazers Mentoring in Farmers Branch",
      date: "October 14, 2025",
      summary: "Expanding local school district partnerships to match 50 additional middle school students with dedicated adult mentors this semester."
    },
    {
      type: "2.7.2 Upcoming Fundraiser",
      title: "Annual Hope & Resilience Gala & Silent Auction",
      date: "November 18, 2025",
      summary: "Join community leaders and corporate sponsors for an inspiring evening benefiting emergency shelter operations and youth scholarships."
    },
    {
      type: "2.7.3 Awareness Campaign",
      title: "Domestic Violence Awareness Month & Digital Safety Drive",
      date: "October 1, 2025",
      summary: "Raising awareness about technology safety, location tracking risks, and survivor-centered community support across North Texas."
    }
  ];

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>Updates &amp; Announcements</span>
        <h1>2.7 News &amp; Events</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          Latest foundation announcements, community fundraisers, and awareness campaigns.
        </p>
      </div>

      <div className="grid-3" style={{ gap: '2rem' }}>
        {articles.map((item, idx) => (
          <div key={idx} className="card">
            <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>{item.type}</span>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>{item.date}</div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
