import React from 'react';
import * as Ic from '../../layout//BrandIcons';
const Skills = ({ user }) => {
  if (!user) user = require('../../../utils/defaultUser.json');

  const renderSwitch = (skill) => {
    switch (skill) {
      case 'AWS':
        return <Ic.AWSIcon />;
      case 'Angular':
        return <Ic.AngularIcon />;
      case 'CSharp':
        return <Ic.CSharpIcon />;
      case 'CSS':
        return <Ic.CSSIcon />;
      case 'Django':
        return <Ic.DjangoIcon />;
      case 'DotNet':
        return <Ic.DotNetIcon />;
      case 'Git':
        return <Ic.GitIcon />;
      case 'Heroku':
        return <Ic.HerokuIcon />;
      case 'HTML':
        return <Ic.HTMLIcon />;
      case 'Laravel':
        return <Ic.LaravelIcon />;
      case 'Java':
        return <Ic.JavaIcon />;
      case 'JavaScript':
        return <Ic.JavaScriptIcon />;
      case 'Linux':
        return <Ic.LinuxIcon />;
      case 'MongoDB':
        return <Ic.MongoDBIcon />;
      case 'MicrosoftAzure':
        return <Ic.MicrosoftAzureIcon />;
      case 'MySQL':
        return <Ic.MySQLIcon />;
      case 'Nginx':
        return <Ic.NginxIcon />;
      case 'NodeJs':
        return <Ic.NodeJsIcon />;
      case 'PHP':
        return <Ic.PHPIcon />;
      case 'Python':
        return <Ic.PythonIcon />;
      case 'Rails':
        return <Ic.RailsIcon />;
      case 'React':
        return <Ic.ReactIcon />;
      case 'Redux':
        return <Ic.ReduxIcon />;
      case 'Ruby':
        return <Ic.RubyIcon />;
      case 'Sass':
        return <Ic.SassIcon />;
      case 'Spring':
        return <Ic.SpringIcon />;
      case 'VueJs':
        return <Ic.VueJsIcon />;
      default:
        return <Ic.HTMLIcon />;
    }
  };

  return (
    <div className="resumePreview__skills">
      <div className="heading-resume">
        <h3 className="resumePreview__heading">Skills</h3>
      </div>
      <div className="resumePreview__skills__content">
        {user.skills.map((skill) => (
          <div className="resumePreview__skills__content__item" key={skill}>
            {renderSwitch(skill)}
            <span className="resumePreview__skills__content__item__text">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
