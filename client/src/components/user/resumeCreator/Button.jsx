import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ link, direction, text }) => {
  return (
    <Link
      to={`/user/${link}`}
      className={`resumeCreator__content__btns__btn resumeCreator__content__btns__btn--${direction}`}
    >
      {text}
    </Link>
  );
};

export default Button;
