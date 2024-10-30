import MileStonesCard from "./MileStonesCard";

export default function MileStonesContent() {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center flex-wrap gap-[12px]">
            <MileStonesCard />
            <MileStonesCard />
            <MileStonesCard />
            <MileStonesCard />
            <MileStonesCard />
        </div>
    )
}
