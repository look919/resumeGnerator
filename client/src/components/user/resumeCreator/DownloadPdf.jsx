import React, { useState } from 'react';
import Button from './Button';
//TODO:
const GeneralInfo = () => {
  return (
    <div className="resumeCreator__content">
      <div>BABA</div>
      <div className="resumeCreator__content__btns">
        <Button direction="next" link="education" text="Edukacja" />
      </div>
    </div>
  );
};

export default GeneralInfo;
