export default (stories = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return stories;
        default: 
            return stories;
    }
};