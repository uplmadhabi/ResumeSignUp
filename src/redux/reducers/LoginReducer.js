
const initialState = {
    isLoggedIn: false,
    userData: {}
    
};
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLoggedIn: true,
                userData: action.payload
            };
        case "LOGIN_FALIURE":
            return {
                ...state,
                isLoggedIn: false,
                userData: action.payload
            };
        default:
            return state;
    }
};
export default LoginReducer;