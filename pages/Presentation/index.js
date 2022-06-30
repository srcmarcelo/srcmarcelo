import React, { useState } from 'react';

import {
  Container,
  MenuContainer,
  MenuWave,
  Menu,
  NavBar,
  NavList,
  NavItem,
} from './styles';
import wave from '../../assets/wave.png';

function Presentation() {
  const [scroll, setScroll] = useState(0);
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', function () {
      setScroll(window.scrollY);
    });
  }
  return (
    <Container>
      <MenuContainer>
        <MenuWave src={wave} height={250} layout='responsive' />
        <Menu background={scroll > 10 ? '#d2342b' : 'none'}>
          <NavBar>
            <NavList>
              <NavItem>Conheça-me</NavItem>
              <NavItem>Currículo</NavItem>
              <NavItem special>Portifólio</NavItem>
              <NavItem>Hobbies</NavItem>
              <NavItem>Contato</NavItem>
            </NavList>
          </NavBar>
        </Menu>
      </MenuContainer>
      <div
        style={{
          fontSize: '100px',
          display: 'flex',
          width: '60vw',
          height: '500px',
          background: '#d2342b',
          marginTop: '20px',
          marginLeft: '280px',
          borderRadius: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        Teste
      </div>
    </Container>
  );
}

export default Presentation;
