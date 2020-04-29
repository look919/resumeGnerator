import React from 'react';
import { CalendarIcon } from '../../layout/Icons';
const Education = () => {
  return (
    <div className="resumePreview__education">
      <div className="heading-resume">
        <h3 className="resumePreview__heading">Education</h3>
      </div>
      <div className="resumePreview__education__item">
        <span className="resumePreview__education__item__proffesion">
          Student of computer sience
        </span>
        <span className="resumePreview__education__item__school color--blue">
          Politechnika Koszalińska
        </span>
        <span className="resumePreview__education__item__time">
          <CalendarIcon className="resumePreview__education__item__time__icon" />
          <span className="resumePreview__education__item__time__text">
            10/2018 - 02/2022
          </span>
        </span>
      </div>
      <div className="resumePreview__education__item">
        <span className="resumePreview__education__item__proffesion">
          Economist Technician
        </span>
        <span className="resumePreview__education__item__school color--blue">
          Technikum nr 2 Bytów
        </span>
        <span className="resumePreview__education__item__time">
          <CalendarIcon className="resumePreview__education__item__time__icon" />
          <span className="resumePreview__education__item__time__text">
            09/2014 - 06/2018
          </span>
        </span>
      </div>
    </div>
  );
};

export default Education;
