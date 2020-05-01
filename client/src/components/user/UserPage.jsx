import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserPageHeader from './UserPageHeader';
import ResumeCreator from './resumeCreator/ResumeCreator';
import ResumePreview from './resumePreview/ResumePreview';

const UserPage = ({ auth }) => {
  if (!auth) {
    return <Redirect to="/" />;
  }

  return (
    <main className="userPage">
      <UserPageHeader />
      <section className="userPage__content">
        <h2 className="heading-2 userPage__content__header">Kreator</h2>
        <h2 className="heading-2 userPage__content__header">Podgląd</h2>
        <ResumeCreator />
        <ResumePreview />
      </section>
      )
    </main>
  );
};

UserPage.propTypes = {
  auth: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(UserPage);
