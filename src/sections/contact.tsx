'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import {
  FaEnvelope,
  FaWhatsapp,
  FaRegArrowAltCircleRight,
  FaLinkedin,
} from 'react-icons/fa';

const Contact: React.FC = () => {
  const { push } = useRouter();

  return (
    <div className='py-10 mb-16 w-full'>
      <div className='max-w-6xl mx-auto sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-center text-white mb-8'>
          Vamos conversar?
        </h2>
        <div className='flex flex-col w-full p-4 sm:flex-row'>
          <div
            className='flex flex-col flex-1 justify-center space-y-4 items-center cursor-pointer bg-black bg-opacity-30 text-white rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:bg-opacity-50'
            onClick={() => push('/contato')}
          >
            <FaRegArrowAltCircleRight className='text-6xl' />
            <div className='text-xl text-center'>
              Ver todas as formas de contato
            </div>
          </div>
          <div className='flex flex-col flex-1 justify-between items-center py-4 space-y-4 sm:px-4 sm:py-0'>
            <a
              href='https://wa.me/qr/HQCNXJURVAAOE1'
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-col items-center p-4 bg-white rounded-xl shadow-lg w-full hover:shadow-xl transition transform hover:scale-105'
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
              className='flex flex-col items-center p-4 bg-white rounded-xl shadow-lg w-full hover:shadow-xl transition transform hover:scale-105'
            >
              <FaEnvelope className='text-5xl text-blue-500 mb-4' />
              <span className='text-lg font-semibold text-gray-700'>
                marcelo.cristian.969@gmail.com
              </span>
            </a>
            <a
              href='https://linkedin.com/in/srcmarcelo'
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-col items-center p-4 bg-white rounded-xl shadow-lg w-full hover:shadow-xl transition transform hover:scale-105'
            >
              <FaLinkedin className='text-5xl text-blue-700 mb-4' />
              <span className='text-lg font-semibold text-gray-700'>
                linkedin.com/in/srcmarcelo
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
