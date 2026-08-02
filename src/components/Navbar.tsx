'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Shield, Users, Menu, X, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { FOUNDATION_META } from '@/data/siteData';
import GlobalSearchModal from './GlobalSearchModal';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [updatesDropdownOpen, setUpdatesDropdownOpen] = useState(false);
  const [mobileUpdatesOpen, setMobileUpdatesOpen] = useState(false);

  const isCrisisTrack = pathname.startsWith('/crisis');
  
  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <>
      <header className="navbar-two-tier">
        
        {/* =========================================================================
            LEVEL 1: Top Bar (Brand Logo, Track Switcher, Compact Actions, Mobile Menu)
           ========================================================================= */}
        <div className="nav-tier-top">
          <div className="container nav-tier-container">

            {/* Official Brand Logo */}
            <Link href="/" className="nav-brand" aria-label="The Gabriel Foundation Home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', minWidth: 0, flexShrink: 1, overflow: 'hidden' }}>
              <img
                src="/images/logo.png"
                alt="Gabriel Foundation Logo"
                style={{ height: '48px', width: 'auto', objectFit: 'contain', flexShrink: 0 }}
              />
              <div className="nav-brand-text" style={{ minWidth: 0, overflow: 'hidden' }}>
                <span className="nav-brand-title" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{FOUNDATION_META.name}</span>
              </div>
            </Link>

            {/* Desktop Track Switcher (Mentoring Division + Crisis & Reset) */}
            <div className="track-switcher" role="navigation" aria-label="Program Division Tracks">
              <Link
                href="/pillars/sisterhood"
                className={`track-btn track-btn-mentoring ${!isCrisisTrack ? 'active' : ''}`}
              >
                <Users size={15} />
                <span>Mentoring Division</span>
              </Link>
              <Link
                href="/crisis"
                className={`track-btn track-btn-crisis ${isCrisisTrack ? 'active' : ''}`}
              >
                <Shield size={15} />
                <span>Crisis &amp; Reset</span>
              </Link>
            </div>

            {/* Top Bar Actions (Find Help + Donate + Mobile Search & Menu Toggle) */}
            <div className="nav-tier-actions">
              
              {/* Quick Search Trigger (Mobile View) */}
              <button
                onClick={() => setSearchOpen(true)}
                className="nav-search-trigger-mobile"
                aria-label="Search site"
                title="Search site"
              >
                <Search size={18} />
              </button>

              <Link href="/crisis" className="btn btn-find-action">
                <Shield size={14} />
                <span className="btn-text-responsive">Find Help</span>
              </Link>

              <Link href="/donate" className="btn btn-donate-now">
                <Heart size={14} fill="var(--irc-dark)" />
                <span className="btn-text-responsive">Donate</span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="mobile-toggle"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>

        {/* =========================================================================
            LEVEL 2: Desktop Main Navigation Bar (Hidden on Mobile <768px via CSS)
           ========================================================================= */}
        <div className="nav-tier-bottom">
          <div className="container nav-tier-container">

            {/* Desktop Main Links */}
            <nav className="desktop-nav" aria-label="Main Navigation">
              <ul className="nav-links">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About' },
                  { href: '/pillars/sisterhood', label: 'Mentoring' },
                  { href: '/pillars/youth-care', label: 'Orphanage Support' },
                  { href: '/get-involved', label: 'Get Involved' },
                  { isDropdown: true, label: 'Updates', sublinks: [
                    { href: '/news', label: 'News & Press' },
                    { href: '/blog', label: 'Blog & Stories' },
                    { href: '/events', label: 'Upcoming Events' },
                    { href: '/insights', label: 'Data & Insights' },
                  ]},
                  { href: '/resources', label: 'Resources' },
                  { href: '/contact', label: 'Contact' },
                ].map((item: any, idx) => {
                  if (item.isDropdown) {
                    const isActive = ['/news', '/blog', '/events', '/insights'].some(path => pathname.startsWith(path));
                    return (
                      <li key={idx} onMouseEnter={() => setUpdatesDropdownOpen(true)} onMouseLeave={() => setUpdatesDropdownOpen(false)} style={{ position: 'relative' }}>
                        <button className={`nav-link ${isActive ? 'active' : ''}`} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'inherit', fontSize: 'inherit', padding: '1rem 0' }}>
                          {item.label} <ChevronDown size={14} />
                        </button>
                        {updatesDropdownOpen && (
                          <div style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', border: '1px solid var(--color-border)', borderRadius: '8px', boxShadow: 'var(--shadow-md)', minWidth: '200px', zIndex: 50, padding: '0.5rem 0', display: 'flex', flexDirection: 'column' }}>
                            {item.sublinks.map((sub: any) => (
                              <Link key={sub.href} href={sub.href} onClick={() => setUpdatesDropdownOpen(false)} style={{ padding: '0.75rem 1.25rem', color: 'var(--color-text-main)', textDecoration: 'none', fontSize: '0.9rem', display: 'block', fontWeight: pathname.startsWith(sub.href) ? 700 : 500 }}>
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </li>
                    );
                  }

                  const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`nav-link ${isActive ? 'active' : ''}`}
                        style={item.accent ? { color: 'var(--fa-green)', fontWeight: 900 } : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop Search Trigger */}
            <div className="nav-tier2-utilities">
              <button
                id="global-search-trigger"
                onClick={() => setSearchOpen(true)}
                className="nav-search-trigger"
                title="Search site (Cmd+K)"
                aria-label="Open Global Search"
              >
                <Search size={15} />
                <span>Search</span>
              </button>
            </div>

          </div>
        </div>

        {/* =========================================================================
            MOBILE DRAWER MENU
           ========================================================================= */}
        {mobileOpen && (
          <div className="mobile-drawer-container">
            {/* Quick Division Track Switcher */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '1.25rem' }}>
              <Link
                href="/pillars/sisterhood"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary"
                style={{ padding: '0.65rem', fontSize: '0.84rem', justifyContent: 'center' }}
              >
                <Users size={14} /> Mentoring
              </Link>
              <Link
                href="/crisis"
                onClick={() => setMobileOpen(false)}
                className="btn btn-crisis"
                style={{ padding: '0.65rem', fontSize: '0.84rem', justifyContent: 'center' }}
              >
                <Shield size={14} /> Crisis &amp; Reset
              </Link>
            </div>

            {/* Search Trigger inside Drawer */}
            <button
              onClick={() => { setMobileOpen(false); setSearchOpen(true); }}
              className="btn btn-outline"
              style={{ width: '100%', justifyContent: 'center', marginBottom: '1.25rem', padding: '0.75rem' }}
            >
              <Search size={16} /> Search Programs &amp; Resources
            </button>

            <nav aria-label="Mobile Navigation Menu">
              <ul className="mobile-nav-list">
                <li><Link href="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
                <li><Link href="/about" onClick={() => setMobileOpen(false)}>About Us</Link></li>
                <li><Link href="/pillars/sisterhood" onClick={() => setMobileOpen(false)} style={{ color: 'var(--irc-orange)' }}>Mentoring Programs</Link></li>
                <li><Link href="/crisis" onClick={() => setMobileOpen(false)} style={{ color: 'var(--fa-green)' }}>Emergency Support &amp; Reset</Link></li>
                <li><Link href="/pillars/youth-care" onClick={() => setMobileOpen(false)}>Orphanage Support</Link></li>
                <li><Link href="/get-involved" onClick={() => setMobileOpen(false)}>Get Involved</Link></li>
                <li>
                  <button onClick={() => setMobileUpdatesOpen(!mobileUpdatesOpen)} style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', padding: '1rem 0', fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text-main)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    Updates {mobileUpdatesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {mobileUpdatesOpen && (
                    <ul style={{ listStyle: 'none', padding: '0 0 1rem 1rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <li><Link href="/news" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>News &amp; Press</Link></li>
                      <li><Link href="/blog" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>Blog &amp; Stories</Link></li>
                      <li><Link href="/events" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>Upcoming Events</Link></li>
                      <li><Link href="/insights" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>Data &amp; Insights</Link></li>
                    </ul>
                  )}
                </li>
                <li><Link href="/resources" onClick={() => setMobileOpen(false)}>Community Resources</Link></li>
                <li><Link href="/donate" onClick={() => setMobileOpen(false)} style={{ color: 'var(--hrc-yellow-dark)', fontWeight: 900 }}>Donate Now</Link></li>
                <li><Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>
              </ul>
            </nav>
          </div>
        )}

      </header>

      {/* Global Search Modal */}
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
