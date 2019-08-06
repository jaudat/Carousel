import React from 'react';
import { configure, shallow } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import CarousalButton from '../CarouselButton';

configure({ adapter: new Adaptor() });

describe('CarouselButton', () => {

  it('renders a <button>', () => {
    const wrapper = shallow(<CarousalButton />);
    expect(wrapper.type()).toBe('button');
  });

});
