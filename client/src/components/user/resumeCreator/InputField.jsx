import React from 'react';
import { FormattedMessage } from 'react-intl';

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
        <FormattedMessage id={placeholder} defaultMessage={text} />
      </span>
      <FormattedMessage id={placeholder} defaultMessage={placeholder}>
        {(msg) => (
          <input
            placeholder={msg}
            autoComplete="new-password"
            type={`${type}`}
            name={name}
            value={value}
            className="input"
            onChange={(e) => onChange(e)}
            accept="image/*"
          />
        )}
      </FormattedMessage>
    </div>
  );
};

export default InputField;
