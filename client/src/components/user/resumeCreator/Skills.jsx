import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { skillsUpdate } from '../../../actions/auth';
import { InfoIcon } from '../../layout/Icons';
import * as Ic from '../../layout/BrandIcons';
import Radio from './Radio';

const Skills = ({ skillsUpdate, user }) => {
  if (!user) user = require('../../../utils/defaultUser.json');

  //order of display destinated from formData order
  const [formData, setFormData] = useState({
    changes: false,
  });

  useEffect(() => {
    setFormData({
      ...setFormData,
      Linux: document.getElementById('Linux').checked,
      Git: document.getElementById('Git').checked,
      HTML: document.getElementById('HTML').checked,
      CSS: document.getElementById('CSS').checked,
      Sass: document.getElementById('Sass').checked,
      JavaScript: document.getElementById('JavaScript').checked,
      NodeJs: document.getElementById('NodeJs').checked,
      CSharp: document.getElementById('CSharp').checked,
      DotNet: document.getElementById('DotNet').checked,
      Python: document.getElementById('Python').checked,
      Django: document.getElementById('Django').checked,
      Ruby: document.getElementById('Ruby').checked,
      Rails: document.getElementById('Rails').checked,
      PHP: document.getElementById('PHP').checked,
      Laravel: document.getElementById('Laravel').checked,
      Java: document.getElementById('Java').checked,
      Spring: document.getElementById('Spring').checked,
      VueJs: document.getElementById('VueJs').checked,
      Angular: document.getElementById('Angular').checked,
      React: document.getElementById('React').checked,
      Redux: document.getElementById('Redux').checked,
      MySQL: document.getElementById('MySQL').checked,
      MongoDB: document.getElementById('MongoDB').checked,
      AWS: document.getElementById('AWS').checked,
      MicrosoftAzure: document.getElementById('MicrosoftAzure').checked,
      Nginx: document.getElementById('Nginx').checked,
      Heroku: document.getElementById('Heroku').checked,
    });
  }, []);

  const onChange = (e) => {
    setFormData({
      ...formData,
      changes: true,
      [e.target.name]: e.target.checked,
    });
  };
  const handleRadioChecking = (field) => user.skills.includes(field);
  const data = [];
  Object.entries(formData).forEach(([key, val]) => {
    //if val === true and name !== changes data for handleSaveData func
    if (val && key !== 'changes') data.push(key);
  });

  const handleSaveDataAndRedirect = async (direction) => {
    if (formData.changes) {
      await skillsUpdate(data);
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
        <Radio
          Icon={Ic.AWSIcon}
          name="AWS"
          onChange={onChange}
          check={handleRadioChecking('AWS')}
        />
        <Radio
          Icon={Ic.AngularIcon}
          name="Angular"
          onChange={onChange}
          check={handleRadioChecking('Angular')}
        />
        <Radio
          Icon={Ic.CSharpIcon}
          name="CSharp"
          onChange={onChange}
          check={handleRadioChecking('CSharp')}
        />
        <Radio
          Icon={Ic.CSSIcon}
          name="CSS"
          onChange={onChange}
          check={handleRadioChecking('CSS')}
        />
        <Radio
          Icon={Ic.DjangoIcon}
          name="Django"
          onChange={onChange}
          check={handleRadioChecking('Django')}
        />
        <Radio
          Icon={Ic.DotNetIcon}
          name="DotNet"
          onChange={onChange}
          check={handleRadioChecking('DotNet')}
        />
        <Radio
          Icon={Ic.GitIcon}
          name="Git"
          onChange={onChange}
          check={handleRadioChecking('Git')}
        />
        <Radio
          Icon={Ic.HerokuIcon}
          name="Heroku"
          onChange={onChange}
          check={handleRadioChecking('Heroku')}
        />
        <Radio
          Icon={Ic.HTMLIcon}
          name="HTML"
          onChange={onChange}
          check={handleRadioChecking('HTML')}
        />
        <Radio
          Icon={Ic.LaravelIcon}
          name="Laravel"
          onChange={onChange}
          check={handleRadioChecking('Laravel')}
        />
        <Radio
          Icon={Ic.JavaIcon}
          name="Java"
          onChange={onChange}
          check={handleRadioChecking('Java')}
        />
        <Radio
          Icon={Ic.JavaScriptIcon}
          name="JavaScript"
          onChange={onChange}
          check={handleRadioChecking('JavaScript')}
        />
        <Radio
          Icon={Ic.LinuxIcon}
          name="Linux"
          onChange={onChange}
          check={handleRadioChecking('Linux')}
        />
        <Radio
          Icon={Ic.MongoDBIcon}
          name="MongoDB"
          onChange={onChange}
          check={handleRadioChecking('MongoDB')}
        />
        <Radio
          Icon={Ic.MicrosoftAzureIcon}
          name="MicrosoftAzure"
          onChange={onChange}
          check={handleRadioChecking('MicrosoftAzure')}
        />
        <Radio
          Icon={Ic.MySQLIcon}
          name="MySQL"
          onChange={onChange}
          check={handleRadioChecking('MySQL')}
        />
        <Radio
          Icon={Ic.NginxIcon}
          name="Nginx"
          onChange={onChange}
          check={handleRadioChecking('Nginx')}
        />
        <Radio
          Icon={Ic.NodeJsIcon}
          name="NodeJs"
          onChange={onChange}
          check={handleRadioChecking('NodeJs')}
        />
        <Radio
          Icon={Ic.PHPIcon}
          name="PHP"
          onChange={onChange}
          check={handleRadioChecking('PHP')}
        />
        <Radio
          Icon={Ic.PythonIcon}
          name="Python"
          onChange={onChange}
          check={handleRadioChecking('Python')}
        />
        <Radio
          Icon={Ic.RailsIcon}
          name="Rails"
          onChange={onChange}
          check={handleRadioChecking('Rails')}
        />
        <Radio
          Icon={Ic.ReactIcon}
          name="React"
          onChange={onChange}
          check={handleRadioChecking('React')}
        />
        <Radio
          Icon={Ic.ReduxIcon}
          name="Redux"
          onChange={onChange}
          check={handleRadioChecking('Redux')}
        />
        <Radio
          Icon={Ic.RubyIcon}
          name="Ruby"
          onChange={onChange}
          check={handleRadioChecking('Ruby')}
        />
        <Radio
          Icon={Ic.SassIcon}
          name="Sass"
          onChange={onChange}
          check={handleRadioChecking('Sass')}
        />
        <Radio
          Icon={Ic.SpringIcon}
          name="Spring"
          onChange={onChange}
          check={handleRadioChecking('Spring')}
        />
        <Radio
          Icon={Ic.VueJsIcon}
          name="VueJs"
          onChange={onChange}
          check={handleRadioChecking('VueJs')}
        />
      </section>
      <div className="resumeCreator__content__btns">
        <button
          className={`resumeCreator__content__btns__btn resumeCreator__content__btns__btn--previous`}
          onClick={() => handleSaveDataAndRedirect('previous')}
        >
          <FormattedMessage id="Btn.education" defaultMessage="Education" />
        </button>
        <div className="resumeCreator__content__btns__info">
          <InfoIcon className="resumeCreator__content__btns__info__icon" />
          <span className="resumeCreator__content__btns__info__text">
            <FormattedMessage
              id="Info.skills"
              defaultMessage="The optimal number of selected technologies for this design is 10"
            />
          </span>
        </div>
        <button
          className={`resumeCreator__content__btns__btn resumeCreator__content__btns__btn--next`}
          onClick={() => handleSaveDataAndRedirect('next')}
        >
          <FormattedMessage id="Btn.projects" defaultMessage="Projects" />
        </button>
      </div>
    </div>
  );
};

Skills.propTypes = {
  skillsUpdate: PropTypes.func.isRequired,
};

export default connect(null, { skillsUpdate })(Skills);
