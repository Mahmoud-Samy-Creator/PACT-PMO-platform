import { FaThLarge } from "react-icons/fa";
import {MainProgress,SectionHeader} from "../../atoms";

export default function OverviewPhases() {
    return (
        <div className="flex flex-col gap-[10px]">
            <SectionHeader header="Project Phases" icon={<FaThLarge />}/>
            <MainProgress progress="50%" />
            <div className="table">
                
            </div>
        </div>
    )
}
