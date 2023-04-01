import React  from 'react'
import Navbar from './../Navbar'
import Cards from './../../Cards'
import axios from 'axios'

import '../../../assets/css/hompage.css'

import { useDispatch, useSelector } from 'react-redux'
import constant from '../../../Redux_store/constant'


export default function Index() {

  
  let dispatch = useDispatch()
   let prd = useSelector(ele=> ele.prd.list)
   
   React.useEffect(() => {
        
        if(!window.localStorage.getItem('user')) {
             window.location.href="/"
        }

          (async function(){
             
            let fakeProducts  =await axios.get('https://fakestoreapi.com/products/')           
            dispatch({
                 type:constant.PRODUCTS ,
                 payload:{
                   data:fakeProducts.data.map((ele,ind)=>  { return {...ele, qty:1} } )
                 }
              }) 
              
          })() 
        
         return () => {
           return ""
        };


    }, [])
     
    return (
    <React.Fragment>  
      <Navbar />
      
       <div className="homepage_card" >
        
        {prd!=undefined && prd.map((ele,index)=>{
           return <Cards item={ele}  /> 
        })} 
       
       </div>
    
        </React.Fragment>
  )


}
  