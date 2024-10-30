import MainHeader from "../../../components/molecules/MainHeader";
import OrdersContent from "../../../components/templates/materials/orders/OrdersContent";

export default function Orders() {
    return (
        <div className=" flex flex-col gap-[15px] border-[2px] flex-1 bg-white border-[#EAEBF0] lg:mr-[10px]   p-[20px] ">
            <MainHeader />
            <OrdersContent />
        </div>
    )
}
