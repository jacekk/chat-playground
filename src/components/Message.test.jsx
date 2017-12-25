import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import Message from './Message'

const setup = () => {
    Enzyme.configure({ adapter: new Adapter() })

    const props = {
        author: 'Foo',
        message: 'Bar',
    }
    const wrapper = mount(<Message {...props} />)

    return { props, wrapper }
}

describe('Message', () => {
    it('should render', () => {
        const { wrapper } = setup()

        expect(wrapper.find('.message').length).toBe(1)
        expect(wrapper.text()).toBe('Foo: Bar')
    })
})
