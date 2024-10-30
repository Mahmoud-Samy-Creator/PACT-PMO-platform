import TasksProgressBox from "./TasksProgressBox";

export default function TasksProgress() {
    return (
        <div className="flex md:justify-center">
            <div className="w-full grid md:grid-cols-3 xl:grid-cols-4 gap-[20px]" >
                <TasksProgressBox  percentage={60} task_title="Task Title"/>
                <TasksProgressBox  percentage={90} task_title="Task Title"/>
                <TasksProgressBox  percentage={100} task_title="Task Title"/>
                <TasksProgressBox  percentage={86} task_title="Task Title"/>
                <TasksProgressBox  percentage={86} task_title="Task Title"/>
                <TasksProgressBox  percentage={60} task_title="Task Title"/>
                <TasksProgressBox  percentage={86} task_title="Task Title"/>
                <TasksProgressBox  percentage={76} task_title="Task Title"/>
            </div>
        </div>
    )
}
