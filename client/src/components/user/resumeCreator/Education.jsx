import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { educationUpdate } from '../../../actions/auth';
import InputField from './InputField';
import {
  StarIcon,
  EducationIcon,
  CalendarIcon,
  WorldIcon,
  InfoIcon,
} from '../../layout/Icons';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Education = ({ user, educationUpdate }) => {
  if (!user) user = require('../../../utils/defaultUser.json');

  const [formData, setFormData] = useState({
    educationOneSpeciality: user.education[0].speciality,
    educationOneSchool: user.education[0].school,
    educationOneStartDate: user.education[0].startDate,
    educationOneEndDate: user.education[0].endDate,
    educationTwoSpeciality: user.education[1].speciality,
    educationTwoSchool: user.education[1].school,
    educationTwoStartDate: user.education[1].startDate,
    educationTwoEndDate: user.education[1].endDate,
    languagesOneLang: user.languages[0].lang,
    languagesOneLevel: user.languages[0].level,
    languagesTwoLang: user.languages[1].lang,
    languagesTwoLevel: user.languages[1].level,
    certificateOne: user.certification[0],
    certificateTwo: user.certification[1],
    changes: false,
    direction: 'none',
  });

  const onChange = (e) =>
    setFormData({
      ...formData,
      changes: true,
      [e.target.name]: e.target.value,
    });
  const onSliderOneChange = (e) => {
    setFormData({ ...formData, changes: true, languagesOneLevel: e });
  };
  const onSliderTwoChange = (e) =>
    setFormData({ ...formData, languagesTwoLevel: e });

  const handleSaveDataAndRedirect = async (direction) => {
    if (formData.changes) {
      await educationUpdate(formData);
      await setFormData({
        ...formData,
        redirect: direction,
      });
    } else {
      setFormData({
        ...formData,
        redirect: direction,
      });
    }
  };
  if (formData.redirect === 'next') return <Redirect to={`/user/skills`} />;
  if (formData.redirect === 'previous') return <Redirect to={`/user/main`} />;

  return (
    <div className="resumeCreator__content">
      <section className="resumeForms resumeForms--education">
        <div className="resumeForms__education">
          <InputField
            type={'text'}
            name="educationOneSpeciality"
            value={formData.educationOneSpeciality}
            Icon={StarIcon}
            text="Specjalność/Kierunek szkoły nr 1"
            placeholder="Input__specialityOne"
            onChange={onChange}
          />
          <InputField
            type={'text'}
            name="educationOneSchool"
            value={formData.educationOneSchool}
            Icon={EducationIcon}
            text="Szkoła nr 1"
            placeholder="Input__schoolOne"
            onChange={onChange}
          />
          <div className="resumeForms__education__time">
            <InputField
              type="month"
              name="educationOneStartDate"
              value={formData.educationOneStartDate}
              Icon={CalendarIcon}
              text="Input__schoolStartDate"
              placeholder="Input__schoolStartDate"
              onChange={onChange}
              halfLong={true}
            />
            <InputField
              type="month"
              name="educationOneEndDate"
              value={formData.educationOneEndDate}
              Icon={CalendarIcon}
              text="Input__schoolEndDate"
              placeholder="Input__schoolEndDate"
              onChange={onChange}
              halfLong={true}
            />
          </div>
        </div>
        <div className="resumeForms__education">
          <InputField
            type={'text'}
            name="educationTwoSpeciality"
            value={formData.educationTwoSpeciality}
            Icon={StarIcon}
            text="Specjalność/Kierunek szkoły nr 2"
            placeholder="Input__specialityTwo"
            onChange={onChange}
          />
          <InputField
            type={'text'}
            name="educationTwoSchool"
            value={formData.educationTwoSchool}
            Icon={EducationIcon}
            text="Szkoła nr 2"
            placeholder="Input__schoolTwo"
            onChange={onChange}
          />
          <div className="resumeForms__education__time">
            <InputField
              type="month"
              name="educationTwoStartDate"
              value={formData.educationTwoStartDate}
              Icon={CalendarIcon}
              text="Input__schoolStartDate"
              placeholder="Input__schoolStartDate"
              onChange={onChange}
              halfLong={true}
            />
            <InputField
              type="month"
              name="educationTwoEndDate"
              value={formData.educationTwoEndDate}
              Icon={CalendarIcon}
              text="Input__schoolEndDate"
              placeholder="Input__schoolEndDate"
              onChange={onChange}
              halfLong={true}
            />
          </div>
        </div>
        <div className="resumeForms__language">
          <InputField
            type="text"
            name="languagesOneLang"
            value={formData.languagesOneLang}
            Icon={WorldIcon}
            text="Input__language"
            placeholder="Input__language"
            onChange={onChange}
          />
          <div className="resumeForms__language__slider">
            <span className="resumeForms__language__slider__info--one">
              <FormattedMessage
                id="Input__level"
                defaultMessage="Degree of knowledge"
              />
            </span>
            <Slider
              min={1}
              max={5}
              value={formData.languagesOneLevel}
              onChange={onSliderOneChange}
            />
            <span className="resumeForms__language__slider__info--two">
              {formData.languagesOneLevel === 1
                ? 'A2'
                : formData.languagesOneLevel === 2
                ? 'B1'
                : formData.languagesOneLevel === 3
                ? 'B2'
                : formData.languagesOneLevel === 4
                ? 'C1'
                : 'C2'}
            </span>
          </div>
        </div>
        <div className="resumeForms__language">
          <InputField
            type="text"
            name="languagesTwoLang"
            value={formData.languagesTwoLang}
            Icon={WorldIcon}
            text="Input__language"
            placeholder="Input__language"
            onChange={onChange}
          />
          <div className="resumeForms__language__slider">
            <span className="resumeForms__language__slider__info--one">
              <FormattedMessage
                id="Input__level"
                defaultMessage="Degree of knowledge"
              />
            </span>
            <Slider
              min={1}
              max={5}
              value={formData.languagesTwoLevel}
              onChange={onSliderTwoChange}
            />
            <span className="resumeForms__language__slider__info--two">
              {formData.languagesTwoLevel === 1
                ? 'A2'
                : formData.languagesTwoLevel === 2
                ? 'B1'
                : formData.languagesTwoLevel === 3
                ? 'B2'
                : formData.languagesTwoLevel === 4
                ? 'C1'
                : 'C2'}
            </span>
          </div>
        </div>

        <InputField
          type="text"
          name="certificateOne"
          value={formData.certificateOne}
          Icon={StarIcon}
          text="Input__certificateOne"
          placeholder="Input__certificateOne"
          onChange={onChange}
        />
        <InputField
          type="text"
          name="certificateTwo"
          value={formData.certificateTwo}
          Icon={StarIcon}
          text="Input__certificateTwo"
          placeholder="Input__certificateTwo"
          onChange={onChange}
        />
      </section>
      <div className="resumeCreator__content__btns">
        <button
          className={`resumeCreator__content__btns__btn resumeCreator__content__btns__btn--previous`}
          onClick={() => handleSaveDataAndRedirect('previous')}
        >
          <FormattedMessage
            id="Btn.generalInfo"
            defaultMessage="General info"
          />
        </button>
        <div className="resumeCreator__content__btns__info">
          <InfoIcon className="resumeCreator__content__btns__info__icon" />
          <span className="resumeCreator__content__btns__info__text">
            <FormattedMessage
              id="Info.education"
              defaultMessage="It is recommended to fill in all fields, after all you can clear the entire section content to get rid of it"
            />
          </span>
        </div>
        <button
          className={`resumeCreator__content__btns__btn resumeCreator__content__btns__btn--next`}
          onClick={() => handleSaveDataAndRedirect('next')}
        >
          <FormattedMessage id="Btn.skills" defaultMessage="Skills" />
        </button>
      </div>
    </div>
  );
};

Education.propTypes = {
  educationUpdate: PropTypes.func.isRequired,
};

export default connect(null, { educationUpdate })(Education);
