
import { FaFileAlt } from "react-icons/fa";
import { SectionHeader } from "../../components/atoms";
import MainHeader from "../../components/molecules/MainHeader";
import WBSFilter from "../../components/templates/wbs/WBSFilter";
import WBSContent from "../../components/templates/wbs/WBSContent";
import CreateWorkOrder from "../../components/templates/wbs/CreateWorkOrder";

export default function WBS() {
    return (
        <div className=" flex flex-col gap-[15px] border-[2px] flex-1 bg-white border-[#EAEBF0] lg:mr-[10px]   p-[20px] ">
            <MainHeader />
            <WBSFilter />
            <div className="flex flex-col gap-[10px]">
                <SectionHeader icon={<FaFileAlt />} header="Work Orders">
                    <div className="flex gap-[10px]">
                        <CreateWorkOrder />
                    </div>
                </SectionHeader>
                <WBSContent />
            </div>
            
        </div>
    )
}
