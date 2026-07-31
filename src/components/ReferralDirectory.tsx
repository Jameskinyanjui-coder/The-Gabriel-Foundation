'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { REFERRALS } from '@/data/siteData';
import { Search, Phone, ShieldCheck, Filter, Handshake, Info, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ReferralDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 4;

  const categories = ['All', 'Emergency Helplines', 'Legal Aid', 'Housing & Food'];

  const filteredReferrals = REFERRALS.filter((ref) => {
    const matchesCategory = selectedCategory === 'All' || ref.category === selectedCategory;
    const matchesSearch = ref.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ref.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ref.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalItems = filteredReferrals.length;
  const maxIndex = Math.max(0, Math.ceil(totalItems / itemsPerPage) - 1);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleItems = filteredReferrals.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div style={{ margin: '2rem 0' }}>
      
      {/* Newly Founded NGO Partner Notice */}
      <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <Info size={22} style={{ color: 'var(--hrc-blue)', flexShrink: 0, marginTop: '2px' }} />
        <div>
          <h4 style={{ color: 'var(--hrc-blue)', margin: '0 0 0.25rem 0', fontSize: '1.05rem' }}>
            Building Our Community Partner Network
          </h4>
          <p style={{ fontSize: '0.92rem', color: '#334155', margin: 0, lineHeight: 1.6 }}>
            As a newly established non-profit NGO, <strong>The Gabriel Foundation</strong> is currently forming strategic partnerships with local shelters, legal aid organizations, healthcare providers, and community allies. Below are verified national and regional emergency resources while our local partner network expands.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="card" style={{ backgroundColor: '#F8FAFC', marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.15rem' }}>
          <Filter size={20} style={{ color: 'var(--color-primary)' }} />
          <span>Filter Emergency &amp; Community Resources</span>
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }} className="grid-responsive">
          {/* Search Input */}
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '14px', color: '#94A3B8' }} />
            <input
              type="text"
              placeholder="Search legal aid, helplines, housing..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentIndex(0);
              }}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.4rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                fontSize: '0.95rem'
              }}
            />
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                }}
                style={{
                  padding: '0.5rem 0.9rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--color-border)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: selectedCategory === cat ? 'var(--color-primary)' : 'white',
                  color: selectedCategory === cat ? 'white' : 'var(--color-text-main)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Header Bar with Next / Prev Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>
          Showing {totalItems > 0 ? currentIndex * itemsPerPage + 1 : 0}-{Math.min((currentIndex + 1) * itemsPerPage, totalItems)} of {totalItems} verified resources
        </div>

        {totalItems > itemsPerPage && (
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <button
              type="button"
              onClick={handlePrev}
              className="btn btn-outline"
              aria-label="Previous 4 resources"
              style={{ padding: '0.45rem 0.85rem', fontSize: '0.88rem', borderRadius: '8px' }}
            >
              <ChevronLeft size={18} /> Prev
            </button>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--irc-dark)', padding: '0 0.4rem' }}>
              {currentIndex + 1} / {maxIndex + 1}
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="btn btn-primary"
              aria-label="Next 4 resources"
              style={{ padding: '0.45rem 0.85rem', fontSize: '0.88rem', borderRadius: '8px' }}
            >
              Next <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      {/* 4 Cards in 1 Row Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }} className="referral-4-grid">
        {visibleItems.length > 0 ? (
          visibleItems.map((item) => (
            <div key={item.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#FFFFFF', padding: '1.25rem', border: '1px solid var(--color-border)', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '4px' }}>
                  <span className="badge badge-crisis" style={{ fontSize: '0.72rem', padding: '0.2rem 0.5rem' }}>{item.category}</span>
                  <span style={{ fontSize: '0.72rem', color: '#059669', display: 'flex', alignItems: 'center', gap: '3px', fontWeight: 700 }}>
                    <ShieldCheck size={13} /> Verified
                  </span>
                </div>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem', color: 'var(--irc-dark)', lineHeight: 1.3 }}>{item.name}</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: 1.5 }}>
                  {item.description}
                </p>
              </div>

              <div style={{ paddingTop: '0.85rem', borderTop: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-crisis-dark)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Phone size={15} style={{ flexShrink: 0 }} />
                  <span>{item.contact}</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '4px', fontStyle: 'italic' }}>
                  {item.confidentialityNote}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--color-text-muted)' }}>
            No resources match your search criteria.
          </div>
        )}
      </div>

      {/* Next / Prev Navigation Row at Bottom */}
      {totalItems > itemsPerPage && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.75rem', alignItems: 'center' }}>
          <button
            type="button"
            onClick={handlePrev}
            className="btn btn-outline"
            style={{ padding: '0.6rem 1.35rem', fontSize: '0.9rem' }}
          >
            <ChevronLeft size={18} /> Previous 4
          </button>
          <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--irc-dark)' }}>
            Page {currentIndex + 1} of {maxIndex + 1}
          </span>
          <button
            type="button"
            onClick={handleNext}
            className="btn btn-primary"
            style={{ padding: '0.6rem 1.35rem', fontSize: '0.9rem' }}
          >
            Next 4 Cards <ChevronRight size={18} />
          </button>
        </div>
      )}

      {/* Call to Partner Banner */}
      <div style={{ marginTop: '2.5rem', background: '#FFFDF9', border: '1px solid var(--color-primary-border)', borderLeft: '5px solid var(--irc-orange)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
        <h4 style={{ fontSize: '1.15rem', color: 'var(--irc-dark)', marginBottom: '0.5rem' }}>
          Are You a Community Organization, Legal Advocate, or Healthcare Provider?
        </h4>
        <p style={{ fontSize: '0.94rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem', maxWidth: '650px', margin: '0 auto 1.25rem auto' }}>
          We welcome partnerships with vetted organizations in North Texas to expand our wraparound referral network for women.
        </p>
        <Link href="/get-involved" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>
          <Handshake size={18} /> Connect to Partner With Us
        </Link>
      </div>
    </div>
  );
}
