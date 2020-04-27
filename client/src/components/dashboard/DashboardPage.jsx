import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';
import UKFlag from '../../img/uk.png';
import PLFlag from '../../img/pl.png';
import { RegisterIcon, LoginIcon } from '../layout/Icons';
import { Context } from '../../Wrapper';

const DashboardPage = () => {
  const context = useContext(Context);

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
      <Link to="/register" className="dashboard__box dashboard__box--register">
        <RegisterIcon />
        Zarejestruj się żeby stworzyć CV
      </Link>
      <Link to="/login" className="dashboard__box dashboard__box--login">
        <LoginIcon />
        Zaloguj się
      </Link>

      <div className="dashboard__footer">
        Wyrażam sobie zgodę na stworzenie CV, które zapewni mi dobrą pracę.
      </div>
    </section>
  );
};

export default DashboardPage;
