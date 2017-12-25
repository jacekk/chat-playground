import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import NewMessage from './NewMessage'

const setup = () => {
    Enzyme.configure({ adapter: new Adapter() })

    const props = {
        addMessage: jest.fn(),
    }
    const wrapper = mount(<NewMessage {...props} />)

    return { props, wrapper }
}

describe('NewMessage', () => {
    it('should render', () => {
        const { wrapper } = setup()

        expect(wrapper.find('section.newMessage').length).toBe(1)
        expect(wrapper.find('input').length).toBe(1)
    })
})
