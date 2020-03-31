import React from 'react';
import {
    makeStyles,
    CssBaseline,
} from '@material-ui/core';

import NavigationBar from './components/NavigationBar';
import NavigationDrawer from './components/NavigationDrawer';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background: '#f4f7fd',
    },
    content: {
        width: '100%',
        marginLeft: 64,
        padding: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            padding: theme.spacing(1),
        },
    },
    toolbar: {
        // 使 toolbar 和 NavigationBar 相同高度
        ...theme.mixins.toolbar,
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
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
};

export default Layout;