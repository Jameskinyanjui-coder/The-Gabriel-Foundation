'use client';

import React, { useEffect } from 'react';
import { ShieldAlert, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function QuickExitBar() {
  const handleQuickExit = () => {
    window.location.replace('https://weather.com');
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleQuickExit();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    /* IRC-style utility top bar — very lean, high contrast, dark background */
    <div className="quick-exit-bar" role="banner" aria-label="Safety and Crisis Navigation">
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '42px',
        gap: '1rem'
      }}>
        {/* Left: IRC "Crisis Watch" style alert */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="crisis-watch-pill">
            <ShieldAlert size={14} />
            <span>Crisis &amp; Safety Info</span>
          </div>
          <span style={{ fontSize: '0.82rem', color: '#CBD5E1' }}>
            Computer use can be monitored.{' '}
            <Link href="/crisis/privacy-safety" style={{ color: '#FCD34D', textDecoration: 'underline', fontWeight: 700 }}>
              Tech Safety Tips
            </Link>
          </span>
        </div>

        {/* Right: FA-style action button */}
        <button
          onClick={handleQuickExit}
          className="quick-exit-btn"
          title="Press ESC or click to instantly leave this site"
          aria-label="Quick Exit — Leave Site Now"
        >
          QUICK EXIT
          <ExternalLink size={13} />
        </button>
      </div>
    </div>
  );
}
