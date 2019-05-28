import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('<Button />', () => {
  const wrapper = shallow(<Button>Foo</Button>);

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('contains an button element', () => {
    expect(wrapper.exists('button')).toBe(true);
  });

  it('defaults the button type to button', () => {
    expect(wrapper.exists('button[type="button"]')).toBe(true);
  });

  it('sets the button type when one is passed', () => {
    const submitWrapper = shallow(<Button type="submit">Bar</Button>);
    expect(submitWrapper.exists('button[type="submit"]')).toBe(true);
  });

  it('contains any child text', () => {
    expect(wrapper.text()).toBe('Foo');
  });

  it('contains any child element', () => {
    const childWrapper = shallow(
      <Button>
        <span>Bar</span>
      </Button>
    );
    expect(childWrapper.exists('span')).toBe(true);
    expect(childWrapper.find('span').text()).toBe('Bar');
  });
});
