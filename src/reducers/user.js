

const initialState = {
  userInfo: null,
  loginSuccess: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        userInfo: action.payload.data,
        loginSuccess: action.payload.success
      };
    default:
      return state;
  }
}