import React from 'react';

import { shallow } from 'enzyme';

import WhoIAm from 'components/sections/WhoIAm';

describe('WhoIAm Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<WhoIAm />);
    });

    it('has className of aboutme-component', () => {
        const test = wrapper.find('.aboutme-component');
        expect(test).to.have.length(1);
    });
});