import { useContext, useState } from "react";
import { FaPen, FaRegCalendarCheck ,FaPaperclip,FaPencil,FaEllipsis ,FaPlus } from "react-icons/fa6";
import { BsCheckCircle,BsAlarm,BsExclamationCircleFill } from "react-icons/bs";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError, AxiosResponse } from "axios";
import type { AllRoles_TP, UserRole_TP, worksite_TP, Project_TP } from "../../Types";
import { Coordinates_TP } from "../../Types";
import { GlobalContext } from "../../context/GlobalContext";
import SectionHeader from '../../components/atoms/SectionHeader'
import FileUpload from "../../components/templates/new-project/FileUpload";
import { locations, sectorPresidencyMap, sectorMap, prosecutionOptions, initialProjectInfo } from "../../utlities/data";
import FormOptionsField from "./FormOptionFileld";
import FormField from './FormField';
import Dropdown from './DropDownList/DropDownList';
import GoogleMap from "./GoogleMap/GoogleMap";
import PageLoader from '../../components/Loaders/PageLoading/CostumLoader.tsx';

const API_BASE_URL: string = "https://game.telast.tech/api";
export default function NewProject() {
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem('userInfo') as string);
    const [loading, setIsLoading] = useState<boolean>(false);
    const { usersList, worksitesTypes, allProjects, setAllProjects } = useContext(GlobalContext) as { usersList: AllRoles_TP, worksitesTypes: worksite_TP[], allProjects: Project_TP[], setAllProjects: React.Dispatch<React.SetStateAction<Project_TP[]>> };
    const [projectInfo, setProjectInfo] = useState(initialProjectInfo);
    const [serviceFile, setServiceFile] = useState<File | null>(null);
    const [ItemFile, setItemFile] = useState<File | null>(null);
    const [prosecution, setProsecution] = useState<string>('');
    const [sectorPresidency, setSectorPresidency] = useState<string>('');
    const [coordinates, setCoordinates] = useState<Coordinates_TP | null>(null);
    const [, setSector] = useState<string>('');


    // ================== Submit New Project Mutation ==================
    const { mutate: submitProjectMutation } = useMutation(
        (projectDetails: FormData) => 
            axios.post(`${API_BASE_URL}/v1/worksites/worksite/`, projectDetails),
        {
            onSuccess: (res: AxiosResponse) => {
                console.log("Project created successfully:", res);
                console.log(res.data);
                setAllProjects([...allProjects, res.data]);
                setIsLoading(true);
                setTimeout(() => {
                    setIsLoading(false);
                    navigate('/projects');
                }, 5000);
            },
            onError(err: AxiosError) {
                console.log("Project creation failed:", err);
                setIsLoading(false);
            }
        }
    );
    
    
    const submitNewProject = (projectDetails: FormData) => {
        submitProjectMutation(projectDetails);
    }
    function handleServiceFileChange(file: File) {
        setServiceFile(file);
    }
    function handleItemFileChange(file: File) {
        setItemFile(file);
    }
    const formFields = [
        {
            id:1,
            header: "Start Date",
            handler: (e: React.ChangeEvent<HTMLInputElement>) => setProjectInfo({ ...projectInfo, initiation_start_date: e.target.value }),
            type: "date"
        },
        {
            id:2,
            header: "Contractor Name",
            handler: (e: React.ChangeEvent<HTMLInputElement>) => setProjectInfo({ ...projectInfo, contractor_name: e.target.value }),
            type: "string"
        },
        {
            id:3,
            header: "Contract ID",
            handler: (e: React.ChangeEvent<HTMLInputElement>) => setProjectInfo({ ...projectInfo, contract_no: e.target.value })},
        {
            id:4,
            header: "End Date",
            handler: (e: React.ChangeEvent<HTMLInputElement>) => setProjectInfo({ ...projectInfo, initiation_end_date: e.target.value }),
            type: "date"
        },
    ]

    // Handle change for Prosecution (first select)
    const handleProsecutionChange = (value: string) => {
        setProsecution(value);
        setProjectInfo({ ...projectInfo, prosecution: value });
        setSectorPresidency('');
        setSector('');
    };

    // Handle change for Sector Presidency (second select)
    const handleSectorPresidencyChange = (value: string) => {
        setSectorPresidency(value);
        setProjectInfo({ ...projectInfo, sector_presidency: value });
        setSector('');
    };

    // Handle change for Sector (third select)
    const handleSectorChange = (value: string) => {
        setSector(value);
        setProjectInfo({ ...projectInfo, sector: value });
    };

    const sectorPresidncy = prosecution ? sectorPresidencyMap[prosecution] : [{ value: '', label: 'Select Here ..' }];
    const sectorsOptions = sectorPresidency ? sectorMap[sectorPresidency] : [{ value: '', label: 'Select Here ..' }];

    const worksitesTypesOptions = worksitesTypes?.map((worksite) => (
        <option key={worksite.id} value={worksite.id}>
            {worksite.name}
        </option>
    ))

    const contractors = usersList?.contractors?.map((user: UserRole_TP ) => user);
    const constractorsOptions = contractors?.map((user) => (
        <option
            key={user.id} 
            value={user.id}
        >
            {user.first_name} {user.last_name}
        </option>
    ))
    const mmg = usersList?.mmg?.map((user: UserRole_TP ) => user);
    const mmgOptions = mmg?.map((user) => (
        <option
        key={user.id} 
        value={user.id}
        >
            {user.first_name} {user.last_name}
        </option>
    ))

    const projectsManagers = usersList?.projectManager?.map((user: UserRole_TP ) => user);
    const projectManagersOptions = projectsManagers?.map((user) => (
            <option
                key={user.id} 
                value={user.id}
            >
                {user.first_name} {user.last_name}
            </option>
    ))

    const operationManagers = usersList?.operatingManager?.map((user: UserRole_TP ) => user);
    const operationManagersOptions = operationManagers?.map((user) => (
        <option
            key={user.id} 
            value={user.id}
        >
            {user.first_name} {user.last_name}
        </option>
    ))

    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData();

        // Explicitly type 'key' as keyof typeof projectInfo
        (Object.keys(projectInfo) as Array<keyof typeof projectInfo>).forEach((key) => {
            formData.append(key, projectInfo[key].toString());
        });
        if (coordinates) {
            formData.append("location", `Point(${coordinates.lat.toString()} ${coordinates.lng.toString()})`);
        }
        formData.append('service_file', serviceFile as Blob);
        formData.append('ItemeFile', ItemFile as Blob);

        submitNewProject(formData);
    }

    const formOptionFields = [
        {
            id: 1,
            header: "Worksite Type",
            options: worksitesTypesOptions,
            handler: (e: React.ChangeEvent<HTMLSelectElement>) => setProjectInfo({ ...projectInfo, worksite_type: e.target.value })
        },
        {
            id: 2,
            header: "Contractors",
            options: constractorsOptions,
            handler: (e: React.ChangeEvent<HTMLSelectElement>) => setProjectInfo({ ...projectInfo, contractor: e.target.value })
        },
        {
            id: 3,
            header: "Project Manager",
            options: projectManagersOptions,
            handler: (e: React.ChangeEvent<HTMLSelectElement>) => setProjectInfo({ ...projectInfo, project_manager: e.target.value })
        },
        {
            id: 5,
            header: "Operating Manager",
            options: operationManagersOptions,
            handler: (e: React.ChangeEvent<HTMLSelectElement>) => setProjectInfo({ ...projectInfo, operating_manager: e.target.value })
        },
        {
            id: 6,
            header: "MMG",
            options: mmgOptions,
            handler: (e: React.ChangeEvent<HTMLSelectElement>) => setProjectInfo({ ...projectInfo, mmg: e.target.value})
        }
    ]
    const DropDownMenus = [
        { 
            id: 1, 
            header: "Prosecution", options: prosecutionOptions,
            handler: handleProsecutionChange
        },
        { 
            id: 2, 
            header: "Sector Presidncy", options: sectorPresidncy,
            handler: handleSectorPresidencyChange
        },
        { 
            id: 3, 
            header: "Sector", options: sectorsOptions,
            handler: handleSectorChange
        },
        { 
            id: 4, 
            header: "District", options: locations,
            handler: (value: string) => {setProjectInfo({ ...projectInfo, district: value })}
        },
    ]

    return (
        <form onSubmit={(e) => {handleFormSubmit(e)}} className='flex-1 flex flex-col gap-[15px] border-[2px] bg-white border-[#EAEBF0] lg:mr-[10px] p-[20px] '>
            {loading && <PageLoader />}
            <div>
                <div className="relative ">
                    <input
                        type="text"
                        className="w-[200px] outline-none font-semibold text-[#A1A1A1] text-[24px] pl-[25px]"
                        placeholder="Project Title"
                        name="projectTitle"
                        onChange={(e) => setProjectInfo({ ...projectInfo, title: e.target.value })}
                        required
                    />
                    <FaPen className="absolute top-1/2 -translate-y-1/2 text-[#A1A1A1]"/>
                </div>
                <p className="text-[#09242E] font-medium text-[15px]">Welcome {userInfo.first_name} {userInfo.last_name}</p>
            </div>
            <div className="flex items-center flex-col-reverse sm:flex-row gap-[15px]">
                <div className="flex items-center gap-[25px]  text-[#667085] flex-1 ">
                    <BsAlarm/>
                    <FaRegCalendarCheck/>
                    <BsCheckCircle />
                    <FaPaperclip />
                </div>
                <div className="flex items-center gap-[20px] py-[5px] px-[10px]">
                    <button type="submit" className="py-[5px] px-[12.5px] flex items-center gap-[5px] bg-[#478FB4] rounded-[15px] font-medium text-[12px] text-white">
                        <FaPencil />
                        Submit
                    </button>
                    <FaEllipsis className="text-[#478FB4] text-[18px]"/>
                </div>
            </div>
            <div className="search-map w-full">
                <GoogleMap coordinates={coordinates} setCoordinates={setCoordinates}/>
            </div>
            <div className="project-information flex flex-col gap-[20px]">
                <SectionHeader icon={<BsExclamationCircleFill  />} header="Project Information">
                        <div className="flex gap-[10px] items-center">
                            <button className="flex justify-center items-center w-[18px] h-[18px] text-[10px] text-white bg-[#000] rounded-[6px]"><FaPlus/></button>
                        </div>
                </SectionHeader>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
                    {
                        DropDownMenus.map((menu) => (
                            <Dropdown key={menu.id} header={menu.header} options={menu.options} handler={menu.handler}/>
                        ))
                    }
                    {formOptionFields.map((field) => (
                        <FormOptionsField
                            key={field.id}
                            header={field.header}
                            options={field.options}
                            handler={field.handler}
                        />
                    ))}
                    {formFields.map((field) => (
                        <FormField
                            key = {field.id}
                            icon={<FaPen className="text-[#A1A1A1] absolute top-1/2 -translate-y-1/2 right-[10px] text-[14px]"/>}
                            header = {field.header}
                            handler = {field.handler}
                            type={field.type || 'text'}
                        />
                    ))}
                </div>
                <div className="flex flex-col gap-[3px] !w-full ">
                    <label htmlFor="projectScope" className="font-medium text-[14px] text-[#09242E]">Scope of Work</label>
                    <div className="relative">
                        <textarea
                            placeholder="Type Here .."
                            id="projectScope"
                            className="w-full resize-none h-[120px] py-[10px] px-[10px] border border-[#DBEDF5] outline-none shadow text-[12px] text-[#A1A1A1]"
                            onChange={(e) => setProjectInfo({...projectInfo, scope: e.target.value})}
                            name="Scope_of_Work"
                            required
                        />
                        <FaPen className="text-[#A1A1A1] absolute top-[20px] right-[10px] text-[14px]"/>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-[15px]">
                    <FileUpload header="service" onFileUpload={handleServiceFileChange}/>
                    <FileUpload header="item" onFileUpload={handleItemFileChange}/>
                </div>
            </div>
        </form>
    )   
}
