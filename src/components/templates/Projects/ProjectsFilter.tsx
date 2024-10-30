// import { FaEllipsis } from "react-icons/fa6";

import { FaFilter } from "react-icons/fa6";
import { FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { Project_TP } from "../../../Types";
import FilterMethodsForm from "./FilterMethodsForm";
import {GlobalContext} from "../../../context/GlobalContext";
import StatusFilter from "./FiltrationChoises/StatusFilter";
import DistrictFilter from "./FiltrationChoises/DistrictFilter";
import WorksiteTypeFilter from "./FiltrationChoises/WorsiteTypeFilter";
import SectorFilter from "./FiltrationChoises/SectorFilter";
import SectorPresidencyFilter from "./FiltrationChoises/SectorPresidencyFilter";
import ProsecutionFilter from "./FiltrationChoises/ProsecutionFilter";
import DateFilter from "./FiltrationChoises/DateFilter";
import PersonnelFilter from "./FiltrationChoises/PersonnelFilter";
import axios from "axios";


const API_URL: string = "https://game.telast.tech/api/v1/worksites/worksite";


export default function ProjectsFilter(
    { allProjects, setAllProjects}:
    { allProjects: Project_TP[]; setAllProjects: React.Dispatch<React.SetStateAction<Project_TP[]>>}) {
    // ================== Filtertin States ==================
    const [search, setSearch] = useState("");
    const [originalProjects, setOriginalProjects] = useState<Project_TP[]>([]);

    // Filtration states
    const [blur, setBlur] = useState(false);
    const [statusFilterBobUp, setStatusFilterBobUp] = useState(false);
    const [districtFilterBobUp, setDistrictFilterBobUp] = useState(false);
    const [workSiteFilterBobUp, setWorkSiteFilterBobUp] = useState(false);
    const [sectorFilterBobUp, setSectorFilterBobUp] = useState(false);
    const [sectorPresidencyFilterBobUp, setSectorPresidencyFilterBobUp] = useState(false);
    const [prosecutionFilterBobUp, setProsecutionFilterBobUp] = useState(false);
    const [actualStartDataPopUp, setActualStartDataPopUp] = useState(false);
    const [actualEndDataPopUp, setActualEndDataPopUp] = useState(false);
    const [initiationStartDataPopUp, setInitiationStartDataPopUp] = useState(false);
    const [initiationEndDataPopUp, setInitiationEndDataPopUp] = useState(false);

    // Filteration using personnel
    const [planningManagerspopUp, setPlanningManagersPopUp] = useState(false);
    const [projectManagerspopUp, setProjectManagersPopUp] = useState(false);
    const [operatingManagerspopUp, setOperatingManagersPopUp] = useState(false);
    const [inspectorspopUp, setInspectorsPopUp] = useState(false);
    const [mmgpopUp, setMmgPopUp] = useState(false);
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("GlobalContext must be used within a GlobalProvider");
    }
    const { next, setNext, prev, setPrev, usersList } = context;

    useEffect(() => {
        if (originalProjects.length === 0 && allProjects.length > 0) {
            setOriginalProjects(JSON.parse(JSON.stringify(allProjects)));
        }
    }, [allProjects, originalProjects.length]);

    function toggleBlur() {
        setBlur((prevBlur) => !prevBlur);
        setStatusFilterBobUp(false);
        setDistrictFilterBobUp(false);
        setWorkSiteFilterBobUp(false);
        setSectorFilterBobUp(false);
        setSectorPresidencyFilterBobUp(false);
        setProsecutionFilterBobUp(false);
        setActualStartDataPopUp(false);
        setActualEndDataPopUp(false);
        setInitiationStartDataPopUp(false);
        setInitiationEndDataPopUp(false);
        setPlanningManagersPopUp(false);
        setProjectManagersPopUp(false);
        setOperatingManagersPopUp(false);
        setInspectorsPopUp(false);
        setMmgPopUp(false);
    }

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
        if (e.target.value === "") {
            setAllProjects(originalProjects);
        }
    }

    async function handleNameFilter(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const getProjectsOnSearch = async () => (await axios.get(`${API_URL}/?search=${search}`)).data;
        const { results: projectsOnSearch } = await getProjectsOnSearch();
        setAllProjects(projectsOnSearch);
    }
    
    async function handleResultsFilter(e: React.ChangeEvent<HTMLSelectElement>) {
        const getProjectsOnPages = async () => (await axios.get(`${API_URL}/?page=1&size=${e.target.value}`)).data;
        const { results: projectsOnSearch } = await getProjectsOnPages();
        setAllProjects(projectsOnSearch);
        
    }

    async function nextPage() {
        if (next) {
            const getNextProjects = async () => (await axios.get(next)).data;
            const { results: nextProjects, next: nextPointer, previous: prevPointer } = await getNextProjects();
            setAllProjects(nextProjects);
            setNext(nextPointer);
            setPrev(prevPointer);
        } else {
            setNext(null);
            console.log("No more projects");
        }
        
    }

    async function prevPage() {
        if (prev) {
            const getPrevProjects = async () => (await axios.get(prev)).data;
            const { results: nextProjects, next: nextPointer, previous: prevPointer } = await getPrevProjects();
            setAllProjects(nextProjects);
            setNext(nextPointer);
            setPrev(prevPointer);
        } else {
            console.log("No more projects");
            setPrev(null);
        }
    }
    return (
        <div className="lg:px-[10px] flex lg:gap-[100px] justify-between relative">
            {blur && (
                <div
                    className="fixed top-0 left-0 w-screen h-screen bg-black z-10 opacity-70"
                    onClick={toggleBlur}
                ></div>
            )}
            <div className="lg:flex mr-[15px]">
                <button
                    className="w-[34px] h-[34px] flex justify-center items-center rounded bg-white border border-[#33333318] shadow z-[11]"
                    onClick={toggleBlur}
                >
                    <FaFilter />
                </button>
                {blur && (
                    <>
                        <div className="absolute top-[50px] bg-white border border-[#f2f2f2] border-[2px] h-fit-content w-[210px] z-[11] rounded-[10px] overflow-hidden">
                            <FilterMethodsForm
                                setStatusFilterBobUp={setStatusFilterBobUp}
                                setDistrictFilterBobUp={setDistrictFilterBobUp}
                                setWorkSiteFilterBobUp={setWorkSiteFilterBobUp}
                                setSectorFilterBobUp={setSectorFilterBobUp}
                                setSectorPresidencyFilterBobUp={setSectorPresidencyFilterBobUp}
                                setProsecutionFilterBobUp={setProsecutionFilterBobUp}
                                setActualStartDataPopUp={setActualStartDataPopUp}
                                setActualEndDataPopUp={setActualEndDataPopUp}
                                setInitiationStartDataPopUp={setInitiationStartDataPopUp}
                                setInitiationEndDataPopUp={setInitiationEndDataPopUp}
                                setPlanningManagersPopUp={setPlanningManagersPopUp}
                                setProjectManagersPopUp={setProjectManagersPopUp}
                                setOperatingManagersPopUp={setOperatingManagersPopUp}
                                setInspectorsPopUp={setInspectorsPopUp}
                                setMmgPopUp={setMmgPopUp}

                            />
                        </div>
                        {
                            statusFilterBobUp && (
                            <div className="absolute lg:top-[50px] lg:left-[240px] bg-white border border-[#f2f2f2] border-[2px] h-fit-content w-[180px] z-[11] rounded-[10px] overflow-hidden">
                                <StatusFilter/>
                            </div>
                            )
                        }
                        {
                            districtFilterBobUp && (
                                <div className="absolute top-[50px] lg:left-[240px] bg-white border border-[#f2f2f2] border-[2px] h-[400px] w-[240px] z-[11] rounded-[10px] overflow-y-scroll">
                                    <DistrictFilter />
                                </div>
                            )
                        }
                        {
                            workSiteFilterBobUp && (
                                <div className="absolute top-[50px] lg:left-[240px] bg-white border border-[#f2f2f2] border-[2px] h-[400px] w-[240px] z-[11] rounded-[10px] overflow-y-scroll">
                                    <WorksiteTypeFilter />
                                </div>
                            )
                        }
                        {
                            sectorFilterBobUp && (
                                <div className="absolute top-[50px] lg:left-[240px] bg-white border border-[#f2f2f2] border-[2px] h-[400px] w-[350px] z-[11] rounded-[10px] overflow-y-scroll">
                                    <SectorFilter />
                                </div>
                            )
                        }
                        {
                            sectorPresidencyFilterBobUp && (
                                <div className="absolute top-[50px] lg:left-[240px] bg-white border border-[#f2f2f2] border-[2px] h-fit-content w-[300px] z-[11] rounded-[10px]">
                                    <SectorPresidencyFilter />
                                </div>
                            )
                        }
                        {
                            prosecutionFilterBobUp && (
                            <div className="absolute top-[50px] lg:left-[240px] bg-white border border-[#f2f2f2] border-[2px] h-fit-content w-[180px] z-[11] rounded-[10px] overflow-hidden">
                                <ProsecutionFilter/>
                            </div>
                            )
                        }
                        {
                            actualStartDataPopUp && (
                            <div className="absolute top-[50px] lg:left-[240px] bg-white border border-[#f2f2f2] border-[2px] h-fit-content w-[180px] z-[11] rounded-[10px] overflow-hidden">
                                <DateFilter date={"actual_start_date"}/>
                            </div>
                            )
                        }
                        {
                            actualEndDataPopUp && (
                            <div className="absolute top-[50px] lg:left-[240px] bg-white border border-[#f2f2f2] border-[2px] h-fit-content w-[180px] z-[11] rounded-[10px] overflow-hidden">
                                <DateFilter date={"actual_end_date"}/>
                            </div>
                            )
                        }
                        {
                            initiationStartDataPopUp && (
                            <div className="absolute top-[50px] lg:left-[240px] bg-white border border-[#f2f2f2] border-[2px] h-fit-content w-[180px] z-[11] rounded-[10px] overflow-hidden">
                                <DateFilter date={"initiation_start_date"}/>
                            </div>
                            )
                        }
                        {
                            initiationEndDataPopUp && (
                            <div className="absolute top-[50px] lg:left-[240px] bg-white border border-[#f2f2f2] border-[2px] h-fit-content w-[180px] z-[11] rounded-[10px] overflow-hidden">
                                <DateFilter date={"initiation_end_date"}/>
                            </div>
                            )
                        }
                        {
                            planningManagerspopUp && (
                                <div className="absolute top-[50px] lg:left-[240px] bg-white border border-[#f2f2f2] border-[2px] h-[400px] w-[240px] z-[11] rounded-[10px] overflow-y-scroll">
                                    <PersonnelFilter
                                        personnel={usersList.planningManager}
                                        role="planning_manager"
                                    />
                                </div>
                            )
                        }
                        {
                            projectManagerspopUp && (
                                <div className="absolute top-[50px] lg:left-[240px] bg-white border border-[#f2f2f2] border-[2px] h-[400px] w-[240px] z-[11] rounded-[10px] overflow-y-scroll">
                                    <PersonnelFilter
                                        personnel={usersList.projectManager}
                                        role="project_manager"
                                    />
                                </div>
                            )
                        }
                        {
                            operatingManagerspopUp && (
                                <div className="absolute top-[50px] lg:left-[240px] bg-white border border-[#f2f2f2] border-[2px] h-[400px] w-[240px] z-[11] rounded-[10px] overflow-y-scroll">
                                    <PersonnelFilter
                                        personnel={usersList.operatingManager}
                                        role="operating_manager"
                                    />
                                </div>
                            )
                        }
                        {
                            inspectorspopUp && (
                                <div className="absolute top-[50px] lg:left-[240px] bg-white border border-[#f2f2f2] border-[2px] h-[400px] w-[240px] z-[11] rounded-[10px] overflow-y-scroll">
                                    <PersonnelFilter
                                        personnel={usersList.inspectors}
                                        role="inspector"
                                    />
                                </div>
                            )
                        }
                        {
                            mmgpopUp && (
                                <div className="absolute top-[50px] lg:left-[240px] bg-white border border-[#f2f2f2] border-[2px] h-[400px] w-[240px] z-[11] rounded-[10px] overflow-y-scroll">
                                    <PersonnelFilter
                                        personnel={usersList.mmg}
                                        role="mmg"
                                    />
                                </div>
                            )
                        }
                    </>
                )}
            </div>
            <div className="flex flex-1 gap-[10px] lg:gap-[20px] px-0 lg:px-[10px] items-center">
                <form className="flex-1 relative" onSubmit={(e) => handleNameFilter(e)}>
                    <input
                        className="w-full outline-none text-[13px] h-[35px] rounded-[10px] py-[5px] px-[20px] border border-[#DBEDF5] shadow"
                        type="text"
                        placeholder="Search..."
                        onChange={handleSearch}
                    />
                    <button className="absolute top-1/2 -translate-y-1/2 right-4 lg:text-[20px] text-[#4A4646]">
                        <FaSearch />
                    </button>
                </form>
                <button
                    className={`prev h-[30px] w-[30px] ${prev ? 'text-[#478FB4]' : 'text-[#8ec6e2]'} bg-white border border-[#DBEDF5] flex justify-center items-center text-[14px]`}
                    onClick={prevPage}
                >
                    <FaChevronLeft />
                </button>
                <button
                    className={`next h-[30px] w-[30px] ${next ? 'text-[#478FB4]' : 'text-[#8ec6e2]'} bg-white border border-[#DBEDF5] flex justify-center items-center text-[14px]`}
                    onClick={nextPage}
                >
                    <FaChevronRight />
                </button>
                <select className="outline-none p-[5px]" onChange={handleResultsFilter}>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                    <option>25</option>
                    <option>30</option>
                </select>
            </div>
        </div>
    );
}
