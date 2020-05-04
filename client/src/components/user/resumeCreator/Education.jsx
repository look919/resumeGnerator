import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { generalInfoUpdate } from '../../../actions/auth';
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

const Education = () => {
  const [formData, setFormData] = useState({
    educationOneSpeciality: '',
    educationOneSchool: '',
    educationOneStartDate: '2020-04',
    educationOneEndDate: '2020-04',
    educationTwoSpeciality: '',
    educationTwoSchool: '',
    educationTwoStartDate: '2020-04',
    educationTwoEndDate: '2020-04',
    languagesOneLang: '',
    languagesOneLevel: 1,
    languagesTwoLang: '',
    languagesTwoLevel: 1,
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
    setFormData({ ...formData, languagesOneLevel: e });
  };
  const onSliderTwoChange = (e) =>
    setFormData({ ...formData, languagesTwoLevel: e });

  const handleSaveDataAndRedirect = async (direction) => {
    if (formData.changes) {
      await generalInfoUpdate(formData);
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
            placeholder="specjalność/kierunek szkoły nr 1"
            onChange={onChange}
          />
          <InputField
            type={'text'}
            name="educationOneSchool"
            value={formData.educationOneSchool}
            Icon={EducationIcon}
            text="Szkoła nr 1"
            placeholder="szkoła nr 1"
            onChange={onChange}
          />
          <div className="resumeForms__education__time">
            <InputField
              type="month"
              name="educationOneStartDate"
              value={formData.educationOneStartDate}
              Icon={CalendarIcon}
              text="Data rozpoczęcia"
              placeholder="data rozpoczęcia"
              onChange={onChange}
              halfLong={true}
            />
            <InputField
              type="month"
              name="educationOneEndDate"
              value={formData.educationOneEndDate}
              Icon={CalendarIcon}
              text="Data zakończenia"
              placeholder="data zakończenia"
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
            placeholder="specjalność/kierunek szkoły nr 2"
            onChange={onChange}
          />
          <InputField
            type={'text'}
            name="educationTwoSchool"
            value={formData.educationTwoSchool}
            Icon={EducationIcon}
            text="Szkoła nr 2"
            placeholder="szkoła nr 2"
            onChange={onChange}
          />
          <div className="resumeForms__education__time">
            <InputField
              type="month"
              name="educationTwoStartDate"
              value={formData.educationTwoStartDate}
              Icon={CalendarIcon}
              text="Data rozpoczęcia"
              placeholder="data rozpoczęcia"
              onChange={onChange}
              halfLong={true}
            />
            <InputField
              type="month"
              name="educationTwoEndDate"
              value={formData.educationTwoEndDate}
              Icon={CalendarIcon}
              text="Data zakończenia"
              placeholder="data zakończenia"
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
            text="Język obcy"
            placeholder="język obcy"
            onChange={onChange}
          />
          <div className="resumeForms__language__slider">
            <span className="resumeForms__language__slider__info--one">
              Stopień znajomości
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
            text="Język obcy"
            placeholder="język obcy"
            onChange={onChange}
          />
          <div className="resumeForms__language__slider">
            <span className="resumeForms__language__slider__info--one">
              Stopień znajomości
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
          text="1st certificate"
          placeholder="1st certificate"
          onChange={onChange}
        />
        <InputField
          type="text"
          name="certificateTwo"
          value={formData.certificateTwo}
          Icon={StarIcon}
          text="2nd certificate"
          placeholder="2nd certificate"
          onChange={onChange}
        />
      </section>
      <div className="resumeCreator__content__btns">
        <button
          className={`resumeCreator__content__btns__btn resumeCreator__content__btns__btn--previous`}
          onClick={() => handleSaveDataAndRedirect('previous')}
        >
          Ogólne
        </button>
        <div className="resumeCreator__content__btns__info">
          <InfoIcon className="resumeCreator__content__btns__info__icon" />
          <span className="resumeCreator__content__btns__info__text">
            Zaleca się uzupełnić wszystkie pola, możesz wszakże wyczyścić
            zawartość całej sekcji żeby się jej pozbyć
          </span>
        </div>
        <button
          className={`resumeCreator__content__btns__btn resumeCreator__content__btns__btn--next`}
          onClick={() => handleSaveDataAndRedirect('next')}
        >
          Umiejętności
        </button>
      </div>
    </div>
  );
};

Education.propTypes = {
  generalInfoUpdate: PropTypes.func.isRequired,
};

export default connect(null, { generalInfoUpdate })(Education);
