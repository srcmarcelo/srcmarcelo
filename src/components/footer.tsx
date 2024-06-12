import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
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
  );
}
