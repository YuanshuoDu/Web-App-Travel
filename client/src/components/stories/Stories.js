import React from 'react';
import Story from './story/Story';
import storiesStyles from './styles';
import { CircularProgress, Grid, Typography } from '@material-ui/core';

const Stories = ({ setCurrentId, stories, isLoading }) => {
    const classes = storiesStyles();
    if (!Array.isArray(stories)) {
        return <div className={classes.containerProgress}><CircularProgress style={{ color: 'white' }} /></div>
    }

    if (!stories.length && !isLoading) {
        return <div className={classes.containerProgress}><Typography variant="h6">No stories found</Typography></div>;
    }

    return (
        isLoading ? <div className={classes.containerProgress}><CircularProgress style={{ color: 'white' }} /></div> : (
            <Grid className={classes.container} container alignItems="stretch">
                {stories?.map((story) => (
                    <Grid key={story._id} item xs={12} sm={9} md={6} lg={3}>
                        <div className={classes.story}><Story key={story._id} story={story} setCurrentId={setCurrentId} /></div>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Stories;