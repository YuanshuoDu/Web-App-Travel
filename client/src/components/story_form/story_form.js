import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Container, Button, TextField, Paper, Grid, Divider } from '@material-ui/core';
import storyFormStyles from './styles';
import ChipInput from 'material-ui-chip-input';
import FileBase from 'react-file-base64';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createStory } from '../../redux/actions/stories';
import { updateStory } from '../../api';
import { getStory } from '../../redux/actions/stories';
import backgroundImage from '../../images/background.png';
import Nav from "../nav"
import { Alert, AlertTitle } from '@mui/material';

import Login from "../login";


const StoryForm = ({ currentId, setCurrentId }) => {
    const { id } = useParams();
    const classes = storyFormStyles();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { selectedStory, stories, isLoading, error } = useSelector((state) => state.stories);
    const authData = useSelector((state) => state.auth.authData);

    useEffect(() => {
        if (id) {
            dispatch(getStory(id));
        }

    }, [id]);

    const [storyData, setStoryData] = useState({ creator: '', title: '', message: '', country: '', city: '', tags: [], selectedPicture: '' });

    useEffect(() => {
        if (id && selectedStory) {
            setStoryData({
                creator: selectedStory.creator || '',
                title: selectedStory.title || '',
                message: selectedStory.message || '',
                country: selectedStory.country || '',
                city: selectedStory.city || '',
                tags: selectedStory.tags || [],
                selectedPicture: selectedStory.selectedPicture || '',
                likeCount: selectedStory.likeCount || 0,
                createdAt: selectedStory.createdAt || Date()
            });
        }
    }, [selectedStory]);


    const handleCreate = (e) => {
        e.preventDefault();
        navigate(-1);
        if (id) {
            dispatch(updateStory(id, storyData));
        } else {
            dispatch(createStory(storyData));
        }
   
    };

  const handleGoBack = () => {
    navigate(-1);
  };

  const addTag = (tag) => {
    setStoryData({ ...storyData, tags: [...storyData.tags, tag] });
  };

  const deleteTag = (deleteTag) => {
    setStoryData({
      ...storyData,
      tags: storyData.tags.filter((tag) => tag !== deleteTag),
    });
  };

  // check if the user is authenticated
  const isAuthenticated = !!authData; // if authData is exist, then user is authenticated

  if (isAuthenticated) {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Container maxWidth="xl">
                <Container maxWidth="lg">
                    <Nav />
                    <main>
                        <div style={{ marginTop: '60px' }} />
                        <Paper className={classes.paper} elevation={4}>
                            <form autoComplete="off" noValidate className={`${classes.container} ${classes.form}`}>
                                <Typography className={classes.createStory} variant="h6">{id ? 'Edit a story' : 'Creating new story'}</Typography>
                                <TextField name="title" variant="outlined" label="Title" fullWidth value={storyData.title} onChange={(e) => setStoryData({ ...storyData, title: e.target.value })} />
                                <Grid container item xs={12} spacing={2} justifyContent="space-between">
                                    <Grid item xs={6}>
                                        <TextField name="country" variant="outlined" label="Country" fullWidth value={storyData.country} onChange={(e) => setStoryData({ ...storyData, country: e.target.value })} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField name="city" variant="outlined" label="City" fullWidth value={storyData.city} onChange={(e) => setStoryData({ ...storyData, city: e.target.value })} />
                                    </Grid>
                                </Grid>
                                <TextField name="message" variant="outlined" label="Message" fullWidth multiline minRows={4} value={storyData.message} onChange={(e) => setStoryData({ ...storyData, message: e.target.value })} />
                                <div style={{ padding: '5px 8px', width: '100%' }}>
                                    <ChipInput
                                        name="tags"
                                        variant="outlined"
                                        label="Tags"
                                        fullWidth
                                        value={storyData.tags}
                                        onAdd={(chip) => addTag(chip)}
                                        onDelete={(chip) => deleteTag(chip)}
                                    />
                                </div>
                                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setStoryData({ ...storyData, selectedPicture: base64 })} style={{ fontSize: '10px' }} /></div>
                                <Button className={classes.submitButton} variant="contained" color="primary" size="large" type="submit" fullWidth onClick={handleCreate}>{id ? 'Edit story' : 'Create story'}</Button>
                                <Button className={classes.cancelButton} variant="contained" color="grey" size="large" fullWidth onClick={handleGoBack}>Cancel</Button>
                            </form>
                        </Paper>
                        <Divider style={{ margin: '40px' }} />
                    </main>
                </Container>
            </Container>
        </div>
    );
  } else {
    return (
    <div>
        <Alert severity="warning">
  <AlertTitle>Info</AlertTitle>
  Please <strong>log in</strong> to access this page - check it out!
  </Alert>
      <Login />
    </div>
    )
  }
};


export default StoryForm;

