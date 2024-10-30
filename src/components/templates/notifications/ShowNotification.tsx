import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
import { FaBell } from 'react-icons/fa6';
import Notifications from '../../organisms/Notifications';

export default function ShowNotification() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <div className=' block xl:hidden'>
            <Drawer 
            opened={opened} 
            onClose={close} 
            title="Notifications"
            className='h-full'
            size="xs"
            id='notification-drawer'
            // position='right'
            >
                <Notifications className='!flex !w-full !p-[0]  !overflow-y-visible ' />
            </Drawer>

            <Button onClick={open}>
                <span className='text-[#5F6D7E] text-[22px] mx-auto sm:ml-[5px]'><FaBell /></span>
            </Button>
        </div>
        );
}