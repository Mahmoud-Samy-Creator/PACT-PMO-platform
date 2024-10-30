import { NavLink } from "react-router-dom";
import pendingToProgress from "../../apiCalls/ProjectCalls/pendingToProgress";
type Navbar_TP = {
    nav_id ?: string ,
    className?: string,
}
export default function Navbar({nav_id,className}:Navbar_TP) {
    return (
        <div className={`h-[40px] z-[1000] relative navbar flex gap-[10px] border-b border-[#EAEBF0] text-[14px] text-[#4A4646] ${className}`}>
            <NavLink className='' to={`/projects/${nav_id}/overview`}>Overview</NavLink>
            <NavLink className='' to={`/projects/${nav_id}/statistics`}>Statistics</NavLink>
            <NavLink className='' to={`/projects/${nav_id}/wbs`}>WBS</NavLink>
            <NavLink className='' to={`/projects/${nav_id}/milestones`}>MileStones</NavLink>
            <NavLink className='' to={`/projects/${nav_id}/inspections`}>Inspections</NavLink>
            <NavLink className='' to={`/projects/${nav_id}/reports`}>Reports</NavLink>
            <NavLink className='' to={`/projects/${nav_id}/reconcile`}>Reconcile</NavLink>
            <NavLink className='' to={`/projects/${nav_id}/materials`}>Materials</NavLink>
            <NavLink className='' to={`/projects/${nav_id}/services`}>Services</NavLink>
            <NavLink className='' to={`/projects/${nav_id}/members`}>Members</NavLink>
            <ProjectToInProgressButton id = {nav_id}/>
        </div>
    )
}

function ProjectToInProgressButton({id}: {id: string | undefined}) {
    return (
        <span
            className="block bg-[black] text-[white] h-[fit-content] px-[15px] py-[3px] rounded-[5px] cursor-pointer lg:absolute lg:right-0"
            onClick={() => { if (id) pendingToProgress(id) }}
        >Make in progress</span>
    )
}
