import React from 'react';
import {
    Grid,
    makeStyles,
    CssBaseline,
    Typography,
    Divider,
} from '@material-ui/core';

import NavigationBar from './components/NavigationBar';
import NavigationDrawer from './components/NavigationDrawer';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background: '#f4f7fd',
    },
    main: {
        width: '100%',
        marginLeft: 64,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    content: {
        padding: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1),
        },
    },
    toolbar: {
        // 使 toolbar 和 NavigationBar 相同高度
        ...theme.mixins.toolbar,
    },
    footer: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(1, 0),
        background: '#ffffff',
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    },
    divider: {
        margin: theme.spacing(0, 2),
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    link: {
        textDecoration: 'none',
        color: '#107ae4',
    },
}));

const Layout = ({ children }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavigationBar
                open={open}
                handleDrawerOpen={handleDrawerOpen}
            />
            <NavigationDrawer
                open={open}
                handleDrawerClose={handleDrawerClose}
            />
            <main className={classes.main}>
                <div className={classes.toolbar} />
                <div className={classes.content}>
                    {children}
                </div>
                <footer className={classes.footer}>
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={12} sm="auto">
                            <Typography variant="subtitle1" align="center">
                                UI Designed by <a className={classes.link} href="https://dribbble.com/filipjustic">Filip Justić</a>
                            </Typography>
                        </Grid>
                        <Divider orientation="vertical" flexItem className={classes.divider} />
                        <Grid item xs={12} sm="auto">
                            <Typography variant="subtitle1" align="center">
                                Coded by <a className={classes.link} href="https://github.com/harry-chiu">Harry Chiu</a>
                            </Typography>
                        </Grid>
                    </Grid>
                </footer>
            </main>
        </div>
    );
};

export default Layout;