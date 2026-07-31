import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCrisisWidget from '@/components/FloatingCrisisWidget';
import { FOUNDATION_META } from '@/data/siteData';

export const metadata: Metadata = {
  title: `${FOUNDATION_META.name} | Youth Mentoring & Confidential Domestic Violence Shelter`,
  description: FOUNDATION_META.mission,
  keywords: ["youth mentoring North Texas", "domestic violence shelter Farmers Branch", "crisis counseling", "trauma-informed care", "Gabriel Foundation"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main className="main-content">
          {children}
        </main>
        <Footer />
        <FloatingCrisisWidget />
      </body>
    </html>
  );
}
