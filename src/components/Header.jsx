import React from 'react';
import '../assets/styles/components/Header.scss';
import profile from '../assets/static/user.png';
import logo from '../assets/static/platzi-video.png';

const Header = () => (
  <header className='header'>
    <img className='header__img' src={logo} alt='logo de platzi video' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={profile} alt='user' />
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
