'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { Trash2, PlusCircle, Search } from 'lucide-react';
import Link from 'next/link';

export default function AdminPostsPage() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push('/admin/login');
      } else {
        setSession(session);
        fetchPosts();
      }
      setLoading(false);
    });
  }, [router]);

  const fetchPosts = async () => {
    const { data } = await supabase.from('site_updates').select('*').order('created_at', { ascending: false });
    if (data) setPosts(data);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      await supabase.from('site_updates').delete().eq('id', id);
      fetchPosts();
    }
  };

  if (loading) return <div style={{ padding: '4rem', textAlign: 'center' }}>Loading...</div>;
  if (!session) return null;

  return (
    <div style={{ padding: '2rem 3rem' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', margin: '0 0 0.5rem 0', color: '#0F172A' }}>All Posts</h1>
          <p style={{ color: '#64748B', margin: 0, fontSize: '1rem' }}>Manage all published content across the website.</p>
        </div>
        <Link href="/admin/posts/new" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <PlusCircle size={18} /> New Post
        </Link>
      </div>

      <div style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        
        {/* Table Toolbar */}
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '300px' }}>
            <Search size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Search posts..." 
              style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.25rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.9rem', outline: 'none' }}
              readOnly 
            />
          </div>
          <div style={{ fontSize: '0.85rem', color: '#64748B' }}>
            {posts.length} {posts.length === 1 ? 'post' : 'posts'} total
          </div>
        </div>

        {/* Data Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
              <tr>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: '#475569', fontSize: '0.85rem', textTransform: 'uppercase' }}>Type</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: '#475569', fontSize: '0.85rem', textTransform: 'uppercase' }}>Title</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: '#475569', fontSize: '0.85rem', textTransform: 'uppercase' }}>Date</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: '#475569', fontSize: '0.85rem', textTransform: 'uppercase', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.length === 0 ? (
                <tr>
                  <td colSpan={4} style={{ padding: '3rem', textAlign: 'center', color: '#64748B' }}>No posts found.</td>
                </tr>
              ) : (
                posts.map(post => (
                  <tr key={post.id} style={{ borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, background: '#F1F5F9', color: '#475569', padding: '4px 10px', borderRadius: '99px', textTransform: 'uppercase' }}>
                        {post.content_type}
                      </span>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: '#0F172A', fontWeight: 500 }}>
                      {post.title}
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: '#64748B', fontSize: '0.9rem' }}>
                      {new Date(post.created_at).toLocaleDateString()}
                    </td>
                    <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                      <button 
                        onClick={() => handleDelete(post.id)}
                        style={{ background: '#FEE2E2', border: 'none', color: '#EF4444', padding: '0.5rem', borderRadius: '6px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                        title="Delete Post"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
