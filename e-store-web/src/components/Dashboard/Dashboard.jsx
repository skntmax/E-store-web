import React,{useEffect,useState ,useReducer} from 'react'
import Navbar from './Navbar'
import { getProductDetail, getProducts, getUserDetails } from '../../Actions/Actions'
import { setProduct } from '../../Actions/Actions'
import Products from './Products'
import './../../asssets/style.css'
import Cart from './Cart'
import { reducer } from '../Reducers/Reducer'
import { useHistory } from 'react-router-dom'

function Dashboard() {
       let history  = useHistory()
     const [user, setUser] = React.useState({user_id:""})
     const [prd, setPrd] = useState([])
      
     const [ state, dispatch ] = useReducer(reducer, {
      products:prd,
      cart:[] ,
      total:"",
    
     })
     

      useEffect(() => {
debugger
      getUserDetails().then(res=>{
        debugger
           
              if(res.success) {
              setUser({user_id:res.result})                  
                getProductDetail().then(res=>{
                 if(res.success) {
                   setPrd(res.result)
                   dispatch({
                     type:"PRODUCT_LIST",
                     payload:res.result
                   })             
                 }
                }).catch(err=>{
                  alert(err)
                  
                })
         }else{
           history.push('/')
         }
            
                

      }).catch(err=>{
         alert(err)
      })
        
      
      // getProducts().then(res=>{
      //    console.log( "price " ,res );
      //      setProduct(res).then(res=>{
                
      //      }).catch(err=>{
      //        alert(err)
      //      })  
      // }).catch(err=>{
      //    alert(err)
      // })


      }, [])
      
  return (
    <div>
    <Navbar  state={state}   dispatch={dispatch}  />
     
  <div className="row ">
    <div className="col-10 main_product">
        <Products  state={state}  list={prd} dispatch={dispatch} />
    </div>

    <div className="col-2 ">
     <Cart state={state}    dispatch={dispatch}  />
        </div>
    
  </div>
</div>
 

    
 
    
       
  )
}

export default Dashboard
