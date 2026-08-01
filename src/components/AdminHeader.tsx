'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Bell, Search, User } from 'lucide-react';

export default function AdminHeader() {
  const pathname = usePathname();

  // Helper to format pathname into a nice title
  const getPageTitle = () => {
    if (pathname === '/admin/dashboard') return 'Overview';
    if (pathname === '/admin/posts') return 'All Updates';
    if (pathname === '/admin/posts/new') return 'Publish Update';
    if (pathname === '/admin/messages') return 'Inbox';
    if (pathname === '/admin/settings') return 'Settings';
    return 'Admin Portal';
  };

  return (
    <header style={{
      background: '#FFFFFF',
      borderBottom: '1px solid #E2E8F0',
      padding: '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 999,
      boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
    }}>
      
      {/* Left side: Context/Breadcrumb */}
      <div>
        <h1 style={{ margin: 0, fontSize: '1.25rem', color: '#0F172A', fontWeight: 700 }}>
          {getPageTitle()}
        </h1>
        <div style={{ fontSize: '0.8rem', color: '#64748B', display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.25rem' }}>
          <span>Admin</span>
          <span>/</span>
          <span style={{ color: '#0F172A', fontWeight: 500 }}>{getPageTitle()}</span>
        </div>
      </div>

      {/* Right side: Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        
        {/* Mock Search */}
        <div style={{ position: 'relative', display: 'none' /* hidden for now, can be enabled later */ }}>
          <Search size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            type="text" 
            placeholder="Search..." 
            style={{ padding: '0.5rem 1rem 0.5rem 2.25rem', borderRadius: '99px', border: '1px solid #E2E8F0', outline: 'none', background: '#F8FAFC', fontSize: '0.85rem', width: '200px' }}
          />
        </div>

        {/* Notifications */}
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative', color: '#64748B', display: 'flex' }}>
          <Bell size={20} />
          <span style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', backgroundColor: 'var(--color-alert-red, #EF4444)', borderRadius: '50%', border: '2px solid #FFF' }}></span>
        </button>

        <div style={{ width: '1px', height: '24px', background: '#E2E8F0' }}></div>

        {/* User Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--irc-dark, #1A1A1A)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '0.9rem' }}>
            <User size={18} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0F172A' }}>Admin User</span>
            <span style={{ fontSize: '0.75rem', color: '#64748B' }}>admin@thegabrielfoundation.org</span>
          </div>
        </div>

      </div>
    </header>
  );
}
