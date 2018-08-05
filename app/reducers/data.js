import { DATA_AVAILABLE } from "../actions/data"

const defaultState = {
    data: [],
    loading: true
};

const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            return Object.assign({}, state, {
                data: action.data,
                loading: false
            });
        default:
            return state;
    }
};

export default dataReducer;
