'use client';

import { cn } from '@/util/cn';
import { reorderArray } from '@/util/reorderArray';
import Image from 'next/image';
import React, { useState, useRef } from 'react';

interface ProjectCardProps {
  image: string;
  gif: string;
  title: string;
  description: string;
  link?: string;
  videoLink?: string;
  body?: string;
  subBody?: string;
  selected?: boolean;
  setSelected?: () => void;
}

const projectsData = [
  {
    image: '/images/ela.png',
    gif: '/gifs/gae.gif',
    title: 'SiGAE',
    videoLink: 'https://youtu.be/3FClcuD1D_E',
    description:
      'Plataforma feita para que escolas possam centralizar informações e fazer o acompanhamento dos alunos',
    body: 'Um Sistema de Gerenciamento e Acompanhamento Escolar desenvolvido com o objetivo de facilitar o trabalho dos professores, dar mais visibilidade aos gestores e otimizar o acompanhamento dos pais dos alunos.',
    subBody:
      'Conta com diversas funcionalidades, sendo a principal delas a notificação dos pais via WhatsApp. Esta funcionalidade foi pensada e desenvolvida por mim de maneira 100% independente, tornando pioneiras dessa tecnologia quaisquer escolas que aderirem ao sistema.',
  },
  {
    image: '/images/cadernetadg.png',
    gif: '/gifs/cadernetadg.gif',
    title: 'Caderneta Digital',
    link: 'https://www.cadernetadg.com.br',
    videoLink:
      'https://www.instagram.com/reel/CoSuZemgsxl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    description:
      'Uma plataforma web e mobile que ajuda as pessoas a se organizarem financeiramente durante o mês',
    body: 'Sistema pensado em registrar ganhos e dívidas de uma maneira simples, mas eficiente.',
    subBody:
      'Com os cálculos feitos em tempo real na aplicação, o usuário consegue saber quanto vai faltar ou sobrar no fim do mês. Ótimo para usar tanto no celular como no computador, pois possui tecnologia PWA.',
  },
  {
    image: '/images/marcelinho.png',
    gif: '/gifs/marcelinho.gif',
    title: 'Marcelinho Salgados',
    link: 'https://www.marcelinhosalgados.com.br/',
    description:
      'Sistema de acompanhamento e reserva de salgados comercializados na universidade (com painel de controle)',
    body: 'Plataforma criada para que os estudantes pudessem acompanhar os salgados disponíveis em tempo real, além de fazer reservas e ver os avisos.',
    subBody:
      'O sistema ainda conta com um painel de controle, onde quem está responsável pelas vendas consegue fazer a encomenda para o fornecedor e controlar turno de vendas, avisos, reservas e salgados disponíveis.',
  },
  {
    image: '/images/visao.png',
    gif: '/gifs/visao.gif',
    title: 'Visão Ótica Web',
    link: 'https://visao-otica-web.vercel.app/',
    description:
      'Plataforma que gera dinamicamente PDFs de cadastro de clientes e parcelas de compras',
    body: 'Conta com um gerador de PDF que, após preencher as informações, monta a ficha cadastral do cliente com parâmetros da sua visão.',
    subBody:
      'O gerador de parcelas faz o cálculo do valor de cada parcela de acordo com o total, gerando um carnê completo daquela compra.',
  },
  {
    image: '/images/casamentoem.png',
    gif: '/gifs/casamentoem.gif',
    title: 'Casamento EM',
    link: 'https://www.casamentoem.online/',
    description:
      'Site para que os convidados do meu casamento vissem informações e pudessem escolher a opção de presente',
    body: 'Feito para tornar mais simples e prática a atividade da escolha dos presentes dos convidados do casamento.',
    subBody:
      'Uma listagem responsiva para que pudesse ser acessada por qualquer dispositivo, e entendida por qualquer pessoa.',
  },
  {
    image: '/images/hoop.png',
    gif: '/gifs/hoop.gif',
    title: 'Seja Hoop',
    link: 'https://sejahoop.vercel.app/',
    description:
      'Landing Page com funcionalidade de calculadora simulador de parcelas e pix com conversão em tempo real',
    body: 'O simulador utiliza uma API que traz em tempo real o valor de turismo do dólar e euro.',
  },
  {
    image: '/images/ela.png',
    gif: '/gifs/escolaela.gif',
    title: 'Escola ELA',
    link: 'https://www.escolaela.com.br/',
    description:
      'Landing page da instituição com redirecionamento para entrega de currículo e pré-matrícula de alunos',
    body: 'Meu primeiro projeto pessoal.',
    subBody:
      'Focado em trazer as informações mais importantes da escola e redirecionar clientes para a pré-matrícula (Google Forms).',
  },
];

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  gif,
  title,
  link,
  videoLink,
  description,
  body,
  subBody,
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
        <div className='flex flex-col justify-center text-center items-center flex-1 h-full p-4 space-y-2'>
          <div className='flex justify-center items-center text-center text-gray-600'>
            {body || ''}
          </div>
          {subBody && (
            <div className='flex justify-center items-center text-center text-gray-600'>
              {subBody}
            </div>
          )}
        </div>
      )}
      <div className='flex flex-1 flex-col items-center h-full'>
        <div className={'flex relative shrink-0 w-80 h-60'}>
          {!selected && image ? (
            <Image fill src={image} alt={title} />
          ) : (
            <Image fill src={gif} alt={title} />
          )}
        </div>
        <div className='p-2 flex flex-col h-full justify-between'>
          <div>
            <h2 className='text-black font-bold text-xl'>{title}</h2>
            <p className='text-gray-800 text-sm'>{description}</p>
          </div>
          <div className='flex justify-start items-center space-x-4'>
            {link && (
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-indigo-500 hover:text-indigo-700 hover:underline'
              >
                Acesse o site
              </a>
            )}
            {videoLink && (
              <a
                href={videoLink}
                target='_blank'
                rel='noopener noreferrer'
                className='text-indigo-500 hover:text-indigo-700 hover:underline'
              >
                Veja o vídeo
              </a>
            )}
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
    const reorderedProjects = reorderArray(projects, index);
    setProjects(reorderedProjects);
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
                gif={project.gif}
                title={project.title}
                link={project.link}
                videoLink={project.videoLink}
                description={project.description}
                body={project.body}
                subBody={project.subBody}
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
