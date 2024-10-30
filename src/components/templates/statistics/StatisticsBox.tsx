import { FaEllipsis  } from "react-icons/fa6";
import { Link } from "react-router-dom";
type statisticBox_TP = {
    name: string,
    first: string,
    second: string,
    link: string,
    icon: React.ReactNode,
}

export default function StatisticsBox({name,first,second,link,icon}:statisticBox_TP) {
    return (
        <div className=" rounded-[10px] border border-[#DBEDF5] p-[10px] flex-1 shadow flex flex-col gap-[10px]">
            <div className="flex justify-between items-center ">
                <div className="flex items-center gap-[5px]">
                    <div className="w-[18px] h-[18px] text-[13px] bg-[#000] text-white flex justify-center items-center">{icon}</div>
                    <p className="text-[#041116] text-[13px] font-medium">{name}</p>
                </div>
                <FaEllipsis className="text-[14px]" />
            </div>
            <div className="flex justify-between items-center h-[30px]">
                <p className="text-[#A1A1A1] text-[14px]">
                    <span className="text-[#041116] text-[25px]  font-bold">{first}</span>
                    <span>{second}</span>
                </p>
                <Link to={link} className="text-[#478FB4] underline font-semibold text-[12px]">See All</Link>
            </div>
        </div>
    )
}
