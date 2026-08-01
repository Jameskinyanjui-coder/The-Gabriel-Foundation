'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, FileText, PlusCircle, LogOut, Settings, Shield, Mail } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  const navItems = [
    { name: 'Overview', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Inbox', href: '/admin/messages', icon: Mail },
    { name: 'All Posts', href: '/admin/posts', icon: FileText },
    { name: 'Publish New', href: '/admin/posts/new', icon: PlusCircle },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  // Do not render sidebar on login/signup pages
  if (pathname === '/admin/login' || pathname === '/admin/signup') {
    return null;
  }

  return (
    <aside style={{
      width: '260px',
      backgroundColor: 'var(--irc-dark, #1A1A1A)',
      color: '#F8FAFC',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      borderRight: '1px solid #333',
      zIndex: 1000
    }}>
      {/* Brand Header */}
      <div style={{ padding: '1.5rem', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Shield size={28} color="var(--hrc-yellow)" />
        <div>
          <h2 style={{ fontSize: '1.1rem', margin: 0, color: '#FFFFFF', fontWeight: 800 }}>Gabriel Admin</h2>
          <p style={{ fontSize: '0.7rem', color: '#94A3B8', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Portal</p>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ padding: '1.5rem 1rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                color: isActive ? 'var(--hrc-yellow, #FFC72C)' : '#94A3B8',
                backgroundColor: isActive ? 'var(--hrc-blue, #003865)' : 'transparent',
                textDecoration: 'none',
                fontWeight: isActive ? 600 : 500,
                transition: 'all 0.2s'
              }}
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer / Actions */}
      <div style={{ padding: '1.5rem 1rem', borderTop: '1px solid #333' }}>
        <button 
          onClick={handleLogout}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1rem',
            width: '100%',
            background: 'none',
            border: 'none',
            color: '#F87171',
            cursor: 'pointer',
            textAlign: 'left',
            fontWeight: 500,
            borderRadius: '8px',
            transition: 'background 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
