import React, { useContext, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login, register } from '../../actions/auth';
import { Context } from '../../Wrapper';

import Logo from '../../img/logo.png';
import UKFlag from '../../img/uk.png';
import PLFlag from '../../img/pl.png';
import { RegisterIcon, LoginIcon } from '../layout/Icons';

const DashboardPage = ({ auth, login, register }) => {
  const context = useContext(Context);
  const [page, setPage] = useState('dashboard');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const onRedirect = (e) => {
    e.preventDefault();
    setPage('register');
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onLogin = async (e) => {
    e.preventDefault();
    login(formData);
    setFormData({
      email: '',
      password: '',
      passwordConfirm: '',
    });
  };
  const onRegister = async (e) => {
    e.preventDefault();
    register(formData);
    setFormData({
      email: '',
      password: '',
      passwordConfirm: '',
    });
  };

  if (auth) {
    return <Redirect to={'/user/main'} />;
  }

  const DashboardPage = () => (
    <div className="dashboard__boxes">
      <button
        onClick={() => setPage('register')}
        className="dashboard__box dashboard__box--register"
      >
        <RegisterIcon />
        <FormattedMessage id="Dashboard.register" defaultMessage="Register" />
      </button>
      <button
        onClick={() => setPage('login')}
        className="dashboard__box dashboard__box--login"
      >
        <LoginIcon />
        <span className="dashboard__box__span">
          <FormattedMessage id="Dashboard.login" defaultMessage="Log in" />
        </span>
      </button>
    </div>
  );

  return (
    <section className="container container--dashboard">
      <img src={Logo} className="dashboard__logo" alt="logo" />

      <button
        className="dashboard__btn dashboard__btn--en"
        onClick={context.selectEn}
        value={'pl'}
      >
        <img
          src={UKFlag}
          alt="uk flag"
          value={'en'}
          className="dashboard__btn__img"
        />
      </button>

      <button
        className="dashboard__btn dashboard__btn--pl"
        onClick={context.selectPl}
      >
        <img
          src={PLFlag}
          alt="pl flag"
          value={'pl'}
          className="dashboard__btn__img"
        />
      </button>

      <span className="dashboard__info">
        <FormattedMessage
          id="Dashboard.info"
          defaultMessage="Register to create resume"
        />
      </span>

      {page === 'dashboard' ? (
        <DashboardPage />
      ) : page === 'login' ? (
        <form className="login">
          <h4 className="heading-4 login__heading">
            <FormattedMessage id="Dashboard.login" defaultMessage="Log in" />
          </h4>
          <input
            className="login__input"
            name="email"
            value={formData.email}
            placeholder="email"
            onChange={(e) => {
              onChange(e);
            }}
          />
          <FormattedMessage id="Dashboard.passwd" defaultMessage="password">
            {(msg) => (
              <input
                type="password"
                className="login__input"
                name="password"
                value={formData.password}
                placeholder={msg}
                onChange={(e) => onChange(e)}
              />
            )}
          </FormattedMessage>
          <button onClick={(e) => onLogin(e)} className="login__btn">
            <FormattedMessage id="Dashboard.login" defaultMessage="Log in" />
          </button>
          <button onClick={(e) => onRedirect(e)} className="login__redirect">
            <FormattedMessage
              id="Dashboard.register"
              defaultMessage="Register"
            />{' '}
            &rarr;
          </button>
        </form>
      ) : page === 'register' ? (
        <form className="register">
          <h4 className="heading-4 register__heading">
            <FormattedMessage
              id="Dashboard.register"
              defaultMessage="Register"
            />
          </h4>
          <input
            className="register__input"
            name="email"
            value={formData.email}
            placeholder="email"
            onChange={(e) => onChange(e)}
          />
          <FormattedMessage id="Dashboard.passwd" defaultMessage="password">
            {(msg) => (
              <input
                type="password"
                className="login__input"
                name="password"
                value={formData.password}
                placeholder={msg}
                onChange={(e) => onChange(e)}
              />
            )}
          </FormattedMessage>
          <FormattedMessage
            id="Dashboard.passwdConf"
            defaultMessage="password confirm"
          >
            {(msg) => (
              <input
                type="password"
                className="login__input"
                name="passwordConfirm"
                value={formData.passwordConfirm}
                placeholder={msg}
                onChange={(e) => onChange(e)}
              />
            )}
          </FormattedMessage>
          <button
            onClick={(e) => onRegister(e)}
            className="login__btn"
            tabIndex="1"
          >
            <FormattedMessage
              id="Dashboard.register"
              defaultMessage="Register"
            />
          </button>
          <button
            onClick={() => setPage('login')}
            className="login__redirect register__btn__redirect"
            tabIndex="0"
          >
            <FormattedMessage id="Dashboard.login" defaultMessage="Log in" />{' '}
            &rarr;
          </button>
        </form>
      ) : (
        <DashboardPage />
      )}

      <div className="dashboard__footer">
        <FormattedMessage
          id="Dashboard.footer"
          defaultMessage="I hereby consent myself to create Resume which wiill provide me good job."
        />
      </div>
    </section>
  );
};

DashboardPage.propTypes = {
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  auth: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, register })(DashboardPage);
