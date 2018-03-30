const types = {
  FETCH_POST_BY_CATEGORY: 'FETCH_POST_BY_CATEGORY',
  FETCH_POST_MORE: 'FETCH_POST_MORE' ,
  TURN_ON_POST_LOAING: 'TURN_ON_POST_LOAING',
  TURN_ON_FOOTER_LOAING: 'TURN_ON_FOOTER_LOAING'
}


export const fetchPostByCategory = (token, categoryIndex, page) => dispatch => {
  dispatch({
    type: types.TURN_ON_POST_LOAING
  })
  fetch(`http://timtodevv2.skylab.vn/api/v2/posts?filters={"category":${categoryIndex}}&limit=20&page=${page}`, {
    method: 'GET',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => dispatch({
    type: types.FETCH_POST_BY_CATEGORY,
    payload: data.data,
    categoryIndex: categoryIndex,
    page: page
  }))
}

export const postLoadMore = (token, categoryIndex, page) => dispatch => {
  console.log('postLoadMore')
  dispatch({
    type: types.TURN_ON_FOOTER_LOAING
  })
  fetch(`http://timtodevv2.skylab.vn/api/v2/posts?filters={"category":${categoryIndex}}&limit=20&page=${page}`, {
    method: 'GET',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => dispatch({
    type: types.FETCH_POST_MORE,
    payload: data.data,
    page: page
  }))
}