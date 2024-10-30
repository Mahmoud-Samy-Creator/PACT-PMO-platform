import MainHeader from "../../components/molecules/MainHeader";
import MaterialsHeader from "../../components/templates/materials/MaterialsHeader";
import MaterialsTable from "../../components/templates/materials/MaterialsTable";

export default function Materials() {
    return (
        <div className="!overflow-x-hidden flex flex-col gap-[15px] border-[2px] flex-1 bg-white border-[#EAEBF0] lg:mr-[10px]   p-[20px] ">
            <MainHeader />
            <MaterialsHeader />
            <MaterialsTable />
        </div>
    )
}
