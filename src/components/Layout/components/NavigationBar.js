import React, { useState } from 'react';
import {
    Grid,
    Menu,
    Avatar,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    makeStyles,
    Divider,
    Badge,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import {
    Menu as MenuIcon,
    Person as PersonIcon,
    VideoLibrary as VideoLibraryIcon,
    Settings as SettingsIcon,
    ExitToApp as ExitToAppIcon,
    Notifications as NotificationsIcon,
} from '@material-ui/icons';

const popupItems = [
    {
        id: 1,
        title: 'Profile',
        icon: <PersonIcon />
    },
    {
        id: 2,
        title: 'Videos',
        icon: <VideoLibraryIcon />
    },
    {
        id: 3,
        title: 'Settings',
        icon: <SettingsIcon />
    },
];

const useStyles = makeStyles(theme => ({
    appBar: {
        color: '#666666',
        background: '#ffffff',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        boxShadow: 'none',
    },
    toolbar: {
        marginLeft: 64,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    icon: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
        },
    },
    iconButton: {
        padding: 4,
    },
    list: {
        padding: 0,
    },
    red: {
        color: '#ef3637',
    },
    hideInDesktop: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const NavigationBar = ({ handleDrawerOpen }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = event => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <AppBar
            position="fixed"
            className={classes.appBar}
        >
            <Toolbar className={classes.toolbar}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item className={classes.hideInDesktop}>
                        <IconButton
                            edge="start"
                            className={classes.icon}
                            onClick={handleDrawerOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h6" noWrap>
                            Dashboard
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.iconButton}>
                            <Badge badgeContent={3} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.iconButton} onClick={handleOpen}>
                            <Avatar src="https://i.pravatar.cc/50" />
                        </IconButton>
                        <Menu
                            keepMounted
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <List className={classes.list}>
                                <ListItem>
                                    <ListItemIcon>
                                        <Avatar src="https://i.pravatar.cc/50" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Harry"
                                        secondary="harrychiu1106@gmail.com"
                                    />
                                </ListItem>
                                <Divider />
                                {popupItems.map(({ id, title, icon }) => (
                                    <ListItem button key={id}>
                                        <ListItemIcon>{icon}</ListItemIcon>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                ))}
                                <Divider />
                                <ListItem button>
                                    <ListItemIcon className={classes.red}>
                                        <ExitToAppIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Sign Out" className={classes.red} />
                                </ListItem>
                            </List>
                        </Menu>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;