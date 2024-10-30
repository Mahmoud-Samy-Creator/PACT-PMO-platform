import MileStonesChecklist from "./MileStonesChecklist";

export default function MileStonesChecklists() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            <MileStonesChecklist />
            <MileStonesChecklist />
            <MileStonesChecklist />
        </div>
    )
}
