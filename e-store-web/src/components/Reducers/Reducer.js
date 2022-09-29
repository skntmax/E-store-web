
import { checkout_system } from "../../Actions/Actions"

export const reducer = ( state, action )=>{
     
    switch(action.type){
  
      case "ADD_TO_CART":
        
        let tempCart = [...state.cart , ...state.products.filter(ele=> ele.PRODUCT_ID==action.id) ] 
          return { ...state , cart:tempCart
            , total:tempCart.reduce((acc,ele)=>{  return acc+=ele.PRICE },0 )   }
           
        case "PRODUCT_LIST":
              return {...state , products:action.payload }
           
               case "REMOVE_TO_CART" :
            let filteredCart = [ ...state.cart.filter(ele=>  ele.PRODUCT_ID !== action.id )] 
              return { ...state , cart:filteredCart  ,
                 total:filteredCart.reduce((acc,ele)=>{  return acc+=ele.PRICE },0 )}
  
           case "CHECKOUT" :
                   let data  =action.payload
                  checkout_system(data).then(res=>{
                     console.log("resss");   
                    if(res.success) {
                     alert(" succesfully checked out ")
                     return state
                      }else{
                    return state
                      }
                      
                  }).catch(err=>{
                     return state
                  })
             
            default : 
            console.log("default case ");
    }
       
  }