import '../styles/globals.css';
import React from 'react';
import Header from './Header';
import { Inter } from '@next/font/google';

import { ModalProvider } from './providers';

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Home</title>
      </head>
      <body className="bg-black overflow-scroll h-screen scrollbar-hide">
        <ModalProvider>
          <Header />
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
