import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import {styled} from '@mui/system';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import {useState} from 'react';
import * as React from 'react';
import AddPost from '../AddPost/AddPost'
import {Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const StyledTooltip=styled(Tooltip,{})({
    position:'fixed',
    bottom:20,
    right:20
});
const StyledContainer=styled(Container,{})`
width:500px;
height:500px;
background-color:white;
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
margin:auto;
@media(max-width:450px){
    width:100vw;
    height:100vh;
}
`;

export default function AddButton({setPosts}) {
   
  const [open,setOpen]=useState(false);
  const [openAlert,setOpenAlert]=useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return (
      <>
    <StyledTooltip title="Add" arrow aria-label='add' onClick={()=>setOpen(true)}>
        <Fab color="primary" >
      <AddIcon/>    
      </Fab>
    </StyledTooltip>
    <Modal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <StyledContainer>
            {/*---------------- Post Form------------- */}
          < AddPost setPosts={setPosts} setOpenAlert={setOpenAlert} setOpen={setOpen}/>
          </StyledContainer>
          
     
     </Modal>
     <Snackbar 
     open={openAlert}
     autoHideDuration={6000}
     onClose={handleClose}
     
     >
       <Alert
       onClose={handleClose}
       severity='success'
       sx={{width:'100%'}}
       >
         Your post is created successfully

       </Alert>

       </Snackbar> 
    
    </>
    
  )
}
