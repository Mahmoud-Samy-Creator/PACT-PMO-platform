import PDFImage from '../../../assets/pdf file image.png'

export default function DependenciesFile() {
    return (
        <div className="flex items-center gap-[10px]">
            <img src={PDFImage} alt="" />
            <div className='flex flex-col'>
                <h1 className='text-[#333333] font-bold text-[12px]'>Data-structures.xls</h1>
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
    )
}
