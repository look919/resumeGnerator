import React from 'react';
import { StarIcon } from '../../layout/Icons';

const Certificates = () => {
  return (
    <div className="resumePreview__certificates">
      <div className="heading-resume">
        <h3 className="resumePreview__heading">Certifications</h3>
      </div>
      <div className="resumePreview__certificates__content">
        <div className="resumePreview__certificates__content__item">
          <StarIcon className="resumePreview__certificates__content__item__icon color--lightBlue" />
          <span className="resumePreview__certificates__content__item__text">
            TOEiC Listening & Reading Certification
          </span>
        </div>
        <div className="resumePreview__certificates__content__item">
          <StarIcon className="resumePreview__certificates__content__item__icon color--lightBlue" />

          <span className="resumePreview__certificates__content__item__text">
            Microsoft Technology Associate Certification
          </span>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
