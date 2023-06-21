"use client"

import Meta from './components/Meta';
import './globals.css';
import { Inter } from 'next/font/google';

import HeaderSidebar from './components/HeaderSidebar';

import { useState } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <html lang="en">
      <body className={inter.className}>
        <Meta />
        <div className="min-h-screen flex ">
        {isLoggedIn && <HeaderSidebar />}
                <main className="w-full  bg-gray-200 ">
                    {children}
                </main>
           </div>
      </body>
    </html>
  );
}
