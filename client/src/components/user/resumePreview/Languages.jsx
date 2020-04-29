import React from 'react';

const Languages = () => {
  return (
    <div className="resumePreview__languages">
      <div className="heading-resume">
        <h3 className="resumePreview__heading">Foreign Languages</h3>
      </div>
      <div className="resumePreview__languages__content">
        <div className="resumePreview__languages__content__item">
          <div className="resumePreview__languages__content__item__text">
            <span className="resumePreview__languages__content__item__text__name">
              English
            </span>
            <span className="resumePreview__languages__content__item__text__level">
              B2
            </span>
          </div>
          <div className="resumePreview__languages__content__item__bar resumePreview__languages__content__item__bar--3">
            &nbsp;
          </div>
        </div>
        <div className="resumePreview__languages__content__item">
          <div className="resumePreview__languages__content__item__text">
            <span className="resumePreview__languages__content__item__text__name">
              Italian
            </span>
            <span className="resumePreview__languages__content__item__text__level">
              A2
            </span>
          </div>
          <div className="resumePreview__languages__content__item__bar resumePreview__languages__content__item__bar--1">
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
