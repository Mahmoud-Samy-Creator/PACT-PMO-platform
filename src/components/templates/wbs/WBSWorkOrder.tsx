import { FaFileAlt } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";
import MainProgress from "../../atoms/MainProgress";

export default function WBSWorkOrder() {
    return (
        <div className="rounded-[10px] p-[10px] lg:p-[20px] pt-[10px] border border-[#DBEDF5] shadow flex flex-col gap-[10px]">
            <div className="flex justify-between">
                <FaFileAlt className="text-[14px]" />
                <FaEllipsis />
            </div>
            <div className="grid grid-cols-3 gap-[5px]">
                <div className="flex flex-col">
                    <p className="text-[#4A4646] font-bold text-[12px]">Start</p>
                    <p className="text-[#91969B] text-[8px] sm:text-[10px]">May 20, 2020</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-[#4A4646] font-bold text-[12px]">End</p>
                    <p className="text-[#91969B] text-[8px] sm:text-[10px]">May 20, 2020</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-[#4A4646] font-bold text-[12px]">Deadline</p>
                    <p className="text-[#91969B] text-[8px] sm:text-[10px]">May 20, 2020</p>
                </div>
            </div>
            <p className="font-semibold text-[14px] text-[#4F4F4F]">Work Order Title. not just a short title but it could be long to describe the order</p>
            <p className="font-medium text-[12px] text-[#A1A1A1]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dui mi. Fusce varius bibendum ante, non lacinia. Fall usasc ce variu slorem ipsum dolor sit amet</p>
            <MainProgress progress="45%" />
        </div>
    )
}
