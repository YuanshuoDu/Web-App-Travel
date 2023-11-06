// import React, {useState} from "react";
// import SignUp from "./Signup.module.css"
// import {Link,useNavigate} from "react-router-dom"

// import {useGoogleLogin} from '@react-oauth/google';
// import {useDispatch} from 'react-redux';
// import {signup, signupGoogle} from "../../redux/actions/auth";


// const InitState = {
//     firstName: "",
//     lastName: "",
//     // userName: "",
//     email: '',
//     password: '',
//     confirmPassword: ''
// }


// function Signup() {
//     const nagivate = useNavigate();
//     const dispatch = useDispatch();
//     const [sForm,
//         setsForm] = useState(InitState)

//     const handleChange = (e) => setsForm({
//         ...sForm,
//         [e.target.name]: e.target.value
//     });

//     function handleGoogleLoginSuccess(tokenResponse) {

//         const accessToken = tokenResponse.access_token;

//         dispatch(signupGoogle(accessToken,nagivate))
//     }

//     function handleOnSubmit(e) {
//         e.preventDefault();
//         if (sForm.firstName !== "" && sForm.lastName !== "" &&  sForm.password !== "" && sForm.confirmPassword !== "" && sForm.email !== "" && sForm.password === sForm.confirmPassword && sForm.password.length >= 4) {
//             dispatch(signup(sForm,nagivate))
//         }
//     }
//     // sForm.userNames !== "" &&

//     const login = useGoogleLogin({onSuccess: handleGoogleLoginSuccess});
//     return (
//         <div className={SignUp.loginContainer}>
//             <div className={SignUp.loginContainerv2}>
//                 <h1>Create your account</h1>

//                 <div className={SignUp.inputContainer}>
//                     <label>FRIST NAME</label>
//                     <input onChange={handleChange} name="firstName" placeholder="enter your first name" type="text"/>
//                 </div>
//                 <div className={SignUp.inputContainer}>
//                     <label>LAST NAME</label>
//                     <input name="lastName" onChange={handleChange} placeholder="enter your last name" type="text"/>
//                 </div>
//                 {/* <div className={SignUp.inputContainer}>
//                     <label>USER NAME</label>
//                     <input name="userName" onChange={handleChange} placeholder="enter your user name" type="text"/>
//                 </div> */}
//                 <div className={SignUp.inputContainer}>
//                     <label>EMAIL</label>
//                     <input name="email" onChange={handleChange} placeholder="enter your email" type="email"/>
//                 </div>

//                 <div className={SignUp.inputContainer}>
//                     <label>PASSWORD</label>
//                     <input name="password" onChange={handleChange} placeholder="enter your password" type="password"/>
//                 </div>

//                 <div className={SignUp.inputContainer}>
//                     <label>CONFIRM PASSWORD</label>
//                     <input name="confirmPassword" onChange={handleChange} placeholder="retype your password" type="password"/>
//                 </div>

//                 <div className={SignUp.footerContainer}>
//                         <div>
//                             Already Signed Up? <Link to="/login">Login</Link>
//                         </div>
//                         <div>
//                             <Link to="/forgotpassword">Forgot Password?</Link>
//                         </div>
//                     </div>

//                 <button onClick={handleOnSubmit} className={SignUp.loginBTN}>REGISTER</button>
//                  <span className={SignUp.or}>or</span>
//                  <button  onClick={() => login()}  className={SignUp.googleBTN}>
//                     <i class="fa-brands fa-google"></i>  Sign up with google</button>

                 
//             </div>

//         </div>
//     )
// }

// export default Signup;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { signup, signupGoogle } from "../../redux/actions/auth";
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';

const InitState = {
    firstName: "",
    lastName: "",
    // userName: "",
    email: '',
    password: '',
    confirmPassword: ''
};

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [sForm, setsForm] = useState(InitState);

    const handleChange = (e) => setsForm({
        ...sForm,
        [e.target.name]: e.target.value
    });

    function handleGoogleLoginSuccess(tokenResponse) {
        const accessToken = tokenResponse.access_token;
        dispatch(signupGoogle(accessToken, navigate));
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        if (sForm.firstName !== "" && sForm.lastName !== "" &&  sForm.password !== "" && sForm.confirmPassword !== "" && sForm.email !== "" && sForm.password === sForm.confirmPassword && sForm.password.length >= 4) {
            dispatch(signup(sForm, navigate));
        }
    }
    // sForm.userName !== "" &&

    const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 3, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate 
                // onSubmit={handleOnSubmit} 
                sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={handleChange}
                                value={sForm.firstName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                                onChange={handleChange}
                                value={sForm.lastName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleChange}
                                value={sForm.email}
                            />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="username"
                                label="User Name"
                                name="userName"
                                autoComplete="username"
                                onChange={handleChange}
                                value={sForm.userName}
                            />
                        </Grid> */}
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                onChange={handleChange}
                                value={sForm.password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                autoComplete="new-password"
                                onChange={handleChange}
                                value={sForm.confirmPassword}
                            />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid> */}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 4, mb: 1, color: 'primary', height: '50px' }}
                        onClick={handleOnSubmit}
                    >
                        Sign Up
                    </Button>
                    <Button
                        onClick={() => login()}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, mb: 2, height: '50px' }}
                        color="primary"
                        ><GoogleIcon sx={{ mr: 1 }}/>
                        Sign in with google
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Signup;
