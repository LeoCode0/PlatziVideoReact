import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';

const Register = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Regístrate</h2>
      <form action='post' className='login__container--form'>
        <input className='login__input' type='text' placeholder='Nombre' id='' />
        <input className='login__input' type='text' placeholder='Correo' />
        <input className='login__input' type='password' placeholder='Contraseña' />
        <button className='button'>Registrame</button>
      </form>
      <p className='login__container--sesion'><Link to='/login'>Iniciar sesión</Link></p>
    </section>
  </section>
);

export default Register;
