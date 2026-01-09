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
  title: 'Emma Party - Organisation de Mariage de Luxe',
  description: 'Wedding planner & scénographe - Élégance florale, ambiances sur mesure. L\'art de célébrer votre jour unique.',
  icons: {
    icon: '/emma-party-white.png',
    shortcut: '/emma-party-white.png',
    apple: '/emma-party-white.png',
  },
  openGraph: {
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
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
