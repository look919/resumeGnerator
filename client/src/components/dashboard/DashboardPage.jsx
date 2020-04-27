import React, { useContext, useState, Fragment } from 'react';
import Logo from '../../img/logo.png';
import UKFlag from '../../img/uk.png';
import PLFlag from '../../img/pl.png';
import { RegisterIcon, LoginIcon } from '../layout/Icons';
import { Context } from '../../Wrapper';

const DashboardPage = () => {
  const context = useContext(Context);
  const [page, setPage] = useState('dashboard');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const DashboardPage = () => (
    <div className="dashboard__boxes">
      <button
        onClick={() => setPage('register')}
        className="dashboard__box dashboard__box--register"
      >
        <RegisterIcon />
        Zarejestruj się
      </button>
      <button
        onClick={() => setPage('login')}
        className="dashboard__box dashboard__box--login"
      >
        <LoginIcon />
        <span className="dashboard__box__span">Zaloguj się</span>
      </button>
    </div>
  );

  return (
    <section className="container container--dashboard">
      <img src={Logo} className="dashboard__logo" alt="logo" />

      <button
        className="dashboard__btn dashboard__btn--en"
        onClick={context.selectEn}
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
      <span className="dashboard__info">Zarejestruj się żeby stworzyć CV</span>

      {page === 'dashboard' ? (
        <DashboardPage />
      ) : page === 'login' ? (
        <div className="login">
          <h4 className="heading-4 login__heading">Zaloguj się</h4>
          <input
            className="login__input"
            name="email"
            value={formData.email}
            placeholder="email"
            onChange={(e) => {
              onChange(e);
            }}
          />
          <input
            type="password"
            className="login__input"
            name="password"
            value={formData.password}
            placeholder="password"
            onChange={(e) => onChange(e)}
          />
          <button
            onClick={() => setPage('register')}
            className="login__redirect"
          >
            Register &rarr;
          </button>
          <button className="login__btn">Login</button>
        </div>
      ) : (
        <div className="register">
          <h4 className="heading-4 register__heading">Zarejestruj się</h4>

          <input
            className="register__input"
            name="email"
            value={formData.email}
            placeholder="email"
            onChange={(e) => onChange(e)}
          />
          <input
            type="password"
            className="login__input"
            name="password"
            value={formData.password}
            placeholder="password"
            onChange={(e) => onChange(e)}
          />
          <input
            type="password"
            className="login__input"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            placeholder="password confirm"
            onChange={(e) => onChange(e)}
          />
          <button onClick={() => setPage('login')} className="login__redirect">
            Login &rarr;
          </button>
          <button className="login__btn">Register</button>
        </div>
      )}

      <div className="dashboard__footer">
        Wyrażam samemu sobie zgodę na stworzenie CV, które zapewni mi dobrą
        pracę.
      </div>
    </section>
  );
};

export default DashboardPage;
