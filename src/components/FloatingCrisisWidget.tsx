'use client';

import React, { useState } from 'react';
import { PhoneCall, ExternalLink, ShieldAlert, X } from 'lucide-react';
import { FOUNDATION_META } from '@/data/siteData';

export default function FloatingCrisisWidget() {
  const [minimized, setMinimized] = useState(false);

  const handleQuickExit = () => {
    try {
      const depth = window.history.length;
      for (let i = 0; i < depth; i++) {
        window.history.pushState(null, '', '/');
      }
    } catch {
      // Fallback: best-effort
    }
    window.location.replace('https://weather.com');
  };

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="floating-crisis-minimized"
        aria-label="Open Crisis Floating Widget"
        title="24/7 Crisis Help Available"
      >
        <ShieldAlert size={20} />
        <span>24/7 CRISIS</span>
      </button>
    );
  }

  return (
    <div className="floating-crisis-widget" role="complementary" aria-label="Crisis Quick Action Toolbar">
      <button
        onClick={() => setMinimized(true)}
        className="floating-close-btn"
        aria-label="Minimize Crisis Widget"
      >
        <X size={14} />
      </button>

      <div style={{ fontSize: '0.72rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#FECACA', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
        <span className="live-indicator-red" /> 24/7 CRISIS HOTLINE
      </div>

      <a
        href="tel:18007997233"
        className="floating-call-btn"
      >
        <PhoneCall size={16} />
        <span>1-800-799-7233 (National Crisis Lifeline)</span>
      </a>

      <button
        onClick={handleQuickExit}
        className="floating-exit-btn"
        title="Instantly leave this site to Weather.com (Press ESC)"
      >
        <ExternalLink size={14} />
        <span>QUICK EXIT (ESC)</span>
      </button>
    </div>
  );
}
