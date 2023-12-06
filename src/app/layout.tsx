import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marcelo Crístian',
  description: 'Conheça. Entra em contato.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen p-6'>
          <header>
            <nav className='w-full animate-fade-in flex justify-center space-x-4 md:space-x-14'>
              <a href='/portfolio'>Projetos</a>
              <a href='/'>Home</a>
              <div>Experiência</div>
            </nav>
          </header>
          <main className='flex flex-1 flex-col items-center justify-between'>
            {children}
          </main>
        </div>
        {/*<footer>
          <div className='flex justify-center text-center py-4 text-black'>
            Footer
          </div>
        </footer>*/}
      </body>
    </html>
  );
}
