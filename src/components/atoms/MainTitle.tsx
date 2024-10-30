import { MainTitle_TP } from "../../Types";

export default function MainTitle({title,className}:MainTitle_TP) {
    return (
        <h1 className={`${className} font-semibold text-[24px] leading-[38px] text-[#09242E]`}>{title}</h1>
    )
}
