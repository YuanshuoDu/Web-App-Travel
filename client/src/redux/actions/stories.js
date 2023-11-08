import * as api from '../../api/index.js';
//import axios from "axios"

export const getStories = () => async (dispatch) => {
    try {
        dispatch({ type: 'START_LOADING' });
        console.log('Start loading');
        const { data } = await api.fetchStories();
        console.log('I have stories');
        //console.log(data);
        dispatch({ type: 'FETCH_ALL', payload: data });
        dispatch({ type: 'END_LOADING' });
    } catch (error) {
        console.log(error.message);
    }
};

export const getStory = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'START_LOADING' });
        const { data } = await api.fetchStory(id);
        dispatch({ type: 'FETCH_STORY', payload: { story: data } });
        dispatch({ type: 'END_LOADING' });
    } catch (error) {
        console.log(error);
    }
};

export const createStory = (newStory) => async (dispatch) => {
    try {
        dispatch({ type: 'START_LOADING' });
        const { data } = await api.createStory(newStory);
        dispatch({ type: 'CREATE', payload: data });
        dispatch({ type: 'END_LOADING' });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteStory = (id) => async (dispatch) => {
    try {
        await api.deleteStory(id);
        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error);
    }
};

export const updateStory = (id, story) => async (dispatch) => {
    try {
        const { data } = await api.updateStory(id, story);
        dispatch({ type: 'UPDATE', payload: data });
        //alert('Story updated successfully');
    } catch (error) {
        console.log(error);
    }
};

/*export function updateStory(id, story) {
    return function action(dispatch) {
        const request = axios({
            method: 'PATCH',
            url: `http://localhost:3000/stories/${id}`,
            data: story,
            headers: []
        });

        return request.then(
            response => dispatch({ type: 'UPDATE', payload: response }),
            //err => dispatch(fetchOffersError(err))
        );
    }
};*/

