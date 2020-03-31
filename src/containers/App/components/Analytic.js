import React from 'react';
import clsx from 'clsx';
import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    Divider,
    makeStyles,
    Typography,
} from '@material-ui/core';
import {
    KeyboardArrowUp as KeyboardArrowUpIcon,
    EmojiEvents as EmojiEventsIcon,
} from '@material-ui/icons';

import LineChart from './LineChart';

const useStyles = makeStyles(theme => ({
    card: {
        margin: theme.spacing(3, 0),
    },
    content: {
        padding: theme.spacing(5, 4),
    },
    bold: {
        fontWeight: 'bold',
    },
    icon: {
        width: 36,
        height: 36,
    },
    green: {
        color: '#3cc03d',
    },
    yellow: {
        color: '#efcb54',
    },
    verticalMargin: {
        margin: theme.spacing(3, 0),
    },
}));

const Analytic = () => {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.card}>
            <CardHeader title="Follower Growth" />
            <Divider />
            <CardContent className={classes.content}>
                <Grid container>
                    <Grid item xs={12} md={5} lg={4} container justify="center" direction="column">
                        <Grid item>
                            <Typography variant="h3" className={classes.bold}>
                                9,673
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" className={classes.bold}>
                                Gained Followers (last 30 days)
                            </Typography>
                        </Grid>
                        <Grid item className={classes.verticalMargin}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item>
                                    <KeyboardArrowUpIcon className={clsx(classes.icon, classes.green)} />
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        You have a <strong className={classes.green}>11% growth</strong> in comparison
                                        <br />
                                        with previous month.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item>
                                    <EmojiEventsIcon className={clsx(classes.icon, classes.yellow)} />
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        <strong>62%</strong> of 6,000 followers goal
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={7} lg={8}>
                        <LineChart />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Analytic;