import React, { useState } from 'react';
import { AppBar, Typography, Container, Button, TextField, Paper, Grid } from '@material-ui/core';
import storyFormStyles from './styles';
import ChipInput from 'material-ui-chip-input';
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';


const CreateStory = () => {
    const classes = storyFormStyles();
    const [storyData, setStoryData] = useState({ title: '', message: '', country: '', city: '', tags: [], selectedPicture: '' });

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const addTag = (tag) => {
        setStoryData({ ...storyData, tags: [...storyData.tags, tag] });
    };

    const deleteTag = (deleteTag) => {
        setStoryData({ ...storyData, tags: storyData.tags.filter((tag) => tag !== deleteTag) });
    };


    return (
        <Container >
            <AppBar className={classes.appBar} position="sticky" color="inherit">
                <Typography className={classes.title} variant="h2" align="center">AppBar</Typography>
            </AppBar>
            <Paper className={classes.paper} elevation={4}>
                <form autoComplete="off" noValidate className={`${classes.container} ${classes.form}`}>
                    <Typography className={classes.createStory} variant="h6">{'Creating new Story'}</Typography>
                    <TextField name="title" variant="outlined" label="Title" fullWidth value={storyData.title} onChange={(e) => setStoryData({ ...storyData, title: e.target.value })} />
                    <Grid container item xs={12} spacing={2} justifyContent="space-between">
                        <Grid item xs={6}>
                            <TextField name="country" variant="outlined" label="Country" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField name="city" variant="outlined" label="City" fullWidth />
                        </Grid>
                    </Grid>
                    <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={storyData.message} onChange={(e) => setStoryData({ ...storyData, message: e.target.value })} />
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
                    <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setStoryData({ ...storyData, selectedPicture: base64 })} /></div>
                    <Button className={classes.submitButton} variant="contained" color="primary" size="large" type="submit" fullWidth>Create Story</Button>
                    <Button className={classes.cancelButton} variant="contained" color="secondary" size="large" onClick={handleGoBack} fullWidth>Cancel</Button>
                </form>
            </Paper>
        </Container>
    );
}

export default CreateStory;