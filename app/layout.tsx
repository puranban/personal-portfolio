import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Metadata Configuration
// SEO optimization

// Ideally set NEXT_PUBLIC_SITE_URL in Vercel/hosting env
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://puranban.com.np'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Puran Ban — Senior Frontend Engineer (React, Next.js, TypeScript)',
    template: '%s — Puran Ban',
  },
  description:
    'Senior Frontend Engineer with 6+ years of experience building scalable, accessible, and high-performance web applications using React, TypeScript, and Next.js. Based in Canada and open to frontend opportunities.',
  applicationName: 'Puran Ban Portfolio',
  keywords: [
    'Puran Ban',
    'Senior Frontend Engineer',
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Web Performance',
    'Accessibility',
    'Design Systems',
    'UI Engineering',
    'Canada',
    'Ontario',
    'Toronto',
  ],
  authors: [{ name: 'Puranban' }],
  creator: 'Puranban',
  publisher: 'Puranban',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
    canonical: '/',
    languages: {
      'en-CA': '/',
      'fr-CA': '/fr',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    alternateLocale: ['fr_CA'],
    url: '/',
    siteName: 'Puran Ban Portfolio',
    title: 'Puranban | Senior Frontend Engineer - React & Next.js Developer',
    description: 'I build scalable, accessible, and high-performance web experiences with React, TypeScript, and Next.js. Explore my work, experience, and projects.',
    images: [
      {
        url: '/profile-photo.jpeg',
        width: 800,
        height: 800,
        alt: 'Puran Ban - Senior Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puran Ban | Senior Frontend Engineer - React & Next.js Developer',
    description:
      'Building scalable, accessible, and high-performance web apps with React, TypeScript, and Next.js.',
    creator: '@puranban',
    images: [
      '/profile-photo.jpeg',
    ],
  },
  icons: {
    icon: [
      {
        url: '/favicon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/favicon.svg',
  },
  // manifest: '/manifest.json',
  manifest: '/manifest.webmanifest',
  category: 'technology',
  generator: 'puranban'
}

// Viewport Configuration
// Mobile optimization, theme color

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

// Root Layout Component

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${inter.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
