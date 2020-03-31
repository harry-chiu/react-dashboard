import React from 'react';
import clsx from 'clsx';
import {
    Grid,
    Card,
    Avatar,
    makeStyles,
    Typography,
} from '@material-ui/core';
import {
    People as PeopleIcon,
    ThumbUp as ThumbUpIcon,
    AttachMoney as AttachMoneyIcon,
    TrendingUp as TrendingUpIcon,
    ArrowUpward as ArrowUpwardIcon,
    ArrowDownward as ArrowDownwardIcon,
} from '@material-ui/icons';

const stats = [
    {
        id: 1,
        title: 'Followers',
        description: '13.5k',
        stat: '',
        icon: <PeopleIcon />,
    },
    {
        id: 2,
        title: 'Likes',
        description: '7.8k',
        stat: 1.6,
        icon: <ThumbUpIcon />,
    },
    {
        id: 3,
        title: 'Income',
        description: '29.1k',
        stat: -2.1,
        icon: <AttachMoneyIcon />,
    },
    {
        id: 4,
        title: 'Grow',
        description: '1.5k',
        stat: 1.2,
        icon: <TrendingUpIcon />,
    },
];

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: theme.spacing(2),
        height: '100%',
    },
    icon: {
        margin: theme.spacing(1, 0),
    },
    blue: {
        color: '#107ae4',
        background: '#e3f4fe',
    },
    purple: {
        color: '#7e69db',
        background: '#f3f1fd',
    },
    yellow: {
        color: '#ebb92d',
        background: '#fefae7',
    },
    green: {
        color: '#3db53d',
        background: '#eaf8ea',
    },
    up: {
        color: '#65b165',
    },
    down: {
        color: '#ef3637',
    },
    title: {
        padding: theme.spacing(1, 0),
    },
    bold: {
        fontWeight: 'bold',
    },
}));

const Stats = () => {
    const classes = useStyles();

    const colorSelector = (id) => {
        switch (id) {
            case 1:
                return classes.blue;
            case 2:
                return classes.purple;
            case 3:
                return classes.yellow;
            case 4:
                return classes.green;
            default:
                return null;
        }
    };

    const statSelector = (stat) => {
        return stat > 0 ? classes.up : classes.down;
    };

    const arrowSelector = (stat) => {
        return stat > 0 ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />;
    };

    return (
        <>
            <Typography variant="h4" className={classes.title}>Overview</Typography>

            <Grid container spacing={3} justify="space-between">
                {stats.map(({ id, icon, description, stat, title }) => (
                    <Grid
                        item
                        key={id}
                        xs={12}
                        md={6}
                        lg={3}
                    >
                        <Card
                            variant="outlined"
                            className={classes.card}
                        >
                            <Avatar className={clsx(classes.icon, colorSelector(id))}>
                                {icon}
                            </Avatar>
                            <Typography variant="h3" className={classes.bold}>
                                {description}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" className={classes.title}>
                                {title}
                            </Typography>
                            {stat ? (
                                <Grid
                                    container
                                    justify="center"
                                    className={clsx(classes.bold, statSelector(stat))}
                                >
                                    <Grid item>
                                        {arrowSelector(stat)}
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.bold}>
                                            {stat}%
                                        </Typography>
                                    </Grid>
                                </Grid>
                            ) : '-'}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
};

export default Stats;