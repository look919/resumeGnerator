import React from 'react';
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
} from '../../layout/BrandIcons';
const Skills = () => {
  return (
    <div className="resumePreview__skills">
      <div className="heading-resume">
        <h3 className="resumePreview__heading">Skills</h3>
      </div>
      <div className="resumePreview__skills__content">
        <div className="resumePreview__skills__content__item">
          <GitIcon />{' '}
          <span className="resumePreview__skills__content__item__text">
            Git
          </span>
        </div>
        <div className="resumePreview__skills__content__item">
          <HTMLIcon />{' '}
          <span className="resumePreview__skills__content__item__text">
            HTML
          </span>
        </div>
        <div className="resumePreview__skills__content__item">
          <CSSIcon />{' '}
          <span className="resumePreview__skills__content__item__text">
            CSS
          </span>
        </div>
        <div className="resumePreview__skills__content__item">
          <SassIcon />{' '}
          <span className="resumePreview__skills__content__item__text">
            Sass
          </span>
        </div>
        <div className="resumePreview__skills__content__item">
          <JavaScriptIcon />{' '}
          <span className="resumePreview__skills__content__item__text">
            JS ES6+
          </span>
        </div>
        <div className="resumePreview__skills__content__item">
          <NodeJsIcon />{' '}
          <span className="resumePreview__skills__content__item__text">
            Node.js
          </span>
        </div>
        <div className="resumePreview__skills__content__item">
          <ReactIcon />{' '}
          <span className="resumePreview__skills__content__item__text">
            React
          </span>
        </div>
        <div className="resumePreview__skills__content__item">
          <ReduxIcon />{' '}
          <span className="resumePreview__skills__content__item__text">
            Redux
          </span>
        </div>

        <div className="resumePreview__skills__content__item">
          <MongoDBIcon />{' '}
          <span className="resumePreview__skills__content__item__text">
            MongoDB
          </span>
        </div>

        <div className="resumePreview__skills__content__item">
          <HerokuIcon />{' '}
          <span className="resumePreview__skills__content__item__text">
            Heroku
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
