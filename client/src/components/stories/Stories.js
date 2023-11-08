import React from 'react';
import { useSelector } from 'react-redux';
import Story from './story/Story';
import storiesStyles from './styles';
import { CircularProgress, Grid, Typography } from '@material-ui/core';

const Stories = ({ setCurrentId }) => {
    const { stories, isLoading } = useSelector((state) => state.stories);
    const classes = storiesStyles();

    if (!stories.length && !isLoading) return <div className={classes.containerProgress}><Typography variant="h6">No stories found</Typography></div>;

    return (
        isLoading ? <div className={classes.containerProgress}><CircularProgress /*color="white"*/ style={{ color: 'white' }}/></div> : (
                <Grid className={classes.container} styles container alignItems="stretch">
                    {stories?.map((story) => (
                        <Grid key={story._id} item xs={12} sm={5} md={4} lg={2} className={classes.storyItem}>
                            <Story key={story._id} story={story} setCurrentId={setCurrentId} />
                        </Grid>
                    ))}
                </Grid>
        )
    );
}

export default Stories;