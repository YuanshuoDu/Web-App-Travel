import React, { useEffect } from 'react';
import { AppBar, Typography, Container, Grid, Grow } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getStories } from './actions/stories';
import Stories from './components/stories/Stories';
import homeStyles from './styles';

const App = () => {
    const classes = homeStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStories());
    }, [dispatch]);

    return (
        <Container >
            <AppBar className={classes.appBar} position="sticky" color="inherit">
                <Typography className={classes.title} variant="h2" align="center">AppBar</Typography>
            </AppBar>

            <Container container className={classes.container}>
                <Grid item xs={12} sm={8}>
                    <Stories />
                </Grid>
            </Container>

        </Container>
    );
}

export default App;