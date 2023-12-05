import { useNavigate } from "react-router-dom";
import useStyles from './styles';
import React from 'react';
import {
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
  } from "@material-ui/core";
  import { makeStyles } from "@material-ui/core/styles";
  import InboxIcon from "@material-ui/icons/MoveToInbox";
  import MailIcon from "@material-ui/icons/Mail";
  // import { useNavigate } from "react-router-dom"; // Import useNavigate

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import SyncLockIcon from '@mui/icons-material/SyncLock';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddHomeIcon from '@mui/icons-material/AddHome';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import Nav from "../nav"


  
//   const Drawer = () => {
//     const navigate = useNavigate(); // useNavigate hook
//     const classes = useStyles();
//     const itemsList = [
//       {
//         text: "Home",
//         icon: <InboxIcon />,
//         onClick: () => navigate("/")
//       },
//       {
//         text: "Account Settings",
//         icon: <MailIcon />,
//         onClick: () => navigate("/profile/accountsettings")
//       },
//       {
//         text: "Change Password",
//         icon: <MailIcon />,
//         onClick: () => navigate("/profile/changepassword")
//       }
//     ];
  
//     return (
//       <MUIDrawer variant="permanent" className={classes.drawer}>
//         <List>
//           {itemsList.map((item, index) => {
//             const { text, icon, onClick } = item;
//             return (
//               <ListItem button key={text} onClick={onClick}>
//                 {icon && <ListItemIcon>{icon}</ListItemIcon>}
//                 <ListItemText primary={text} />
//               </ListItem>
//             );
//           })}
//         </List>
//       </MUIDrawer>
//     );
//   };
  
//   export default Drawer;


  const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const navigate = useNavigate(); // useNavigate hook

  const itemsList = [
          {
            text: "Home",
            icon: <AddHomeIcon />,
            onClick: () => navigate("/")
          },
          {
            text: "Create Collection",
            icon: <AddToPhotosIcon />,
            onClick: () => navigate("/profile/createcollection")
          },
          {
            text: "Like Collection",
            icon: <FavoriteIcon />,
            onClick: () => navigate("/profile/likecollection")
          },
          {
            text: "Account Settings",
            icon: <SettingsIcon />,
            onClick: () => navigate("/profile/accountsettings")
          },

        ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
        {/* <Nav   position="fixed" open={open} /> */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
Welcome to Profile  </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

        {itemsList.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={item.onClick}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        
        </List>
        <Divider />
   
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader /> */}
      </Box>
    </Box>
  );
}
  