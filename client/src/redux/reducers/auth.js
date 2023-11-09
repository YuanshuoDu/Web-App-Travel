import * as actionType from "../const/actionsTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem("user_info", JSON.stringify({ ...action?.data }));
      // Check if firstname and lastname exist in action.data
      const { firstname, lastname, ...restData } = action.data;

      // Store only firstname and lastname in localStorage
      localStorage.setItem(
        "user_info",
        JSON.stringify({ firstname, lastname })
      );

      // Optionally, log firstname and lastname
      console.log("firstname:", firstname);
      console.log("lastname:", lastname);

      console.log(action.data);
      return { ...state, authData: action.data };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
