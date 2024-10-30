import { Checkbox } from '@mantine/core';

export default function MileStonesChecklist() {
    return (
        <div className='p-[10px] border border-[#DBEDF5] shadow rounded-[10px]'>
            <Checkbox
                
                label="Checklist"
                color="gray"
                variant="outline"
                className=' font-medium cursor-pointer'
            />
        </div>
    )
}
