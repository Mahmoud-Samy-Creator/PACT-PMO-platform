import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { FaFileLines,FaRepeat,FaCircleMinus,FaRightLeft   } from "react-icons/fa6";

import { FaThLarge } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom'

export default function MaterialsLinksMenu() {
  const {id} =  useParams()
  console.log(id)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };  

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='w-[30px] h-[30px] !text-[#000] !max-w-fit  flex justify-center items-center rounded bg-white border border-[#33333318] shadow'
      >
        <FaThLarge/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className=' mt-[10px]'
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
          <Link to={`/projects/${id}/materials/orders`} 
          onClick={handleClose} 
          className=' !min-w-[150px] duration-200 flex items-center justify-between px-[10px] py-[5px] hover:bg-[#3333331e]'
          >
            <span className='font-medium text-[#09242E]'>Orders</span>
            <FaFileLines  className='text-[#09242E]'/>
          </Link>
          <Link to={`/projects/${id}/materials/swaps`}  
          onClick={handleClose} 
          className=' !min-w-[150px] duration-200 flex items-center justify-between px-[10px] py-[5px] hover:bg-[#3333331e]'
          >
            <span className='font-medium text-[#09242E]'>Swaps</span>
            <FaRepeat  className='text-[#09242E]'/>
          </Link>
          <Link to={`/projects/${id}/materials/deducts`}  
          onClick={handleClose} 
          className=' !min-w-[150px] duration-200 flex items-center justify-between px-[10px] py-[5px] hover:bg-[#3333331e]'
          >
            <span className='font-medium text-[#09242E]'>Deducts</span>
            <FaCircleMinus   className='text-[#09242E]'/>
          </Link>
          <Link to={`/projects/${id}/materials/returns`}  
          onClick={handleClose} 
          className=' !min-w-[150px] duration-200 flex items-center justify-between px-[10px] py-[5px] hover:bg-[#3333331e]'
          >
            <span className='font-medium text-[#09242E]'>Returns</span>
            <FaRightLeft   className='text-[#09242E]'/>
          </Link>


      </Menu>
    </div>
  );
}
