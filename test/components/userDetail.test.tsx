import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import UserDetail from '../../src/components/userDetail';

Enzyme.configure({ adapter: new Adapter() })


const setup = () => {
    const props = {
        selectedUser: {
            "id_str": "12345",
            "name": "test name",
            "screen_name": "test screen name",
            "location": "Sydney",
            "description": "test description",
            "followers_count": 1000000000,
            "friends_count": 1000000000,
            "profile_image_url": "test image url",
            "created_at": "test time"
        }
    }

    const wrapper = Enzyme.shallow(<UserDetail {...props} />)
    return {
        props,
        wrapper
    }
}

test('Search Bar - find <Input>', () => {
    const { wrapper } = setup();
    expect(wrapper.find(Input).exists());
})

const setup2 = () => {
    const props = {
        selectedUser: {
            "id_str": "12345",
            "name": "test name",
            "screen_name": "test screen name",
            "location": "Sydney",
            "description": "test description",
            "followers_count": 1000000,
            "friends_count": 1000000,
            "profile_image_url": "test image url",
            "created_at": "test time"
        }
    }

    const wrapper = Enzyme.shallow(<UserDetail {...props} />)
    return {
        props,
        wrapper
    }
}

test('Search Bar - find <Input>', () => {
    const { wrapper } = setup2();
    expect(wrapper.find(".retweet").at(1).exists());
})

const setup3 = () => {
    const props = {
        selectedUser: {
            "id_str": "12345",
            "name": "test name",
            "screen_name": "test screen name",
            "location": "Sydney",
            "description": "test description",
            "followers_count": 1000,
            "friends_count": 1000,
            "profile_image_url": "test image url",
            "created_at": "test time"
        }
    }

    const wrapper = Enzyme.shallow(<UserDetail {...props} />)
    return {
        props,
        wrapper
    }
}

test('Search Bar - find <Grid>', () => {
    const { wrapper } = setup3();
    expect(wrapper.find(Grid).exists());
})

const setup4 = () => {
    const props = {
        selectedUser: {
            "id_str": "12345",
            "name": "test name",
            "screen_name": "test screen name",
            "location": "Sydney",
            "description": "test description",
            "followers_count": 1,
            "friends_count": 1,
            "profile_image_url": "test image url",
            "created_at": "test time"
        }
    }

    const wrapper = Enzyme.shallow(<UserDetail {...props} />)
    return {
        props,
        wrapper
    }
}

test('Search Bar - find <Card>', () => {
    const { wrapper } = setup4();
    expect(wrapper.find(Card).exists());
})

const setup5 = () => {
    const props = {
        selectedUser: {
            "id_str": "12345",
            "name": "test name",
            "screen_name": "test screen name",
            "location": "Sydney",
            "description": "test description",
            "followers_count": 0,
            "friends_count": 0,
            "profile_image_url": "test image url",
            "created_at": "test time"
        }
    }

    const wrapper = Enzyme.shallow(<UserDetail {...props} />)
    return {
        props,
        wrapper
    }
}

test('Search Bar - find <Typography>', () => {
    const { wrapper } = setup5();
    expect(wrapper.find(Typography).exists());
})

const setup6 = () => {
    const props = {
        selectedUser: undefined
    }

    const wrapper = Enzyme.shallow(<UserDetail {...props} />)
    return {
        props,
        wrapper
    }
}

test('Search Bar - find <Typography>', () => {
    const { wrapper } = setup6();
    expect(wrapper.find(Typography).exists());
})
