const types = {
  FETCH_POST_LIST: 'FETCH_POST_LIST' 
}

export const fetchPost = (token) => dispatch => {
  console.log('fetchinggg')
  fetch('http://timtodevv2.skylab.vn/api/v2/posts', {
    method: 'GET',
    headers: {
      'Authorization': token
    }
  })
  .then(res => res.json())
  .then(data => dispatch({
    type: types.FETCH_POST_LIST,
    payload: data.data
  }))
}