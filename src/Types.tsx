// =========== Auth Provider ===========
export interface AuthContext_TP {
    logIn: (loginCredentials: User_Credintials, setInvalid: (value: boolean) => void) => void;
    logOut: () => void;
    refreshAccessToken: () => void;
    accessToken: string;
    isLoading: boolean;
}
export type User_Credintials = {
    email: string,
    password: string
}
export type User_TP = {
    id: number,
    username: string,
    email: string,
    first_name: string,
    last_name: string,
    phone: string,
    avatar: string,
    role: string
}
export type AccessTocken_TP = string;
export type RefreshTocken_TP = string;
export type LoginResponse_TP = {
    access: AccessTocken_TP,
    refresh: RefreshTocken_TP,
    user: User_TP,
    expiresIn: number,
    access_expiration: string
}
export type UserRole_TP = {
    id: number,
    first_name: string,
    last_name: string,
    role: string
}
export type Role = string;
export type AllRoles_TP = {
    [key: Role] : UserRole_TP[]
}

// =========== GlobalContext ===========
export interface GlobalContextType {
    allProjects: Project_TP[];
    setAllProjects: React.Dispatch<React.SetStateAction<Project_TP[]>>;
    usersList: AllRoles_TP;
    worksitesTypes: worksite_TP[];
    next: string | null;
    setNext: React.Dispatch<React.SetStateAction<string | null>>;
    prev: string | null;
    setPrev: React.Dispatch<React.SetStateAction<string | null>>;
}
export type Project_TP = {
    id: number,
    title: string,
    scope: string,
    status: string,
    progress: string,
    contract_no: string,
    initiation_start_date: string,
    initiation_end_date: string,
    deadline: string,
    worksite_type: worksite_TP,
    sector: string,
    sector_presidency: string,
    prosecution: string,
}

export type SingleProject_TP = {
    id :number,
    title: string,
    scope: string,
    status: string,
    progress: string,
    contract_no: string,
    initiation_start_date: string,
    initiation_end_date: string,
    deadline: string,
}

// =========== Layout ===========
export type Layout_TP = {
    children: React.ReactNode
}
export type SidebarPath_TP = {
    icon: React.ReactNode,
    title: string,
    count?: number,
    className? :string
    path: string
}
export type Notification_TP = {
    title: string,
    description: string,
    status: string,
}
export type MainTitle_TP = {
    title: string,
    className?: string,
}


// =========== WorkSites ===========
export type worksite_TP = {
    id: number,
    name: string
} 
export type worksite_Res_TP = {
    count: number,
    next: string,
    previous: string,
    results: worksite_TP[]
}
export type UpdateTime_TP = {
    update_time: string,
}

export type CurrentProject_TP = {
    id?:number,
    title?: string,
    projectDescription?: string,
    status?: boolean,
    progress?: string,
}

export type Member_TP = {
    image: string,
    name: string,
    job_description: string,
    email: string,
    phone: string,
}

export type MainProgress_TP = {
    progress: string
}


// =========== Maps ===========
export type Coordinates_TP = {
    lat: number;
    lng: number;
}
export interface Coordinates {
    lat: number;
    lng: number;
    coordinates: Coordinates_TP | null;
    setCoordinates: React.Dispatch<React.SetStateAction<Coordinates_TP | null>>;
}

// =========== others ===========
// Type for individual option in dropdowns
export interface Option {
    value: string;
    label: string;
}

// Type for Sector Presidency based on Prosecution
export interface SectorPresidencyMap {
    [key: string]: Option[];
}

// Type for Sector based on Sector Presidency
export interface SectorMap {
    [key: string]: Option[];
}