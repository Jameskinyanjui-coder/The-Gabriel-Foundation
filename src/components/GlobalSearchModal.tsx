'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, ShieldAlert, Heart, Users, FileText, ArrowRight, PhoneCall, HelpCircle } from 'lucide-react';
import { FOUNDATION_META, REFERRAL_RESOURCES, PROGRAM_DIVISIONS } from '@/data/siteData';

interface SearchItem {
  title: string;
  category: 'Crisis & Shelter' | 'Mentoring' | 'Resources' | 'About & Financials' | 'Legal & Safety';
  description: string;
  url: string;
  icon: any;
  badge?: string;
}

const SEARCH_ITEMS: SearchItem[] = [
  {
    title: '24/7 Crisis Hotline',
    category: 'Crisis & Shelter',
    description: `Call ${FOUNDATION_META.crisisLine247} for emergency shelter, safety planning, and immediate trauma support.`,
    url: '/crisis/emergency',
    icon: PhoneCall,
    badge: '24/7 Emergency',
  },
  {
    title: 'Emergency Shelter Intake',
    category: 'Crisis & Shelter',
    description: 'Confidential shelter intake procedure for women and children escaping domestic violence.',
    url: '/crisis/shelter-services',
    icon: ShieldAlert,
    badge: 'Confidential',
  },
  {
    title: 'Interactive Survivor Safety Planner',
    category: 'Crisis & Shelter',
    description: 'Step-by-step confidential safety plan generator (tech safety, emergency bag, safe contacts).',
    url: '/crisis/emergency',
    icon: ShieldAlert,
    badge: 'Interactive Tool',
  },
  {
    title: 'Sisterhood Mentorship Circle',
    category: 'Mentoring',
    description: '1-on-1 peer mentoring and support circles for women and girls focused on confidence and emotional healing.',
    url: '/mentoring/trailblazers',
    icon: Users,
    badge: 'Mentorship Circle',
  },
  {
    title: 'Turnaround Life Reset',
    category: 'Mentoring',
    description: 'Mentoring, career preparation, and personal independence coaching for women rebuilding their lives.',
    url: '/mentoring/turnaround',
    icon: Users,
    badge: 'Life Reset',
  },
  {
    title: 'Higher Ground Housing & Wraparound Support',
    category: 'Mentoring',
    description: 'Housing stabilization, rental assistance, and life skills coaching for program families.',
    url: '/mentoring/higher-ground',
    icon: Users,
  },
  {
    title: 'Lunch Friends Employment Mentoring',
    category: 'Mentoring',
    description: 'Workplace exposure, interview coaching, and career exploration lunches with professionals.',
    url: '/mentoring/lunch-friends',
    icon: Users,
  },
  {
    title: 'Mentoring Track Quiz',
    category: 'Mentoring',
    description: 'Interactive quiz to find the perfect mentoring program for your student or child.',
    url: '/mentoring',
    icon: HelpCircle,
    badge: 'Interactive Quiz',
  },
  {
    title: 'Community Resource Directory',
    category: 'Resources',
    description: 'Search legal aid, food banks, medical clinics, housing assistance, and emergency hotlines.',
    url: '/resources',
    icon: FileText,
  },
  {
    title: 'Make a Tax-Deductible Donation',
    category: 'About & Financials',
    description: '86.4% of funds directly support programs. Give monthly or make a one-time contribution.',
    url: '/donate',
    icon: Heart,
    badge: '501(c)(3)',
  },
  {
    title: 'Financial Audits & 990 Tax Returns',
    category: 'About & Financials',
    description: 'Audited financials, annual impact reports, and Charity Navigator transparency metrics.',
    url: '/about/financials',
    icon: FileText,
  },
  {
    title: 'Become a Volunteer Mentor or Advocate',
    category: 'About & Financials',
    description: 'Volunteer orientation, background check process, and mentor application form.',
    url: '/get-involved/volunteer',
    icon: Users,
  },
  {
    title: 'Digital Privacy & Tech Safety Tips',
    category: 'Legal & Safety',
    description: 'How to clear browser history, cover digital tracks, and safely navigate crisis websites.',
    url: '/crisis/privacy-safety',
    icon: ShieldAlert,
  },
  {
    title: 'Nondiscrimination & Equal Opportunity Policy',
    category: 'Legal & Safety',
    description: 'Our commitment to providing free services without regard to race, religion, background, or identity.',
    url: '/legal/nondiscrimination',
    icon: FileText,
  },
];

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearchModal({ isOpen, onClose }: GlobalSearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open search modal
          const searchBtn = document.getElementById('global-search-trigger');
          if (searchBtn) searchBtn.click();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredItems = query.trim() === ''
    ? SEARCH_ITEMS
    : SEARCH_ITEMS.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="search-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Global Site Search">
      <div className="search-modal-card" onClick={e => e.stopPropagation()}>
        
        {/* Search Header Input */}
        <div className="search-modal-header">
          <Search size={22} className="search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="search-modal-input"
            placeholder="Search programs, crisis help, resources, donations... (Press Esc to close)"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="search-close-btn" aria-label="Close search">
            <X size={20} />
          </button>
        </div>

        {/* Categories Bar */}
        <div className="search-modal-quick-chips">
          <span className="chip-label">Quick Search:</span>
          {['Crisis', 'Mentoring', 'Shelter', 'Donate', 'Resources', 'Financials'].map(chip => (
            <button
              key={chip}
              onClick={() => setQuery(chip)}
              className={`search-chip ${query.toLowerCase() === chip.toLowerCase() ? 'active' : ''}`}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="search-modal-results">
          {filteredItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--color-text-muted)' }}>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>No results found for &ldquo;{query}&rdquo;</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.4rem' }}>
                Need immediate emergency help? Call our 24/7 Crisis Line at{' '}
                <a href="tel:18007997233" style={{ color: 'var(--irc-orange)', fontWeight: 800 }}>
                  {FOUNDATION_META.crisisLine247}
                </a>
              </p>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.url}
                  onClick={onClose}
                  className="search-result-item"
                >
                  <div className="search-result-icon">
                    <IconComp size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <span className="search-result-title">{item.title}</span>
                      {item.badge && <span className="badge badge-sm">{item.badge}</span>}
                    </div>
                    <p className="search-result-desc">{item.description}</p>
                  </div>
                  <ArrowRight size={16} className="search-result-arrow" />
                </Link>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="search-modal-footer">
          <span>Press <kbd>ESC</kbd> or click outside to exit</span>
          <span>Press <kbd>Cmd</kbd> + <kbd>K</kbd> anytime to open</span>
        </div>

      </div>
    </div>
  );
}
