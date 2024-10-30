import MainHeader from "../../../components/molecules/MainHeader";
import DeductsContent from "../../../components/templates/materials/deducts/DeductsContent";

export default function Deducts() {
    return (
        <div className=" flex flex-col gap-[15px] border-[2px] flex-1 bg-white border-[#EAEBF0] lg:mr-[10px]   p-[20px] ">
            <MainHeader />
            <DeductsContent />
        </div>
    )
}
