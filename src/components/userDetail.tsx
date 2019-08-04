import * as React from 'react';
import * as state from '../types/state'
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link, Button } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom';

export interface IProps {
    selectedUser: state.IUserDetail | undefined
}

class UserDetail extends React.Component<IProps> {
    render() {
        const { selectedUser } = this.props;

        function convert(labelValue: number) {
            return Math.abs(Number(labelValue)) >= 1.0e+9
                ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(1) + "B"
                : Math.abs(Number(labelValue)) >= 1.0e+6
                    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(1) + "M"
                    : Math.abs(Number(labelValue)) >= 1.0e+3
                        ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(1) + "K"
                        : Math.abs(Number(labelValue)).toString();
        }

        const displayStr = new Array();
        if (selectedUser) {
            displayStr.push(
                <Grid key="userSummary" container={true} spacing={0} justify="center" >
                    <Grid item={true} xs={4}>
                        <Card>
                            <Avatar alt="Remy Sharp" src={selectedUser.profile_image_url} />
                            <Input fullWidth={true} disableUnderline={true} value={selectedUser.name} />
                            <Input fullWidth={true} disableUnderline={true} value={"@" + selectedUser.screen_name} />
                            <Typography color="textSecondary" align="left">
                                {selectedUser.description}
                            </Typography>
                            <Input fullWidth={true} disableUnderline={true}
                                value={"Location: " + selectedUser.location} />
                            <Input fullWidth={true} disableUnderline={true} value={convert(selectedUser.friends_count) +
                                " Following    " + convert(selectedUser.followers_count) + " Followers"} />
                        </Card>
                    </Grid>
                </Grid>
            )
        }
        return (
            <div>
                <Grid key="userSummary" container={true} spacing={0} justify="center" >
                    <Grid item={true} xs={4}>
                        <Link component={RouterLink} variant="body2" to={"/users"}>
                            <Button variant="contained" color="secondary">Back</Button>
                        </Link>
                    </Grid>
                </Grid>
                {displayStr}
            </div>
        );
    }
}

export default UserDetail