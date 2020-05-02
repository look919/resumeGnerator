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
} from '../../layout/Icons';

const GeneralInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    phone: '',
    email: '',
    address: '',
    website: '',
  });
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  console.log(formData);
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
          name="name"
          value={formData.name}
          Icon={UserIcon}
          text="Imię i nazwisko"
          placeholder="Imię i nazwisko"
          onChange={onChange}
        />
        <InputField
          name="profession"
          value={formData.profession}
          Icon={ProfessionIcon}
          text="Profesja"
          placeholder="profesja"
          onChange={onChange}
        />
        <InputField
          name="phone"
          value={formData.phone}
          Icon={PhoneIcon}
          text="Nr telefonu"
          placeholder="nr telefonu"
          onChange={onChange}
        />
        <InputField
          name="email"
          value={formData.email}
          Icon={EmailIcon}
          text="Email"
          placeholder="email"
          onChange={onChange}
        />
        <InputField
          name="website"
          value={formData.website}
          Icon={WebsiteIcon}
          text="WWW"
          placeholder="adres strony www"
          onChange={onChange}
        />
        <InputField
          name="address"
          value={formData.address}
          Icon={PinIcon}
          text="Adres"
          placeholder="adres"
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
        <Button direction="next" link="education" text="Edukacja" />
      </div>
    </main>
  );
};

export default GeneralInfo;
