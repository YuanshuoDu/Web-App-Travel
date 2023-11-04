import { useState} from "react";
import * as React from 'react';
import { Link,useNavigate } from "react-router-dom";
// import LoginStyles from "./Login.module.css"
import {useGoogleLogin} from '@react-oauth/google';
import {useDispatch} from 'react-redux';
import {signinGoogle, signin} from "../../redux/actions/auth";

// function Login() {
//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");

//     const navigate = useNavigate ()
//     const dispatch = useDispatch()


//     function handleGoogleLoginSuccess(tokenResponse) {

//         const accessToken = tokenResponse.access_token;

//         dispatch(signinGoogle(accessToken,navigate))
//     }
//     const login = useGoogleLogin({onSuccess: handleGoogleLoginSuccess});

//     function handleSubmit(e){
//         e.preventDefault();
//         if(email !== "" && password !== ""){
//             dispatch(signin({email,password}, navigate))
//         }

//     }

//     return (
//         <div className={LoginStyles.loginContainer}>
//             <div className={LoginStyles.loginContainerv2}>
//                 <h1>Welcome back</h1>

//                 <div className={LoginStyles.inputContainer}>
//                     <label>EMAIL</label>
//                     <input onChange={e=> setEmail(e.target.value)} placeholder="enter your email" type="email"/>
//                 </div>

//                 <div className={LoginStyles.inputContainer}>
//                     <label>PASSWORD</label>
//                     <input onChange={e=> setPassword(e.target.value)} placeholder="enter your password" type="password"/>
//                 </div>

//                 <div className={LoginStyles.forgetmeContainer}>
//                     <div>
//                         Remember Me <input type="checkbox" />
//                     </div>
//                     <div>
//                         <Link to="/forgotpassowrd">Forgot password?</Link>
//                     </div>
//                 </div>

//                 <button onClick={handleSubmit} className={LoginStyles.loginBTN}>LOGIN</button>
//                 <span className={LoginStyles.or}>or</span>
//                  <button onClick={() => login()} className={LoginStyles.googleBTN}>
//                     <i class="fa-brands fa-google"></i>  Sign in with google</button>
                
                    
//                     <span className={LoginStyles.notreg}>Not registered yet?  <Link className={LoginStyles.singupBTN} to="/signup">Signup</Link></span>
                    
//             </div>

//         </div>
//     )
// }

// export default Login;


// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GoogleIcon from '@mui/icons-material/Google';



function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate ()
    const dispatch = useDispatch()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


    function handleGoogleLoginSuccess(tokenResponse) {

        const accessToken = tokenResponse.access_token;

        dispatch(signinGoogle(accessToken,navigate))
    }
    const login = useGoogleLogin({onSuccess: handleGoogleLoginSuccess});

    function handleSubmit(e){
        e.preventDefault();
        if(email !== "" && password !== ""){
            dispatch(signin({email,password}, navigate))
        }

    }

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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
            fullWidth
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
        />
        <TextField
            fullWidth
            margin="normal"
            required
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
        />
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                />
                <Button
                onSubmit={handleSubmit}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Sign In
                </Button>
                
                <Button
                onClick={() => login()}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                ><GoogleIcon />
                Sign in with google
                </Button>

                <Grid container>
                <Grid item xs>
                    <Link href="/forgotpassword" variant="body2">
                    Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
        </Container>

    );
    }

export default Login;