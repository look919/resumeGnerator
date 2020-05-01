import React, { useState } from 'react';
import Button from './Button';

const Education = () => {
  return (
    <div className="resumeCreator__content">
      <div>BABA</div>
      <div className="resumeCreator__content__btns">
        <Button direction="previous" link="main" text="Ogólne" />
        <Button direction="next" link="skills" text="Umiejętności" />
      </div>
    </div>
  );
};

export default Education;
