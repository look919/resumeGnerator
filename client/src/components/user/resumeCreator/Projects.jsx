import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';
import { ProjectIcon, WebsiteIcon, InfoIcon } from '../../layout/Icons';

const Projects = () => {
  const [formData, setFormData] = useState({
    projectOneName: '',
    projectOneLink: '',
    projectOneDesc: '',
    projectTwoName: '',
    projectTwoLink: '',
    projectTwoDesc: '',
    projectThreeName: '',
    projectThreeLink: '',
    projectThreeDesc: '',
    changes: false,
  });
  const onChange = (e) => {
    setFormData({
      ...formData,
      changes: true,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="resumeCreator__content">
      <section className="resumeForms resumeForms--projects">
        <div className="resumeForms__project resumeForms__project--1">
          <InputField
            type="text"
            name="projectOneName"
            value={formData.projectOneName}
            Icon={ProjectIcon}
            text="1st project name"
            placeholder="1st project name"
            onChange={onChange}
          />
          <InputField
            name="projectOneLink"
            value={formData.projectOneLink}
            Icon={WebsiteIcon}
            text="1st project link"
            placeholder="1st project link"
            onChange={onChange}
          />
          <textarea
            autoComplete="new-password"
            name="projectOneDesc"
            value={formData.projectOneDesc}
            placeholder="1st project description"
            className="textarea textarea__project"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="resumeForms__project resumeForms__project--2">
          <InputField
            name="projectTwoName"
            value={formData.projectTwoName}
            Icon={ProjectIcon}
            text="2nd project name"
            placeholder="2nd project name"
            onChange={onChange}
          />
          <InputField
            name="projectTwoLink"
            value={formData.projectTwoLink}
            Icon={WebsiteIcon}
            text="2nd project link"
            placeholder="2nd project link"
            onChange={onChange}
          />
          <textarea
            autoComplete="new-password"
            name="projectTwoDesc"
            value={formData.projectTwoDesc}
            placeholder="2nd project description"
            className="textarea textarea__project"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="resumeForms__project resumeForms__project--3">
          <InputField
            name="projectThreeName"
            value={formData.projectThreeName}
            Icon={ProjectIcon}
            text="3rd project name"
            placeholder="3rd project name"
            onChange={onChange}
          />
          <InputField
            name="projectThreeLink"
            value={formData.projectThreeLink}
            Icon={WebsiteIcon}
            text="3rd project link"
            placeholder="3rd project link"
            onChange={onChange}
          />
          <textarea
            autoComplete="new-password"
            name="projectThreeDesc"
            value={formData.projectThreeDesc}
            placeholder="3rd project description"
            className="textarea textarea__project"
            onChange={(e) => onChange(e)}
          />
        </div>
      </section>
      <div className="resumeCreator__content__btns">
        <Button direction="previous" link="skills" text="Umiejętności" />
        <div className="resumeCreator__content__btns__info">
          <InfoIcon className="resumeCreator__content__btns__info__icon" />
          <span className="resumeCreator__content__btns__info__text">
            Uporządkuj projekty od najważniejszego stopniowo zmniejszając ilość
            tekstu z każdym kolejnym.
          </span>
        </div>
        <Button direction="next" link="final" text="Pobierz" />
      </div>
    </div>
  );
};

export default Projects;
