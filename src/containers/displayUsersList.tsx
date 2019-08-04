import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { UsersList, SystemState } from '../types/state'
import UserSummany from '../components/userSummany'
import SearchBar from '../components/searchBar'

interface IStateProps {
    usersList: UsersList;
}

interface IDispatchProps {
    onClickSearchButton: typeof actions.onClickSearchButton;
}

interface IOwnProps {
    usersList: UsersList;
    onClickSearchButton: typeof actions.onClickSearchButton;
}

class DisplayUsersList extends React.Component<IStateProps & IDispatchProps & IOwnProps, {}> {
    render() {
        const { usersList, onClickSearchButton } = this.props;
        return (
            <div className='usersList'>
                <div>
                    <SearchBar onClickSearchButton={onClickSearchButton} />
                </div>
                <div>
                    <UserSummany usersList={usersList} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: SystemState) => {
    const { usersList } = state;
    // console.log(JSON.stringify(usersList))
    return {
        "usersList": usersList
    };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onClickSearchButton: bindActionCreators(actions.onClickSearchButton, dispatch),
    }
}

export default connect<IStateProps, IDispatchProps, IOwnProps>(mapStateToProps, mapDispatchToProps)(DisplayUsersList)