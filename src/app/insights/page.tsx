'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import { TrendingUp, ExternalLink } from 'lucide-react';

export default function InsightsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUpdates() {
      const { data } = await supabase.from('site_updates')
        .select('*')
        .eq('content_type', 'insight')
        .order('created_at', { ascending: false });
      if (data) setPosts(data);
      setLoading(false);
    }
    fetchUpdates();
  }, []);

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem', minHeight: '60vh' }}>
      
      <div style={{ maxWidth: '800px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
        <span className="badge badge-primary" style={{ marginBottom: '1rem', background: '#E0F2FE', color: '#0284C7' }}>Research &amp; Analytics</span>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: '#0369A1' }}>
          Data &amp; Insights
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
          The Gabriel Foundation aggregates data from international NGOs and our own shelter intake metrics to better understand the systemic issues of gender-based violence and child vulnerability.
        </p>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--color-text-muted)' }}>Loading insights...</div>
      ) : (
        <section>
          {posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem', background: '#F8FAFC', borderRadius: '12px' }}>
              <TrendingUp size={48} color="#CBD5E1" style={{ marginBottom: '1rem' }} />
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>No data insights published yet. Check back soon!</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
              {posts.map(insight => (
                <div key={insight.id} className="card" style={{ backgroundColor: '#F0F9FF', border: '1px solid #BAE6FD', padding: 0, overflow: 'hidden' }}>
                  {insight.image_url && (
                    <div style={{ width: '100%', height: '200px', backgroundImage: `url(${insight.image_url})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  )}
                  <div style={{ padding: '2rem' }}>
                    <div style={{ fontSize: '0.85rem', color: '#0369A1', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                      {new Date(insight.created_at).toLocaleDateString()}
                    </div>
                  <h3 style={{ fontSize: '1.3rem', color: '#0369A1', marginBottom: '1rem' }}>{insight.title}</h3>
                  <p style={{ color: '#0C4A6E', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                    {insight.summary}
                  </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
