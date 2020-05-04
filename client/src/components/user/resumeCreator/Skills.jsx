import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { generalInfoUpdate } from '../../../actions/auth';
import { InfoIcon } from '../../layout/Icons';
import * as Ic from '../../layout/BrandIcons';
import Radio from './Radio';

const Skills = () => {
  const [formData, setFormData] = useState({
    AWS: false,
    Angular: false,
    CSharp: false,
    CSS: false,
    Django: false,
    DotNet: false,
    Git: false,
    Heroku: false,
    HTML: false,
    Laravel: false,
    Java: false,
    JavaScript: false,
    Linux: false,
    MongoDB: false,
    MinecrosoftAzure: false,
    MySQL: false,
    Nginx: false,
    NodeJs: false,
    PHP: false,
    Python: false,
    Rails: false,
    React: false,
    Redux: false,
    Ruby: false,
    Sass: false,
    Spring: false,
    VueJs: false,
    changes: false,
  });
  const onChange = (e) => {
    setFormData({
      ...formData,
      changes: true,
      [e.target.name]: e.target.checked,
    });
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
  if (formData.redirect === 'next') return <Redirect to={`/user/projects`} />;
  if (formData.redirect === 'previous')
    return <Redirect to={`/user/education`} />;
  return (
    <div className="resumeCreator__content">
      <section className="resumeForms resumeForms--skills">
        <Radio Icon={Ic.AWSIcon} name="AWS" onChange={onChange} />
        <Radio Icon={Ic.AngularIcon} name="Angular" onChange={onChange} />
        <Radio Icon={Ic.CSharpIcon} name="CSharp" onChange={onChange} />
        <Radio Icon={Ic.CSSIcon} name="CSS" onChange={onChange} />
        <Radio Icon={Ic.DjangoIcon} name="Django" onChange={onChange} />
        <Radio Icon={Ic.DotNetIcon} name="DotNet" onChange={onChange} />
        <Radio Icon={Ic.GitIcon} name="Git" onChange={onChange} />
        <Radio Icon={Ic.HerokuIcon} name="Heroku" onChange={onChange} />
        <Radio Icon={Ic.HTMLIcon} name="HTML" onChange={onChange} />
        <Radio Icon={Ic.LaravelIcon} name="Laravel" onChange={onChange} />
        <Radio Icon={Ic.JavaIcon} name="Java" onChange={onChange} />
        <Radio Icon={Ic.JavaScriptIcon} name="JavaScript" onChange={onChange} />
        <Radio Icon={Ic.LinuxIcon} name="Linux" onChange={onChange} />
        <Radio Icon={Ic.MongoDBIcon} name="MongoDB" onChange={onChange} />
        <Radio
          Icon={Ic.MicrosoftAzureIcon}
          name="MinecrosoftAzure"
          onChange={onChange}
        />
        <Radio Icon={Ic.MySQLIcon} name="MySQL" onChange={onChange} />
        <Radio Icon={Ic.NginxIcon} name="Nginx" onChange={onChange} />
        <Radio Icon={Ic.NodeJsIcon} name="NodeJs" onChange={onChange} />
        <Radio Icon={Ic.PHPIcon} name="PHP" onChange={onChange} />
        <Radio Icon={Ic.PythonIcon} name="Python" onChange={onChange} />
        <Radio Icon={Ic.RailsIcon} name="Rails" onChange={onChange} />
        <Radio Icon={Ic.ReactIcon} name="React" onChange={onChange} />
        <Radio Icon={Ic.ReduxIcon} name="Redux" onChange={onChange} />
        <Radio Icon={Ic.RubyIcon} name="Ruby" onChange={onChange} />
        <Radio Icon={Ic.SassIcon} name="Sass" onChange={onChange} />
        <Radio Icon={Ic.SpringIcon} name="Spring" onChange={onChange} />
        <Radio Icon={Ic.VueJsIcon} name="VueJs" onChange={onChange} />
      </section>
      <div className="resumeCreator__content__btns">
        <button
          className={`resumeCreator__content__btns__btn resumeCreator__content__btns__btn--previous`}
          onClick={() => handleSaveDataAndRedirect('previous')}
        >
          Edukacja
        </button>
        <div className="resumeCreator__content__btns__info">
          <InfoIcon className="resumeCreator__content__btns__info__icon" />
          <span className="resumeCreator__content__btns__info__text">
            Optymalna ilość wybranych technologii dla tego designu wynosi 10
          </span>
        </div>
        <button
          className={`resumeCreator__content__btns__btn resumeCreator__content__btns__btn--next`}
          onClick={() => handleSaveDataAndRedirect('next')}
        >
          Projekty
        </button>
      </div>
    </div>
  );
};

Skills.propTypes = {
  generalInfoUpdate: PropTypes.func.isRequired,
};

export default connect(null, { generalInfoUpdate })(Skills);
