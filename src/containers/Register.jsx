import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';

import { registerRequest} from '../actions/index';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Regístrate</h2>
        <form action='post' className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            className='login__input'
            type='text'
            placeholder='Nombre'
            onChange={handleInput}
            id=''
          />
          <input
            name='email'
            className='login__input'
            type='text'
            onChange={handleInput}
            placeholder='Correo'
          />
          <input
            name='password'
            className='login__input'
            type='password'
            onChange={handleInput}
            placeholder='Contraseña'
          />
          <button className='button'>Registrame</button>
        </form>
        <p className='login__container--sesion'><Link to='/login'>Iniciar sesión</Link></p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
