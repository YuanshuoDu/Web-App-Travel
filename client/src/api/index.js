import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:3000" })

API.interceptors.request.use((req) => {
    if (localStorage.getItem("user_info")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("user_info")).token}`
    }

    return req;
})

export const signIn = (data) => API.post("/users/signin", data)
export const signInGoogle = (accessToken) => API.post("/users/signin", {
    googleAccessToken: accessToken
})

export const signUp = (data) => API.post("/users/signup", data)
export const signUpGoogle = (accessToken) => API.post("/users/signup", {
    googleAccessToken: accessToken
})

export const fetchStories = (page, filter, searchTerm) => API.get(`/stories?page=${page}`, {
    params: {
        filter: filter,
        searchTerm: searchTerm,
    },
});
export const fetchStory = (id) => API.get(`/stories/getStoryById/${id}`);
export const fetchLikedStories = () => API.get('/stories/likedStories');
export const fetchUserStories = () => API.get('/stories/userStories');
export const createStory = (newStory) => API.post("/stories", newStory);
export const deleteStory = (id) => API.delete(`/stories/${id}`);
export const updateStory = (id, updatedStory) => API.patch(`/stories/${id}`, updatedStory);
export const likeStory = (id) => API.patch(`/stories/${id}/likeStory`);