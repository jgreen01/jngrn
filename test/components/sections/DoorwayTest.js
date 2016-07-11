import React from 'react';

import { shallow } from 'enzyme';

import Doorway from 'components/sections/WhoIAm/Doorway';

describe('Doorway Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Doorway />);
    });

    it('has className of doorway-component', () => {
        const test = wrapper.find('.doorway-component');
        expect(test).to.have.length(1);
    });
});