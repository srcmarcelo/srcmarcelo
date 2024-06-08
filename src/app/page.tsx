import React from 'react';
import Experience from '@/sections/experience';
import Image from 'next/image';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Particles from '@/componets/particles';
import TitlesAnimation from '@/componets/titles-animation';
import Skills from '@/sections/skills';

export default function Home() {
  return (
    <div>
      <div className='flex flex-col min-h-screen p-6'>
        <header>
          <nav className='w-full animate-fade-in flex justify-center space-x-4 md:space-x-14'>
            <a
              href='/portfolio'
              className='hover:text-gray-600 transition-colors duration-300'
            >
              Portifólio
            </a>
            <a
              href='/'
              className='hover:text-gray-600 transition-colors duration-300'
            >
              Sobre mim
            </a>
            <div className='hover:text-gray-600 transition-colors duration-300'>
              Contato
            </div>
          </nav>
        </header>
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
      <footer className='flex flex-col items-center py-6 bg-black bg-opacity-30 text-white'>
        <div className='flex space-x-4 mb-4'>
          <a
            href='https://www.instagram.com/srcmarcelo?igsh=M3h1c2xycWZnZTl4'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram
              size={30}
              className='hover:text-gray-400 transition-colors duration-300'
            />
          </a>
          <a
            href='https://github.com/srcmarcelo'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub
              size={30}
              className='hover:text-gray-400 transition-colors duration-300'
            />
          </a>
          <a
            href='www.linkedin.com/in/srcmarcelo'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin
              size={30}
              className='hover:text-gray-400 transition-colors duration-300'
            />
          </a>
        </div>
        <div className='text-center text-sm'>
          © 2024 Marcelo Crístian. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
