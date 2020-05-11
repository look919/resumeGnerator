import React from 'react';
import { FormattedMessage } from 'react-intl';
import { WebsiteIcon2 } from '../../layout/Icons';

const Projects = ({ user }) => {
  if (!user) user = require('../../../utils/defaultUser.json');

  return (
    <div className="resumePreview__projects">
      <div className="heading-resume">
        <h3 className="resumePreview__heading">
          <FormattedMessage id="Header.projects" defaultMessage="Projects" />
        </h3>
      </div>
      <div className="resumePreview__projects__content">
        {user.projects.map((project) => (
          <div
            className="resumePreview__projects__content__item"
            key={project.name}
          >
            <span className="resumePreview__projects__content__item__header">
              {project.name}
            </span>
            <div className="resumePreview__projects__content__item__link">
              <WebsiteIcon2 className="resumePreview__projects__content__item__link__icon" />
              <a
                href={project.url}
                className="resumePreview__projects__content__item__link__a"
              >
                {project.url}
              </a>
            </div>
            <span className="resumePreview__projects__content__item__description">
              {project.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
