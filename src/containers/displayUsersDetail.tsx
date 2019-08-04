import * as React from 'react';
import { connect } from 'react-redux'
import { IUserDetail, TweetsList, SystemState, } from '../types/state'
import store from '../store'
import actionTypes from '../types/actionTypes'
import UserDetail from '../components/userDetail'
import TweetsListComp from '../components/tweetsListComp'

interface IStateProps {
    selectedUser: IUserDetail;
    selectedUserTweets: TweetsList;
}

class DisplayUsersDetail extends React.Component<IStateProps, {}> {
    componentDidMount() {
        const pathname = window.location.pathname
        const id = pathname.substring(pathname.lastIndexOf('/') + 1);
        store.dispatch({ "id": id, "type": actionTypes.FETCH_USER_DETAIL_ASYNC });
    }

    render() {
        const { selectedUser, selectedUserTweets } = this.props;

        return (
            <div>
                <div>
                    <UserDetail selectedUser={selectedUser} />
                </div>
                <div>
                    <TweetsListComp selectedUserTweets={selectedUserTweets} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: SystemState) => {
    const { selectedUser, selectedUserTweets } = state;
    return {
        "selectedUser": selectedUser,
        "selectedUserTweets": selectedUserTweets
    };
}

export default connect<IStateProps>(mapStateToProps)(DisplayUsersDetail)