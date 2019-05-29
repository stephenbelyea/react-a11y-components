import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

const props = {
  label: 'Foo'
};

describe('<Button />', () => {
  const wrapper = shallow(<Button {...props} />);

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('returns a button element', () => {
    expect(wrapper.type()).toBe('button');
  });

  it('defaults the button type to button', () => {
    expect(wrapper.exists('button[type="button"]')).toBe(true);
  });

  it('sets the button type when one is passed', () => {
    const submitWrapper = shallow(<Button type="submit" {...props} />);
    expect(submitWrapper.exists('button[type="submit"]')).toBe(true);
  });

  it('contains any child text', () => {
    expect(wrapper.text()).toBe('Foo');
  });

  it('contains any child element', () => {
    const childWrapper = shallow(<Button label={<span>Bar</span>} />).find('span');
    expect(childWrapper.exists()).toBe(true);
    expect(childWrapper.text()).toBe('Bar');
  });
});
