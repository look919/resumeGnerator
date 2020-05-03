import React, { useState } from 'react';
import Button from './Button';
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

const GeneralInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    phone: '',
    email: '',
    address: '',
    website: '',
    company: '',
    changes: false,
  });
  const [photo, setPhoto] = useState(`${formData.name}-photo.png`);
  const onChange = (e) =>
    setFormData({
      ...formData,
      changes: true,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();

    //login(formData);
    setFormData({
      email: '',
      password: '',
    });
  };
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
          onChange={onChange}
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
        <Button direction="next" link="education" text="Edukacja" />
      </div>
    </main>
  );
};

export default GeneralInfo;
