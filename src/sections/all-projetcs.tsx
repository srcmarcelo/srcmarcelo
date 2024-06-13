'use client';

import { cn } from '@/util/cn';
import { reorderArray } from '@/util/reorderArray';
import Image from 'next/image';
import React, { useState, useRef } from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  link: string;
  description: string;
  linkName?: string;
  selected?: boolean;
  setSelected?: () => void;
}

const projectsData = [
  {
    image: '/test.gif',
    title: 'SiGAE',
    link: 'https://youtu.be/3FClcuD1D_E',
    linkName: 'Assista o vídeo',
    description:
      'Plataforma feita para que escolas possam centralizar informações e fazer o acompanhamento dos alunos',
  },
  {
    image: '/test.gif',
    title: 'Caderneta Digital',
    link: 'https://www.cadernetadg.com.br',
    linkName: 'Acesse o site',
    description:
      'Uma plataforma web e mobile que ajuda as pessoas a se organizarem financeiramente durante o mês',
  },
  {
    image: '/test.gif',
    title: 'Marcelinho Salgados',
    link: 'https://www.marcelinhosalgados.com.br/',
    linkName: 'Acesse o site',
    description:
      'Sistema de acompanhamento e reserva de salgados comercializados na universidade (com painel de controle)',
  },
  {
    image: '/test.gif',
    title: 'Visão Ótica Web',
    link: 'https://visao-otica-web.vercel.app/',
    linkName: 'Acesse o site',
    description:
      "Plataforma que gera dinâmicamente PDF's de cadastro de clientes e parcelas de compras",
  },
  {
    image: '/test.gif',
    title: 'Casamento EM',
    link: 'https://www.casamentoem.online/',
    linkName: 'Acesse o site',
    description:
      'Site para que os convidados do meu casamento vissem informações e pudessem escolher a opção de presente',
  },
  {
    image: '/test.gif',
    title: 'Seja Hoop',
    link: 'https://sejahoop.vercel.app/',
    linkName: 'Acesse o site',
    description:
      'Landing Page com funcionalidade de calculadora simulador de parcelas e pix com conversão em tempo real',
  },
  {
    image: '/test.gif',
    title: 'Escola ELA',
    link: 'https://www.escolaela.com.br/',
    linkName: 'Acesse o site',
    description:
      'Landing page da instituição com redirecionamento para entrega de currículo e pré-matrícula de alunos',
  },
];

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  link,
  description,
  linkName,
  selected,
  setSelected,
}) => {
  return (
    <div
      id={title}
      onClick={() => {
        !selected && setSelected?.();
      }}
      className={cn(
        'bg-white w-full rounded-lg shadow-lg overflow-hidden flex flex-col p-2 transform transition duration-500 sm:flex-row',
        selected
          ? 'col-span-1 py-4 sm:col-span-2 lg:col-span-3'
          : 'col-span-1 cursor-pointer hover:scale-105'
      )}
    >
      {selected && (
        <div className='flex justify-center items-center h-full text-center flex-1 text-black p-4'>
          Em desenvolvimento
        </div>
      )}
      <div className='flex flex-1 flex-col items-center h-full'>
        <div className={'flex relative shrink-0 w-80 h-60'}>
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

const AllProjects: React.FC = () => {
  const [selected, setSelected] = useState('SiGAE');
  const [projects, setProjects] = useState(projectsData);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelect = (title: string, index: number) => {
    const reorderProjects = reorderArray(projects, index);
    setProjects(reorderProjects);
    setSelected(title);
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='py-10 mb-16 w-full'>
      <div className='max-w-6xl mx-auto sm:px-6 lg:px-8'>
        <div className='flex flex-col w-full p-4 sm:flex-row'>
          <div
            ref={containerRef}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                image={project.image}
                title={project.title}
                link={project.link}
                linkName={project.linkName}
                description={project.description}
                selected={selected === project.title}
                setSelected={() => handleSelect(project.title, index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
