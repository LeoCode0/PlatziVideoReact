import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <img className='header__img' src='images/platzi-video.png' alt='logo de platzi video' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src='images/user.png' alt='user' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
