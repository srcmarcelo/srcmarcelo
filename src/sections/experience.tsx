'use client';

import { ExperienceItemType } from '@/types';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const experiences: ExperienceItemType[] = [
  {
    title: 'Desenvolvedor de softare (Efetivo)',
    date: '2023 - atualmente',
    company: 'Tracking Trade',
  },
  {
    title: 'Desenvolvedor de software (Estágio)',
    date: '2021 - 2023',
    company: 'Tracking Trade',
  },
  {
    title: 'Entrou na faculdade de Engenharia da Computação',
    date: '2020',
    company: 'CIN - UFPE',
  },
];

const Timeline: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center my-16'>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            visible={true}
            className='vertical-timeline-element--work'
            contentStyle={{
              background: '#5f326c',
              color: '#fff',
              display: 'block',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  #5f326c',
              background: 'transparent',
            }}
            date={exp.date}
            iconStyle={{ background: '#5f326c', color: '#fff' }}
          >
            <h3 className='vertical-timeline-element-title text-xl'>
              {exp.title}
            </h3>
            <p>{exp.company}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
