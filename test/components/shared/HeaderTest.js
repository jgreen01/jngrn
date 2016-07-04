import React from 'react';

import { shallow } from 'enzyme';

import Header from 'components/shared/Header'

describe('Header Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    it('has className of header-component', () => {
        const test = wrapper.find('.header-component');
        expect(test).to.have.length(1);
    });
});