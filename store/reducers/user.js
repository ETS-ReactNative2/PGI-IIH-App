import { TOGGLE_USERTYPE } from "../actions/user";


const initialState = {
    userType: null,
};

const UserReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_USERTYPE:
            const newType = action.payload.userType;
            return {
                ...state,
                userType: newType
            }

        default:
            return state
    }

    return state;
}

export default UserReducer;