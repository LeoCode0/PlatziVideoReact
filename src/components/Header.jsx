import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import profile from '../assets/static/user.png';
import logo from '../assets/static/platzi-video.png';
import { logoutRequest } from '../actions/index';

import gravatar from '../utils/gravatar';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <Link className='header' to='/'>
        <img className='header__img' src={logo} alt='logo de platzi video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={profile} alt='user' />}
          <p>Perfil</p>
        </div>
        <ul>
          { hasUser ?
            <li><Link to='/'>{user.name}</Link></li> :
            null }
          { hasUser ?
            <li><a href='#logout' onClick={handleLogout}>Cerrar sesion</a></li> :
            <li><Link to='/login'>Iniciar sesion</Link></li>}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
