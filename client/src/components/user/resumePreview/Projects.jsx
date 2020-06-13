import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { WebsiteIcon2, CalendarIcon } from '../../layout/Icons';

const Projects = ({ user, option }) => {
  if (!user) user = require('../../../utils/defaultUser.json');

  return (
    <div className="resumePreview__projects">
      <div className="heading-resume">
        <h3 className="resumePreview__heading">
          {option === 'proj' ? (
            <FormattedMessage id="Header.projects" defaultMessage="Projects" />
          ) : (
            <FormattedMessage
              id="Header.experience"
              defaultMessage="Experience"
            />
          )}
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
              {option === 'proj' && project.url ? (
                <WebsiteIcon2 className="resumePreview__projects__content__item__link__icon" />
              ) : (
                project.url && (
                  <CalendarIcon className="resumePreview__projects__content__item__link__icon" />
                )
              )}
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

Projects.propTypes = {
  option: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  option: state.auth.option,
});

export default connect(mapStateToProps, {})(Projects);
