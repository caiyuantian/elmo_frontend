import * as React from 'react';
import * as state from '../types/state'
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

export interface IProps {
    selectedUserTweets: state.TweetsList;
}


class TweetsListComp extends React.Component<IProps> {
    render() {
        const { selectedUserTweets } = this.props;
        const usersItems = new Array();

        function convert(labelValue: number) {
            return Math.abs(Number(labelValue)) >= 1.0e+9
                ? (Math.abs(Number(labelValue)) / 1.0e+9).toString().substring(0, 4) + "B"
                : Math.abs(Number(labelValue)) >= 1.0e+6
                    ? (Math.abs(Number(labelValue)) / 1.0e+6).toString().substring(0, 4) + "M"
                    : Math.abs(Number(labelValue)) >= 1.0e+3
                        ? (Math.abs(Number(labelValue)) / 1.0e+3).toString().substring(0, 4) + "K"
                        : Math.abs(Number(labelValue)).toString();
        }

        if (selectedUserTweets.length > 0) {
            for (const tweet of selectedUserTweets) {
                usersItems.push(
                    <Grid key={tweet.id_str} container={true} spacing={2} justify="center" >
                        <Grid item={true} xs={4}>
                            <Card>
                                <Input fullWidth={true} disableUnderline={true} value={"Post Time:" +
                                    tweet.created_at} />
                                <Typography color="textSecondary" align="left">
                                    {tweet.text}
                                </Typography>
                                <Input className="retweet" fullWidth={true} disableUnderline={true} value={
                                    convert(tweet.retweet_count) + " retweet    "
                                    + convert(tweet.favorite_count) + " favorite"} />
                            </Card>
                        </Grid>
                    </Grid>
                )
            }
        }
        if (usersItems.length === 0) {
            usersItems.push(
                <Grid key="norecord" container={true} spacing={0} justify="center" >
                    <Grid item={true} xs={4}>
                        <Card>
                            <Input fullWidth={true} disableUnderline={true} value="No tweet found" />
                        </Card>
                    </Grid>
                </Grid>
            )
        }
        return (
            <div>
                <Grid container={true} spacing={0} justify="center" >
                    <Grid item={true} xs={4}>
                        <Input fullWidth={true} disableUnderline={true} value="Last 5 Tweets: " />
                    </Grid>
                </Grid>
                {usersItems}
            </div>
        );
    }
}

export default TweetsListComp