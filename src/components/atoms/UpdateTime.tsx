import { UpdateTime_TP } from "../../Types";

export default function UpdateTime({update_time}:UpdateTime_TP) {
    return (
        <p className="text-[#09242E] leading-[24px] text-[14px] lg:text-[18px]">Last Update: {update_time}</p>
    )
}
