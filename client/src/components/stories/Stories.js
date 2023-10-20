import React from 'react';
import { useSelector } from 'react-redux';
import Story from './story/Story';
import storiesStyles from './styles';
import { CircularProgress, Grid } from '@material-ui/core';

const Stories = () => {
    const stories = useSelector((state) => state.stories);
    const classes = storiesStyles();

    console.log(stories);


    return (
        stories.length == 0 ? <CircularProgress /> : (
           
                <Grid className={classes.container} container alignItems="stretch" spacing={1}>
                    {stories.map((story) => (
                        <Grid key={story._id} item xs={12} sm={6} md={5} lg={5} className={classes.storyItem}>
                            <Story story={story} />
                        </Grid>
                    ))}
                </Grid>
        )
    );
}

export default Stories;