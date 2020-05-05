import React from 'react';
import Nav from './Nav';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import DownloadPdf from './DownloadPdf';

export const ResumeCreator = ({ form, user }) => {
  return (
    <div className="resumeCreator">
      <Nav />
      {form === 'main' ? (
        <GeneralInfo user={user} />
      ) : form === 'education' ? (
        <Education user={user} />
      ) : form === 'skills' ? (
        <Skills user={user} />
      ) : form === 'projects' ? (
        <Projects user={user} />
      ) : form === 'final' ? (
        <DownloadPdf />
      ) : (
        <DownloadPdf />
      )}
    </div>
  );
};

export default ResumeCreator;
