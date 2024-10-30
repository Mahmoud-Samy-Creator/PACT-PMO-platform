import LogoLargeScreen from "../../assets/Logo 1.jpg";
import LogoSmallScreen from "../../assets/Logo 2.png";
import ProfileSidebar from "../../assets/profile sidebar.png";
import { FaChevronDown, FaThLarge } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import SidebarPath from "../templates/sidebar/SidebarPath";
import { FaGear, FaPlus, FaEllipsis } from "react-icons/fa6";
// import ShowNotification from '../templates/notifications/ShowNotification';
import { Link } from "react-router-dom";
import { ComponentGaurd } from "../../context/RolesGard";
import { useAuth } from "../../context/AuthProvider";

export default function Sidebar() {
  const auth = useAuth();
  const userInfoData = JSON.parse(localStorage.getItem("userInfo") || "{}");
  return (
    <div className=" sticky left-0 top-0 w-[90px] lg:w-[260px] h-screen p-[20px] border-r-[2px] border-[#DBEDF5] flex flex-col justify-between bg-white">
      <div className="top flex flex-col gap-[30px] lg:gap-[40px]">
        <div className="flex justify-center image">
          <img
            className="hidden h-full lg:block"
            src={LogoLargeScreen}
            alt=""
          />
          <img className="block lg:hidden" src={LogoSmallScreen} alt="" />
        </div>

        <div className="flex shadow-[1px_1px_10px_rgb(0,0,0,0.1)] w-fit lg:w-full items-center gap-[10px] h-[50px] rounded-[5px] border border-[#DBEDF5] py-[5px] px-[10px]">
          <p className=" font-medium  text-[15px] w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] flex justify-center items-center bg-[#C3C2CA] text-[#fff] rounded-full">
            CP
          </p>
          <div className="hidden lg:block">
            <h3 className=" font-medium text-[14px]">Company Project</h3>
            <p className="text-[14px] font-medium text-[#5F6D7E]">12 Members</p>
          </div>
          <span className="hidden lg:block cursor-pointer text-[#5F6D7E]">
            <FaChevronDown />
          </span>
        </div>

        <div className=" -mx-[20px]">
          {/* <div className='flex gap-[5px] lg:gap-[10px] w-full justify-center cursor-pointer  py-[10px] items-center px-[7px] lg:px-[20px] '>
                            <span className='text-[#5F6D7E] text-[22px] ml-[5px]'></span>
                            <p className={`text-sidebar_links font-semibold w-[130px] hidden lg:block `}>Notification</p>
                        </div> */}
          {/* <ShowNotification /> */}
          <SidebarPath path="/" title="Dashboard" icon={<AiFillHome />} />
          <SidebarPath
            path="/projects"
            title="Projects"
            icon={<FaThLarge />}
            /*count={10}*/ className="border-l-[4px] border-[#09242E] bg-[#F0F7FF]"
          />
          <SidebarPath path="/settings" title="Setting" icon={<FaGear />} />
          <span onClick={() => auth.logOut()} className="block text-center">Logout</span>
        </div>
      </div>
      <div className="bottom  flex  flex-col gap-[30px] lg:gap-[40px]">
        <ComponentGaurd allowedRules={['planning_manager']}>
          <Link
            to="new-project"
            className="flex cursor-pointer gap-[10px] flex-col items-center shadow-[1px_1px_10px_rgb(0,0,0,0.1)] w-fit lg:w-full  h-[90px] rounded-[10px] border border-[#DBEDF5] py-[10px] px-[5px] lg:px-[20px]"
          >
            <span className=" w-[40px] h-[40px] flex justify-center items-center text-[20px] border border-dashed rounded-full border-[#91969B] text-[#91969B]">
              <FaPlus />
            </span>
            <p className="text-project_title text-[14px] font-medium hidden lg:block">
              Add New Project
            </p>
            <span className="text-[#5F6D7E] text-[22px] lg:hidden">
              <FaThLarge />
            </span>
          </Link>
        </ComponentGaurd>
        <div className="flex cursor-pointer items-center  gap-[10px]  w-full lg:w-full  h-[fit-content] rounded-[10px] border border-[#DBEDF5] shadow-[1px_1px_10px_rgb(0,0,0,0.1)] p-[5px]">
          <img
            src={ProfileSidebar}
            className="h-[48px] w-full lg:w-[48px] "
            alt=""
          />
          <div className="hidden lg:block">
            <h3 className="text-[14px] font-medium text-[#53515B]">
              {userInfoData.first_name} {userInfoData.last_name}
            </h3>
            <p className=" text-project_title text-[14px]">{userInfoData.role}</p>
          </div>
          <FaEllipsis className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
