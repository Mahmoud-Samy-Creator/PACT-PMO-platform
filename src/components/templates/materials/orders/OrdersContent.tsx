import { SectionHeader } from "../../../atoms";
import { Link } from "react-router-dom";
import {  FaFileLines, FaFilter } from "react-icons/fa6";
import MaterialsLinksMenu from "../MaterialsLinksMenu";
// import OrderButton from "../OrderButton";
import OrderItem from "./OrderItem";
import CreateOrder from "../CreateOrder";

export default function OrdersContent() {
    return (
        <div className=" flex flex-col gap-[15px]">
            <div className="deduct-header flex flex-col lg:flex-row gap-[10px] lg:items-center justify-between">
                <div>
                    <div className="flex gap-[10px] lg:gap-[15px] items-center">
                        <button className="w-[30px] h-[30px]  flex justify-center items-center rounded bg-white border border-[#33333318] shadow"><FaFilter/></button>
                        <MaterialsLinksMenu />
                    </div>
                </div>
                <div>
                    <div className="flex gap-[10px] lg:gap-[15px] items-center flex-wrap">
                        {/* <OrderButton /> */}
                        <CreateOrder />
                    </div>
                </div>
            </div>


            <div className="content flex flex-col gap-[10px]">
                <SectionHeader icon={<FaFileLines />} header="Orders">
                    <div className="flex gap-[10px]">
                        <Link to='/' className="text-[#478FB4] underline font-semibold text-[12px]">See All</Link>
                    </div>
                </SectionHeader>
                <div className="grid lg:grid-cols-2 gap-[20px]">
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                </div>
            </div>
        </div>
    )
}
