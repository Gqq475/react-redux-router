// home页所有reducer处理数据

import * as types from '../action/home.js'


// 初始值设置
const initialData = {
    homeName: '',
}

// reducer
const homeReducer = (state = initialData, action) => {
    switch(action.type){
        case types.HOME_NAME: //  home页的其中一个数据处理
            return {
                homeName: action.payload
            }
            break
        default :
            return initialData
    }
}

export default homeReducer;