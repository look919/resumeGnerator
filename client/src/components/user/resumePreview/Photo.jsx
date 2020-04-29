import React from 'react';

import DefaultImg from '../../../img/default.jpg';

const Photo = () => {
  return (
    <div className="resumePreview__photo">
      <img src={DefaultImg} alt="user" className="resumePreview__photo__img" />
    </div>
  );
};

export default Photo;
