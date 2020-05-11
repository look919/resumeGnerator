import React from 'react';
import { FormattedMessage } from 'react-intl';
import { StarIcon } from '../../layout/Icons';

const Certificates = ({ user }) => {
  if (!user) user = require('../../../utils/defaultUser.json');

  return (
    <div className="resumePreview__certificates">
      <div className="heading-resume">
        <h3 className="resumePreview__heading">
          <FormattedMessage
            id="Header.certificates"
            defaultMessage="Certifications"
          />
        </h3>
      </div>
      <div className="resumePreview__certificates__content">
        {user.certification.map((certif) => (
          <div
            className="resumePreview__certificates__content__item"
            key={certif}
          >
            <StarIcon className="resumePreview__certificates__content__item__icon color--lightBlue" />
            <span className="resumePreview__certificates__content__item__text">
              {certif}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
