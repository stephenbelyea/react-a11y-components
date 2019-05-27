import React from 'react';
import { string } from 'prop-types';
import { inputTextType } from '../../types';
import { InputLabel } from '.';

function Input({ id, allText, ...inputProps }) {
  return (
    <div className="input">
      <InputLabel htmlFor={id} allText={allText} />
      <input id={id} {...inputProps} />
    </div>
  );
}

Input.propTypes = {
  id: string.isRequired,
  allText: inputTextType.isRequired
};

export default Input;
