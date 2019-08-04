import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import UserSummany from '../../src/components/userSummany';

Enzyme.configure({ adapter: new Adapter() })


const setup = () => {
    const props = {
        usersList: [{
            "id_str": "12345",
            "name": "Robin Cai",
            "screen_name": "test screen",
            "followers_count": 1000000000,
            "friends_count": 1000000000,
            "profile_image_url": "test url"
        }]
    }

    const wrapper = Enzyme.shallow(<UserSummany {...props} />)
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
        usersList: [{
            "id_str": "12345",
            "name": "Robin Cai",
            "screen_name": "test screen",
            "followers_count": 1000000,
            "friends_count": 1000000,
            "profile_image_url": "test url"
        }]
    }

    const wrapper = Enzyme.shallow(<UserSummany {...props} />)
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
        usersList: [{
            "id_str": "12345",
            "name": "Robin Cai",
            "screen_name": "test screen",
            "followers_count": 1000,
            "friends_count": 1000,
            "profile_image_url": "test url"
        }]
    }

    const wrapper = Enzyme.shallow(<UserSummany {...props} />)
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
        usersList: [{
            "id_str": "12345",
            "name": "Robin Cai",
            "screen_name": "test screen",
            "followers_count": 1,
            "friends_count": 1,
            "profile_image_url": "test url"
        }]
    }

    const wrapper = Enzyme.shallow(<UserSummany {...props} />)
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
        usersList: [{
            "id_str": "12345",
            "name": "Robin Cai",
            "screen_name": "test screen",
            "followers_count": 0,
            "friends_count": 0,
            "profile_image_url": "test url"
        }]
    }

    const wrapper = Enzyme.shallow(<UserSummany {...props} />)
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
        usersList: []
    }

    const wrapper = Enzyme.shallow(<UserSummany {...props} />)
    return {
        props,
        wrapper
    }
}

test('Search Bar - find <Typography>', () => {
    const { wrapper } = setup6();
    expect(wrapper.find(Typography).exists());
})