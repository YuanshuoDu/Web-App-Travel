import axios from 'axios';

const url = 'http://localhost:3000/stories';

export const fetchStories = () => axios.get(url);
export const createStory = (newStory) => axios.post(url, newStory);