import { useParams } from "react-router-dom";
import { MainTitle, UpdateTime } from "../../components/atoms";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import Navbar from "../organisms/Navbar";
import ShowNotification from "../templates/notifications/ShowNotification";
import NavbarShow from "../templates/navbar/NavbarShow";
import { Project_TP } from '../../Types'

export default function MainHeader() {
    const {id} = useParams()

    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("GlobalContext must be used within a GlobalProvider");
    }
    const { allProjects } = context;
    const [currentProject, setCurrentProject] = useState<Project_TP | null>(null)
    useEffect(() => {
        const handleFilter = () => {
            const filter = allProjects.filter((project: Project_TP) => project.id === Number(id));
            setCurrentProject(filter[0]);
            console.log(filter[0]);
        };
        handleFilter();
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
                    <NavbarShow />
                </div>
            </div>
            <Navbar  className="hidden lg:flex" nav_id={id} />
        </div>
    )
}