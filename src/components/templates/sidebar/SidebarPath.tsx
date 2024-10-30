import { FaChevronDown } from 'react-icons/fa'
import { SidebarPath_TP } from '../../../Types'
import { Link } from 'react-router-dom'

export default function SidebarPath({icon,title,count,className,path}:SidebarPath_TP) {
    return (
        <Link to={path} className={`${className} flex gap-[5px] lg:gap-[10px] justify-center cursor-pointer  py-[10px] items-center px-[7px] lg:px-[20px] `}>
            <span className='text-[#5F6D7E] text-[22px]'>{icon}</span>
            <p className={`text-sidebar_links font-semibold w-[130px] hidden lg:block ${!count && 'w-[150px]'}`}>{title}</p>
            <p className={`w-[20px] h-[20px] text-white hidden  ${count && '!flex bg-[#F34E4E]'} flex justify-center items-center rounded-full text-[10px] font-medium`}>{count}</p>
            <span className=' text-[#5F6D7E] text-[15px]'>
            <FaChevronDown/>
            </span>
        </Link>
    )
}
