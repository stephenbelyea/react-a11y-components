import React from 'react';
import { string } from 'prop-types';
import { inputTextType } from '../../types';
import { InputLabel } from '.';

function Input({ id, inputText, ...inputProps }) {
  return (
    <div className="input">
      <InputLabel htmlFor={id} inputText={inputText} />
      <input id={id} {...inputProps} />
    </div>
  );
}

Input.propTypes = {
  id: string.isRequired,
  inputText: inputTextType.isRequired,
  type: string
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
