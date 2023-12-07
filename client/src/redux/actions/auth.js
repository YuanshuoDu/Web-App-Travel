import { AUTH } from "../const/actionsTypes"
import * as api from "../../api/index"


export const loadUser = () => async (dispatch) => {
    const localUser = JSON.parse(localStorage.getItem("user_info"))

    if (localUser) {
        dispatch({ type: AUTH, data: localUser })
    }
}

export const signin = (data2, navigate) => async (dispatch) => {
    try {
        // Login user
        const { data } = await api.signIn(data2)
        console.log("I have logged in");
        dispatch({ type: AUTH, data })
        navigate("/")
    } catch (err) {
        console.log(err);
        console.log("Error in login");
    }
}

export const signinGoogle = (accessToken, navigate) => async (dispatch) => {
    try {
        // Login user Google
        const { data } = await api.signInGoogle(accessToken)
        dispatch({ type: AUTH, data })
        console.log("I have logged in with google");
        navigate("/")
    } catch (err) {
        console.log(err)
        console.log("Error in login with google");
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        // Signup user
        const { data } = await api.signUp(formData)
        console.log("I have signed up");
        dispatch({ type: AUTH, data })
        navigate("/")
    } catch (err) {
        console.log(err)
        console.log("Error in signup");
    }
}

export const signupGoogle = (accessToken, navigate) => async (dispatch) => {
    try {
        // Signup user Google
        const { data } = await api.signUpGoogle(accessToken)
        console.log("I have signed up with google");
        dispatch({ type: AUTH, data })
        navigate("/")
    } catch (err) {
        console.log(err)
        console.log("Error in signup with google");
    }
}