
import { Link } from "react-router-dom";
import { SectionHeader } from "../../components/atoms";
import MainHeader from "../../components/molecules/MainHeader";
import { BsFillPersonFill } from "react-icons/bs";
import ProjectMembers from "../../components/templates/members/ProjectMembers";
import CreateMember from "../../components/templates/members/CreateMember";

export default function Members() {
    return (
        <div className=" flex flex-col gap-[15px] border-[2px] flex-1 bg-white border-[#EAEBF0] lg:mr-[10px]   p-[20px] ">
            <MainHeader />
            <div className="flex flex-col gap-[10px]">
                <SectionHeader icon={<BsFillPersonFill />} header=" Project Members">
                    <div className="flex items-center gap-3">
                        <Link to='/' className="text-[#478FB4] underline font-semibold text-[12px]">See All</Link>
                        <CreateMember />
                    </div>
                </SectionHeader>
                <ProjectMembers />
            </div>
        </div>
    )
}
