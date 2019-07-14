import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import PageTitle from './page-title'

Enzyme.configure({ adapter: new Adapter()})

const setup = () => {
    const props = {
        title: "test"
    }

    const enzymeWrapper = shallow(<PageTitle {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe ('components',() => {
    describe('Title', () => {
        it('should render', () => {
            const { enzymeWrapper } = setup()

            expect(enzymeWrapper.find('div').hasClass('page-title')).toBe(true)
            expect(enzymeWrapper.find('h4').text()).toBe('test')
        }) 
    })
})