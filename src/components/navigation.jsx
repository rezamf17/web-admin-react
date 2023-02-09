import React, { useState } from 'react'
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
    IconButton,
    AppBar,
    Toolbar,
    Typography,
    Button,
    Grid,
} from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';

const drawerWidth = 240;
const Navigation = () => {
    const [open, setOpen] = useState(true);
    const theme = useTheme();

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
      };
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));
    return (
        <div>
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{ backgroundColor: '#b2102f' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        {/* <MenuIcon /> */}
                        <ChevronRightIcon />
                    </IconButton>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h6" noWrap component="div" align="center">
                                Web Admin
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                    </Grid>
                    <Button variant="contained" sx={{ backgroundColor: '#b2102f' }}>Logout</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))} */}
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/">
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home"></ListItemText>
                        </ListItemButton>
                        {/* <ListItemButton component={Link} to="/free-fire">
              <ListItemIcon>
              <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Free Fire"></ListItemText>
            </ListItemButton> */}
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/free-fire">
                            <ListItemIcon>
                                <WhatshotIcon />
                            </ListItemIcon>
                            <ListItemText primary="Free Fire"></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}

export default Navigation