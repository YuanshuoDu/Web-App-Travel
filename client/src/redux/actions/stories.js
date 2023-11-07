import * as api from '../../api/index.js';

export const getStories = () => async (dispatch) => {
    try {
        dispatch({ type: 'START_LOADING' });
        const { data } = await api.fetchStories();
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
        await await api.deleteStory(id);
        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error);
    }
};

export const updateStory = (id, story) => async (dispatch) => {
    try {
      const { data } = await api.updateStory(id, story);
  
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };