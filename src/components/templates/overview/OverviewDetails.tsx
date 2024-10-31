import ProjectTitleImage from '../../../assets/Task Title.png';
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { Project_TP } from '../../../Types';
import filterProjects from '../../../pages/Functions/filterProjects';

export default function OverviewDetails() {
    const { allProjects } = useContext(GlobalContext) ?? {};
    const [currentProject, setCurrentProject] = useState<Project_TP | null>(null);
    const {id} = useParams();

    useEffect(() => {
        const filteredProject = allProjects && id ? filterProjects(allProjects, id) : null;
        setCurrentProject(filteredProject);
    }, [id, allProjects]);

    if (!currentProject) {
        return <p>Loading project details...</p>;
    }

    return (
        <div className="details flex flex-col lg:flex-row  gap-[20px]">
            <img className="hidden lg:block" src={ProjectTitleImage} alt="" />    
            <div className="flex flex-1  flex-col gap-[5px]">
                <p className="text-[13px] text-[#667085]">Type: {currentProject?.worksite_type?.name}</p>

                <p className="text-[13px] text-[#667085]">Sector: {currentProject?.sector}</p>
                <p className="text-[13px] text-[#667085]">Sector Presidency: {currentProject?.sector_presidency}</p>
                <p className="text-[13px] text-[#667085]">prosecution: {currentProject?.prosecution}</p>
                <p className="text-[13px] text-[#667085]">Scope Of Work: {currentProject?.scope}</p>
                <p className="text-[12px] text-[#09242E] font-medium max-w-[300px] leading-[16px]">
                pact. is a management system designed to help teams collaborate & manage their projects with ease. It offers powerful features such as task tracking, project organization, scheduling, & communication tools to keep teams organized.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-[20px]">
                <div className="flex  min-w-[120px] flex-col gap-[20px]">
                    <p className="rounded-[8px] w-fit px-[12px] py-[8px] text-[12px] font-semibold flex justify-center items-center bg-[#F4F5F6]">{currentProject?.contract_no}</p>
                    <div>
                        <p className="text-[#667085] text-[12px] font-semibold">Planned Amount</p>
                        <p className="font-bold text-[14px] text-[#09242E] ">3,030.00 L.E</p>
                    </div>
                    <div>
                        <p className="text-[#667085] text-[12px] font-semibold">Planned Amount</p>
                        <p className="font-bold text-[14px] text-[#09242E] ">3,030.00 L.E</p>
                    </div>
                </div>
                <div className="bg-[#FAFAFA] min-w-[120px] p-[10px] rounded-[8px] flex flex-col gap-[5px] max-h-fit">
                    <div>
                        <p className="text-[12px] text-[#667085]">Start Date</p>
                        <h3 className="font-semibold text-[14px] text-[#09242E]">03/05/2020</h3>
                    </div>
                    <div>
                        <p className="text-[12px] text-[#667085]">End Date</p>
                        <h3 className="font-semibold text-[14px] text-[#09242E]">03/05/2020</h3>
                    </div>
                    <div>
                        <p className="text-[12px] text-[#667085]">Deadline</p>
                        <h3 className="font-semibold text-[14px] text-[#09242E]">Within 10 Months</h3>
                    </div>
                    <div>
                        <p className="text-[12px] text-[#667085]">Actual Deadline</p>
                        <h3 className="font-semibold text-[14px] text-[#09242E]">--------------</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
