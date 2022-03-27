import { ADD_REGISTRATION_1, ADD_REGISTRATION_2, ADD_REGISTRATION_3, TOGGLE_USERTYPE } from "../actions/user";

const initialState = {
    userType: null,

    // Registeration
    name: null,
    username: null,
    phoneno: null,
    password: null,
    dob: null,
    height: null,
    weight: null,
    bmi: null,
    educationLevel: null,
    gender: null,
    annualIncome: null,
    dietaryPreference: null
};

const UserReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_USERTYPE:
            const newType = action.payload.userType;
            return {
                ...state,
                userType: newType
            }

        case ADD_REGISTRATION_1:
            const register_1_details = action.payload
            return {
                ...state,
                name: register_1_details.name,
                username: register_1_details.username,
                phoneno: register_1_details.phoneno,
                password: register_1_details.password
            }

        case ADD_REGISTRATION_2:
            const register_2_details = action.payload
            return {
                ...state,
                dob: register_2_details.dob,
                height: register_2_details.height,
                weight: register_2_details.weight,
                bmi: register_2_details.bmi
            }

        case ADD_REGISTRATION_3:
            const register_3_details = action.payload
            return {
                ...state,
                gender: register_3_details.gender,
                dietaryPreference: register_3_details.dietaryPreference,
                annualIncome: register_3_details.annualIncome,
                educationLevel: register_3_details.educationLevel
            }

        default:
            return state
    }

    return state;
}

export default UserReducer;