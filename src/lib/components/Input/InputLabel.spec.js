/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';

import { InputLabel } from '.';

describe('<InputLabel />', () => {
  it('renders without crashing', () => {
    shallow(<InputLabel htmlFor="foo" allText={{ label: 'Foo' }} />);
  });
});
