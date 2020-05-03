/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/static/play.png';
import twitterIcon from '../assets/static/twitter.png';

import '../assets/styles/components/Login.scss';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2 tabIndex='0'>Inicia sesión</h2>
      <form className='login__container--form' action='post'>
        <input className='login__input' aria-label='correo' type='text' placeholder='Correo' />
        <input className='login__input' aria-label='contraseña' type='password' placeholder='Contraseña' />
        <button className='button'>Iniciar sesión</button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' name='' id='cbox1' value='checkbox' />
            Recuerdame
          </label>
          <a href='/'>Olvide mi contraseña</a>
        </div>
      </form>
      <div className='login__container--social-media'>
        <div>
          <img src={googleIcon} alt='google' />
          Inicia sesión con google
        </div>
        <div>
          <img src={twitterIcon} alt='Twitter' />
          Inicia sesión con twitter
        </div>
      </div>
      <p className='login__container--register'>
        No tienes ninguna cuenta 
        <Link to='/register'>
          Registrate
        </Link>
      </p>
    </section>
  </section>
);

export default Login;
