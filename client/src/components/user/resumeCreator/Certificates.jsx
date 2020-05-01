import React, { useState } from 'react';
import Button from './Button';

const Certificates = () => {
  return (
    <div className="resumeCreator__content">
      <div>Certificates</div>
      <div className="resumeCreator__content__btns">
        <Button direction="previous" link="projects" text="Projekty" />
        <Button direction="next" link="final" text="Certyfikaty" />
      </div>
    </div>
  );
};

export default Certificates;
