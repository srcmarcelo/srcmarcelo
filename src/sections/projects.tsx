'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

interface ProjectCardProps {
  image: string;
  title: string;
  link: string;
  description: string;
  linkName?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  link,
  description,
  linkName,
}) => {
  return (
    <div className='bg-white w-full rounded-lg shadow-lg overflow-hidden flex flex-col p-2 h-40'>
      <div className='flex items-center h-full'>
        <div className='flex w-20 h-20 relative shrink-0 sm:w-32 sm:h-32'>
          <Image fill src={image} alt={title} />
        </div>
        <div className='p-2 flex flex-col justify-between'>
          <div>
            <h2 className='text-black font-bold text-xl'>{title}</h2>
            <p className='text-gray-800 text-sm'>{description}</p>
          </div>
          <div>
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-indigo-500 hover:text-indigo-700'
            >
              {linkName || link}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { push } = useRouter();

  return (
    <div className='py-10 mb-16 w-full'>
      <div className='max-w-6xl mx-auto sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-center text-white mb-8'>
          Projetos
        </h2>
        <div className='flex flex-col w-full p-4 sm:flex-row'>
          <div
            className='flex flex-col flex-1 justify-center space-y-4 items-center cursor-pointer bg-black bg-opacity-30 text-white rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:bg-opacity-50'
            onClick={() => push('/portfolio')}
          >
            <FaRegArrowAltCircleRight className='text-6xl' />
            <div className='text-xl text-center'>Ver portfólio completo</div>
          </div>
          <div className='flex flex-col flex-1 justify-between items-center py-4 space-y-4 sm:px-4 sm:py-0'>
            <ProjectCard
              image='/images/ela.png'
              title='SiGAE'
              link='https://youtu.be/3FClcuD1D_E'
              linkName='Assista o vídeo'
              description='Plataforma feita para que escolas possam centralizar informações e fazer o acompanhamento dos alunos'
            />
            <ProjectCard
              image='/images/cadernetadg.png'
              title='Caderneta Digital'
              link='https://www.cadernetadg.com.br'
              linkName='Acesse o site'
              description='Uma plataforma web e mobile que ajuda as pessoas a se organizarem financeiramente durante o mês'
            />
            <ProjectCard
              image='/images/marcelinho.png'
              title='Marcelinho Salgados'
              link='https://www.marcelinhosalgados.com.br/'
              linkName='Acesse o site'
              description='Sistema de acompanhamento e reserva de salgados comercializados na universidade (com painel de controle)'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
