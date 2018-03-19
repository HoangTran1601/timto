

const initialState = {
  posts: [],
  post: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_POST_LIST':
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
}