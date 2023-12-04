import { useState} from "react";
import * as React from 'react';
import { Link, useNavigate } from "react-router-dom";

import {useGoogleLogin} from '@react-oauth/google';
import {useDispatch} from 'react-redux';
import {signinGoogle, signin} from "../../redux/actions/auth";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GoogleIcon from '@mui/icons-material/Google';
import Nav from "../nav"
import homeStyles from './styles';



function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const classes = homeStyles();

    const navigate = useNavigate ();
    const dispatch = useDispatch();

    const handleEmailSubmit = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordSubmit = (e) => {
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
        } else {
            alert("Please fill in all the fields. Email and password are required.")
        }
    }

    return (
        // <div>
        //     <Nav />
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
            onChange={handleEmailSubmit}
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
            onChange={handlePasswordSubmit}
        />
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                />
                <Button
                onClick={handleSubmit}
                type="submit"
                fullWidth
                variant="contained"
                className={classes.button}
                sx={{ mt: 2, mb: 1, color: 'primary', height: '50px' }}
                >
                Sign In
                </Button>
                
                <Button
                onClick={() => login()}
                type="submit"
                fullWidth
                variant="contained"
                className={classes.button}
                sx={{ mt: 1, mb: 2, color: 'primary', height: '50px' }}
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
        // </div>

    );
    }

export default Login;