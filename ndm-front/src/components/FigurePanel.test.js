import React from 'react'
import { shallow, mount, render } from 'enzyme'

import {FigurePanel} from './FigurePanel'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('A suite', () => {
    it('should render without throwing an error', function() {
        const component = mount(<FigurePanel title="a" value="1"/>)
        const h1 = component.find('h1')

        expect(h1).toHaveLength(1)
    })
})
