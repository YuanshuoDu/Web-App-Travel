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
// import backgroundImage from '../../../public/images/background.png';
import backgroundImage  from '../../images/background.png';


const Home = () => {
    const classes = homeStyles();
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getStories());
    }, [dispatch]);

    const openCreateStoryScreen = () => navigate('/createStory');

    return (
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
                {/* <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                >
                Album layout
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Something short and leading about the collection below—its contents,
                the creator, etc. Make it short and sweet, but not too short so folks
                don&apos;t simply skip over it entirely.
                </Typography> */}
                <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
                >

            
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={openCreateStoryScreen}
                >
                    CREATE STORY
                </Button>

                </Stack>
            </Container>
            

            {/* End hero unit */}



            
        </main>
        
        
    </Container>
    <Stories setCurrentId={setCurrentId} />
    </Box>

    );
}

export default Home;