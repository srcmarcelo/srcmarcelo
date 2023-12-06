import React from 'react';
import VideoPlayer from '../componets/video-player';
import Particles from '../componets/particles';

export default function Home() {
  return (
    <div className='flex flex-col overflow-hidden justify-between py-16 items-center flex-1 w-full h-full'>
      <Particles
        className='absolute inset-0 -z-10 animate-fade-in'
        quantity={400}
      />
      <div className='w-full text-center'>
        <div className='w-screen h-px animate-glow block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
        <h1 className='z-10 text-center text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title  font-sans whitespace-nowrap bg-clip-text '>
          Marcelo Crístian
        </h1>
        <div className='w-screen h-px animate-glow block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
      </div>

      <VideoPlayer />

      <div className='w-full text-center'>
        <h1 className='z-10 text-xl text-transparent bg-white cursor-default text-edge-outline animate-fade-in font-sans whitespace-nowrap bg-clip-text '>
          Desenvolvedor de Software
        </h1>
      </div>
    </div>
  );
}
