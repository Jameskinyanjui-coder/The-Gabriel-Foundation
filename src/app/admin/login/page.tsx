'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Lock, LogIn, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push('/admin/dashboard');
    }
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', background: '#F8FAFC' }}>
      <div className="card" style={{ maxWidth: '400px', width: '100%', padding: '2.5rem', boxShadow: 'var(--shadow-xl)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ width: '48px', height: '48px', background: '#E0F2FE', color: '#0284C7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
            <Lock size={24} />
          </div>
          <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Admin Portal</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Log in to manage foundation content</p>
        </div>

        {error && (
          <div style={{ background: '#FEE2E2', color: '#991B1B', padding: '0.75rem', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertCircle size={16} /> {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
            {loading ? 'Authenticating...' : <><LogIn size={16} /> Log In</>}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem' }}>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Need an admin account? <Link href="/admin/signup" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
