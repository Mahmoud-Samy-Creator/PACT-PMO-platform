// import { FaEllipsis   } from "react-icons/fa6";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DeleteAlertDialog from './DeleteAlertDialog';
import { GlobalContext } from '../../../context/GlobalContext';
import type { SingleProject_TP } from '../../../Types';


export default function SingleProject({id, title, scope, status, progress, contract_no, initiation_start_date, initiation_end_date, deadline }: SingleProject_TP) {
    const globalContext = useContext(GlobalContext);
    if (!globalContext) {
        throw new Error("GlobalContext is undefined");
    }
    const { allProjects, setAllProjects } = globalContext;

    const formattedStartDate = new Date(initiation_start_date).toLocaleDateString("en-US");
    const formattedEndDate = new Date(initiation_end_date).toLocaleDateString("en-US");
    const formattedDeadline = deadline?.split(" ")[0];
    return (
        <div className="py-[10px] px-[20px] flex flex-col gap-[10px] rounded-r-[10px] rounded-bl-[10px] border border-[#DBEDF5] shadow">
            <div>
                <div className="flex items-center justify-between font-[Jakarta Sans]">
                    <Link to={`/projects/${id}/overview`}>
                        <p className="font-semibold text-[#26252B]">{title}</p>
                    </Link>                    
                    <DeleteAlertDialog projectId={id} allProjects={allProjects} setAllProjects={setAllProjects}/>
                </div>
                <p className="text-[12px] font-medium text-[#91969B] opacity-70">{scope}</p>
            </div>
            <div className="text-[12px] text-[#91969B] flex items-center justify-between">
                <p className=" ">Apr 2, 2023</p>
                <p>{contract_no}</p>
            </div>
            <div className="grid grid-cols-3 gap-[5px]">
                <div className="flex flex-col">
                    <p className="text-[#4A4646] font-bold text-[13px]">Start</p>
                    <p className="text-[#91969B] text-[10px]">{formattedStartDate}</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-[#4A4646] font-bold text-[13px]">End</p>
                    <p className="text-[#91969B] text-[10px]">{formattedEndDate}</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-[#4A4646] font-bold text-[13px]">Deadline</p>
                    <p className="text-[#91969B] text-[10px]">{formattedDeadline} days</p>
                </div>
            </div>
            <div className="flex items-center gap-[20px]">
                <div className="progress w-[60%] flex flex-col gap-[5px]">
                    <p className=" font-medium text-[#4A4646] text-[10px] lg:text-[12px]">{progress} completed</p>
                    <div className={`h-[10px] w-full bg-[#A0A0A033] rounded-[12px] relative`}>
                        <span style={{width:progress}} className={` absolute left-0 top-0 h-full  rounded-[12px] ${status === 'done'? 'bg-[#00ae7c]': status === 'in progress' ? 'bg-[#9FA2B2]': status === 'todo' ? 'bg-[#478FB4]' : 'bg-[#A0A0A033]'}`}></span>
                    </div>
                </div>
                <div className="status w-[40%] flex flex-col ">
                    <p className=" font-medium text-[#4A4646] text-[14px]">Status</p>
                    <div className={` w-full  rounded-[12px] relative flex  items-center ${status === 'done'? 'bg-[#00ae7c]': status === 'in progress' ? 'bg-[#9FA2B2]': status === 'todo' ? 'bg-[#478FB4]' : 'bg-[#A0A0A033]'}`}>
                        <span className={`absolute h-[5px] w-[5px] rounded-full bg-white right-[5px]`}></span>
                        <span className="text-[11px] px-[5px] text-white font-bold]">{status}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}