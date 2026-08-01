'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Newspaper } from 'lucide-react';

export default function NewsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUpdates() {
      const { data } = await supabase.from('site_updates')
        .select('*')
        .eq('content_type', 'news')
        .order('created_at', { ascending: false });
      if (data) setPosts(data);
      setLoading(false);
    }
    fetchUpdates();
  }, []);

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem', minHeight: '60vh' }}>
      
      <div style={{ maxWidth: '800px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
        <span className="badge badge-primary" style={{ marginBottom: '1rem' }}>News &amp; Press</span>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--color-primary)' }}>
          Latest News
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
          Stay up to date with the latest press releases and announcements from The Gabriel Foundation.
        </p>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--color-text-muted)' }}>Loading live updates...</div>
      ) : (
        <section>
          {posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem', background: '#F8FAFC', borderRadius: '12px' }}>
              <Newspaper size={48} color="#CBD5E1" style={{ marginBottom: '1rem' }} />
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>No news published yet. Check back soon!</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
              {posts.map(news => (
                <div key={news.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0, overflow: 'hidden' }}>
                  {news.image_url && (
                    <div style={{ width: '100%', height: '300px', backgroundImage: `url(${news.image_url})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  )}
                  <div style={{ padding: '2rem' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                      {new Date(news.created_at).toLocaleDateString()}
                    </div>
                  <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{news.title}</h3>
                  <p style={{ color: 'var(--color-text-main)', fontSize: '1rem', margin: '1rem 0', whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>
                    {news.summary}
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
