import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import React from 'react';

export default function Page() {
  return (
    <div>
      <div className='flex flex-col min-h-screen p-6'>
        <Header />

        <main className='flex flex-col md:flex-row overflow-hidden justify-center py-16 items-center flex-1 w-full h-full'>
          <div className='text-center w-full md:w-1/2 flex flex-col justify-between items-center space-y-8 py-8 px-6 md:px-0'>
            <div>
              <h1 className='z-10 text-center text-4xl md:text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-sans whitespace-nowrap bg-clip-text'>
                Contato
              </h1>
            </div>
            <div className='bg-white bg-opacity-10 text-white rounded-lg p-4'>
              <p className='text-lg mb-2'>Em desenvolvimento</p>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
