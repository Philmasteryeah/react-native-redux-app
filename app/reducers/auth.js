import { LOGIN, LOGOUT } from "../actions/auth"

const defaultState = {
    isLoggedIn: false,
    username: '',
    password: ''
};

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {
                isLoggedIn: true,
                username: action.username,
                password: action.password
            });
        case LOGOUT:
            return Object.assign({}, state, {
                isLoggedIn: false,
                username: '',
                password: ''
            });
        default:
            return state;
    }
}

export default authReducer;