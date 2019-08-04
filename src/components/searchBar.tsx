import * as React from 'react';
import * as actions from '../actions'
import {Button, Input} from '@material-ui/core'


export interface IProps {
    onClickSearchButton: typeof actions.onClickSearchButton;
}


class SearchBar extends React.Component<IProps> {
    render() {
        const { onClickSearchButton } = this.props;

        return (
            <div>
                <Input id="searchName" />
                <Button variant="contained" color="primary" onClick={() => onClickSearchButton(
                        (document.getElementById("searchName") as HTMLInputElement).value
                )}>Search</Button>
            </div>
        );
    }
}

export default SearchBar