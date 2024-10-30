
export default function ProjectProgress() {
    return (
        <div className="progress flex flex-col gap-[5px]">
            <p className=" font-medium text-[#4A4646] text-[12px]">50% completed</p>
            <div className={`h-[10px] w-full bg-[#A0A0A033] rounded-[12px] relative`}>
                <span  className={` absolute left-0 top-0 h-full w-[50%] rounded-[12px] bg-[#a0a0a0a2]`}></span>
            </div>
        </div>
    )
}
