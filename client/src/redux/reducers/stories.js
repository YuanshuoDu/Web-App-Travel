export default (stories = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return  action.payload;
        case 'FETCH_STORY':
            return { story: action.payload.story };
        case 'CREATE':
            return [...stories, action.payload];
        default:
            return stories;
    }
};