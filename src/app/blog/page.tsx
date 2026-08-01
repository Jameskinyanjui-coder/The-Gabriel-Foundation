'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { HeartHandshake } from 'lucide-react';

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUpdates() {
      const { data } = await supabase.from('site_updates')
        .select('*')
        .in('content_type', ['blog', 'impact'])
        .order('created_at', { ascending: false });
      if (data) setPosts(data);
      setLoading(false);
    }
    fetchUpdates();
  }, []);

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem', minHeight: '60vh' }}>
      
      <div style={{ maxWidth: '800px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
        <span className="badge badge-primary" style={{ marginBottom: '1rem', background: '#DCFCE7', color: '#166534' }}>Stories &amp; Experiences</span>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--fa-green)' }}>
          Blog &amp; Impact Stories
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
          Read inspiring stories of resilience, courage, and hope from the women and children we serve.
        </p>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--color-text-muted)' }}>Loading stories...</div>
      ) : (
        <section>
          {posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem', background: '#F8FAFC', borderRadius: '12px' }}>
              <HeartHandshake size={48} color="#CBD5E1" style={{ marginBottom: '1rem' }} />
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>No stories published yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid-responsive" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
              {posts.map(story => (
                <div key={story.id} className="card" style={{ display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden' }}>
                  <div style={{ height: '180px', backgroundColor: '#F1F5F9', position: 'relative', backgroundImage: story.image_url ? `url(${story.image_url})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                     <div style={{ position: 'absolute', top: '1rem', left: '1rem' }} className="badge badge-mentoring">
                       {story.content_type === 'impact' ? 'Impact Story' : 'Blog Post'}
                     </div>
                  </div>
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                      {new Date(story.created_at).toLocaleDateString()}
                    </div>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem' }}>{story.title}</h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginBottom: '1.5rem', flex: 1, whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
                      {story.summary}
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
