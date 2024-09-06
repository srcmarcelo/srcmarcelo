import React from 'react';

export function BouncingArrow({ onScroll }: { onScroll: () => void }) {
  return (
    <div
      className='absolute bottom-10 w-full flex justify-center cursor-pointer'
      onClick={onScroll}
    >
      <div className='animate-bounce-arrow'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-10 w-10 text-white'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </div>
    </div>
  );
}
