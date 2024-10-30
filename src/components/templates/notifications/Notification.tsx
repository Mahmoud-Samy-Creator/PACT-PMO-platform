import { FiBarChart2 } from "react-icons/fi";
import { FaInfo,FaCheck  } from "react-icons/fa6";
import { Notification_TP } from "../../../Types";

export default function Notification({title,description,status}:Notification_TP) {
    return (
        <div className={`rounded-[10px]   border p-[10px]  flex flex-col gap-[5px] shadow-[1px_1px_10px_rgb(0,0,0,0.1)] border-[#DBEDF5] ${status === 'todo' ? 'bg-[#fff]' : status === 'inprogress' ? "bg-[#DBEDF5]" : status === 'done' ? 'bg-[#00b88421]' : 'bg-[#fff]'}`}>
            <div className="flex  items-center gap-[5px]">
                <span className={`flex  justify-center items-center w-[20px] h-[20px] text-[14px]  text-white rounded ${status === 'todo' ? 'bg-[#000]' : status === 'inprogress' ? "bg-[#478FB4]" : status === 'done' ? 'bg-[#00B884]' : 'bg-[#333]'}`}>
                    {status === 'inprogress' ? <FiBarChart2/> : status === 'todo' ? <FaInfo/> :status === 'done' ?<FaCheck />:<FaInfo/>}
                </span>
                <p className="text-[#5F6D7E] font-semibold text-[12px]">{title}</p>
            </div>
            <p className="text-[10px] text-[#474747] font-medium">
                {description}
            </p>
        </div>
    )
}
