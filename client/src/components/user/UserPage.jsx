import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import { Context } from '../../Wrapper';

import UserForms from './UserForms';
import UserPreview from './UserPreview';

import Logo from '../../img/logo.png';
import UKFlag from '../../img/uk.png';
import PLFlag from '../../img/pl.png';

const UserPage = ({ auth, logout }) => {
  const context = useContext(Context);

  if (!auth) {
    return <Redirect to="/" />;
  }
  const handleLogout = () => {
    logout();
  };

  return (
    <main className="userPage">
      <header className="header">
        <img src={Logo} alt="logo" className="header__logo" />
        <div className="header__languages">
          <button
            className="header__btn header__btn--en"
            onClick={context.selectEn}
          >
            <img
              src={UKFlag}
              alt="uk flag"
              value={'en'}
              className="header__btn__img"
            />
          </button>

          <button
            className="header__btn header__btn--pl"
            onClick={context.selectPl}
          >
            <img
              src={PLFlag}
              alt="pl flag"
              value={'pl'}
              className="header__btn__img"
            />
          </button>
          <button onClick={handleLogout} className="header__logout">
            Log out
          </button>
        </div>
      </header>
      <section className="userPage__content">
        <h2 className="heading-2 userPage__content__header">Formularze</h2>
        <h2 className="heading-2 userPage__content__header">Podgląd</h2>
        <UserForms />
        <UserPreview />
      </section>
    </main>
  );
};

UserPage.propTypes = {
  auth: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(UserPage);
