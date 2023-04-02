import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [isDeleted, setIsDeleted ] = React.useState(false);
  const { email }  = props 

  const handleClickOpen = () => {
    setOpen(true);
  };



  const handleClose =()=>{
    setOpen(false);
     
  }

  const DeleteUser =async () => {
    
    let dlt_usr  = await axios.post(`${process.env.REACT_APP_BASE_URL}/admin/remove-user` ,{email})
    const {data}  = dlt_usr  
    if(data.status==200) {
        setIsDeleted(true)
        setOpen(false);
    }  
    else{
      window.alert(data.result.message)      
    }
};
   



  return (
    <div>
      <Button  onClick={handleClickOpen} >
        <DeleteIcon variant="outlined"  />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are your sure , you want to delete this user 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button onClick={DeleteUser} autoFocus>
            yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}