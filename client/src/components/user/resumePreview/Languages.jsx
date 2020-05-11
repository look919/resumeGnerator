import React from 'react';
import { FormattedMessage } from 'react-intl';

const Languages = ({ user }) => {
  if (!user) user = require('../../../utils/defaultUser.json');

  return (
    <div className="resumePreview__languages">
      <div className="heading-resume">
        <h3 className="resumePreview__heading">
          <FormattedMessage id="Header.languages" defaultMessage="Languages" />
        </h3>
      </div>
      <div className="resumePreview__languages__content">
        {user.languages.map((lang) => (
          <div
            className="resumePreview__languages__content__item"
            key={lang.lang}
          >
            <div className="resumePreview__languages__content__item__text">
              <span className="resumePreview__languages__content__item__text__name">
                {lang.lang}
              </span>
              <span className="resumePreview__languages__content__item__text__level">
                {lang.level === 1
                  ? 'A2'
                  : lang.level === 2
                  ? 'B1'
                  : lang.level === 3
                  ? 'B2'
                  : lang.level === 4
                  ? 'C1'
                  : 'C2'}
              </span>
            </div>
            <div
              className={`resumePreview__languages__content__item__bar resumePreview__languages__content__item__bar--${lang.level} color--lightBlue`}
            >
              &nbsp;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
