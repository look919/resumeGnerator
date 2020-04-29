import React from 'react';

import { PhoneIcon, EmailIcon, WebsiteIcon, PinIcon } from '../../layout/Icons';

const ResumePreviewAboutMe = (props) => {
  return (
    <div className="resumePreview__about">
      <h1 className="resumePreview__about__name">Tomasz Wirkus</h1>
      <h2 className="resumePreview__about__profession color--blue">
        MERN Stack Developer
      </h2>
      <span className="resumePreview__about__data">
        <PhoneIcon className="resumePreview__about__data__icon color--blue" />{' '}
        +48 789 182 156
      </span>
      <span className="resumePreview__about__data">
        <EmailIcon className="resumePreview__about__data__icon color--blue" />{' '}
        wirkus919@gmail.com
      </span>
      <span className="resumePreview__about__data">
        <WebsiteIcon className="resumePreview__about__data__icon color--blue" />{' '}
        <a
          href="https://tomasz-wirkus.herokuapp.com/"
          className="resumePreview__about__data--smaller"
        >
          tomasz-wirkus.herokuapp.com
        </a>
      </span>
      <span className="resumePreview__about__data">
        <PinIcon className="resumePreview__about__data__icon color--blue" />{' '}
        Polska, Koszalin
      </span>
    </div>
  );
};
export default ResumePreviewAboutMe;
