const initialState = {
    stories: [],
    selectedStory: null,
    isLoading: true,
    error: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return {
                ...state,
                stories: action.payload.data,
                currentPage: action.payload.currentPage,
                numPages: action.payload.numPages,
            };
        case 'FETCH_STORY':
            return { ...state, selectedStory: action.payload.story };
        case 'CREATE':
            return { ...state, stories: [...state.stories, action.payload] };
        case 'DELETE':
            return { ...state, stories: state.stories.filter((story) => story._id !== action.payload) };
        case 'UPDATE':
            return { ...state, stories: state.stories.map((story) => (story._id === action.payload._id ? action.payload : story)) };
        case 'SEARCH':
            return { ...state, stories: action.payload };
        case 'LIKE':
            return { ...state, stories: state.stories.map((story) => (story._id === action.payload._id ? action.payload : story)) };
        case 'FETCH_LIKED_STORIES':
            return { ...state, stories: action.payload.data };
        case 'START_LOADING':
            return { ...state, isLoading: true };
        case 'SUCCESS':
            return { ...state, error: false, isLoading: false };
        case 'ERROR':
            return { ...state, error: true, isLoading: false };
        default:
            return state;
    }
};
