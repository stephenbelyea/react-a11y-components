/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';

import { LabelText } from '.';

describe('<LabelText />', () => {
  it('renders without crashing', () => {
    shallow(<LabelText type="foo" />);
  });
});
