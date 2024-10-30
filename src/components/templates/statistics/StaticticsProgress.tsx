import StatisticsProgressBox from "./StatisticsProgressBox";

export default function StatisticsProgress() {
    return (
        <div className="flex md:justify-center">
            <div className="w-full grid md:grid-cols-3 xl:grid-cols-4 gap-[20px]" >
                <StatisticsProgressBox percentage={55} month='January' />
                <StatisticsProgressBox percentage={90} month='February' />
                <StatisticsProgressBox percentage={86} month='March' />
                <StatisticsProgressBox percentage={50} month='April' />
                <StatisticsProgressBox percentage={68} month='May' />
                <StatisticsProgressBox percentage={80} month='June' />
                <StatisticsProgressBox percentage={100} month='July' />
                <StatisticsProgressBox percentage={88} month='August' />
                <StatisticsProgressBox percentage={65} month='September' />
                <StatisticsProgressBox percentage={70} month='October' />
                <StatisticsProgressBox percentage={87} month='November' />
                <StatisticsProgressBox percentage={93} month='December' />
            </div>
        </div>
    )
}
