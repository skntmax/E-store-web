import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import constant from '../../Redux_store/constant'
import { getAuthHeader } from '../../utils'
import Navbar from '../common/Navbar'
import Cards from './../Cards'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import CartHistoryList from './CartHistoryList'
import { Link } from 'react-router-dom'
function OrderHistory() {
  
  const [ud , setUd]  = React.useState(window.localStorage.getItem('user')?JSON.parse(window.localStorage.getItem('user')):"" )
  const [open, setOpen] = React.useState(true);

  let dispatch = useDispatch()
  let order_history = useSelector(ele=> ele.prd.order_history)

   React.useEffect(() => {
        
    if(!window.localStorage.getItem('user')) {
         window.location.href="/"
    }

      (async function(){

        //  if( order_history.length>0?(!order_history.some(ele=>ele.user.email==ud.email)):true ) {
            let ordered_prd  = await axios.get(`${process.env.REACT_APP_BASE_URL}/products/buyproduct-history` , getAuthHeader() )           
         debugger
            if(ordered_prd.data.status==200){
                dispatch({
                    type:constant.ORDER_HISTORY ,
                    payload:{
                      data:ordered_prd.data.result
                    }
                 })  
   
            }
   


        //  }  
    
           
      })() 
    
     return () => {
       return ""
    };


}, [])


  
    return ( <React.Fragment>
     
         

         <Navbar />
      
       <div className="homepage_card" >
        
       { order_history.length >0 &&  order_history.map((ele,index)=>{
            return ele[index]?.products.map((item2,ind2)=>{
                     return <CartHistoryList item={item2}  /> 
        })
       })} 

  
 


       {
        order_history.length==0?
        <Box sx={{ width: '100%' }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            No Orders yet  
          </Alert>
        </Collapse>
      </Box>:""
       }
       </div>


    </React.Fragment>
  )
}

export default OrderHistory