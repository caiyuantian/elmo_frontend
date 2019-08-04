import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import TweetsListComp from '../../src/components/tweetsListComp';

Enzyme.configure({ adapter: new Adapter() })


const setup = () => {
    const props = {
        selectedUserTweets: [{
            "id_str": "test",
            "text": "test test",
            "created_at": "test time",
            "source": "test source",
            "retweet_count": 1000000000,
            "favorite_count": 1000000000
        }]
    }

    const wrapper = Enzyme.shallow(<TweetsListComp {...props} />)
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
        selectedUserTweets: [{
            "id_str": "test",
            "text": "test test",
            "created_at": "test time",
            "source": "test source",
            "retweet_count": 1000000,
            "favorite_count": 1000000
        }]
    }
    const wrapper = Enzyme.shallow(<TweetsListComp {...props} />)
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
        selectedUserTweets: new Array()
    }
    const wrapper = Enzyme.shallow(<TweetsListComp {...props} />)
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
        selectedUserTweets: [{
            "id_str": "test",
            "text": "test test",
            "created_at": "test time",
            "source": "test source",
            "retweet_count": 1000,
            "favorite_count": 1000
        }]
    }
    const wrapper = Enzyme.shallow(<TweetsListComp {...props} />)
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
        selectedUserTweets: [{
            "id_str": "test",
            "text": "test test",
            "created_at": "test time",
            "source": "test source",
            "retweet_count": 1,
            "favorite_count": 1
        }]
    }
    const wrapper = Enzyme.shallow(<TweetsListComp {...props} />)
    return {
        props,
        wrapper
    }
}

test('Search Bar - find <Typography>', () => {
    const { wrapper } = setup5();
    expect(wrapper.find(Typography).exists());
})

const setup7 = () => {
    const props = {
        selectedUserTweets: [{
            "id_str": "test",
            "text": "test test",
            "created_at": "test time",
            "source": "test source",
            "retweet_count": 0,
            "favorite_count": 0
        }]
    }
    const wrapper = Enzyme.shallow(<TweetsListComp {...props} />)
    return {
        props,
        wrapper
    }
}

test('Search Bar - find <Typography>', () => {
    const { wrapper } = setup7();
    expect(wrapper.find(Typography).exists());
})