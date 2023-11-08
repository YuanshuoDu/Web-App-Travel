import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import homeStyles from "./styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LOGOUT } from "../../redux/const/actionsTypes";
import { deepPurple } from "@material-ui/core/colors";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import { Grid } from "@mui/material";

const pages = ["Contact"];

function Nav(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const classes = homeStyles();

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

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        // backgroundColor: 'transparent',
        borderRadius: "30px",
        // boxShadow: 'none',
      }}
    >
      <Container maxWidth="xl">
        {/* <Toolbar disableGutters> */}
        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
        <HomeIcon
          fontSize="large"
          sx={{ display: { xs: "none", md: "flex" }, mr: 1, ml: 5 }}
        />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            ml: 2,
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "inherit",
            fontWeight: 700,
            letterSpacing: ".2rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Travel Planner
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                ml: 2,
                my: 2,
                color: "white",
                display: "block",
                letterSpacing: ".2rem",
              }}
            >
              {page}
            </Button>
          ))}
        </Box>

        <Box>
          <Toolbar title="Open settings">
            {authenticated ? (
              <div>
                <div>
                  <div>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/2.jpg"
                        />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <MenuItem
                        component={Link}
                        to="/profile"
                        onClick={handleCloseUserMenu}
                      >
                        <Typography textAlign="center"> profile </Typography>
                      </MenuItem>
                      <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                    </Menu>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <i className="fa-solid fa-user"></i>
                <div>
                  <Typography>Account</Typography>
                  <div>
                    <Button
                      href="/login"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      startIcon={<AccountCircleIcon />}
                      sx={{ my: 5, mx: 2 }}
                    >
                      Sign In
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(Nav);
