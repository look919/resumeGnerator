import React from 'react';

import { PhoneIcon, EmailIcon, WebsiteIcon, PinIcon } from '../../layout/Icons';

const ResumePreviewAboutMe = ({ user }) => {
  if (!user) user = require('../../../utils/defaultUser.json');

  return (
    <div className="resumePreview__about">
      <h1 className="resumePreview__about__name">{user.name}</h1>
      <h2 className="resumePreview__about__profession color--lightBlue">
        {user.profession}
      </h2>
      <span className="resumePreview__about__data">
        <PhoneIcon className="resumePreview__about__data__icon color--lightBlue" />{' '}
        {user.phone}
      </span>
      <span className="resumePreview__about__data">
        <EmailIcon className="resumePreview__about__data__icon color--lightBlue" />{' '}
        {user.emailField}
      </span>
      <span className="resumePreview__about__data">
        <WebsiteIcon className="resumePreview__about__data__icon color--lightBlue" />{' '}
        <a href={user.website} className="resumePreview__about__data--smaller">
          {user.website}
        </a>
      </span>
      <span className="resumePreview__about__data">
        <PinIcon className="resumePreview__about__data__icon color--lightBlue" />{' '}
        {user.address}
      </span>
    </div>
  );
};

export default ResumePreviewAboutMe;
