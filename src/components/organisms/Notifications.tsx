import { FaBell } from "react-icons/fa6";
import Notification from "../templates/notifications/Notification";
import CreateNotification from "../templates/notifications/CreateNotification";
type Notifications_TP = {
    className? : string,
}

export default function Notifications({className}:Notifications_TP) {
    return (
        <div className={`${className} sticky  top-0 w-[300px] h-screen !overflow-y-auto   p-[20px] pt-[40px] hidden xl:flex flex-col gap-[10px] bg-white`}>
            <div className="heading flex justify-between">
                <div className="text-[#91969B] flex items-center gap-[5px]">
                    <FaBell className=""/>
                    <p className="text-[14px] hidden lg:block">Notifications</p>
                </div>
                <button className=" bg-[#000] w-[18px] h-[18px] flex justify-center items-center rounded">
                    {/* <FaPlus  className="text-[13px] text-white"/> */}
                    <CreateNotification />
                </button>
            </div>
            <Notification status='todo' title='Todo' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='inprogress' title='Inprogress' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='done' title='Done' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='todo' title='Todo' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='inprogress' title='Inprogress' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='done' title='Done' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            
{/*             
            <Notification status='done' title='Done' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='done' title='Done' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='done' title='Done' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='done' title='Done' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='done' title='Done' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='done' title='Done' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='done' title='Done' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
             */}
            
        </div>
    )
}
