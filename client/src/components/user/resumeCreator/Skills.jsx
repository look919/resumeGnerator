import React, { useState } from 'react';
import Button from './Button';

const Skills = () => {
  return (
    <div className="resumeCreator__content">
      <div>BABA</div>
      <div className="resumeCreator__content__btns">
        <Button direction="previous" link="education" text="Edukacja" />
        <Button direction="next" link="projects" text="Projekty" />
      </div>
    </div>
  );
};

export default Skills;
