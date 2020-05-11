import React, { useContext } from 'react';
import { Context } from '../../Wrapper';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Logo from '../../img/logo.png';
import UKFlag from '../../img/uk.png';
import PLFlag from '../../img/pl.png';

const UserPageHeader = ({ logout }) => {
  const context = useContext(Context);
  const handleLogout = () => {
    logout();
  };

  return (
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
          <FormattedMessage id="Logout" defaultMessage="Log out" />
        </button>
      </div>
    </header>
  );
};
export default connect(null, { logout })(UserPageHeader);
