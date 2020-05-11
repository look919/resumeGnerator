import React from 'react';
import { FormattedMessage } from 'react-intl';
import { CalendarIcon } from '../../layout/Icons';

const Education = ({ user }) => {
  if (!user) user = require('../../../utils/defaultUser.json');

  return (
    <div className="resumePreview__education">
      <div className="heading-resume">
        <h3 className="resumePreview__heading">
          <FormattedMessage id="Header.education" defaultMessage="Education" />
        </h3>
      </div>
      {user.education.map((school) => (
        <div
          className="resumePreview__education__item"
          key={school.speciality + school.school}
        >
          <span className="resumePreview__education__item__proffesion">
            {school.speciality}
          </span>
          <span className="resumePreview__education__item__school color--blue">
            {school.school}
          </span>
          <span className="resumePreview__education__item__time">
            <CalendarIcon className="resumePreview__education__item__time__icon" />
            <span className="resumePreview__education__item__time__text">
              {school.startDate} - {school.endDate}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Education;
