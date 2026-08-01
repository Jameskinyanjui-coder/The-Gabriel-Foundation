'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import AdminSidebar from '@/components/AdminSidebar';
import AdminHeader from '@/components/AdminHeader';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/admin/login' || pathname === '/admin/signup';

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      <AdminSidebar />
      <main style={{ 
        flex: 1, 
        marginLeft: isAuthPage ? '0px' : '260px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {!isAuthPage && <AdminHeader />}
        <div style={{ flex: 1 }}>
          {children}
        </div>
      </main>
    </div>
  );
}
