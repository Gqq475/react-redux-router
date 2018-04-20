// news页所有reducer处理数据

import * as types from '../action/news.js'


// 初始值设置
const initialData = {
    cnodeList: [],
}

// reducer
const newsReducer = (state = initialData, action) => {
    switch(action.type){
        case types.CNODE_LIST: //  news页的其中一个数据处理
            return {
                cnodeList: action.payload
            }
            break
        default :
            return initialData
    }
}

export default newsReducer;