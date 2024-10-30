import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type StatisticsProgressBox_TP = {
    percentage: number,
    month: string,
}

export default function StatisticsProgressBox({percentage,month}:StatisticsProgressBox_TP) {
    return (
        <div className="rounded-[20px] w-full border border-[#DBEDF5] shadow p-[5px] flex flex-col items-center justify-center">
            <CircularProgressbar className='w-[60%] h-[80px]' value={percentage} text={`${percentage}%`} />
            <p className='font-semibold text-[15px] text-[#041116]'>{month}</p>
        </div>
    )
}
