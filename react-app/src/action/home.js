 // home页的所有action

import axios from 'axios'
// action types
export const HOME_NAME = 'HOME_NAME';



// Funcitons   第一个括号是参数，第二个里面的dispatch,getState是可以直接用的。
export const getName = () => (dispatch, getState) => {
    axios.get('https://api.github.com/users/Gqq475')
    .then(res=>{
      console.log(res)
      dispatch({
        type: HOME_NAME,
        payload: res.data.login,
      })
    })
}
