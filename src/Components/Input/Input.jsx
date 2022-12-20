import React from 'react';
import './Input.css';

const Input = ({
  inputType,
  inputClassName,
  inputPlaceholder,
  inputName,
  labelName,
  inputValue,
  setInputValue,
  inputWidth,
  label,
  required
}) => {
  return (
    <div
      className='input-wrapper'
      style={{
        width: `${inputWidth}`,
        display: inputType === 'checkbox' ? 'inline-block' : '',
        paddingTop: inputType === 'checkbox' ? '7px' : '',
        marginRight: inputType === 'checkbox' ? '7px' : '',
      }}
    >
      {inputType === 'file' ? (
        <label htmlFor={inputName}>{label}</label>
      ) : (
         <label htmlFor={inputName}>{label}</label>
      )}
      <input
        type={inputType}
        className={inputClassName}
        placeholder={inputPlaceholder}
        value={inputValue}
        name={inputName}
        id={labelName}
        min={0}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
