import { combineReducers } from 'redux'
import constant from './../constant'


function products (state = {} , action) {

    switch(action.type) { 
        case constant.SINGUP :
            return {...state }
       case constant.PRODUCTS :
           return { list:action.payload.data }

        default:
        return {...state }
    } 
     
}
 



function userData (state ={}, action) {

   switch(action.type) { 
       case constant.LOGGED_IN_USER_DATA :
           return {...state , ...action.payload.data }
       default:
           return {...state }
   } 
    
}

export default combineReducers({
     prd:products , logged_in_user_data:userData
})