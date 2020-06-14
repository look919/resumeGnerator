import React from 'react';

const Radio = ({ Icon, name, onChange, check }) => {
  return (
    <div className="radio">
      <input
        type="checkbox"
        className="radio__input"
        id={name}
        name={name}
        defaultChecked={check}
        onChange={(e) => onChange(e)}
      />
      <label htmlFor={name} className="radio__label">
        <span className="radio__btn" />
      </label>
      <Icon className="radio__icon" />
      <span className="radio__text">{name}</span>
    </div>
  );
};

export default Radio;
