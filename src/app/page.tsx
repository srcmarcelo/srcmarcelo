import React from 'react';
import Experience from '@/sections/experience';
import Image from 'next/image';
import Particles from '@/components/particles';
import TitlesAnimation from '@/components/titles-animation';
import Skills from '@/sections/skills';
import Projects from '@/sections/projects';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export default function Home() {
  return (
    <div>
      <div className='flex flex-col min-h-screen p-6'>
        <Header />

        <Particles
          className='absolute inset-0 -z-10 animate-fade-in'
          quantity={400}
        />

        <main className='flex flex-col md:flex-row overflow-hidden justify-center py-16 items-center flex-1 w-full h-full'>
          <div className='flex w-full md:w-1/2 justify-center text-center mb-4'>
            <div className='flex justify-center items-center'>
              <Image
                alt='profile pic'
                width={400}
                height={400}
                src='/images/profile.jpg'
                className='rounded-full'
              />
            </div>
          </div>

          <div className='text-center w-full md:w-1/2 flex flex-col justify-between items-center space-y-8 py-8 px-6 md:px-0'>
            <div>
              <h1 className='z-10 text-center text-4xl md:text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-sans whitespace-nowrap bg-clip-text'>
                Marcelo Crístian
              </h1>
              <TitlesAnimation />
            </div>
            <div className='bg-white bg-opacity-10 text-white rounded-lg p-4'>
              <p className='text-lg mb-2'>
                Programador com experiência em desenvolvimento de softwares de
                ponta a ponta, focado em resolver grandes problemas com ótimas
                soluções.
              </p>
              <p className='text-lg'>
                Sempre busco ver o meu trabalho fazendo a diferença.
              </p>
            </div>
          </div>
        </main>
      </div>

      <Experience />
      <Skills />
      <Projects />

      <Footer />
    </div>
  );
}
