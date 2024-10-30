import MainHeader from "../../components/molecules/MainHeader";
import StatisticsBox from "../../components/templates/statistics/StatisticsBox";
import { FaChartColumn } from "react-icons/fa6";
import { FiTrendingUp } from "react-icons/fi";
import { BsFillGridFill,BsFillGrid1X2Fill,BsFillPieChartFill   } from "react-icons/bs";
import { MainProgress, SectionHeader } from "../../components/atoms";
import { Link } from "react-router-dom";
import StatisticsProgress from "../../components/templates/statistics/StaticticsProgress";
import TasksProgress from "../../components/templates/statistics/TasksProgress";


export default function Statistics() {
    return (
        <div className=" flex flex-col gap-[15px] border-[2px] flex-1 bg-white border-[#EAEBF0] lg:mr-[10px]   p-[20px] ">
            <MainHeader />
            <div className="flex flex-col gap-[15px]">
                <div className="boxes grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px]">
                    <StatisticsBox name="Task To Complete" first="15" second="/20" link="/" icon={<FaChartColumn />}/>
                    <StatisticsBox name="Completion Rate" first="95" second="%" link="/" icon={<FiTrendingUp />}/>
                    <StatisticsBox name="Projects" first="5" second="Projects" link="/" icon={<BsFillGridFill />}/>
                    <StatisticsBox name="Projects" first="5" second="Projects" link="/" icon={<BsFillGrid1X2Fill />}/>
                </div>
                <div className="flex flex-col gap-[10px] statistics">
                    <SectionHeader icon={<BsFillGridFill />} header='Project Progress'>
                        <Link to='/' className="text-[#478FB4] underline font-semibold text-[12px]">Details</Link>
                    </SectionHeader>
                    <MainProgress progress="50%" />
                    {/* Seperator */}
                    <SectionHeader icon={<BsFillPieChartFill />} header="Statistics (Progress)" >
                        <Link to='/' className="text-[#478FB4] underline font-semibold text-[12px]">Details</Link>
                    </SectionHeader>
                    <StatisticsProgress />
                    {/* Seperator */}
                    <SectionHeader icon={<BsFillPieChartFill />} header="Tasks Statistics" >
                        <Link to='/' className="text-[#478FB4] underline font-semibold text-[12px]">Details</Link>
                    </SectionHeader>
                    <TasksProgress />
                </div>
            </div>
        </div>
    )
}
