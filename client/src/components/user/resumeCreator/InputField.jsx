import React from 'react';

const InputField = ({ name, value, Icon, text, placeholder, onChange }) => {
  return (
    <div className="resumeForms__field">
      <Icon className="resumeForms__field__icon" />
      <span
        className={
          value ? 'resumeForms__field__text' : 'resumeForms__field__text--none'
        }
      >
        {text}
      </span>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        className="input"
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default InputField;
