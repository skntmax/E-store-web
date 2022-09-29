import React ,{useEffect , useState} from 'react'
import { getUserDetails } from '../../Actions/Actions'
import Navbar from './Navbar'
import { getPurchasedProductDetail } from '../../Actions/Actions'
import Products from './Products'
import Catalogue from './Catalogue/Catalogue'

function Product_Catalogue() {
    
   const [cat, setCat] = useState([])

     useEffect(() => {
        getUserDetails().then(res=>{
           let model  = {
             USER_ID:res.result
           }
            getPurchasedProductDetail(model).then(res=>{
                    setCat(res.result)
            }).catch(err=>{
                 console.log(err);
           
                 })
           
           
        }).catch(err=>{
             alert(err)
        })
         
     }, [])

   

  return (
    <React.Fragment>
       <Navbar  />
        <Catalogue  list ={cat}/>
         
        
    </React.Fragment>
  )
}

export default Product_Catalogue
