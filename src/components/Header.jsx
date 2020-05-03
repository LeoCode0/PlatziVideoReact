import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import profile from '../assets/static/user.png';
import logo from '../assets/static/platzi-video.png';

const Header = () => (
  <header className='header'>
    <Link className='header' to='/'>
      <img className='header__img' src={logo} alt='logo de platzi video' />
    </Link>
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={profile} alt='user' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><Link to='/'>Cuenta</Link></li>
        <li><Link to='/login'>Iniciar sesion</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;
