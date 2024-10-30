import { BsFillPersonFill,BsBriefcaseFill,BsFillTelephoneFill   } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa6";
import { Member_TP } from '../../../Types';


export default function Member({image,name,job_description,email,phone}:Member_TP) {
    return (
        <div className="rounded-[15px] border border-[#DBEDF5] shadow py-[15px] px-[20px] flex flex-col gap-[10px]">
            <div className="image flex justify-center">
                <img src={image} alt="" className='rounded-full'/>
            </div>
            <div className="info flex flex-col gap-[5px] lg:flex-row">
                <div className='flex-1 flex flex-col gap-[5px] lg:border-r border-[#1A3645] lg:pr-[5px]'>
                    <div className='flex gap-[5px] items-center'>
                        <BsFillPersonFill className='text-[#1A3645]'/>
                        <p className=' font-bold text-[12px] text-[#1A3645]'>{name}</p>
                    </div>
                    <div className='flex gap-[5px] items-center'>
                        <BsBriefcaseFill className='text-[#1A3645]'/>
                        <p className='  text-[12px] text-[#1A3645]'>{job_description}</p>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-[5px] '>
                    <div className='flex gap-[5px] items-center'>
                        <FaEnvelope className='text-[#1A3645]'/>
                        <p className='  text-[12px] text-[#1A3645]'>{email}</p>
                    </div>
                    <div className='flex gap-[5px] items-center'>
                        <BsFillTelephoneFill className='text-[#1A3645]'/>
                        <p className='  text-[12px] text-[#1A3645]'>{phone}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
