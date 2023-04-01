import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import constant from '../../Redux_store/constant';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid(props) {



    const {item} = props 
    let cart = useSelector(ele=> ele.prd.cart) 
   const [expanded, setExpanded] = React.useState(false);
   let dispatch  = useDispatch()
 
 const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addtoCart =(item)=>{

   dispatch({
      type:constant.CART,
      payload:{
        data:item
      }
    })
 
   }


   const  removeToCart= (id)=> {
      
     dispatch({
      type:constant.REMOVE_TO_CART,
      payload:{
        data:id
      }
    })


   }



   const increaseQuantity =(id)=>{
    dispatch({
      type:constant.INCREASE_QTY,
      payload:{
        id:id
      }
    })
     

   }
    

   const decreaseQuantity=(id)=>{
     

       dispatch({
      type:constant.DECREASE_QTY,
      payload:{
        id:id
      }
    })
   }
    

  return (
   

        <Card sx={{ maxWidth: 345 , margin:"10px" ,position: "relative" }}>

        <CardHeader
           avatar={
             <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" >
               {item.title}
             </Avatar>
           }
           action={
             <IconButton aria-label="settings">
               <MoreVertIcon />
             </IconButton>
           }
           title={item.title}
           subheader={ moment().format('ll') }
         />
          
         <CardMedia
           component="img"
           sx={{
             justifyContent:"center",
             width:" 100%",
             height: "200px",
             objectFit: "contain"
           }}
           image={item.image}
           alt="Paella dish"
         />
         <CardContent>
           <Typography variant="body2" color="text.secondary">
            {item.description}
           </Typography>
         </CardContent>
         
         <CardActions disableSpacing sx={{
            
         }}><div 
         style={{
           position: "absolute",
           bottom: "-6px",
           width: "100%",
           display: "flex",
           alignItems: "center",
           justifyContent: "space-between",
           padding: "20px",
         }}
          >
          
            <div style={{
              display:"flex",
              alignitems:"center"
             }}>
             
            QTY <Button variant="" size="small" onClick={e=>decreaseQuantity(item.id) } >-</Button>  
             {item.qty}
            <Button variant=" " size="small" onClick={e=>increaseQuantity(item.id) } >+</Button>  
           
           </div>

            {!cart.some((ele,ind)=> ele.id==item.id)?<Button variant="contained"
            onClick={()=>{
               addtoCart(item)
            }}
             
           endIcon={ <ShoppingCartIcon size="small"  />}>
            add to Cart
         </Button>: <Button 
         variant="outlined" color="error"
         onClick={()=>{
            removeToCart(item.id)
         }}
        endIcon={ <ShoppingCartIcon size="small"  />}>
         remove to cart
      </Button> } 
        </div>

           <ExpandMore
             expand={expanded}
             onClick={handleExpandClick}
             aria-expanded={expanded}
             aria-label="show more"
             >
             <ExpandMoreIcon />
           </ExpandMore>
         </CardActions>
   
             
       </Card>

  );
}