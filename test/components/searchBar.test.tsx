import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { Button, Input } from '@material-ui/core'

import SearchBar from '../../src/components/searchBar'

Enzyme.configure({ adapter: new Adapter() })


const setup = () => {
    const props = {
        onClickSearchButton: jest.fn()
    }

    const wrapper = Enzyme.shallow(<SearchBar {...props} />)
    return {
        props,
        wrapper
    }
}

test('Search Bar - find <Input>', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Input).exists());
})

declare global {
    namespace NodeJS {
        interface Global {
            document: Document;
            window: Window;
            navigator: Navigator;
        }
    }
}

test('Search Bar - find <Button>', () => {
    const headerWrapperId = "searchName"
    const headerWrapper = global.document.createElement("div")
    headerWrapper.id = headerWrapperId
    global.document.body.appendChild(headerWrapper)
    const { wrapper, props } = setup();
    wrapper.find(Input).simulate('change', { target: { value: 'Robin Cai' } });
    wrapper.find(Button).at(0).simulate('click');
    expect(props.onClickSearchButton).toBeCalled();
})