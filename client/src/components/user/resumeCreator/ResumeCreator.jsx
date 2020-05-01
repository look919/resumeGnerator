import React from 'react';
import Nav from './Nav';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Certificates from './Certificates';

import html2canvas from 'html2canvas';
import jsPdf from 'jspdf';

export const ResumeCreator = ({ form }) => {
  const printPDF = () => {
    const domElement = document.getElementById('resume');
    html2canvas(domElement, {
      scale: 4,
      onclone: (document) => {
        document.getElementById('print').style.visibility = 'hidden';
      },
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      var doc = new jsPdf('p', 'mm', 'a4');
      doc.addImage(imgData, 'JPEG', 0, 0, 210, 297);
      doc.save(`resume.pdf`);
    });
  };

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
      ) : form === 'certification' ? (
        <Certificates />
      ) : (
        <Certificates />
      )}
    </div>
  );
};

export default ResumeCreator;

//<button id="print" onClick={printPDF}>
// Download
// </button>
