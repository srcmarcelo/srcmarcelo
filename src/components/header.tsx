'use client';

import { cn } from '@/util/cn';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathName = usePathname();

  return (
    <header className='w-full'>
      <nav className='w-full animate-fade-in flex justify-center space-x-4 md:space-x-14'>
        <a
          href='/portfolio'
          className={cn(
            'hover:text-md transition-all duration-300 underline-offset-4',
            pathName === '/portfolio' ? 'underline' : ''
          )}
        >
          Portfólio
        </a>
        <a
          href='/'
          className={cn(
            'hover:text-md transition-all duration-300 underline-offset-4',
            pathName === '/' ? 'underline' : ''
          )}
        >
          Sobre mim
        </a>
        <a
          href='/contato'
          className={cn(
            'hover:text-md transition-all duration-300 underline-offset-4',
            pathName === '/contato' ? 'underline' : ''
          )}
        >
          Contato
        </a>
      </nav>
    </header>
  );
}
