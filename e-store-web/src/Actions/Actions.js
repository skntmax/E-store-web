import axios from "axios"
import { getCandidateAuthHeader } from "../utils"
export const getUserDetails =async ()=>{
    try{

        // return   {success:true}
        debugger
        let url = `${process.env.REACT_APP_BASE_URL}/user/dashboard`
        return axios.get( url , getCandidateAuthHeader() ).then(res=>{
             return res.data
        }).catch(err=>{
           return err.message  
        })
         
    } catch(err){
         
    }

}



export const getProducts =()=>{
    try{
        return axios.get('https://fakestoreapi.com/products/').then(res=>{
             return res.data
        }).catch(err=>{
           return err.message  
        })
         
    } catch(err){
         
    }

}




export const setProduct =(data)=>{
    try{
        let url = `${process.env.REACT_APP_BASE_URL}/product/set-product`
        return axios.post(url,data).then(res=>{
             return res.data
        }).catch(err=>{
           return err.message  
        })
         
    } catch(err){
         
    }

}






export const getProductDetail =(data)=>{
    try{
        let url = `${process.env.REACT_APP_BASE_URL}/product/get-product-detail`
        return axios.get(url).then(res=>{
             return res.data
        }).catch(err=>{
           return err.message  
        })
         
    } catch(err){
         
    }
}


export const checkout_system =(data)=>{
    try{
        let url = `${process.env.REACT_APP_BASE_URL}/product/checkout`
        return axios.post(url,data , getCandidateAuthHeader() ).then(res=>{
             return res.data
        }).catch(err=>{
           return err.message  
        })

    } catch(err){
         
    }

}


export const getPurchasedProductDetail =(data)=>{
    try{
        let url = `${process.env.REACT_APP_BASE_URL}/product/get-product-catalogue-detail?USER_ID=${data.USER_ID}`
        return axios.get(url  ).then(res=>{
             return res.data
        }).catch(err=>{
           return err.message  
        })
         
    } catch(err){    
    }
}






export const getCurrentUserDetail =(data)=>{
    try{
        let url = `${process.env.REACT_APP_BASE_URL}/user/user-detail`
        return axios.get(url ,getCandidateAuthHeader() ).then(res=>{
             return res.data
        }).catch(err=>{
           return err.message  
        })
         
    } catch(err){    
    }
}
