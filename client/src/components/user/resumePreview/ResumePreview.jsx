import React from 'react';
import AboutMe from './AboutMe';
import Photo from './Photo';
import Summary from './Summary';
import Education from './Education';
import Languages from './Languages';
import Projects from './Projects';
import Skills from './Skills';
import Certificates from './Certificates';
import Clause from './Clause';

const ResumePreview = () => {
  return (
    <section className="resumePreview">
      <AboutMe />
      <Photo />
      <Summary />
      <Education />
      <Languages />
      <Projects />
      <Skills />
      <Certificates />
      <Clause />
    </section>
  );
};

export default ResumePreview;
