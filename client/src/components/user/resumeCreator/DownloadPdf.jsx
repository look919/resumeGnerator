import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPdf from 'jspdf';

const GeneralInfo = () => {
  const printPDF = () => {
    const domElement = document.getElementById('resume');
    html2canvas(domElement, {
      scale: 3,
      onclone: (document) => {
        document.getElementById('print').style.visibility = 'hidden';
      },
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      var doc = new jsPdf('p', 'mm', 'a4');
      doc.addImage(imgData, 'JPEG', 0, 0, 210, 297, 'FAST');
      doc.save(`resume.pdf`);
    });
  };
  return (
    <div className="resumeCreator__content">
      <section className="resumeForms resumeForms--download">
        <p className="resumeForms--download__p">
          {' '}
          <FormattedMessage
            id="Download.info"
            defaultMessage="Your Resume is ready, click on the button bellow to download it!"
          />
        </p>
        <button
          id="print"
          onClick={printPDF}
          className="resumeForms--download__btn"
        >
          <FormattedMessage id="Download.btn" defaultMessage="Download" />
        </button>
      </section>
      <div className="resumeCreator__content__btns">
        <Link
          className={`resumeCreator__content__btns__btn resumeCreator__content__btns__btn--previous`}
          to="/user/projects"
        >
          <FormattedMessage id="Btn.projects" defaultMessage="Projects" />
        </Link>
      </div>
    </div>
  );
};

export default GeneralInfo;
