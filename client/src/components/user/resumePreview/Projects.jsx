import React from 'react';
import { WebsiteIcon2 } from '../../layout/Icons';

const Projects = () => {
  return (
    <div className="resumePreview__projects">
      <div className="heading-resume">
        <h3 className="resumePreview__heading">Projects</h3>
      </div>
      <div className="resumePreview__projects__content">
        <div className="resumePreview__projects__content__item">
          <span className="resumePreview__projects__content__item__header">
            TomOffice
          </span>
          <div className="resumePreview__projects__content__item__link">
            <WebsiteIcon2 className="resumePreview__projects__content__item__link__icon" />
            <a
              href="https://tomoffice.herokuapp.com/"
              className="resumePreview__projects__content__item__link__a"
            >
              https://tomoffice.herokuapp.com/
            </a>
          </div>
          <span className="resumePreview__projects__content__item__description">
            Aplikacja dla hotelu napisana w MERN stacku, zawiera przegląd usług
            sprzedawanych przez firmę, kontakt online, sekcję rezerwacji oraz
            panel dla obecnych gości.
          </span>
        </div>
        <div className="resumePreview__projects__content__item">
          <span className="resumePreview__projects__content__item__header">
            HotelGiant
          </span>
          <div className="resumePreview__projects__content__item__link">
            <WebsiteIcon2 className="resumePreview__projects__content__item__link__icon" />
            <a
              href="https://tomoffice.herokuapp.com/"
              className="resumePreview__projects__content__item__link__a"
            >
              https://hotelgiant.herokuapp.com/
            </a>
          </div>
          <span className="resumePreview__projects__content__item__description">
            Aplikacja dla hotelu napisana w MERN stacku, zawiera przegląd usług
            sprzedawanych przez firmę, kontakt online, sekcję rezerwacji oraz.
          </span>
        </div>
        <div className="resumePreview__projects__content__item">
          <span className="resumePreview__projects__content__item__header">
            ResumeGenerator
          </span>
          <div className="resumePreview__projects__content__item__link">
            <WebsiteIcon2 className="resumePreview__projects__content__item__link__icon" />
            <a
              href="https://tomoffice.herokuapp.com/"
              className="resumePreview__projects__content__item__link__a"
            >
              https://hotelgiant.herokuapp.com/
            </a>
          </div>
          <span className="resumePreview__projects__content__item__description">
            Aplikacja dla hotelu napisana w MERN stacku, zawiera przegląd usług
            sprzedawanych.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
