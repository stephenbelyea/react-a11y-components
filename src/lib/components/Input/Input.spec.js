/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';

import { Input } from '.';

const props = {
  id: 'foo',
  allText: {
    label: 'Foo'
  }
};

describe('<Input />', () => {
  const wrapper = shallow(<Input {...props} />);

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('contains an input element', () => {
    expect(wrapper.exists('input')).toBe(true);
  });

  it('defaults the input type to text', () => {
    expect(wrapper.exists('input[type="text"]')).toBe(true);
  });

  it('sets the input type when one is passed', () => {
    const emailWrapper = shallow(<Input type="email" {...props} />);
    expect(emailWrapper.exists('input[type="email"]')).toBe(true);
  });
});
