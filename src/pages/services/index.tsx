
import MainHeader from "../../components/molecules/MainHeader";
import ServicesHeader from "../../components/templates/services/ServicesHeader";
import ServicesTable from "../../components/templates/services/ServicesTable";
import { useState } from "react";

export default function Services() {
    const [rowsSelected, setRowsSelected] = useState<number>(0);

    return (
        <div className="!overflow-x-hidden flex flex-col gap-[15px] border-[2px] flex-1 bg-white border-[#EAEBF0] lg:mr-[10px]   p-[20px] ">
            <MainHeader />
            <ServicesHeader rowsSelected={rowsSelected}/>
            <ServicesTable setRowsSelected={setRowsSelected}/>
        </div>
    )
}
