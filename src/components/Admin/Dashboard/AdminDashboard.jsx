import React ,{useEffect , useState} from 'react'
import Navbar from './../../common/Navbar'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import constant from '../../../Redux_store/constant';
import { Link } from 'react-router-dom';
import DeleteUser from './DeletUser'

function AdminDashboard() {
   let dispatch = useDispatch()
  let user_list = useSelector(ele=>ele.admin_user_data.u_list)
    const [checked, setChecked] = React.useState([]);

  const handleToggle = (user_email) => () => {
    console.log(user_email);
     
  };



  useEffect(() => {
    
    (async function () {
        let user =await axios.get(`${process.env.REACT_APP_BASE_URL}/admin/get-all-users`) 
         const {data } = user 
         if(data.status==200) {
            
            dispatch({
                type:constant.USERS_LIST , 
                payload:{
                    data:data.result
                } 
            })
             
         }else{
            alert(data.message)
         }

    })()  

  }, []);

   console.log(checked);
    return (
    <React.Fragment>
    <Navbar />
    <div className="homepage_card" >
    <List dense sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
    {user_list.map((ele,index) => {
      const labelId = `checkbox-list-secondary-label-${index}`;
      return (
        <ListItem
          key={index}
          secondaryAction={

            <DeleteUser
             email={ele.email}
              edge="end"
            //   onChange={handleToggle(ele.email)}

              />
          
          }
          disablePadding
        >

          <ListItemButton>
            <ListItemAvatar>
             
              <Avatar 
                alt={`${ele.username}`}
                src={`/static/images/avatar/${ele.username}.jpg`}
              />
               
            </ListItemAvatar>
            <Link className="users_list" to={`/user_detail/${ele.username}`}  > <ListItemText id={labelId} primary={` ${ele.username}`} /> </Link> 
          </ListItemButton>
       
        </ListItem>
      );
    })}
  </List>

</div>
  
    
    </React.Fragment>
  )
}

export default AdminDashboard