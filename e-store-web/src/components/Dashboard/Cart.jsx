import { elementAcceptingRef } from '@mui/utils'
import React from 'react'
import cartLogo from './../../asssets/cartLogo.jpg'
function Cart(props) {
   
     const {state, dispatch}  = props 

  return (
    <React.Fragment>
        
       <div style={{ display:"flex" }} >
         
        <div>
            <h4>  Total: Rs. <span style={{color:"green"}}> {state.total} </span></h4>
         </div>
          <div>
          <img src={cartLogo} height="80" width="100" />
           </div> 
        </div>
         <button className='btn btn-primary btn-block ' onClick={e=>{
           dispatch({
             type:"CHECKOUT",
              payload:{
                  cart:state.cart.map(ele=> ele.PRODUCT_ID),
                  total:state.total
              }
           })
         }}> check out  </button>
          
         <div style={{display:"flex" , flexDirection:"column"}} >
          
          {state.cart.length>0? state.cart.map((ele)=>{
          return (<div className="card"  >
            <img className="card-img-top" src={ele.PRODUCT_IMAGE} alt="Card image cap" 

            width={150}
            height={150}

            />
<div className="card-body">
  <h5 className="card-title">{ele.PRODUCT_TITLE}</h5>
  <p className="">{ele.PRODUCT_DISCRIPTION}</p>
</div>
</div>)
             
          }):"" }
         


           </div>

         
       </React.Fragment>
  )
}

export default Cart
