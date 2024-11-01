import { useParams } from "react-router-dom";
import { MainTitle, UpdateTime } from "../../components/atoms";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import Navbar from "../organisms/Navbar";
import ShowNotification from "../templates/notifications/ShowNotification";
import NavbarShow from "../templates/navbar/NavbarShow";
import { Project_TP } from '../../Types';
import filterProjects from '../../pages/Functions/filterProjects';

export default function MainHeader() {
    const {id} = useParams()
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("GlobalContext must be used within a GlobalProvider");
    }
    const { allProjects } = context;

    const [pending, setPending] = useState<boolean>(true);
    const [currentProject, setCurrentProject] = useState<Project_TP | null>(null);

    useEffect(() => {
        const filteredProject = allProjects && id ? filterProjects(allProjects, id) : null;
        if (filteredProject?.status === 'pending') {
            setPending(true);
        } else {
            setPending(false);
        }
        setCurrentProject(filteredProject);

    }, [id, allProjects]);

    return (
        <div className="flex flex-col gap-[15px]">
            <div className="flex items-center justify-between">
                <div>
                    <MainTitle title={currentProject?.title || ''} />
                    <UpdateTime update_time={currentProject?.initiation_start_date ? new Date(currentProject.initiation_start_date).toLocaleDateString("en-US") : ''}  />
                </div>
                <div className="flex items-center gap-[10px]">
                    <ShowNotification />
                    <NavbarShow status={pending} setPending={setPending}/>
                </div>
            </div>
            <Navbar className="hidden lg:flex" nav_id={id} status={pending} setStatus={setPending}/>
        </div>
    )
}
