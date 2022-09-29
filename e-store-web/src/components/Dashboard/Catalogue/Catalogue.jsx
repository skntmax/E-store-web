import React from 'react'

function Catalogue({list}) {

  return (
    <React.Fragment>
 
       <div style={{display:"flex" , flexWrap:"wrap"}}>

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
    
    </div>
</div> ) 
    }) :""}
       
        </div>
    
              

    </React.Fragment>
  )
}

export default Catalogue
