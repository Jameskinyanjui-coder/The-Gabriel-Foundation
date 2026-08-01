'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Calendar } from 'lucide-react';

export default function EventsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUpdates() {
      const { data } = await supabase.from('site_updates')
        .select('*')
        .eq('content_type', 'event')
        .order('created_at', { ascending: false });
      if (data) setPosts(data);
      setLoading(false);
    }
    fetchUpdates();
  }, []);

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem', minHeight: '60vh' }}>
      
      <div style={{ maxWidth: '800px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
        <span className="badge badge-primary" style={{ marginBottom: '1rem', background: '#F3E8FF', color: '#7E22CE' }}>Community Calendar</span>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: '#6B21A8' }}>
          Upcoming Events
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
          Join us at our upcoming charity galas, virtual town halls, and community outreach programs.
        </p>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--color-text-muted)' }}>Loading events...</div>
      ) : (
        <section>
          {posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem', background: '#F8FAFC', borderRadius: '12px' }}>
              <Calendar size={48} color="#CBD5E1" style={{ marginBottom: '1rem' }} />
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>No upcoming events scheduled at this time.</p>
            </div>
          ) : (
            <div className="grid-responsive" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
              {posts.map(event => (
                <div key={event.id} className="card" style={{ borderTop: '4px solid #8B5CF6', padding: 0, overflow: 'hidden' }}>
                  {event.image_url && (
                    <div style={{ width: '100%', height: '200px', backgroundImage: `url(${event.image_url})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  )}
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ fontSize: '0.85rem', color: '#8B5CF6', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                      {event.event_date ? new Date(event.event_date).toLocaleString(undefined, { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }) : new Date(event.created_at).toLocaleDateString()}
                    </div>
                    {event.event_location && (
                      <div style={{ fontSize: '0.85rem', color: '#6B21A8', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        📍 {event.event_location}
                      </div>
                    )}
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem' }}>{event.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginBottom: '1rem', whiteSpace: 'pre-wrap' }}>
                    {event.summary}
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
