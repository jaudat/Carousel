import React from 'react';
import { shallow } from 'enzyme';
import CarousalButton from '../CarouselButton';


describe('CarouselButton', () => {
  const text = 'Button text';
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CarousalButton>{text}</CarousalButton>);
  })

  it('renders a <button>', () => {
    expect(wrapper.type()).toBe('button');
  });

  it('passes `children` through to <button>', () => {
    expect(wrapper.prop('children')).toBe(text);
  });

  it('passes other props thorugh to the <button>', () => {
    const onClick = () => { },
      className = 'my-carousel-button',
      dataAction = 'prev';
    wrapper.setProps({ onClick, className, 'data-action': dataAction });

    expect(wrapper.prop('onClick')).toBe(onClick);
    expect(wrapper.prop('className')).toBe(className);
    expect(wrapper.prop('data-action')).toBe(dataAction);
  });

});
