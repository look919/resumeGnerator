import React from 'react';
import {
  PhoneIcon,
  EmailIcon,
  WebsiteIcon,
  PinIcon,
  CalendarIcon,
  StarIcon,
} from '../layout/Icons';
import {
  GitIcon,
  HTMLIcon,
  CSSIcon,
  SassIcon,
  JavaScriptIcon,
  NodeJsIcon,
  ReactIcon,
  ReduxIcon,
  MongoDBIcon,
  HerokuIcon,
} from '../layout/BrandIcons';
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
        <div className="userPreview__skills__content">
          <div className="userPreview__skills__content__item">
            <GitIcon />{' '}
            <span className="userPreview__skills__content__item__text">
              Git
            </span>
          </div>
          <div className="userPreview__skills__content__item">
            <HTMLIcon />{' '}
            <span className="userPreview__skills__content__item__text">
              HTML
            </span>
          </div>
          <div className="userPreview__skills__content__item">
            <CSSIcon />{' '}
            <span className="userPreview__skills__content__item__text">
              CSS
            </span>
          </div>
          <div className="userPreview__skills__content__item">
            <SassIcon />{' '}
            <span className="userPreview__skills__content__item__text">
              Sass
            </span>
          </div>
          <div className="userPreview__skills__content__item">
            <JavaScriptIcon />{' '}
            <span className="userPreview__skills__content__item__text">
              JS ES6+
            </span>
          </div>
          <div className="userPreview__skills__content__item">
            <NodeJsIcon />{' '}
            <span className="userPreview__skills__content__item__text">
              Node.js
            </span>
          </div>
          <div className="userPreview__skills__content__item">
            <ReactIcon />{' '}
            <span className="userPreview__skills__content__item__text">
              React
            </span>
          </div>
          <div className="userPreview__skills__content__item">
            <ReduxIcon />{' '}
            <span className="userPreview__skills__content__item__text">
              Redux
            </span>
          </div>

          <div className="userPreview__skills__content__item">
            <MongoDBIcon />{' '}
            <span className="userPreview__skills__content__item__text">
              MongoDB
            </span>
          </div>

          <div className="userPreview__skills__content__item">
            <HerokuIcon />{' '}
            <span className="userPreview__skills__content__item__text">
              Heroku
            </span>
          </div>
        </div>
      </div>
      <div className="userPreview__certificates">
        <div className="heading-resume">
          <h3 className="userPreview__heading">Certifications</h3>
        </div>
        <div className="userPreview__certificates__content">
          <div className="userPreview__certificates__content__item">
            <StarIcon className="userPreview__certificates__content__item__icon color--blue" />
            <span className="userPreview__certificates__content__item__text">
              TOEiC Listening & Reading Certification
            </span>
          </div>
          <div className="userPreview__certificates__content__item">
            <StarIcon className="userPreview__certificates__content__item__icon color--blue" />

            <span className="userPreview__certificates__content__item__text">
              Microsoft Technology Associate Certification
            </span>
          </div>
        </div>
      </div>
      <div className="userPreview__clause">
        I hereby consent to my personal data being processed by (company name)
        for the purpose of considering my application for the vacancy advertised
        under reference number (123XX6 etc.)
      </div>
    </section>
  );
};

export default UserPreview;
