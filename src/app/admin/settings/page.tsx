'use client';

import React from 'react';
import { Save, Lock, Globe, Bell } from 'lucide-react';

export default function AdminSettingsPage() {
  
  return (
    <div style={{ padding: '2rem 3rem' }}>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', margin: '0 0 0.5rem 0', color: '#0F172A' }}>Settings</h2>
        <p style={{ color: '#64748B', margin: 0, fontSize: '1rem' }}>Manage your portal preferences and global site settings.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '2rem' }}>
        
        {/* Settings Navigation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button style={{ padding: '0.75rem 1rem', background: '#F1F5F9', border: 'none', borderRadius: '8px', textAlign: 'left', fontWeight: 600, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <Globe size={16} /> Site Configuration
          </button>
          <button style={{ padding: '0.75rem 1rem', background: 'transparent', border: 'none', borderRadius: '8px', textAlign: 'left', fontWeight: 500, color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <Lock size={16} /> Security &amp; Password
          </button>
          <button style={{ padding: '0.75rem 1rem', background: 'transparent', border: 'none', borderRadius: '8px', textAlign: 'left', fontWeight: 500, color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <Bell size={16} /> Notifications
          </button>
        </div>

        {/* Settings Content Area */}
        <div style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', padding: '2rem' }}>
          
          <h3 style={{ fontSize: '1.25rem', margin: '0 0 1.5rem 0', color: '#0F172A' }}>Site Configuration</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.4rem' }}>Site Name</label>
              <input 
                type="text" 
                defaultValue="The Gabriel Foundation"
                style={{ width: '100%', maxWidth: '400px', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none', fontSize: '0.95rem' }} 
              />
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.4rem' }}>Contact Email Address</label>
              <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.8rem', color: '#64748B' }}>Where should inbox messages be forwarded?</p>
              <input 
                type="email" 
                defaultValue="info@thegabrielfoundation.org"
                style={{ width: '100%', maxWidth: '400px', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none', fontSize: '0.95rem' }} 
              />
            </div>
            
            <div style={{ marginTop: '1rem', paddingTop: '1.5rem', borderTop: '1px solid #E2E8F0' }}>
              <button className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 2rem' }}>
                <Save size={16} /> Save Changes
              </button>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}
