import Member from "./Member";
import Profile1 from '../../../assets/profile.png';
import {useParams} from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { Project_TP, Member_TP } from '../../../Types';
import filterProjects from '../../../pages/Functions/filterProjects';


export default function ProjectMembers() {
    const {id} = useParams()
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("GlobalContext must be used within a GlobalProvider");
    }
    const { allProjects } = context;
    const [members, setMembers] = useState<Member_TP[] | null>([]);;


    useEffect(() => {
        const rolesToExtract = ["planning_manager", "operating_manager", "project_manager", "mmg", "contractor", "inspector"];
        const currentProject = id ? filterProjects(allProjects, id) : null;
        const selectedRolesArray = currentProject ? rolesToExtract.map(role => currentProject[role as keyof Project_TP]).filter(role => role && typeof role === 'object' && 'id' in role) as Member_TP[] : [];
            setMembers(selectedRolesArray);
            console.log(selectedRolesArray);
    }, [ id, allProjects ]);

    return (
        <div className="grid sm:grid-cols-2 gap-[20px]">
            {
                (members ?? []).map((member) => (
                    <Member key={member.id} id={member.id} image={Profile1} first_name={member.first_name} role={member.role} email={member.email} phone={member.phone}/>
                ))
            }
        </div>
    )
}
