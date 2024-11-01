import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import deleteProjectOrder from './ApiCalls/deleteProjects';
import { ProjectDeleteModal_TP } from '../../../Types';

// Import alert modal from MUI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useState } from 'react';


function DeleteAlertDialog({projectId, allProjects, setAllProjects}: ProjectDeleteModal_TP) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  return (
  <>
      <button className="text-[14px] project-tool-tip" onClick={handleClickOpen}
      >
          <FontAwesomeIcon icon={faTrashCan} />
      </button>
      <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
      >
      <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this project?"}
      </DialogTitle>
      <DialogContent>
          <DialogContentText id="alert-dialog-description">
              This action cannot be undoed. Make sure you want to delete this project.
          </DialogContentText>
      </DialogContent>
      <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={() => deleteProjectOrder({id: projectId, handleCloseModal: handleClose, allProjects: allProjects, setAllProjects: setAllProjects})} autoFocus>
              Agree
          </Button>
      </DialogActions>
      </Dialog>
  </>
  );
}

export default DeleteAlertDialog;