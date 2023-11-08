const initialState = {
    stories: [],
    selectedStory: null,
    isLoading: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return { ...state, stories: action.payload };
        case 'FETCH_STORY':
            return { ...state, selectedStory: action.payload.story };
        case 'CREATE':
            return { ...state, stories: [...state.stories, action.payload] };
        case 'DELETE':
            return { ...state, stories: state.stories.filter((story) => story._id !== action.payload) };
        case 'UPDATE':
            return { ...state, stories: state.stories.map((story) => (story._id === action.payload._id ? action.payload : story)) };
        case 'START_LOADING':
            return { ...state, isLoading: true };
        case 'END_LOADING':
            return { ...state, isLoading: false };
        default:
            return state;
    }
};
