import React from 'react'
import './../../asssets/style.css'

function Products(props) {
     const {list}  = props
     const {state , dispatch }  = props
      
    return (  
    <React.Fragment>
                  
                {list.length>0 ? list.map((ele)=>{
                    return(<div className="card card_product"
                      key={ele.PRODUCT_ID}
                    style={{ width:"18rem" }}>
                <img className="card-img-top" src={ele.PRODUCT_IMAGE} 
                alt="Card image cap"
                 width={300}
                 height={400}
                />
                <div className="card-body">
                <h5 className="card-title">{ele.PRODUCT_TITLE}</h5>
                <p className="card-text prd_disc" >{ele.PRODUCT_DISCRIPTION}</p>
                
                 {state.cart.some((item) => item.PRODUCT_ID==ele.PRODUCT_ID )?  
                  <button className=' btn btn-sm btn-primary mx-3 btn-danger '  
                  onClick={(e)=> dispatch( { 
                    type:"REMOVE_TO_CART" ,
                     id:ele.PRODUCT_ID
                  }) }
                  >Remove to Cart  </button>
                :      <button className=' btn btn-sm btn-primary ' onClick={(e)=> dispatch( { 
                  type:"ADD_TO_CART" ,
                   id:ele.PRODUCT_ID
                }) }  > Add to Cart  </button>}
             
                 

                </div>
            </div> ) 
                }) :""}
              
        
 
           
    
     
     
    
    </React.Fragment>
  )
}

export default Products
