// import { Link } from "react-router-dom";
import { MainTitle } from "../../components/atoms";
import ProjectsFilter from "../../components/templates/Projects/ProjectsFilter";
import { FaThLarge  } from "react-icons/fa";
import SingleProject from "../../components/templates/Projects/SingleProject";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import ShowNotification from "../../components/templates/notifications/ShowNotification";
import { Project_TP, GlobalContextType } from "../../Types";
import useUserInfo from '../../context/Hooks/userInfoOnLogin';

export default function Projects() {
    const { isLoading, error } = useUserInfo();

    const { allProjects, setAllProjects } = useContext(GlobalContext) as GlobalContextType;
    const userInfoData = JSON.parse(localStorage.getItem('userInfo') || '{}');
    if (isLoading) {
        return <></>;
    }

    if (error) {
        return <p>Error loading user information.</p>;
    }

    console.log(allProjects)
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
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[15px] relative">
                { allProjects?.length === 0 && <NoWorksitesIndecation /> }
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

// An indecation when there is no Worksites
function NoWorksitesIndecation() {
    return (
        <div className="no-projects bg-[#1565c0] py-[25px] px-[10px] text-white sm:w-[90%] md:w-[40%] text-center font-bold absolute left-[50%] top-[50%] translate-x-[-50%] rounded-[10px] border border-[dashed] border-white border-[5px]">
            No Projects yet.
        </div>
    );
}
