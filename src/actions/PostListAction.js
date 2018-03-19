const types = {
  FETCH_POST_LIST: 'FETCH_POST_LIST' 
}

export const fetchPost = () => dispatch => {
  console.log('fetchinggg')
  fetch('http://timtodevv2.skylab.vn/api/v2/posts', {
    method: 'GET',
    headers: {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTYWx0IjoiZWQzNjg4YjczODlkMzQ5ODZhOTQyMDU1MzU0NTRmMzg5ZjlmNDBjOSIsIlVzZXJJbmZvciI6eyJpZCI6MTY3MywidG9rZW4iOiIiLCJ1c2VybmFtZSI6IkhvYW5nIiwicGhvbmUiOiIwMTYzMzA1MzMyOCIsImVtYWlsIjoiIiwicm9sZSI6ImFkbWluIn0sImV4cCI6MTUyNjY1MTMyMywiaXNzIjoiYWRtaW4ifQ.-HfqplonOHCFrwv4QVHizUQ4VTxKzP3uYK5xGun6-4A'
    }
  })
  .then(res => res.json())
  .then(data => dispatch({
    type: types.FETCH_POST_LIST,
    payload: data.data
  }))
}