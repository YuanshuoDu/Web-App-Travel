import React, { useEffect, useState } from 'react';
import { AppBar, Typography, Container, Grid, Grow, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import { getStories } from '../../redux/actions/stories';
import Stories from '../stories/Stories';
import homeStyles from './styles';
import { useNavigate } from 'react-router-dom';
import Nav from "../nav"
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import backgroundImage from '../../images/background.png';
import { LOGOUT } from "../../redux/const/actionsTypes";
import { connect } from "react-redux";




const Home = (props) => {
    const classes = homeStyles();
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Logic for checking if the user is authenticated
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        dispatch(getStories());
    }, [dispatch]);

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

    const openCreateStoryScreen = () => navigate('/createStory');

    return (
        <Container maxWidth="xl">

            <Box
                sx={{
                    ml: 0,
                    mr: 0,
                    pt: 8,
                    pb: 6,
                    background: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    maxWidth: '100%',
                 
                }}
            >

                <Container maxWidth="lg">

                    {/* <AppBar className={classes.appBar} position="sticky" color="inherit">
                <Typography className={classes.title} variant="h2" align="center">AppBar</Typography>
            </AppBar> */}
                    <Nav />
                    <main>
                        {/* Hero unit */}
                        {/* <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}
            > */}

                        <div style={{ marginTop: '60px' }} />
                        <Container maxWidth="sm">
                            <Typography

                                component="h1"
                                variant="h2"
                                align="center"
                                color="black"
                                gutterBottom
                            >
                                Welcome to Stories
                            </Typography>
                            {<Typography variant="h5" align="center" color="black" paragraph>
                                Your passport to a world of adventure and inspiration
                            </Typography>}

                            <Stack
                                sx={{ pt: 4 }}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                            >
                                <div>
                                    {authenticated ? (
                                        <Button
                                            className={classes.button}
                                            variant="contained"
                                            color="primary"
                                            startIcon={<AddIcon />}
                                            onClick={openCreateStoryScreen}
                                        >
                                            Create Story
                                        </Button>
                                    ) : (
                                        <p></p>
                                    )}
                                </div>


                            </Stack>
                        </Container>
                    </main>

                </Container>
                <Stories setCurrentId={setCurrentId} />
            </Box>
        </Container>

    );
}

const mapStateToProps = (state) => ({ auth: state.auth });

// export default Home;
export default connect(mapStateToProps)(Home);
