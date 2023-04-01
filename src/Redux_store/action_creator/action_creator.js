import axios from "axios"
import { getAuthHeader } from "../../utils"
import constant from "../constant";

export function addProducts(prduct_list) {
    // fetchTodoByIdThunk is the "thunk function"
    return async function (dispatch, getState) {
        // let add_product = axios.post(`${process.env.REACT_APP_BASE_URL}/add-products` , prduct_list , getAuthHeader())
       console.log('====================================');
       console.log(prduct_list);
       console.log('====================================');

       dispatch({
            type:constant.PRODUCTS ,
            payload:{
              data:prduct_list
            }
         }) 

    }
  }