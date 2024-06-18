import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import AllProjects from '@/sections/all-projetcs';
import Contact from '@/sections/contact';
import React from 'react';

export default function Page() {
  return (
    <div>
      <div className='flex flex-col min-h-screen p-6'>
        <Header />

        <main className='flex flex-col md:flex-row overflow-hidden justify-center py-16 items-center flex-1 w-full h-full'>
          <div className='text-center w-full md:w-1/2 flex flex-col justify-between items-center space-y-8 py-8 px-6 md:px-0'>
            <div>
              <h1 className='mb-2 z-10 text-center text-4xl md:text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-sans whitespace-nowrap bg-clip-text'>
                Portifólio
              </h1>
              <h2 className='z-10 text-center text-xl md:text-2xl text-transparent duration-1000 bg-gray-200 cursor-default text-edge-outline animate-title font-sans whitespace-nowrap bg-clip-text'>
                Marcelo Crístian
              </h2>
            </div>
            <div className='bg-white bg-opacity-10 text-white rounded-lg p-4'>
              <p className='text-lg mb-2'>
                Abaixo encontrará alguns dos meus principais projetos
              </p>
              <p className='text-lg'>Clique no projeto para vizualizar</p>
            </div>
          </div>
        </main>
      </div>

      <AllProjects />
      <Contact />

      <Footer />
    </div>
  );
}
