import React, { useState } from 'react';
import Button from './Button';
import html2canvas from 'html2canvas';
import jsPdf from 'jspdf';

const GeneralInfo = () => {
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
    <div className="resumeCreator__content">
      <div>BABA</div>
      <div className="resumeCreator__content__btns">
        <Button direction="previous" link="certificates" text="Certyfikacje" />
        <button
          id="print"
          onClick={printPDF}
          className="resumeCreator__content__btns__btn resumeCreator__content__btns__btn--next"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default GeneralInfo;
