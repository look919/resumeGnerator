import React from 'react';
import me from '../../../img/users/me.png';

const Photo = ({ user }) => {
  if (!user) user = require('../../../utils/defaultUser.json');

  return (
    <div className="resumePreview__photo">
      <img src={me} alt="user" className="resumePreview__photo__img" />
    </div>
  );
};

export default Photo;
