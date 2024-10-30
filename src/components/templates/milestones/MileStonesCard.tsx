import backgroundMilestones from '../../../assets/background milestones.png'
import { BsCodeSlash } from "react-icons/bs";
import { RiShutDownLine } from "react-icons/ri";
import { FaEllipsisVertical, FaPen, FaTrash } from "react-icons/fa6";

export default function MileStonesCard() {
    return (
        <div className="flex-1 flex flex-col gap-[5px]">
            <div 
                style={{
                    backgroundImage: `url(${backgroundMilestones})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
                className="relative h-[160px] rounded-[20px] p-[10px] flex flex-col justify-between"
            >
                <div className='flex justify-end'>
                    <button  className='rounded-[10px] p-[2px] px-[5px] w-fit bg-[#fff] text-[12px] text-[#444444] '>10 days </button>
                </div>
                <p className='font-semibold text-white text-center flex items-center justify-center gap-[10px]'><BsCodeSlash className='font-bold text-[18px]'/> UI Design</p>
                <div className="progress flex flex-col gap-[2px]">
                    <p className=" font-medium text-[#fff] text-[12px]">Progress</p>
                    <div className={`h-[5px] w-full bg-[#004797] rounded-[12px] relative`}>
                        <span style={{width: '20%'}}  className={` absolute left-0 top-0 h-full w-[50%] rounded-[12px] bg-[#fff]`}></span>
                    </div>
                    <p className=" text-[#fff] text-[12px] text-right">20%</p>

                </div>
            </div>

            <div className="flex items-center justify-center gap-[10px]">
                <button className='p-[5px] rounded-[15px] bg-[#478FB4] w-[30px] h-[30px] flex justify-center items-center text-[white] text-[18px]'><RiShutDownLine /></button>
                <button className='p-[5px] rounded-[15px] bg-[#478FB4] w-[30px] h-[30px] flex justify-center items-center text-[white] text-[18px]'><FaTrash /></button>
                <button className='p-[5px] rounded-[15px] bg-[#478FB4] w-[30px] h-[30px] flex justify-center items-center text-[white] text-[18px]'><FaPen /></button>
                <button className='p-[5px] rounded-[15px] text-[#478FB4] w-[30px] h-[30px] flex justify-center items-center  text-[18px]'><FaEllipsisVertical  /></button>
            </div>
        </div>
    )
}
