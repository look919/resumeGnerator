import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="resumeCreator__list">
      <NavLink
        to="/user/main"
        className="resumeCreator__list__item"
        activeClassName="isActive"
      >
        Ogólne informacje
      </NavLink>
      <NavLink
        to="/user/education"
        className="resumeCreator__list__item"
        activeClassName="isActive"
      >
        Edukacja
      </NavLink>
      <NavLink
        to="/user/skills"
        className="resumeCreator__list__item"
        activeClassName="isActive"
      >
        Umiejętności
      </NavLink>
      <NavLink
        to="/user/projects"
        className="resumeCreator__list__item"
        activeClassName="isActive"
      >
        Projekty
      </NavLink>
      <NavLink
        to="/user/final"
        className="resumeCreator__list__item"
        activeClassName="isActive"
      >
        Pobierz
      </NavLink>
    </ul>
  );
};

export default Nav;
