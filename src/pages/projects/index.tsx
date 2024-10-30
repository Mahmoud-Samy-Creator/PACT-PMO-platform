// import { Link } from "react-router-dom";
import { MainTitle } from "../../components/atoms";
import ProjectsFilter from "../../components/templates/Projects/ProjectsFilter";
import { FaThLarge  } from "react-icons/fa";
import SingleProject from "../../components/templates/Projects/SingleProject";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import ShowNotification from "../../components/templates/notifications/ShowNotification";
import { Project_TP } from "../../Types";
import useUserInfo from '../../context/Hooks/userInfoOnLogin';

export default function Projects() {
    const { data: userInfo, isLoading, error } = useUserInfo();

    const { allProjects, setAllProjects } = useContext(GlobalContext) as { allProjects: Project_TP[], setAllProjects: React.Dispatch<React.SetStateAction<Project_TP[]>> };
    const userInfoData = JSON.parse(localStorage.getItem('userInfo') || '{}');
    if (isLoading) {
        return <></>;
    }

    if (error) {
        return <p>Error loading user information.</p>;
    }
    return (
        <div className="flex flex-col gap-[15px] border-[2px] flex-1 bg-white border-[#EAEBF0] xl:mr-[10px] p-[20px]">
            <div className="flex justify-between">
                <div>
                    <MainTitle title="Projects" />
                    <p className="text-[#09242E] leading-[24px] text-[13px] lg:text-[18px] ">
                        Welcome {userInfoData?.first_name} {userInfoData?.last_name}
                    </p>
                </div>
                <ShowNotification />
            </div>
            <ProjectsFilter allProjects={allProjects} setAllProjects={setAllProjects}/>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-[5px] text-[#91969B]">
                    <span className="text-[18px]"><FaThLarge/></span>
                    <p className="text-[14px]">Projects</p>
                </div>
                {/* <Link to='' className="text-[#478FB4] text-[12px] font-semibold underline">Details</Link> */}
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[15px]">
                {
                    allProjects?.map((project:Project_TP) => 
                        <SingleProject
                            key= {project.id}
                            id = {project.id}
                            title= {project.title}
                            scope= {project.scope}
                            status= {project.status}
                            progress= {project.progress}
                            contract_no= {project.contract_no}
                            initiation_start_date= {project.initiation_start_date}
                            initiation_end_date= {project.initiation_end_date}
                            deadline={project.deadline}
                        />
                )
                }
            </div>
        </div>
    )
}
