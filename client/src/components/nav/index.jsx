// import React from "react";
// import NavStyles from "./Nav.module.css"
// import {Link} from "react-router-dom"
// import {connect} from "react-redux"
// import {useEffect, useState} from "react";
// import {useDispatch} from "react-redux"
// import {LOGOUT} from "../../redux/const/actionsTypes"

// function Nav(props) {
//     const dispatch = useDispatch();
//     const [authenticated,
//         setAuthenticated] = useState(false)

//     useEffect(() => {
//         if (props.auth.authData) {
//             setAuthenticated(true)
//         } else {
//             setAuthenticated(false)
//         }
//     }, [props.auth])

//     function handleLogOut(e) {
//         e.preventDefault()

//         dispatch({type: LOGOUT})
//     }
//     return (
//         <nav className={NavStyles.mainNav}>
//             <div>
//                 <h3>Travel Planner</h3>
//             </div>
//             <div>
//                 {authenticated ?
//                  <div className={NavStyles.rightSideNav}>
//                  <i class="fa-solid fa-user"></i>
//                  <div>
//                      <span className="d-blcok">Account</span>
//                      <div className={NavStyles.container2}>
//                          <Link className={`d-block ${NavStyles.linkBTN}`} to="/account/profile">Profile</Link>
//                          <span className={NavStyles.or}>or</span>
//                          <Link onClick={handleLogOut} className={NavStyles.linkBTN} to="/">Logout</Link>
//                      </div>
                 
//                  </div>
//              </div>
//                  : 
//                  <div className={NavStyles.rightSideNav}>
//                  <i class="fa-solid fa-user"></i>
//                  <div>
//                      <span className="d-blcok">Account</span>
//                      <div className={NavStyles.container2}>
//                          <Link className={`d-block ${NavStyles.linkBTN}`} to="/login">Login</Link>
//                          <span className={NavStyles.or}>or</span>
//                          <Link className={NavStyles.linkBTN} to="/signup">Singup</Link>
//                      </div>
                 
//                  </div>
//              </div>
//                 }
              
//             </div>

//         </nav>
//     )
// }

// const mapStateToProps = state => ({auth: state.auth});

// export default connect(mapStateToProps)(Nav);

// import React, { useState, useEffect } from "react";
// import { makeStyles } from '@mui/styles';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { LOGOUT } from "../../redux/const/actionsTypes";
// import { useStyles} from "./Nav.module.css"

// const useStyles = makeStyles((theme) => ({
//   mainNav: {
//     backgroundColor: 'black',
//   },
//   title: {
//     flexGrow: 1,
//     display: 'flex',
//     alignItems: 'center',
//     textDecoration: 'none',
//     color: 'white',
//   },
//   rightSideNav: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   rightSideNavIcon: {
//     fontSize: '30px',
//     marginRight: '10px',
//     color: 'white',
//   },
//   linkBTN: {
//     color: 'rgba(255, 255, 255, 0.5)',
//     textDecoration: 'none',
//     marginLeft: '10px',
//   },
//   or: {
//     display: 'inline-block',
//     marginLeft: '10px',
//     marginRight: '10px',
//     color: 'white',
//   },
// }));

// function Nav(props) {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     if (props.auth.authData) {
//       setAuthenticated(true);
//     } else {
//       setAuthenticated(false);
//     }
//   }, [props.auth]);

//   function handleLogOut(e) {
//     e.preventDefault();
//     dispatch({ type: LOGOUT });
//   }

//   return (
//     <AppBar position="static" className={classes.mainNav}>
//       <Toolbar>
//         <Typography variant="h6" className={classes.title}>
//           Travel Planner
//         </Typography>
//         {authenticated ? (
//           <div className={classes.rightSideNav}>
//             <i className={`fa-solid fa-user ${classes.rightSideNavIcon}`}></i>
//             <div>
//               <span className="d-block">Account</span>
//               <div className={classes.container2}>
//                 <Link className={`d-block ${classes.linkBTN}`} to="/account/profile">Profile</Link>
//                 <span className={classes.or}>or</span>
//                 <Link onClick={handleLogOut} className={classes.linkBTN} to="/">Logout</Link>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className={classes.rightSideNav}>
//             <i className={`fa-solid fa-user ${classes.rightSideNavIcon}`}></i>
//             <div>
//               <span className="d-block">Account</span>
//               <div className={classes.container2}>
//                 <Link className={`d-block ${classes.linkBTN}`} to="/account/login">Login</Link>
//                 <span className={classes.or}>or</span>
//                 <Link className={classes.linkBTN} to="account/signup">Signup</Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }

// const mapStateToProps = (state) => ({ auth: state.auth });

// export default connect(mapStateToProps)(Nav);


// import * as React from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

// import {LOGOUT} from "../../redux/const/actionsTypes"
// import { useDispatch } from 'react-redux';

// function Nav({ auth }) {

//   const dispatch = useDispatch();

//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     dispatch({ type: LOGOUT });
//     handleClose();
//   }

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6">Travel Planner</Typography>
        
//         {auth.isAuthenticated ? (
//           <UserProfileDropdown 
//             handleMenu={handleMenu}
//             anchorEl={anchorEl}
//             handleClose={handleClose}
//             handleLogout={handleLogout} 
//           />
//         ) : (
//           <LoginButtons />  
//         )}

//       </Toolbar>
//     </AppBar>
//   );
// }

// function UserProfileDropdown({
//   handleMenu,
//   anchorEl, 
//   handleClose,
//   handleLogout
// }) {

//   return (
//     <>
//       <IconButton
//         onClick={handleMenu}
//       >
//         <AccountCircle />  
//       </IconButton>

//       <Menu
//         anchorEl={anchorEl}
//         open={!!anchorEl}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={handleClose}>Profile</MenuItem> 
//         <MenuItem onClick={handleLogout}>Logout</MenuItem>
//       </Menu>
//     </>
//   );
// }

// function LoginButtons() {
//   return (
//     <>
//       <Link component="button" to="/login">
//         Login
//       </Link>
      
//       <Link component="button" to="/signup">
//         Signup  
//       </Link>
//     </>
//   )
// }

// const mapStateToProps = state => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps)(Nav);

// import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { useDispatch } from "react-redux";
// import { LOGOUT } from "../../redux/const/actionsTypes";
// import { deepPurple } from "@material-ui/core/colors";

// const useStyles = makeStyles((theme) => ({
//   // mainNav: {
//   //   backgroundColor: "black",
//   //   color: "white",
//   //   display: "flex",
//   //   justifyContent: "space-between",
//   // },
//   // title: {
//   //   flexGrow: 1,
//   //   display: "flex",
//   //   alignItems: "center",
//   //   textDecoration: "none",
//   //   color: "white",
//   // },
//   rightSideNav: {
//     display: "flex",
//     alignItems: "center",
//   },
//   rightSideNavIcon: {
//     fontSize: "30px",
//     marginRight: "10px",
//     color: "white",
//   },
//   linkBTN: {
//     color: "rgba(255, 255, 255, 0.5)",
//     textDecoration: "none",
//     marginLeft: "10px",
//   },
//   or: {
//     display: "inline-block",
//     marginLeft: "10px",
//     marginRight: "10px",
//     color: "white",
//   },
//   appBar: {
//     borderRadius: 15,
//     margin: '30px 0',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '10px 50px',
//   },
//   heading: {
//     color: 'rgba(0,183,255, 1)',
//     textDecoration: 'none',
//   },
//   image: {
//     marginLeft: '15px',
//   },
//   toolbar: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     width: '400px',
//   },
//   profile: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: '400px',
//   },
//   userName: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   brandContainer: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   purple: {
//     color: theme.palette.getContrastText(deepPurple[500]),
//     backgroundColor: deepPurple[500],
//   },


// }));

// function Nav(props) {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     if (props.auth.authData) {
//       setAuthenticated(true);
//     } else {
//       setAuthenticated(false);
//     }
//   }, [props.auth]);

//   function handleLogOut(e) {
//     e.preventDefault();
//     dispatch({ type: LOGOUT });
//   }

//   return (
// //     <AppBar position="static" className={classes.appBar}>
// //       <div className={classes.brandContainer}>
// //         <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Travel Planner</Typography>

// //         {/* <img className={classes.image} src={} alt="icon" height="60" /> */}
// //       </div>
// //       <Toolbar className={classes.toolbar}>
// //         {authenticated ? (
// //           <div className={classes.rightSideNav}>
// //             <i className={`fa-solid fa-user ${classes.rightSideNavIcon}`}></i>
// //             <div>
// //               <span className="d-block">Account</span>
// //               <div className={classes.container2}>
// //                 <Link
// //                   className={`d-block ${classes.linkBTN}`}
// //                   to="/profile"
// //                 >
// //                   Profile
// //                 </Link>
// //                 <span className={classes.or}>or</span>
// //                 <Link
// //                   onClick={handleLogOut}
// //                   className={classes.linkBTN}
// //                   to="/"
// //                 >
// //                   Logout
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         ) : (
// //           <div className={classes.rightSideNav}>
// //             <i className={`fa-solid fa-user ${classes.rightSideNavIcon}`}></i>
// //             <div>
// //               <span className="d-block">Account</span>
// //               <div className={classes.container2}>
// //                 <Link
// //                   className={`d-block ${classes.linkBTN}`}
// //                   to="/login"
// //                 >
// //                   Login
// //                 </Link>
// //                 <span className={classes.or}>or</span>
// //                 <Link className={classes.linkBTN} to="/signup">
// //                   Signup
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </Toolbar>
// //     </AppBar>
// //   );
// // }

//     <AppBar position="static">
//     <div>
//       <Typography component={Link} to="/" variant="h2" align="center">Travel Planner</Typography>
//     </div>
//     <Toolbar>
//       {authenticated ? (
//         <div>
//           <i className="fa-solid fa-user"></i>
//           <div>
//             <span>Account</span>
//             <div>
//               <Link to="/profile">Profile</Link>
//               <span>or</span>
//               <Link onClick={handleLogOut} to="/">Logout</Link>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <i className="fa-solid fa-user"></i>
//           <div>
//             <span>Account</span>
//             <div>
//               <Link to="/login">Login</Link>
//               <span>or</span>
//               <Link to="/signup">Signup</Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </Toolbar>
//     </AppBar>
//     );
//   }




// const mapStateToProps = (state) => ({ auth: state.auth });

// export default connect(mapStateToProps)(Nav);

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
import homeStyles from './styles';

// import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { useDispatch } from "react-redux";
import { LOGOUT } from "../../redux/const/actionsTypes";
import { deepPurple } from "@material-ui/core/colors";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { Grid } from '@mui/material';



const pages = ['Contact'];

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
    <AppBar position="static" sx={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      // backgroundColor: 'transparent', 
      borderRadius: '30px',
      // boxShadow: 'none',
    }}>
      <Container maxWidth="xl">
        {/* <Toolbar disableGutters> */}
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <HomeIcon fontSize="large" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, ml: 5, }}/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 2,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'inherit',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
      
            }}
          >
            Stories
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"
                  >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ ml: 2, my: 2, color: 'white', display: 'block', letterSpacing: '.2rem', }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
              {authenticated ? (
                // Render the authenticated settings menu
                
                settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))
              ) : (
                // Render the unauthenticated settings menu
                <div>
                  <MenuItem>
                    <Typography textAlign="center">
                      <Link to="/login">Login</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign="center">
                      <Link to="/signup">Signup</Link>
                    </Typography>
                  </MenuItem>
                  <Button href="/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                 Login
                  </Button>
                </div>
              )}
            </Menu>
          </Box> */}

{/* <Typography variant="subtitle1">
              Welcome, {props.auth.authData.email}
              </Typography> */}

    <Box >
    <Toolbar title="Open settings">
    {authenticated ? (
            <div>
              <div>
                <div>
                
                <Tooltip title="Open settings">
                
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
                <Button href="/login" variant="contained" 
                  color="primary" 
                  className={classes.button}
                  startIcon={<AccountCircleIcon />} sx={{ my: 5, mx: 2 }}>
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