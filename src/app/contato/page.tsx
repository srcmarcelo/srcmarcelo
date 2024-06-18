import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

import React from 'react';

export default function Page() {
  return (
    <div>
      <div className='flex flex-col min-h-screen p-6'>
        <Header />

        <main className='flex flex-col overflow-hidden justify-between py-16 items-center flex-1 w-full h-full'>
          <div className='text-center w-full md:w-1/2 flex flex-col justify-between items-center space-y-8 py-8 px-6 md:px-0'>
            <div>
              <h1 className='mb-2 z-10 text-center text-4xl md:text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-sans whitespace-nowrap bg-clip-text'>
                Meus Contatos
              </h1>
              <h2 className='z-10 text-center text-xl md:text-2xl text-transparent duration-1000 bg-gray-200 cursor-default text-edge-outline animate-title font-sans whitespace-nowrap bg-clip-text'>
                Marcelo Crístian
              </h2>
            </div>
            <div className='bg-white bg-opacity-10 text-white rounded-lg p-4'>
              <p className='text-lg mb-2'>
                Clique em um card para entrar em contato
              </p>
              <p className='text-lg'>
                Estou sempre aberto a novos desafios e parcerias
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 w-full'>
            <a
              href='https://wa.me/qr/HQCNXJURVAAOE1'
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-col col-span-1 sm:col-span-2 items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105'
            >
              <FaWhatsapp className='text-5xl text-green-500 mb-4' />
              <span className='text-lg font-semibold text-gray-700'>
                +55 (87) 98817-5129
              </span>
            </a>
            <a
              href='mailto:marcelo.cristian.969@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-col items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105'
            >
              <FaEnvelope className='text-5xl text-blue-500 mb-4' />
              <span className='text-lg font-semibold text-gray-700'>
                marcelo.cristian.969@gmail.com
              </span>
            </a>
            <a
              href='https://instagram.com/srcmarcelo'
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-col items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105'
            >
              <FaInstagram className='text-5xl text-pink-500 mb-4' />
              <span className='text-lg font-semibold text-gray-700'>
                @srcmarcelo
              </span>
            </a>
            <a
              href='https://github.com/srcmarcelo'
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-col items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105'
            >
              <FaGithub className='text-5xl text-gray-800 mb-4' />
              <span className='text-lg font-semibold text-gray-700'>
                github.com/srcmarcelo
              </span>
            </a>
            <a
              href='https://linkedin.com/in/srcmarcelo'
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-col items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105'
            >
              <FaLinkedin className='text-5xl text-blue-700 mb-4' />
              <span className='text-lg font-semibold text-gray-700'>
                linkedin.com/in/srcmarcelo
              </span>
            </a>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
