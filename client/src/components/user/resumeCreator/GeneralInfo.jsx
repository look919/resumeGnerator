import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { generalInfoUpdate } from '../../../actions/auth';
import InputField from './InputField';
import {
  UserIcon,
  ProfessionIcon,
  PhoneIcon,
  EmailIcon,
  WebsiteIcon,
  PinIcon,
  SummaryIcon,
  PhotoIcon,
  CompanyIcon,
  InfoIcon,
} from '../../layout/Icons';

const GeneralInfo = ({ user, generalInfoUpdate }) => {
  if (!user) user = require('../../../utils/defaultUser.json');

  const [formData, setFormData] = useState({
    name: user.name,
    profession: user.profession,
    photo: user.photo,
    phone: user.phone,
    email: user.emailField,
    address: user.address,
    website: user.website,
    company: user.company,
    summary: user.summary,
    changes: false,
    redirect: 'none',
  });
  const onChange = (e) =>
    setFormData({
      ...formData,
      changes: true,
      [e.target.name]: e.target.value,
    });
  const onFileChange = (e) => {
    setFormData({
      ...formData,
      changes: true,
      photo: e.target.files[0],
    });
    console.log(formData);
  };

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
  if (formData.redirect === 'next') return <Redirect to={`/user/education`} />;

  return (
    <main className="resumeCreator__content">
      <section className="resumeForms resumeForms--generalInfo">
        <InputField
          type={'text'}
          name="name"
          value={formData.name}
          Icon={UserIcon}
          text="Imię i nazwisko"
          placeholder="Imię i nazwisko"
          onChange={onChange}
        />
        <InputField
          type={'text'}
          name="profession"
          value={formData.profession}
          Icon={ProfessionIcon}
          text="Profesja"
          placeholder="profesja"
          onChange={onChange}
        />
        <InputField
          type={'text'}
          name="phone"
          value={formData.phone}
          Icon={PhoneIcon}
          text="Nr telefonu"
          placeholder="nr telefonu"
          onChange={onChange}
        />
        <InputField
          type={'text'}
          name="email"
          value={formData.email}
          Icon={EmailIcon}
          text="Email"
          placeholder="email"
          onChange={onChange}
        />
        <InputField
          type={'text'}
          name="website"
          value={formData.website}
          Icon={WebsiteIcon}
          text="WWW"
          placeholder="adres strony www"
          onChange={onChange}
        />
        <InputField
          type={'file'}
          name="photo"
          Icon={PhotoIcon}
          text="Twoje zdjęcie"
          placeholder="photo"
          onChange={onFileChange}
        />
        <InputField
          type={'text'}
          name="address"
          value={formData.address}
          Icon={PinIcon}
          text="Adres"
          placeholder="adres"
          onChange={onChange}
        />
        <InputField
          type={'text'}
          name="company"
          value={formData.company}
          Icon={CompanyIcon}
          text="Nazwa firmy do klauzuli"
          placeholder="Nazwa firmy do klauzuli"
          onChange={onChange}
        />

        <div className="resumeForms__textarea">
          <div className="resumeForms__textarea__header">
            <SummaryIcon className="resumeForms__textarea__header__icon" />
            <span className="resumeForms__textarea__header__text">Summary</span>
          </div>

          <textarea
            autoComplete="new-password"
            name="summary"
            value={formData.summary}
            placeholder="summary"
            className="textarea"
            onChange={(e) => onChange(e)}
          />
        </div>
      </section>
      <div className="resumeCreator__content__btns">
        <div className="resumeCreator__content__btns__info">
          <InfoIcon className="resumeCreator__content__btns__info__icon" />
          <span className="resumeCreator__content__btns__info__text">
            Przejdź dalej by zapisać zmiany
          </span>
        </div>
        <button
          className={`resumeCreator__content__btns__btn resumeCreator__content__btns__btn--next`}
          onClick={() => handleSaveDataAndRedirect('next')}
        >
          Edukacja
        </button>
      </div>
    </main>
  );
};

GeneralInfo.propTypes = {
  generalInfoUpdate: PropTypes.func.isRequired,
};

export default connect(null, { generalInfoUpdate })(GeneralInfo);
