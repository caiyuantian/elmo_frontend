import * as React from 'react';
import * as state from '../types/state'
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';


export interface IProps {
    usersList: state.UsersList;
}


class UserSummany extends React.Component<IProps> {

    render() {
        const { usersList } = this.props;

        const usersItems = new Array();

        function convert(labelValue: number) {
            return Math.abs(Number(labelValue)) >= 1.0e+9
                ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(1) + "B"
                : Math.abs(Number(labelValue)) >= 1.0e+6
                    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(1) + "M"
                    : Math.abs(Number(labelValue)) >= 1.0e+3
                        ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(1) + "K"
                        : Math.abs(Number(labelValue)).toString();
        }

        if (usersList.length > 0) {
            for (const user of usersList) {
                usersItems.push(
                    <Grid key={user.id_str} container={true} spacing={0} justify="center" >
                        <Grid item={true} xs={4}>
                            <Card>
                                <Link component={RouterLink} to={"/user/" + user.id_str}>
                                    <Avatar alt="Remy Sharp" src={user.profile_image_url} />
                                    <Input fullWidth={true} disableUnderline={true}
                                        value={user.name + " @" + user.screen_name} />
                                </Link>
                                <Input fullWidth={true} disableUnderline={true}
                                    value={convert(user.friends_count) +
                                        " Following    " + convert(user.followers_count) + " Followers"} />
                            </Card>
                        </Grid>
                    </Grid>
                )
            }
        }
        // console.log(usersItems);
        return (
            <div>
                {usersItems}
            </div>
        );
    }
}

export default UserSummany