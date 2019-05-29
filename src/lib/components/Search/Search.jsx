import React from 'react';
import { func, string } from 'prop-types';
import { labelType, inputTextType } from '../../types';

import { Input, Button } from '..';

function Search({ onSubmit, buttonLabel, ...inputProps }) {
  return (
    <form onSubmit={onSubmit} role="search">
      <Input type="search" {...inputProps} />
      <Button type="submit" label={buttonLabel} />
    </form>
  );
}

Search.propTypes = {
  id: string.isRequired,
  onSubmit: func.isRequired,
  inputText: inputTextType.isRequired,
  buttonLabel: labelType.isRequired
};

export default Search;
