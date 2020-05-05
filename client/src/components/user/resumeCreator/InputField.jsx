import React from 'react';

const InputField = ({
  type,
  name,
  value,
  Icon,
  text,
  placeholder,
  onChange,
  halfLong = false,
}) => {
  return (
    <div
      className={
        halfLong
          ? 'resumeForms__field--halfLong'
          : type === 'file'
          ? 'resumeForms__field resumeForms__field--img'
          : 'resumeForms__field'
      }
    >
      <Icon className="resumeForms__field__icon" />
      <span
        className={
          value ? 'resumeForms__field__text' : 'resumeForms__field__text--none'
        }
      >
        {text}
      </span>
      <input
        autoComplete="new-password"
        type={`${type}`}
        name={name}
        value={value}
        placeholder={placeholder}
        className="input"
        onChange={(e) => onChange(e)}
        accept="image/*"
      />
    </div>
  );
};

export default InputField;
