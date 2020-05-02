import React from 'react';
import Nav from './Nav';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Certificates from './Certificates';
import DownloadPdf from './DownloadPdf';

export const ResumeCreator = ({ form }) => {
  return (
    <div className="resumeCreator">
      <Nav />
      {form === 'main' ? (
        <GeneralInfo />
      ) : form === 'education' ? (
        <Education />
      ) : form === 'skills' ? (
        <Skills />
      ) : form === 'projects' ? (
        <Projects />
      ) : form === 'certificates' ? (
        <Certificates />
      ) : form === 'final' ? (
        <DownloadPdf />
      ) : (
        <DownloadPdf />
      )}
    </div>
  );
};

export default ResumeCreator;
