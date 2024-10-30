import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {   FaPlus } from "react-icons/fa6";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    maxHeight: '95vh',
    overflow: 'auto',
};

export default function CreateMember() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button onClick={handleOpen} className="add-button"><FaPlus/></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <form className='form-container-modal ' action="">
                        <h3 className='text-darkColor font-medium text-center text-xl'>Create Member</h3>

                        <div className="input-container">
                            <label htmlFor="production" className="input-label">Role</label>
                            <select name="" id="production"  className="input">
                                <option value="" selected>Select Here ..</option>
                                <option value="">General Manager</option>
                                <option value="">Planning Manager</option>
                                <option value="">Project Manager</option>
                                <option value="">Sales Manager</option>
                                <option value="">Operations Director</option>
                                <option value="">Contractor</option>
                                <option value="">Inspector</option>
                                <option value="">Store Manager</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <label htmlFor="production" className="input-label">Member</label>
                            <select name="" id="production"  className="input">
                                <option value="" selected>Select Here ..</option>
                                <option value="">General Manager</option>
                                <option value="">Planning Manager</option>
                                <option value="">Project Manager</option>
                                <option value="">Sales Manager</option>
                                <option value="">Operations Director</option>
                                <option value="">Contractor</option>
                                <option value="">Inspector</option>
                                <option value="">Store Manager</option>
                            </select>
                        </div>


                        <div className="action-buttons-container">
                            <button onClick={handleClose} className='action-button'>Cancel</button>
                            <button type='submit' className='action-button'>Confirm</button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
);
}
