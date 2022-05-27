
const authReducer = (state, action ) => {
    switch(action.type){
        case "LOGIN":
            return 1;
        case "SIGNUP":
            return 1;
        case "LOGOUT":
        default:
            return state;
    }
}

export default authReducer;