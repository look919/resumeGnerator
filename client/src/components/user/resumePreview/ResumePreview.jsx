import React from 'react';
import PropTypes from 'prop-types';

import AboutMe from './AboutMe';
import Photo from './Photo';
import Summary from './Summary';
import Education from './Education';
import Languages from './Languages';
import Projects from './Projects';
import Skills from './Skills';
import Certificates from './Certificates';
import Clause from './Clause';

const ResumePreview = ({ user }) => {
  return (
    <section className="resumePreview" id="resume">
      <AboutMe user={user} />
      <Photo user={user} />
      <Summary user={user} />
      <Education user={user} />
      <Languages user={user} />
      <Projects user={user} />
      <Skills user={user} />
      <Certificates user={user} />
      <Clause user={user} />
    </section>
  );
};
ResumePreview.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ResumePreview;
