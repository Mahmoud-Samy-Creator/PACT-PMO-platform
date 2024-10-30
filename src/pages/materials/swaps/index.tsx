import MainHeader from "../../../components/molecules/MainHeader";
import SwapsContent from "../../../components/templates/materials/swaps/SwapsContent";

export default function Swaps() {
    return (
        <div className="!overflow-x-hidden flex flex-col gap-[15px] border-[2px] flex-1 bg-white border-[#EAEBF0] lg:mr-[10px]   p-[20px] ">
            <MainHeader />
            <SwapsContent />
        </div>
    )
}
