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
        console.log('Story Actions: I have data from created story: ', data);
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
    const user = JSON.parse(localStorage.getItem('user_info'));

    try {
        const data = await api.likeStory(id, user?.token);
        dispatch({ type: 'UPDATE', payload: data });
        dispatch({ type: 'SUCCESS' });
        console.log('Story Actions: Story liked/unliked successfully');
    } catch (error) {
        console.log(error);
        dispatch({ type: 'ERROR' });
    }
}


export const getLikedStories = () => async (dispatch) => {
    try {
        dispatch({ type: 'START_LOADING' });
        console.log('Story Actions: Start loading to get liked stories');
        const { data } = await api.fetchLikedStories();
        dispatch({ type: 'FETCH_LIKED_STORIES', payload: data });
        dispatch({ type: 'SUCCESS' });
        console.log('Story Actions: Liked stories fetched successfully: ' + data);
    } catch (error) {
        console.log(error);
        dispatch({ type: 'ERROR' });
    }
};

export const getUserStories = () => async (dispatch) => {
    try {
        dispatch({ type: 'START_LOADING' });
        console.log('Story Actions: Start loading to get user stories');
        const { data } = await api.fetchUserStories();
        dispatch({ type: 'FETCH_USER_STORIES', payload: data });
        dispatch({ type: 'SUCCESS' });
        console.log('Story Actions: User stories fetched successfully: ' + data);
    } catch (error) {
        console.log(error);
        dispatch({ type: 'ERROR' });
    }
};