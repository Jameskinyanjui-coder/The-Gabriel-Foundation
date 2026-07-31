import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCrisisWidget from '@/components/FloatingCrisisWidget';
import { FOUNDATION_META } from '@/data/siteData';

export const metadata: Metadata = {
  title: `${FOUNDATION_META.name} | Women's Empowerment, Counseling & Life Reset`,
  description: "The Gabriel Foundation is a 501(c)(3) non-profit organization dedicated to protecting women and girls from violence and all forms of abuse through 1-on-1 sisterhood mentorship, confidential trauma counseling, and emergency life reset housing assistance.",
  keywords: ["women empowerment North Texas", "ending violence against women", "domestic abuse counseling", "life reset housing", "Gabriel Foundation", "women mentorship circle"],
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: `${FOUNDATION_META.name} | Women's Empowerment & Safety`,
    description: "Empowering women, ending abuse, and rebuilding safe, dignified futures.",
    images: ['/images/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
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
