import React, { useState } from 'react';
import Button from './Button';

const Projects = () => {
  return (
    <div className="resumeCreator__content">
      <div>BABA</div>
      <div className="resumeCreator__content__btns">
        <Button direction="previous" link="skills" text="Umiejętności" />
        <Button direction="next" link="certificates" text="Certyfikacje" />
      </div>
    </div>
  );
};

export default Projects;
