import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import MessagesList from './MessagesList'

const setup = () => {
    Enzyme.configure({ adapter: new Adapter() })

    const props = {
        messages: [
            { id: 'whatever', author: 'Foo', message: 'Bar' },
        ],
    }
    const wrapper = mount(<MessagesList {...props} />)

    return { props, wrapper }
}

describe('MessagesList', () => {
    it('should render', () => {
        const { wrapper } = setup()

        expect(wrapper.find('.messagesList').length).toBe(1)
        expect(wrapper.text()).toBe('Foo: Bar')
    })
})
