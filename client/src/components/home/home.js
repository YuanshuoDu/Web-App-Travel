import React, { useEffect } from 'react';
import { AppBar, Typography, Container, Grid, Grow, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import { getStories } from '../../actions/stories';
import Stories from '../stories/Stories';
import homeStyles from './styles';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const classes = homeStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getStories());
    }, [dispatch]);

    const openCreateStoryScreen = () => navigate('/createStory');
    

    return (
        <Container maxWidth="xl">
            <AppBar className={classes.appBar} position="sticky" color="inherit">
                <Typography className={classes.title} variant="h2" align="center">AppBar</Typography>
            </AppBar>
            <Button
                className={classes.button}
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={openCreateStoryScreen}
            >
                CREATE STORY
            </Button>

            <Container container className={classes.container}>
                <Grid item xs={12} sm={8}>
                    <Stories />
                </Grid>
            </Container>

        </Container>
    );
}

export default Home;