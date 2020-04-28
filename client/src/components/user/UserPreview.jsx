import React from 'react';
import {
  PhoneIcon,
  EmailIcon,
  WebsiteIcon,
  PinIcon,
  CalendarIcon,
} from '../layout/Icons';
import DefaultImg from '../../img/default.jpg';
const UserPreview = () => {
  return (
    <section className="userPreview">
      <div className="userPreview__about">
        <h1 className="userPreview__about__name">Tomasz Wirkus</h1>
        <h2 className="userPreview__about__profession color--blue">
          MERN Stack Developer
        </h2>
        <span className="userPreview__about__data">
          <PhoneIcon className="userPreview__about__data__icon color--blue" />{' '}
          +48 789 182 156
        </span>
        <span className="userPreview__about__data">
          <EmailIcon className="userPreview__about__data__icon color--blue" />{' '}
          wirkus919@gmail.com
        </span>
        <span className="userPreview__about__data">
          <WebsiteIcon className="userPreview__about__data__icon color--blue" />{' '}
          <a
            href="https://tomasz-wirkus.herokuapp.com/"
            className="userPreview__about__data--smaller"
          >
            tomasz-wirkus.herokuapp.com
          </a>
        </span>
        <span className="userPreview__about__data">
          <PinIcon className="userPreview__about__data__icon color--blue" />{' '}
          Polska, Koszalin
        </span>
      </div>
      <div className="userPreview__photo">
        <img src={DefaultImg} className="userPreview__photo__img" />
      </div>
      <div className="userPreview__summary">
        <div className="heading-resume">
          <h3 className="userPreview__heading">Summary</h3>
        </div>
        <div className="userPreview__summary__text">
          Young and full of passion fullstack developer with over one year of
          non commercial experience, warking hard everyday to improve his
          skills, looks for his first job in proffesion.
        </div>
      </div>
      <div className="userPreview__education">
        <div className="heading-resume">
          <h3 className="userPreview__heading">Education</h3>
        </div>
        <div className="userPreview__education__item">
          <span className="userPreview__education__item__proffesion">
            Student of computer sience
          </span>
          <span className="userPreview__education__item__school color--blue">
            Politechnika Koszalińska
          </span>
          <span className="userPreview__education__item__time">
            <CalendarIcon className="userPreview__education__item__time__icon" />
            <span className="userPreview__education__item__time__text">
              10/2018 - 02/2022
            </span>
          </span>
        </div>
        <div className="userPreview__education__item">
          <span className="userPreview__education__item__proffesion">
            Economist Technician
          </span>
          <span className="userPreview__education__item__school color--blue">
            Technikum nr 2 Bytów
          </span>
          <span className="userPreview__education__item__time">
            <CalendarIcon className="userPreview__education__item__time__icon" />
            <span className="userPreview__education__item__time__text">
              09/2014 - 06/2018
            </span>
          </span>
        </div>
      </div>
      <div className="userPreview__languages">
        <div className="heading-resume">
          <h3 className="userPreview__heading">Foreign Languages</h3>
        </div>
        <div className="userPreview__languages__content">
          <div className="userPreview__languages__content__item">
            <div className="userPreview__languages__content__item__text">
              <span className="userPreview__languages__content__item__text__name">
                English
              </span>
              <span className="userPreview__languages__content__item__text__level">
                B2
              </span>
            </div>
            <div className="userPreview__languages__content__item__bar userPreview__languages__content__item__bar--3">
              &nbsp;
            </div>
          </div>
          <div className="userPreview__languages__content__item">
            <div className="userPreview__languages__content__item__text">
              <span className="userPreview__languages__content__item__text__name">
                Italian
              </span>
              <span className="userPreview__languages__content__item__text__level">
                A2
              </span>
            </div>
            <div className="userPreview__languages__content__item__bar userPreview__languages__content__item__bar--1">
              &nbsp;
            </div>
          </div>
        </div>
      </div>
      <div className="userPreview__projects">
        <div className="heading-resume">
          <h3 className="userPreview__heading">Projects</h3>
        </div>
        <div className="userPreview__projects__content">
          <div className="userPreview__projects__content__item">
            <span className="userPreview__projects__content__item__header">
              TomOffice
            </span>
            <div className="userPreview__projects__content__item__link">
              <WebsiteIcon className="userPreview__projects__content__item__link__icon" />
              <a
                href="https://tomoffice.herokuapp.com/"
                className="userPreview__projects__content__item__link__a"
              >
                https://tomoffice.herokuapp.com/
              </a>
            </div>
            <span className="userPreview__projects__content__item__description">
              Aplikacja dla hotelu napisana w MERN stacku, zawiera przegląd
              usług sprzedawanych przez firmę, kontakt online, sekcję rezerwacji
              oraz panel dla obecnych gości.
            </span>
          </div>
          <div className="userPreview__projects__content__item">
            <span className="userPreview__projects__content__item__header">
              HotelGiant
            </span>
            <div className="userPreview__projects__content__item__link">
              <WebsiteIcon className="userPreview__projects__content__item__link__icon" />
              <a
                href="https://tomoffice.herokuapp.com/"
                className="userPreview__projects__content__item__link__a"
              >
                https://hotelgiant.herokuapp.com/
              </a>
            </div>
            <span className="userPreview__projects__content__item__description">
              Aplikacja dla hotelu napisana w MERN stacku, zawiera przegląd
              usług sprzedawanych przez firmę, kontakt online, sekcję rezerwacji
              oraz.
            </span>
          </div>
          <div className="userPreview__projects__content__item">
            <span className="userPreview__projects__content__item__header">
              ResumeGenerator
            </span>
            <div className="userPreview__projects__content__item__link">
              <WebsiteIcon className="userPreview__projects__content__item__link__icon" />
              <a
                href="https://tomoffice.herokuapp.com/"
                className="userPreview__projects__content__item__link__a"
              >
                https://hotelgiant.herokuapp.com/
              </a>
            </div>
            <span className="userPreview__projects__content__item__description">
              Aplikacja dla hotelu napisana w MERN stacku, zawiera przegląd
              usług sprzedawanych.
            </span>
          </div>
        </div>
      </div>
      <div className="userPreview__skills">
        <div className="heading-resume">
          <h3 className="userPreview__heading">Skills</h3>
        </div>
      </div>
    </section>
  );
};

export default UserPreview;
