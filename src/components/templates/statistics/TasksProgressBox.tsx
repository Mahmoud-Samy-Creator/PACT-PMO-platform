import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type TasksProgressBox_TP = {
    percentage: number,
    task_title: string,
}

export default function TasksProgressBox({percentage,task_title}:TasksProgressBox_TP) {
    return (
        <div className="rounded-[20px] border border-[#DBEDF5] shadow p-[5px] flex flex-col items-center justify-center">
            <CircularProgressbar className='w-[60%] h-[80px]' value={percentage} text={`${percentage}%`} />
            <p className='font-semibold text-[15px] text-[#041116]'>{task_title}</p>
        </div>
    ) 
}
