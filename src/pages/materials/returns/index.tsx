import MainHeader from "../../../components/molecules/MainHeader";
import ReturnsContent from "../../../components/templates/materials/returns/ReturnsContent";

export default function Returns() {
    return (
        <div className="flex flex-col gap-[15px] border-[2px] flex-1 bg-white border-[#EAEBF0] lg:mr-[10px]   p-[20px] ">
            <MainHeader />
            <ReturnsContent />
        </div>
    )
}
