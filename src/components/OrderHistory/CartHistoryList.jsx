import * as React from 'react';
import { styled } from '@mui/material/styles';
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
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
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

export default function RecipeReviewCard(props) {
    
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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon  />
        </IconButton>
        
        <Typography variant="h6" component="h2">
        Ready To Dispatch
      </Typography>

     </div>

      
      </CardActions>

          
    </Card>
  );
}