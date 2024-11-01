import { NavLink } from "react-router-dom";
import { Navbar_TP } from "../../Types";
import { useState } from 'react';
import axios from 'axios';

export default function Navbar({ nav_id, className, status, setStatus }: Navbar_TP & { status: boolean }) {
    const [showSuccessAlert, setSuccessShowAlert] = useState(false);
    const [showFailedAlert, setFailedShowAlert] = useState(false);
    const [message, setMessage] = useState('');
    const [fadeOut, setFadeOut] = useState(false);

    // API call to switch the project status from pending to in progress
    const pendingToProgress = async (projectId: string) => {
        try {
            const response = await axios.patch(`https://game.telast.tech/api/v1/worksites/worksite/${projectId}/inprogress/`);
            setStatus(false);
            setSuccessShowAlert(true);

            setTimeout(() => setFadeOut(true), 3000);
            setTimeout(() => {
                setSuccessShowAlert(false);
                setFadeOut(false);
            }, 3500);

            return response.data;
        } catch (error) {
            console.error("Error while making project in progress", error);
            setMessage(String(error));
            setFailedShowAlert(true);

            setTimeout(() => setFadeOut(true), 3000);
            setTimeout(() => {
                setSuccessShowAlert(false);
                setFadeOut(false);
            }, 3500);
        }
    }

    function ProjectToInProgressButton({ id }: { id: string | undefined }) {
        return (
            <span
                className="block bg-[black] text-[white] h-[fit-content] px-[15px] py-[3px] rounded-[5px] cursor-pointer lg:absolute lg:right-0"
                onClick={() => { if (id) pendingToProgress(id) }}
            >
                Make in progress
            </span>
        );
    }

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
            {status && <ProjectToInProgressButton id={nav_id} />}
            {showSuccessAlert && <InProgressAlert fadeOut={fadeOut} message="Switched to in progress successfully" />}
            {showFailedAlert && <InProgressAlert fadeOut={fadeOut} message={message} />}
        </div>
    );
}

function InProgressAlert({ fadeOut, message }: { fadeOut: boolean, message: string }) {
    return (
        <div
            className={`addInProgressAlert bg-[#10cbb6] text-center py-[10px] px-[20px] h-[60px] font-bold text-white text-[20px] rounded-[14px] fixed bottom-[30px] left-[50%] translate-x-[-50%] transition-opacity duration-500 ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
        >
            {message}
        </div>
    );
}
