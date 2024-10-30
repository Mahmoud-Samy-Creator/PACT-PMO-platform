import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FaPlus } from "react-icons/fa6";

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

export default function CreateService() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button onClick={handleOpen} className="rounded-[6px] py-[5px] px-[10px] bg-[#478FB4] font-medium text-[11px] lg:text-[14px] flex items-center gap-[5px] text-white shadow-[0px_2px_5px_0px_rgba(34, 100, 229, 0.12)]  shadow-[0px_0px_0px_1px_rgba(34, 100, 229, 1)]">
                <FaPlus/>
                <span>Assign to Milestones</span>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <form className='form-container-modal lg:w-[600px] ' action="">
                        <h3 className='text-darkColor font-medium text-center text-xl'>
                            Select MileStone to Assign Service
                        </h3>

                        <div className="input-container">
                            <label htmlFor="production" className="input-label">Select MileStone</label>
                            <select name="" id="production"  className="input">
                                <option value="" selected>Select Here ..</option>
                                <option value="">First MileStone</option>
                                <option value="">Second MileStone</option>
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
