import React from 'react';
import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    Divider,
    Typography,
    makeStyles,
} from '@material-ui/core';
import {
    ThumbUpOutlined as ThumbUpOutlinedIcon,
    ThumbDownOutlined as ThumbDownOutlinedIcon,
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    image: {
        border: '1px solid #dddddd',
    },
    bold: {
        fontWeight: 'bold',
    },
    blue: {
        color: '#107ae4',
    },
    red: {
        color: '#ef3637',
    },
    green: {
        color: '#3db53d',
    },
    verticalMargin: {
        margin: theme.spacing(2, 0),
    },
}));

const PopularVideo = () => {
    const classes = useStyles();

    return (
        <Card variant="outlined">
            <CardHeader title="Most Popular Video" />
            <Divider />
            <CardContent>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md="auto">
                        <img src="https://picsum.photos/300/200" className={classes.image} alt="random" />
                    </Grid>
                    <Grid item xs={12} md="auto">
                        <Typography variant="h5" className={classes.bold}>
                            Vlog - Travel in Taiwan
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            1,310,567 views
                        </Typography>
                        <Grid container alignItems="center" className={classes.verticalMargin} spacing={1}>
                            <Grid item>
                                <ThumbUpOutlinedIcon className={classes.blue} />
                            </Grid>
                            <Grid item>
                                13,159
                            </Grid>
                            <Grid item>
                                <ThumbDownOutlinedIcon className={classes.red} />
                            </Grid>
                            <Grid item>
                                267
                            </Grid>
                        </Grid>
                        <Typography variant="h4">
                            <strong className={classes.green}>$ 327,641</strong>
                            <Typography component="span" color="textSecondary">   $0.25/click</Typography>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default PopularVideo;