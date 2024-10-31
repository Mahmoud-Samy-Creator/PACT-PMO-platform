import OverviewDetails from "../../components/templates/overview/OverviewDetails";
import OverviewPhases from "../../components/templates/overview/OverviewPhases";
import MainHeader from "../../components/molecules/MainHeader";
import GoogleMap from "./GoogleMap";


function Overview() {
    return (
        <div className=" flex flex-col gap-[15px] border-[2px] flex-1 bg-white border-[#EAEBF0] lg:mr-[10px] p-[20px] ">
            <MainHeader />
            <div className="search-map z-[3]">
                <GoogleMap />
            </div>
            <OverviewDetails />
            <OverviewPhases  />
        </div>
    )
}

export default Overview;
