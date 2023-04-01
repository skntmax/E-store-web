import React ,{useState}from 'react'
import Navbar from './../common/Navbar'
import { styled } from '@mui/material/styles';
import CartTotal from './../Grid/CartTotal'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';



import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { getAuthHeader } from '../../utils';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);




function Cart() {
 
  let dispatch = useDispatch()
  const [open, setOpen] = React.useState(true);
  let cart = useSelector(ele=> ele.prd.cart)
  const [net_total, setNetTotal ] = useState(cart.reduce((acc,ele,inde)=>{return (acc+ele.price*ele.qty)  },0 ))
   React.useEffect(() => {
        
        if(!window.localStorage.getItem('user')) {
             window.location.href="/"
        }
        
         return () => {
           return ""
        };
    }, [])
     



const buyProducts =async ()=>{

  let prd_list =cart 
  let total_price = prd_list.reduce((acc,ele,inde)=>{return (acc+ele.price*ele.qty)  },0 )
   let model = { prd_list ,  total_price}

   let buy_prd = await axios.post(`${process.env.REACT_APP_BASE_URL}/products/buyproduct` ,  {
     model
    } , getAuthHeader( ) )

      let { data}   = buy_prd

       if(data) {
       if(data.status==200) 
        window.alert(data.message)
        else
            window.alert(data.message)

      }

} 

    return (
    <React.Fragment>  
      <Navbar />
    


      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={10} md={10}>
        <div className="homepage_card" >

        {cart!=undefined ? cart.map((ele,index)=>{
         return <CartTotal item={ele} cart_calc={true}  /> 
        }) :cart.length==0?<h1> no product  </h1>:"" } 
       

        {cart!=undefined && cart.length==0? <Box sx={{ width: '100%' ,marginTop:"15px" }}>
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
           No product , click to Buy   
          </Alert>
        </Collapse>
      </Box>:"" } 
        
 



        </div>



        </Grid>

        <Grid item xs={2} md={2 } sx={{ marginTop:"25px" }} >
          
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography variant="h4" component="div">
          Total - ₹{cart.reduce((acc,ele,inde)=>{return (acc+ele.price*ele.qty)  },0 )}
        </Typography>

        <Typography variant="h7" component="div">
        Disc - ₹{0}
      </Typography>

      <Typography variant="h7" component="div">
      CGST - ₹{0}
    </Typography>

    <Typography variant="h7" component="div">
    SGST - ₹{0}
  </Typography>


        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         {cart.length} items
        </Typography>
        <Typography variant="body2">
        <Button fullWidth variant="outlined" disabled={net_total==0?true:false}  size="large" onClick={()=> buyProducts() }  >
          Pay
        </Button>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>



        
        </Grid>
      
      </Grid>
    </Box>


    
    
        </React.Fragment>
  )
}

export default Cart