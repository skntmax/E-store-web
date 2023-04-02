import * as React from 'react';
import './../../assets/css/navbar.css'
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useSelector } from 'react-redux';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Order History', 'Dashboard', 'Logout'];


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
   
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
   
}));



const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {

  let navigate = useNavigate()
  let cart = useSelector(ele=> ele.prd.cart)
   const [data, setData] = React.useState({
    ud:JSON.parse(window.localStorage.getItem('user')),
    validated:false 
   });
    

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    
    setAnchorElUser(event.currentTarget);
 
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
   
    if(setting.target.innerText=="Logout") {
      setAnchorElUser(null);
       window.localStorage.removeItem('user')
       window.localStorage.removeItem('token')
       navigate('/')
      }
      
      if(setting.target.innerText=="Order History") {
        setAnchorElUser(null);
         navigate('/orders')
        }

        if(setting.target.innerText=="Dashboard") {
          setAnchorElUser(null);
           navigate('/dashboard/'+data.ud.username)
          }

  };

React.useEffect(() => {

 if(window.localStorage.getItem('user')) {
    setData({...data,validated:true})
   }
  
  }, [])

  if(!data.validated) {
      return <Loader />
  }else{
    return ( 
     

       
      <Box sx={{ flexGrow: 1  }}>
        <AppBar position="relative">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>


            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              E-Commerce-Store
            </Typography>
        
             
            <LocalGroceryStoreIcon onClick={()=>{
                  navigate('/cart')
              }}  /> 
               {cart.length>0?  <span className="dot mr-2 text-center"
               >  {cart.length} </span> :""}
              {data.ud?data.ud.username:""} <Box sx={{ flexGrow: 0 ,  }}>
              <Tooltip title="Open settings">
            
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={data.ud?data.ud.username:""} src="/static/images/avatar/2.jpg" 
                  />

                </IconButton>
              </Tooltip>
               
  
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => ( 
                  <MenuItem key={setting} onClick={(setting)=> handleCloseUserMenu(setting) }>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
  

           </Toolbar>
        </AppBar>
      </Box>

    );
  }
 
}