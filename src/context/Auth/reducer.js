const authReducer = (state, { type, payload: { user, token } }) => {
  switch (type) {
    case "LOGIN":
      return { ...state, user: user, isLoggedIn: token };
    case "SIGNUP":
      return { ...state, user: user, isLoggedIn: token };
    case "LOGOUT":
        return {...state, user: null, isLoggedIn: null};
    default:
      return state;
  }
};

export default authReducer;
