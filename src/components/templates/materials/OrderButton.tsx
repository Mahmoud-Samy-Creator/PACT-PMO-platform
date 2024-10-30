import { FaPlus } from 'react-icons/fa6'

export default function OrderButton() {
    return (
        <button className="rounded-[6px] py-[5px] px-[10px] bg-[#478FB4] font-medium text-[11px] lg:text-[14px] flex items-center gap-[5px] text-white shadow-[0px_2px_5px_0px_rgba(34, 100, 229, 0.12)]  shadow-[0px_0px_0px_1px_rgba(34, 100, 229, 1)]">
            <FaPlus/>
            <span>Order</span>
        </button>
    )
}
