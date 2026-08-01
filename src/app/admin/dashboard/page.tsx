'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { FileText, TrendingUp, Users, Activity, Mail } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push('/admin/login');
      } else {
        setSession(session);
        fetchStats();
      }
      setLoading(false);
    });
  }, [router]);

  const fetchStats = async () => {
    const { data: postsData } = await supabase.from('site_updates').select('*').order('created_at', { ascending: false });
    if (postsData) setPosts(postsData);

    const { data: msgData } = await supabase.from('contact_messages').select('*').order('created_at', { ascending: false });
    if (msgData) setMessages(msgData);
  };

  if (loading) return <div style={{ padding: '4rem', textAlign: 'center' }}>Loading...</div>;
  if (!session) return null;

  // Simple aggregations
  const totalPosts = posts.length;
  const recentPosts = posts.slice(0, 5);
  const totalMessages = messages.length;

  return (
    <div style={{ padding: '2rem 3rem' }}>
      
      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        
        <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ background: '#EFF6FF', padding: '1rem', borderRadius: '12px', color: '#3B82F6' }}>
            <FileText size={24} />
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Total Updates</p>
            <h3 style={{ margin: 0, fontSize: '1.75rem', color: '#0F172A' }}>{totalPosts}</h3>
          </div>
        </div>

        <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ background: '#FEF3C7', padding: '1rem', borderRadius: '12px', color: '#D97706' }}>
            <Mail size={24} />
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Inbox Messages</p>
            <h3 style={{ margin: 0, fontSize: '1.75rem', color: '#0F172A' }}>{totalMessages}</h3>
          </div>
        </div>

        <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ background: '#ECFDF5', padding: '1rem', borderRadius: '12px', color: '#10B981' }}>

            <Activity size={24} />
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>System Status</p>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0F172A' }}>Healthy</h3>
          </div>
        </div>

      </div>

      {/* Recent Activity */}
      <div style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.15rem', margin: 0, color: '#0F172A' }}>Recent Activity</h2>
          <Link href="/admin/posts" style={{ color: '#3B82F6', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}>View All</Link>
        </div>
        <div style={{ padding: '0' }}>
          {recentPosts.length === 0 ? (
             <div style={{ padding: '2rem', textAlign: 'center', color: '#64748B' }}>No activity recorded yet.</div>
          ) : (
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {recentPosts.map((post, idx) => (
                <li key={post.id} style={{ 
                  padding: '1rem 1.5rem', 
                  borderBottom: idx !== recentPosts.length - 1 ? '1px solid #F1F5F9' : 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, background: '#F1F5F9', color: '#475569', padding: '2px 8px', borderRadius: '99px', textTransform: 'uppercase' }}>
                        {post.content_type}
                      </span>
                      <span style={{ fontSize: '0.85rem', color: '#64748B' }}>
                        {new Date(post.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#0F172A', fontWeight: 500 }}>{post.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
