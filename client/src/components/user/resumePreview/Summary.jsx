import React from 'react';
import { FormattedMessage } from 'react-intl';

const Summary = ({ user }) => {
  if (!user) user = require('../../../utils/defaultUser.json');

  return (
    <div className="resumePreview__summary">
      <div className="heading-resume">
        <h3 className="resumePreview__heading">
          <FormattedMessage id="Header.summary" defaultMessage="About me" />
        </h3>
      </div>
      <div className="resumePreview__summary__text">{user.summary}</div>
    </div>
  );
};

export default Summary;
