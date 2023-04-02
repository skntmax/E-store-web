import { combineReducers } from 'redux'
import constant from './../constant'


function products (state = {cart:[] , list:[] , liked:[] , order_history:[]}   , action) {

    //  debugger

    switch(action.type) { 
        case constant.SINGUP :
            return {...state }
        case constant.PRODUCTS :
           return  { ...state, list:action.payload.data }
        case constant.CART :         
           return { ...state ,  cart:[...state.cart , action.payload.data ]  }
        case constant.REMOVE_TO_CART :
             let filterT_cart = state.cart.filter((ele,ind)=> ele.id!=action.payload.data )
        return { ...state ,  cart:filterT_cart  }
             
        case constant.INCREASE_QTY :
            let increased_select_item = state.cart.map((ele,ind)=>ele.id==action.payload.id?{...ele,qty:ele.qty+1 }:ele )
        return { ...state  , cart:increased_select_item }

        case constant.DECREASE_QTY :
            let decreased_select_item = state.cart.map((ele,ind)=>ele.id==action.payload.id?{...ele,qty:ele.qty>1?ele.qty-1:ele.qty  }:ele )
              return { ...state  , cart:decreased_select_item }


    case constant.ORDER_HISTORY :
    return { ...state , order_history:[...state.order_history ,action.payload.data ]  }
    
    case constant.CLEAR_CART :
        return { ...state , cart:[]  }
        



           default:
        return {...state  }
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