import React, { useState } from 'react';
import clsx from 'clsx';
import {
    Drawer,
    Divider,
    List,
    ListItem,
    Tooltip,
    useTheme,
    makeStyles,
    useMediaQuery,
    ListItemText,
} from '@material-ui/core';
import {
    PieChart as PieChartIcon,
    Forum as ForumIcon,
    MenuBook as MenuBookIcon,
    EventNote as EventNoteIcon,
    Extension as ExtensionIcon,
} from '@material-ui/icons';

const listItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <PieChartIcon />,
    },
    {
        id: 2,
        title: 'Conversations',
        icon: <ForumIcon />,
    },
    {
        id: 3,
        title: 'Library',
        icon: <MenuBookIcon />,
    },
    {
        id: 4,
        title: 'Calendar',
        icon: <EventNoteIcon />,
    },
];

const useStyles = makeStyles(theme => ({
    toolbar: {
        display: 'flex',
        color: '#666666',
        alignItems: 'center',
        justifyContent: 'center',
        // 使 toolbar 和 NavigationBar 相同高度
        ...theme.mixins.toolbar,
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'flex-start',
        },
    },
    listItem: {
        display: 'flex',
        justifyContent: 'center',
        color: '#666666',
        width: 64,
        height: 56,
        [theme.breakpoints.down('sm')]: {
            width: 280,
            justifyContent: 'flex-start',
        },
    },
    listItemText: {
        marginLeft: theme.spacing(2),
    },
    active: {
        color: '#107ae4',
        borderRight: '3px solid #107ae4',
        [theme.breakpoints.down('sm')]: {
            borderRight: 'none',
        },
    },
}));

const NavigationDrawer = ({ open, handleDrawerClose }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [selected, setSelected] = useState(1);
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleSelected = id => setSelected(id);

    return (
        <Drawer
            open={open}
            anchor="left"
            variant={isMobile ? null : "permanent"}
            onClose={handleDrawerClose}
        >
            <div className={classes.toolbar}>
                <ListItem button className={classes.listItem}>
                    <ExtensionIcon />
                    {isMobile && (
                        <ListItemText className={classes.listItemText} primary="React Dashboard" />
                    )}
                </ListItem>
            </div>
            <Divider />
            <List>
                {listItems.map(({ id, title, icon }) => (
                    <Tooltip key={id} title={title} placement="right" arrow>
                        <ListItem
                            button
                            onClick={() => handleSelected(id)}
                            className={clsx(classes.listItem, id === selected ? classes.active : null)}
                        >
                            {icon}
                            {isMobile && (
                                <ListItemText className={classes.listItemText} primary={title} />
                            )}
                        </ListItem>
                    </Tooltip>
                ))}
            </List>
        </Drawer>
    );
};

export default NavigationDrawer;