import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import navStyles from './styles';

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LOGOUT } from "../../redux/const/actionsTypes";
import { deepPurple } from "@material-ui/core/colors";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const pages = ["Contact"];

function Nav(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const classes = navStyles();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Logic for checking if the user is authenticated
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (props.auth.authData) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [props.auth]);

  function handleLogOut(e) {
    e.preventDefault();
    dispatch({ type: LOGOUT });
  }

  const goHome = () => navigate('/');

  return (
    <AppBar position="static" className={classes.appBar}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        display: 'flex',
        flexDirection: 'row'
      }}>

      <div className={classes.home}>
        <IconButton
          aria-label="home"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={goHome}
          color="inherit"
          sx={{ paddingLeft: 4, paddingTop: 4, paddingBottom: 4 }}
        >
          <HomeIcon fontSize="large" />
        </IconButton>

        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            ml: 2,
            mr: 2,
            mt: 5,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'inherit',
            fontWeight: 700,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
            alignContent: 'center'

          }}
        >
          Stories
        </Typography>
      </div>

      {authenticated ? (
        <div>
          <Tooltip title="Options">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 4 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >

            <MenuItem component={Link} to="/profile" onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Profile </Typography>
            </MenuItem>
            <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
          </Menu>
        </div>
      ) : (
        <div>
          <Button href="/login" variant="contained"
            color="inherit"
            style={{ background: '#E7AC72' }}
            startIcon={<AccountCircleIcon />} sx={{ my: 5, mx: 2 }}>
            Log In
          </Button>
        </div>
      )}
      {/* </Toolbar>
        </Box>*/}

    </AppBar>
  );
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(Nav);
