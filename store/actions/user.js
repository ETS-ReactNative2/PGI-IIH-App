export const TOGGLE_USERTYPE = 'TOGGLE_USERTYPE';

export const toggleUsertype = (type) => {
    return {
        type: TOGGLE_USERTYPE,
        payload: {
            userType: type
        }
    }
}