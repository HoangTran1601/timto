const types = {
  USER_LOGIN: 'USER_LOGIN'
}

export const login = (userInfo) => dispatch => {
  
  fetch('http://timtodevv2.skylab.vn/api/v2/logincms', {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => dispatch({
    type: types.USER_LOGIN,
    payload: data
  }))
  .catch(err => console.error(err))
}