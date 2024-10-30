import { FaSearch } from "react-icons/fa";
import { FaEllipsis, FaFilter } from "react-icons/fa6";

export default function MileStonesFilter() {
    return (
        <div className="lg:px-[10px] flex lg:gap-[70px]  justify-between">
                <div className="hidden lg:flex gap-[15px]">
                    <button className="w-[30px] h-[30px]  flex justify-center items-center rounded bg-white border border-[#33333318] shadow"><FaFilter/></button>
                    {/* <button className="w-[30px] h-[30px]  flex justify-center items-center rounded bg-white border border-[#33333318] shadow"><FaThLarge/></button> */}
                </div>
                <div className="flex flex-1 gap-[10px] lg:gap-[20px] px-0 lg:px-[10px] items-center">
                    <form action="" className="flex-1 relative">
                        <input className="w-full outline-none text-[13px]  h-[35px] rounded-[10px] py-[5px] px-[20px] border border-[#DBEDF5] shadow" type="text" placeholder="Search..." name="" id="" />
                        <button className=" absolute top-1/2 -translate-y-1/2 right-4 lg:text-[20px] text-[#4A4646]">
                            <FaSearch />
                        </button>
                    </form>
                    {/* <button className="add h-[30px] w-[30px] rounded-full bg-[#478FB4] flex justify-center items-center text-white text-[14px]">
                        <FaPlus />
                    </button> */}
                    {/* <button className="prev h-[30px] w-[30px] text-[#DBEDF5] bg-white border border-[#DBEDF5] flex justify-center items-center  text-[14px]">
                        <FaChevronLeft  />
                    </button>
                    <button className="next h-[30px] w-[30px] text-[#478FB4]  bg-white border border-[#DBEDF5] flex justify-center items-center  text-[14px]">
                        <FaChevronRight />
                    </button> */}
                    <button className=" text-[#478FB4]  text-[20px]">
                        <FaEllipsis />
                    </button>
                </div>
            </div>
    )
}
