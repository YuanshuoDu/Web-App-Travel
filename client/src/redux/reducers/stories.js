export default (stories = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'FETCH_STORY':
            return { story: action.payload.story };
        case 'CREATE':
            return [...stories, action.payload];
        case 'DELETE':
            return { stories: stories.filter((story) => story._id !== action.payload) };
        case 'UPDATE':
            return { stories: stories.map((story) => (story._id === action.payload._id ? action.payload : story)) };
        default:
            return stories;
    }
};
