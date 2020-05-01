import React from 'react';
import html2canvas from 'html2canvas';
import jsPdf from 'jspdf';

export const ResumeCreator = () => {
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
      <ul className="resumeCreator__list">
        <li className="resumeCreator__list__item">Ogólne informacje</li>
        <li className="resumeCreator__list__item">Edukacja</li>
        <li className="resumeCreator__list__item">Umiejętności</li>
        <li className="resumeCreator__list__item">Doświadczenie</li>
        <li className="resumeCreator__list__item">Projekty</li>
        <li className="resumeCreator__list__item">Certifikacje</li>
      </ul>
      <button id="print" onClick={printPDF}>
        Download
      </button>
    </div>
  );
};

export default ResumeCreator;
