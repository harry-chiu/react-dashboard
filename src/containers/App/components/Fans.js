import React from 'react';
import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
    Divider,
    makeStyles,
} from '@material-ui/core';
import {
    LiveTv as LiveTvIcon,
    ThumbUpOutlined as ThumbUpOutlinedIcon,
} from '@material-ui/icons';

const fans = [
    {
        id: 1,
        name: 'Sara',
        watchTime: '13:23:06',
        likes: 157,
    },
    {
        id: 2,
        name: 'Mary',
        watchTime: '09:02:36',
        likes: 128,
    },
    {
        id: 3,
        name: 'Alex',
        watchTime: '07:18:24',
        likes: 89,
    },
    {
        id: 4,
        name: 'Aaron',
        watchTime: '07:09:17',
        likes: 91,
    },
    {
        id: 5,
        name: 'Elen',
        watchTime: '05:47:03',
        likes: 53,
    },
];

const useStyles = makeStyles({
    content: {
        padding: 0,
    },
    textCenter: {
        textAlign: 'right',
    },
    grey: {
        color: '#666666',
    },
    blue: {
        color: '#107ae4',
    },
});

const Fans = () => {
    const classes = useStyles();

    return (
        <Card variant="outlined">
            <CardHeader title="Fans" />
            <Divider />
            <CardContent className={classes.content}>
                <List>
                    {fans.map(({ id, name, watchTime, likes }) => (
                        <ListItem button key={id}>
                            <Grid container alignItems="center">
                                <Grid item xs container alignItems="center">
                                    <Grid item>
                                        <ListItemIcon>
                                            <Avatar src={`https://i.pravatar.cc/50?img=${id}`} className={classes.avatar} />
                                        </ListItemIcon>
                                    </Grid>
                                    <Grid item>
                                        <ListItemText primary={name} />
                                    </Grid>
                                </Grid>
                                <Grid item xs container alignItems="center" spacing={1}>
                                    <Grid item>
                                        <LiveTvIcon className={classes.grey} />
                                    </Grid>
                                    <Grid item>
                                        <ListItemText primary={`${watchTime}`} className={classes.textCenter} />
                                    </Grid>
                                </Grid>
                                <Grid item xs container alignItems="center" spacing={1}>
                                    <Grid item>
                                        <ThumbUpOutlinedIcon className={classes.blue} />
                                    </Grid>
                                    <Grid item>
                                        <ListItemText primary={`${likes}`} className={classes.textCenter} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default Fans;