'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Shield, Users, Menu, X, Search } from 'lucide-react';
import { FOUNDATION_META } from '@/data/siteData';
import GlobalSearchModal from './GlobalSearchModal';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const isCrisisTrack = pathname.startsWith('/crisis');

  return (
    <>
      <header className="navbar-two-tier">
        
        {/* =========================================================================
            LEVEL 1: Top Bar (Brand Logo, Track Switcher, Compact Actions, Mobile Menu)
           ========================================================================= */}
        <div className="nav-tier-top">
          <div className="container nav-tier-container">

            {/* Official Brand Logo */}
            <Link href="/" className="nav-brand" aria-label="The Gabriel Foundation Home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <img
                src="/images/logo.png"
                alt="Gabrial Foundation Logo"
                style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
              />
              <div className="nav-brand-text">
                <span className="nav-brand-title">{FOUNDATION_META.name}</span>
              </div>
            </Link>

            {/* Desktop Track Switcher (Mentoring Division + Crisis & Reset) */}
            <div className="track-switcher" role="navigation" aria-label="Program Division Tracks">
              <Link
                href="/mentoring"
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
                  { href: '/mentoring', label: 'Mentoring' },
                  { href: '/crisis', label: 'Emergency Support', accent: true },
                  { href: '/get-involved', label: 'Get Involved' },
                  { href: '/resources', label: 'Resources' },
                  { href: '/contact', label: 'Contact' },
                ].map(({ href, label, accent }) => {
                  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`nav-link ${isActive ? 'active' : ''}`}
                        style={accent ? { color: 'var(--fa-green)', fontWeight: 900 } : undefined}
                      >
                        {label}
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
                href="/mentoring"
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
                <li><Link href="/mentoring" onClick={() => setMobileOpen(false)} style={{ color: 'var(--irc-orange)' }}>Mentoring Programs</Link></li>
                <li><Link href="/crisis" onClick={() => setMobileOpen(false)} style={{ color: 'var(--fa-green)' }}>Emergency Support &amp; Reset</Link></li>
                <li><Link href="/get-involved" onClick={() => setMobileOpen(false)}>Get Involved</Link></li>
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
