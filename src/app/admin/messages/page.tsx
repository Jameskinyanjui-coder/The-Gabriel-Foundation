'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { Search, Mail, Eye } from 'lucide-react';

export default function AdminMessagesPage() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<any[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<any | null>(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push('/admin/login');
      } else {
        setSession(session);
        fetchMessages();
      }
      setLoading(false);
    });
  }, [router]);

  const fetchMessages = async () => {
    const { data } = await supabase.from('contact_messages').select('*').order('created_at', { ascending: false });
    if (data) setMessages(data);
  };

  if (loading) return <div style={{ padding: '4rem', textAlign: 'center' }}>Loading...</div>;
  if (!session) return null;

  return (
    <div style={{ padding: '2rem 3rem' }}>
      
      {selectedMessage && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1100 }}>
          <div style={{ background: '#FFF', padding: '2.5rem', borderRadius: '12px', width: '100%', maxWidth: '600px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ margin: '0 0 1.5rem 0', fontSize: '1.5rem', color: '#0F172A' }}>Message from {selectedMessage.name}</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem', background: '#F8FAFC', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
              <div>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Email</p>
                <p style={{ margin: 0, color: '#0F172A', fontWeight: 500 }}>{selectedMessage.email}</p>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Phone</p>
                <p style={{ margin: 0, color: '#0F172A', fontWeight: 500 }}>{selectedMessage.phone || 'N/A'}</p>
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Interest</p>
                <p style={{ margin: 0, color: '#0F172A', fontWeight: 500 }}>{selectedMessage.interest}</p>
              </div>
            </div>

            <div>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Message</p>
              <p style={{ margin: 0, color: '#334155', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{selectedMessage.message}</p>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setSelectedMessage(null)} className="btn btn-outline" style={{ padding: '0.75rem 2rem' }}>Close</button>
            </div>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', margin: '0 0 0.5rem 0', color: '#0F172A' }}>Inbox</h2>
          <p style={{ color: '#64748B', margin: 0, fontSize: '1rem' }}>View messages submitted via the website contact form.</p>
        </div>
      </div>

      <div style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        
        {/* Table Toolbar */}
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '300px' }}>
            <Search size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Search messages..." 
              style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.25rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.9rem', outline: 'none' }}
              readOnly 
            />
          </div>
          <div style={{ fontSize: '0.85rem', color: '#64748B' }}>
            {messages.length} {messages.length === 1 ? 'message' : 'messages'}
          </div>
        </div>

        {/* Data Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
              <tr>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: '#475569', fontSize: '0.85rem', textTransform: 'uppercase' }}>Name</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: '#475569', fontSize: '0.85rem', textTransform: 'uppercase' }}>Interest</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: '#475569', fontSize: '0.85rem', textTransform: 'uppercase' }}>Date</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: '#475569', fontSize: '0.85rem', textTransform: 'uppercase', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.length === 0 ? (
                <tr>
                  <td colSpan={4} style={{ padding: '4rem', textAlign: 'center', color: '#64748B' }}>
                    <Mail size={48} color="#CBD5E1" style={{ margin: '0 auto 1rem auto', display: 'block' }} />
                    No messages in the inbox.
                  </td>
                </tr>
              ) : (
                messages.map(msg => (
                  <tr key={msg.id} style={{ borderBottom: '1px solid #E2E8F0', cursor: 'pointer' }} onClick={() => setSelectedMessage(msg)}>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <div style={{ color: '#0F172A', fontWeight: 600, marginBottom: '0.25rem' }}>{msg.name}</div>
                      <div style={{ color: '#64748B', fontSize: '0.85rem' }}>{msg.email}</div>
                    </td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, background: '#EFF6FF', color: '#1D4ED8', padding: '4px 10px', borderRadius: '99px' }}>
                        {msg.interest}
                      </span>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: '#64748B', fontSize: '0.9rem' }}>
                      {new Date(msg.created_at).toLocaleDateString()}
                    </td>
                    <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                      <button 
                        style={{ background: 'none', border: 'none', color: '#3B82F6', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600, fontSize: '0.9rem' }}
                      >
                        <Eye size={16} /> View
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
