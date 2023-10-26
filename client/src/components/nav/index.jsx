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
//                          <Link className={`d-block ${NavStyles.linkBTN}`} to="/account/login">Login</Link>
//                          <span className={NavStyles.or}>or</span>
//                          <Link className={NavStyles.linkBTN} to="account/signup">Singup</Link>
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

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../redux/const/actionsTypes";
import { deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  // mainNav: {
  //   backgroundColor: "black",
  //   color: "white",
  //   display: "flex",
  //   justifyContent: "space-between",
  // },
  // title: {
  //   flexGrow: 1,
  //   display: "flex",
  //   alignItems: "center",
  //   textDecoration: "none",
  //   color: "white",
  // },
  rightSideNav: {
    display: "flex",
    alignItems: "center",
  },
  rightSideNavIcon: {
    fontSize: "30px",
    marginRight: "10px",
    color: "white",
  },
  linkBTN: {
    color: "rgba(255, 255, 255, 0.5)",
    textDecoration: "none",
    marginLeft: "10px",
  },
  or: {
    display: "inline-block",
    marginLeft: "10px",
    marginRight: "10px",
    color: "white",
  },
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },


}));

function Nav(props) {
  const classes = useStyles();
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
    <AppBar position="static" className={classes.appBar}>
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Travel Planner</Typography>

        {/* <img className={classes.image} src={} alt="icon" height="60" /> */}
      </div>
      <Toolbar className={classes.toolbar}>
        {authenticated ? (
          <div className={classes.rightSideNav}>
            <i className={`fa-solid fa-user ${classes.rightSideNavIcon}`}></i>
            <div>
              <span className="d-block">Account</span>
              <div className={classes.container2}>
                <Link
                  className={`d-block ${classes.linkBTN}`}
                  to="/profile"
                >
                  Profile
                </Link>
                <span className={classes.or}>or</span>
                <Link
                  onClick={handleLogOut}
                  className={classes.linkBTN}
                  to="/"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className={classes.rightSideNav}>
            <i className={`fa-solid fa-user ${classes.rightSideNavIcon}`}></i>
            <div>
              <span className="d-block">Account</span>
              <div className={classes.container2}>
                <Link
                  className={`d-block ${classes.linkBTN}`}
                  to="/login"
                >
                  Login
                </Link>
                <span className={classes.or}>or</span>
                <Link className={classes.linkBTN} to="/signup">
                  Signup
                </Link>
              </div>
            </div>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(Nav);