import React from 'react';
import { useSelector } from 'react-redux';
import Story from './story/Story';
import useStyles from './styles';

const Stories = () => {
    const stories = useSelector((state) => state.stories);
    //const classes = useStyles();

    console.log(stories);


    return (
        <>
            <h1>STORIES</h1>
            <Story />
            <Story />
            <Story />
        </>
    );
}

export default Stories;