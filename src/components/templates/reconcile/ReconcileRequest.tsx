import PDFImage from '../../../assets/pdf file image.png'
import { FaRegCalendarAlt,FaEllipsisH   } from "react-icons/fa";
import { BsRecordCircle,BsLink,BsCheck2All    } from "react-icons/bs";

export default function ReconcileRequest() {
    return (
        <div className="flex items-center gap-[5px]">
            <img src={PDFImage} alt="" />
            <div className='rounded-[10px] border border-[#DBEDF5] shadow flex-1 p-[10px] lg:px-[20px] flex flex-col gap-[10px]'>
                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-[5px]'>
                    <h3 className='text-[12px] font-medium text-[#041116]'>Reconcile Request</h3>
                    <div className='flex lg:items-center  gap-[5px] lg:gap-[10px]'>
                        <p className='text-[10px] lg:text-[12px] font-medium text-[#A1A1A1] flex items-center gap-[5px] '><FaRegCalendarAlt />Feb, 2022</p>
                        <button className='text-[#478FB4] text-[16px] '><BsLink /></button>
                        <button className='text-[#478FB4] text-[13px] '><BsRecordCircle  /></button>
                        <button className='text-[#478FB4] text-[13px] '><FaEllipsisH /></button>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-[10px] lg:text-[12px] font-medium text-[#041116]'>Request No</p>
                    <button className='rounded-[10px] py-[2px] px-[5px] text-white bg-[#9FA2B2] flex items-center gap-[5px] lg:gap-[10px]'>
                        <p className='text-[10px] font-medium'>In Progress</p>
                        <span className='block w-[5px] h-[5px] rounded-full bg-white'></span>
                    </button>
                </div>
                <div className='flex flex-col md:flex-row  items-center justify-between'>
                    <p className='text-[12px] font-medium text-[#041116] flex items-center gap-[5px]'>
                        <BsCheck2All className='text-[20px] font-bold ' /> 
                        Confirmation
                    </p>
                    <div className='flex gap-[5px] items-center'>
                        <button className='rounded-[100px] border border-[#DBEDF5] bg-[#00B884] shadow py-[3px] font-bold text-[12px] px-[5px] lg:px-[15px] text-white'>Confirm</button>
                        <button className='rounded-[100px] border border-[#DBEDF5] bg-[#F34E4E] shadow py-[3px] font-bold text-[12px] px-[5px] lg:px-[15px] text-white'>Reject</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
