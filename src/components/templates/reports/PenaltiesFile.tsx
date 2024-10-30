import PDFImage from '../../../assets/pdf file image.png'
import AvatarGroup from '../../../assets/Avatar group.png'
export default function PenaltiesFile() {
    return (
        <div>
            <div className="flex items-center  gap-[10px]">
                <img src={PDFImage} className='h-[35px] w-[35px] md:w-[40px] md:h-[40px]' alt="" />
                <div className='flex flex-col'>
                    <h1 className='text-[#333333] font-bold text-[11px]'>Data-structures.xls</h1>
                    <div className='flex items-center justify-between'>
                        <span className='text-[#A1A1A1] text-[12px]'>Type</span>
                        <span className='text-[#4A4646] text-[12px]'>1.4 MB</span>
                    </div>
                </div>
                <div className='flex flex-col'>
                        <span className='text-[12px] font-semibold text-[#478FB4]'>Download</span>
                        <span className='text-[12px] font-semibold text-[#478FB4]'>Delete</span>
                    </div>
            </div>
            <div className='flex items-center gap-[20px]'>
                <div className='flex  items-center gap-[10px]'>
                    <span className='text-[#A1A1A1] text-[14px]'>Person:</span>
                    <img src={AvatarGroup} alt="" />
                </div>
                <div className='flex  items-center gap-[10px]'>
                    <span className='text-[#A1A1A1] text-[14px]'>Qty : 4000</span>
                    <span className='text-[12px] text-[#4A4646]'>Unit</span>
                </div>
            </div>
        </div>
    )
}

