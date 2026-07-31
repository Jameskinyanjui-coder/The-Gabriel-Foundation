import React from 'react';
import { FINANCIALS, FOUNDATION_META } from '@/data/siteData';
import { FileText, Download, ShieldCheck, CheckCircle2, DollarSign } from 'lucide-react';
import Link from 'next/link';
import ImpactDashboard from '@/components/ImpactDashboard';

export default function FinancialsPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <span className="badge badge-mentoring" style={{ marginBottom: '0.75rem' }}>Fiscal Accountability</span>
        <h1>2.2.5 Annual Reports &amp; Financial Accountability</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
          We maintain rigorous fiscal oversight, annual independent CPA audits, and full federal grant compliance.
        </p>
      </div>

      {/* Interactive Impact & Transparency Dashboard */}
      <div style={{ marginBottom: '4rem' }}>
        <ImpactDashboard />
      </div>

      {/* 2.2.5.1 Downloads & 2.2.5.2 Grant Compliance Statement */}
      <div className="grid-2">
        <div className="card">
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileText size={22} style={{ color: 'var(--color-primary)' }} />
            <span>2.2.5.1 Downloads &amp; Filings</span>
          </h3>

          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div>
                <strong style={{ fontSize: '0.95rem' }}>Latest Annual Report (2024–2025 PDF)</strong>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>De-identified impact &amp; program outcomes</div>
              </div>
              <span className="btn btn-outline" style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}>
                <Download size={14} /> PDF
              </span>
            </li>

            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div>
                <strong style={{ fontSize: '0.95rem' }}>IRS Form 990 Tax Return</strong>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Public 501(c)(3) financial filing</div>
              </div>
              <span className="btn btn-outline" style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}>
                <Download size={14} /> PDF
              </span>
            </li>
          </ul>
        </div>

        <div className="card" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={22} style={{ color: 'var(--color-secondary)' }} />
            <span>2.2.5.2 Grant Compliance Note</span>
          </h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
            {FINANCIALS.grantComplianceNote}
          </p>
          <div style={{ marginTop: '1rem', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
            <strong style={{ color: 'var(--color-text-main)' }}>Audit Status:</strong> {FINANCIALS.auditStatus}
          </div>
          <div style={{ marginTop: '1rem' }}>
            <Link href="/donate" className="btn btn-primary" style={{ width: '100%' }}>
              <DollarSign size={18} /> Support Our Programs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
