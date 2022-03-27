export const TOGGLE_USERTYPE = 'TOGGLE_USERTYPE';
export const ADD_REGISTRATION_1 = 'ADD_REGISTRATION_1';
export const ADD_REGISTRATION_2 = 'ADD_REGISTRATION_2';
export const ADD_REGISTRATION_3 = 'ADD_REGISTRATION_3';

export const toggleUsertype = (type) => {
    return {
        type: TOGGLE_USERTYPE,
        payload: {
            userType: type
        }
    }
}

export const fetchRegister_1 = (name, username, phoneno, password) => {
    return {
        type: ADD_REGISTRATION_1,
        payload: {
            name: name,
            username: username,
            phoneno: phoneno,
            password: password
        }
    }
}

export const fetchRegister_2 = (dob, height, weight, bmi) => {
    return {
        type: ADD_REGISTRATION_2,
        payload: {
            dob: dob,
            height: height,
            weight: weight,
            bmi: bmi
        }
    }
}

export const fetchRegister_3 = (gender, educationLevel, annualIncome, dietaryPreference) => {
    return {
        type: ADD_REGISTRATION_3,
        payload: {
            gender: gender,
            educationLevel: educationLevel,
            annualIncome: annualIncome,
            dietaryPreference: dietaryPreference
        }
    }
}