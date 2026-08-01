'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NewPostPage() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Form State
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [contentType, setContentType] = useState('news');
  const [imageFile, setImageFile] = useState<File | null>(null);
  
  // Event specific fields
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push('/admin/login');
      } else {
        setSession(session);
      }
      setLoading(false);
    });
  }, [router]);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    let imageUrl = null;

    if (imageFile) {
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(fileName, imageFile);
      
      if (uploadError) {
        alert(`Image Upload Error: ${uploadError.message}`);
        setSubmitting(false);
        return;
      }
      
      const { data } = supabase.storage.from('images').getPublicUrl(fileName);
      imageUrl = data.publicUrl;
    }
    let combinedEventDate = null;
    if (contentType === 'event' && eventDate) {
      // combine date and time if provided
      const timeString = eventTime || '00:00';
      combinedEventDate = new Date(`${eventDate}T${timeString}:00`).toISOString();
    }
    
    const { error } = await supabase.from('site_updates').insert([{
      title,
      summary,
      content_type: contentType,
      image_url: imageUrl,
      event_date: combinedEventDate,
      event_location: contentType === 'event' ? eventLocation : null
    }]);

    setSubmitting(false);
    if (!error) {
      setSuccess(true);
      setTitle('');
      setSummary('');
      setEventDate('');
      setEventTime('');
      setEventLocation('');
      setImageFile(null);
      setTimeout(() => {
        setSuccess(false);
        router.push('/admin/posts');
      }, 2000);
    } else {
      alert(error.message);
    }
  };

  if (loading) return <div style={{ padding: '4rem', textAlign: 'center' }}>Loading...</div>;
  if (!session) return null;

  return (
    <div style={{ padding: '2rem 3rem' }}>
      
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/admin/posts" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#64748B', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 500 }}>
          <ArrowLeft size={16} /> Back to Posts
        </Link>
        <h1 style={{ fontSize: '2rem', margin: '0 0 0.5rem 0', color: '#0F172A' }}>Publish New Update</h1>
        <p style={{ color: '#64748B', margin: 0, fontSize: '1rem' }}>Create a new news piece, event, or impact story.</p>
      </div>

      <div style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', maxWidth: '800px' }}>
        
        <div style={{ padding: '2rem' }}>
          {success && (
            <div style={{ background: '#DCFCE7', color: '#166534', padding: '1rem', borderRadius: '8px', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #BBF7D0' }}>
              <CheckCircle2 size={18} /> Successfully published! Redirecting...
            </div>
          )}

          <form onSubmit={handleCreatePost} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem', alignItems: 'start' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.4rem' }}>Content Type</label>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748B' }}>Where should this post appear on the website?</p>
              </div>
              <select 
                value={contentType} 
                onChange={(e) => setContentType(e.target.value)} 
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none', fontSize: '0.95rem' }}
              >
                <option value="news">News &amp; Press</option>
                <option value="blog">Blog &amp; Story</option>
                <option value="impact">Impact Story</option>
                <option value="event">Upcoming Event</option>
                <option value="insight">Data &amp; Insight</option>
              </select>
            </div>

            <div style={{ height: '1px', background: '#F1F5F9', margin: '0.5rem 0' }}></div>

            {contentType === 'event' && (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem', alignItems: 'start' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.4rem' }}>Event Date &amp; Time</label>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748B' }}>When is this event happening?</p>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <input 
                      required 
                      type="date" 
                      value={eventDate} 
                      onChange={(e) => setEventDate(e.target.value)} 
                      style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none', fontSize: '0.95rem' }} 
                    />
                    <input 
                      type="time" 
                      value={eventTime} 
                      onChange={(e) => setEventTime(e.target.value)} 
                      style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none', fontSize: '0.95rem' }} 
                    />
                  </div>
                </div>

                <div style={{ height: '1px', background: '#F1F5F9', margin: '0.5rem 0' }}></div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem', alignItems: 'start' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.4rem' }}>Location</label>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748B' }}>Where is it taking place?</p>
                  </div>
                  <input 
                    required 
                    type="text" 
                    value={eventLocation} 
                    onChange={(e) => setEventLocation(e.target.value)} 
                    placeholder="e.g. 123 Main St, Nairobi or Zoom (Virtual)"
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none', fontSize: '0.95rem' }} 
                  />
                </div>

                <div style={{ height: '1px', background: '#F1F5F9', margin: '0.5rem 0' }}></div>
              </>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem', alignItems: 'start' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#0F172A', margin: '0 0 0.4rem 0' }}>Cover Image</label>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748B' }}>Optional. Upload an image to display with your update.</p>
              </div>
              <input 
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setImageFile(e.target.files[0]);
                  }
                }}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px dashed #CBD5E1', outline: 'none', fontSize: '0.95rem', cursor: 'pointer' }} 
              />
            </div>

            <div style={{ height: '1px', background: '#F1F5F9', margin: '0.5rem 0' }}></div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem', alignItems: 'start' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.4rem' }}>Headline</label>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748B' }}>A catchy title for your update.</p>
              </div>
              <input 
                required 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="e.g. 2026 Annual Charity Gala Announced"
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none', fontSize: '0.95rem' }} 
              />
            </div>

            <div style={{ height: '1px', background: '#F1F5F9', margin: '0.5rem 0' }}></div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem', alignItems: 'start' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.4rem' }}>Summary / Body</label>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748B' }}>The main content of your post.</p>
              </div>
              <textarea 
                required 
                rows={8} 
                value={summary} 
                onChange={(e) => setSummary(e.target.value)} 
                placeholder="Write your content here..."
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none', fontSize: '0.95rem', fontFamily: 'var(--font-sans)', resize: 'vertical' }} 
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
              <Link href="/admin/posts" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', color: '#64748B', border: '1px solid #CBD5E1', textDecoration: 'none', borderRadius: '8px', fontWeight: 600 }}>
                Cancel
              </Link>
              <button type="submit" className="btn btn-primary" disabled={submitting} style={{ padding: '0.75rem 2rem', borderRadius: '8px' }}>
                {submitting ? 'Publishing...' : 'Publish Update'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
