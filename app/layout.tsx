import './globals.css';
import type { Metadata } from 'next';
import { Dancing_Script, Pacifico, Montserrat } from 'next/font/google';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
});

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Emma Party - L\'Art de Célébrer | Wedding Planner & Décoration Mariage',
  description: 'Emma Party, wedding planner passionnée avec 15+ ans d\'expérience. Organisation complète de mariages, décoration florale sur mesure, coordination jour J. Transformez votre rêve en réalité avec élégance et créativité. Devis personnalisé gratuit.',
  keywords: [
    'wedding planner',
    'organisatrice mariage',
    'décoration mariage',
    'art floral mariage',
    'coordination mariage',
    'Emma Party',
    'mariage de luxe',
    'scénographie mariage',
    'organisation événement',
    'décoration florale',
    'wedding designer',
    'planificateur mariage',
    'mariage sur mesure',
    'mariage élégant',
    'mariage romantique',
    'coordination jour J',
    'prestataire mariage',
    'organisateur événementiel',
    'mariage clé en main',
    'décoration événementielle',
  ],
  authors: [{ name: 'Emma Party' }],
  creator: 'Emma Party',
  publisher: 'Emma Party',
  icons: {
    icon: '/emma-party-white.png',
    shortcut: '/emma-party-white.png',
    apple: '/emma-party-white.png',
  },
  openGraph: {
    title: 'Emma Party - L\'Art de Célébrer | Wedding Planner Professionnel',
    description: 'Wedding planner avec 15+ ans d\'expérience. Organisation complète de mariages, décoration florale, coordination. Créez votre mariage de rêve.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Emma Party',
    images: [
      {
        url: '/heroimg.jpg',
        width: 1200,
        height: 630,
        alt: 'Emma Party - Wedding Planner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emma Party - L\'Art de Célébrer',
    description: 'Wedding planner passionnée. Organisation de mariages élégants et personnalisés.',
    images: ['/heroimg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://emma-party.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${dancingScript.variable} ${pacifico.variable} ${montserrat.variable}`}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
