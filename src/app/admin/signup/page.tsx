'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { UserPlus, Lock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminSignupPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
          phone_number: phone,
        }
      }
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
      // Wait a moment then redirect to dashboard if auto-login is enabled,
      // or tell them to check their email if email confirmation is turned on in Supabase.
      setTimeout(() => {
        router.push('/admin/dashboard');
      }, 2000);
    }
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', background: '#F8FAFC' }}>
      <div className="card" style={{ maxWidth: '400px', width: '100%', padding: '2.5rem', boxShadow: 'var(--shadow-xl)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ width: '48px', height: '48px', background: '#F0FDF4', color: '#16A34A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
            <UserPlus size={24} />
          </div>
          <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Create Admin Account</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Register a new staff member</p>
        </div>

        {error && (
          <div style={{ background: '#FEE2E2', color: '#991B1B', padding: '0.75rem', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertCircle size={16} /> {error}
          </div>
        )}

        {success && (
          <div style={{ background: '#DCFCE7', color: '#166534', padding: '0.75rem', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={16} /> Account created successfully! Logging you in...
          </div>
        )}

        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}
            />
          </div>
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
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Password (min 6 chars)</label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', backgroundColor: '#16A34A' }}>
            {loading ? 'Creating Account...' : <><UserPlus size={16} /> Sign Up</>}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem' }}>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Already have an account? <Link href="/admin/login" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
