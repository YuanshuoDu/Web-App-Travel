import * as api from '../../api/index.js';

export const getStories = (page, filter, searchTerm) => async (dispatch) => {
    try {
        dispatch({ type: 'START_LOADING' });
        console.log('Start loading');
        const { data: { data, currentPage, numPages } } = await api.fetchStories(page, filter, searchTerm);
        dispatch({ type: 'FETCH_ALL', payload: { data, currentPage, numPages } });
        dispatch({ type: 'SUCCESS' });
        console.log('Story Actions: Stories fetched successfully');
    } catch (error) {
        console.log(error.message);
        dispatch({ type: 'ERROR' });
    }
};

export const getStory = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'START_LOADING' });
        const { data } = await api.fetchStory(id);
        dispatch({ type: 'FETCH_STORY', payload: { story: data } });
        dispatch({ type: 'SUCCESS' });
        console.log('Story Actions: Story fetched successfully');
    } catch (error) {
        console.log(error);
        dispatch({ type: 'ERROR' });
    }
};

export const createStory = (newStory) => async (dispatch) => {
    try {
        dispatch({ type: 'START_LOADING' });
        const { data } = await api.createStory(newStory);
        dispatch({ type: 'CREATE', payload: data });
        dispatch({ type: 'SUCCESS' });
        console.log('Story Actions: Story created successfully');
    } catch (error) {
        console.log(error.message);
        dispatch({ type: 'ERROR' });
    }
};

export const deleteStory = (id) => async (dispatch) => {
    try {
        await api.deleteStory(id);
        dispatch({ type: 'DELETE', payload: id });
        dispatch({ type: 'SUCCESS' });
        console.log('Story Actions: Story deleted successfully');
    } catch (error) {
        console.log(error);
        dispatch({ type: 'ERROR' });
    }
};

export const updateStory = (id, story) => async (dispatch) => {
    try {
        const data = await api.updateStory(id, story);
        dispatch({ type: 'UPDATE', payload: data });
        dispatch({ type: 'SUCCESS' });
        console.log('Story Actions: Story updated successfully');
    } catch (error) {
        console.log(error);
        dispatch({ type: 'ERROR' });
    }
};


export const likeStory = (id, story) => async (dispatch) => {
    try {
        const data = await api.likeStory(id, story);
        dispatch({ type: 'UPDATE', payload: data });
        dispatch({ type: 'ADD_TO_LIKE_COLLECTION', payload: story });
        dispatch({ type: 'SUCCESS' });
        //alert('Story updated successfully');

    } catch (error) {
        console.log(error);
    }

}

// export const addToLikeCollection = (id) => async (dispatch) => {
//     try {
//         dispatch({ type: 'START_LOADING' });
//         const { data } = await api.fetchStory(id);
//         dispatch({ type: 'ADD_TO_LIKE_COLLECTION', payload: { story: data } });
//         dispatch({type: 'SUCCESS'});
//     } catch (error) {
//         console.log(error);
//         dispatch({type: 'ERROR'});
//     }
// };
