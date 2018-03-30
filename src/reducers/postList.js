

const initialState = {
  posts: [],
  post: {},
  postListLoading: true,
  isLoadMore: true,
  page: 1,
  isFooterLoading: true,
  categoryIndex: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_POST_BY_CATEGORY':
      return {
        ...state,
        posts: action.payload,
        postListLoading: false,
        categoryIndex: action.categoryIndex,
        page: action.page
      };
    case 'FETCH_POST_MORE':
      action.payload.forEach(e => state.posts.push(e))
      return {
        ...state,
        isLoadMore: false,
        page: action.page,
        isFooterLoading: false
      }
    case 'TURN_ON_POST_LOAING': 
      return {
        ...state,
        postListLoading: true
      }
    case 'TURN_ON_FOOTER_LOAING': 
      return {
        ...state,
        isFooterLoading: true
      }
    default:
      return state;
  }
}