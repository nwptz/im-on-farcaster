import * as React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NeynarWrapper from '@/components/NeynarWrapper'; // ✅ import your wrapper

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "I'm on Farcaster",
  description: 'Track your daily check-in streak',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NeynarWrapper>
          {children}
        </NeynarWrapper>
      </body>
    </html>
  );
}
