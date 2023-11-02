import React from 'react';
import { useSelector } from 'react-redux';
import Story from './story/Story';
import storiesStyles from './styles';
import { CircularProgress, Grid } from '@material-ui/core';

const Stories = ({ setCurrentId }) => {
    const stories = useSelector((state) => state.stories);
    const classes = storiesStyles();

    //if (!stories.length && !isLoading) return 'No stories found';

    return (
        stories.length == 0 ? <div className={classes.containerProgress}><CircularProgress /></div> : (
           
                <Grid className={classes.container} container alignItems="stretch">
                    {stories?.map((story) => (
                        <Grid key={story._id} item xs={12} sm={5} md={4} lg={2} className={classes.storyItem}>
                            <Story story={story} setCurrentId={setCurrentId} />
                        </Grid>
                    ))}
                </Grid>
        )
    );
}

export default Stories;