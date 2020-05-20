import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Nav = () => {
  return (
    <ul className="resumeCreator__list">
      <NavLink
        to="/user/main"
        className="resumeCreator__list__item"
        activeClassName="isActive"
      >
        <FormattedMessage id="Header.summary" defaultMessage="About me" />
      </NavLink>
      <NavLink
        to="/user/education"
        className="resumeCreator__list__item"
        activeClassName="isActive"
      >
        <FormattedMessage id="Header.education" defaultMessage="Education" />
      </NavLink>
      <NavLink
        to="/user/skills"
        className="resumeCreator__list__item"
        activeClassName="isActive"
      >
        <FormattedMessage id="Header.skills" defaultMessage="Skills" />
      </NavLink>
      <NavLink
        to="/user/projects"
        className="resumeCreator__list__item"
        activeClassName="isActive"
      >
        <FormattedMessage id="Header.projects" defaultMessage="Projects" />
      </NavLink>
      <NavLink
        to="/user/final"
        className="resumeCreator__list__item"
        activeClassName="isActive"
      >
        <FormattedMessage id="Header.download" defaultMessage="Download" />
      </NavLink>
    </ul>
  );
};

export default Nav;
