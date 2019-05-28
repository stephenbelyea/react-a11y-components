import React from 'react';
import { shallow } from 'enzyme';

import { LabelText } from '.';

describe('<LabelText />', () => {
  const wrapper = shallow(<LabelText type="foo">Foo</LabelText>);

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('creates className from the type', () => {
    expect(wrapper.hasClass('label-text-foo')).toBe(true);
  });

  it('contains any child text', () => {
    expect(wrapper.text()).toBe('Foo');
  });

  it('contains any child element', () => {
    const childWrapper = shallow(
      <LabelText type="bar">
        <small>Bar</small>
      </LabelText>
    );
    expect(childWrapper.exists('small')).toBe(true);
    expect(childWrapper.find('small').text()).toBe('Bar');
  });
});
