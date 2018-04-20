import axios from 'axios'
 // action types
export const CNODE_LIST = 'CNODE_LIST';
 
 
 
 // Funcitons   第一个括号是参数，第二个里面的dispatch,getState是可以直接用的。
export const getCnodeList = (tmp) => (dispatch, getState) => {
    axios.get(`https://cnodejs.org/api/v1/topics/?tab=${tmp.activeName}`)
     .then(res=>{
       console.log(res)
       dispatch({
         type: CNODE_LIST,
         payload: res.data.data,
       })
     })
}