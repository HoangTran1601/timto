import {AsyncStorage} from 'react-native'

const initialState = {
  userInfo: null,
  loginSuccess: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      try {
        AsyncStorage.setItem('@Token:key', action.payload.data.token);
      } catch (error) {
        console.log(error)
      }
      return {
        ...state,
        userInfo: action.payload.data,
        loginSuccess: action.payload.success
      };
    default:
      return state;
  }
}