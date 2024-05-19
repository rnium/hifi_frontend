import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import PhonelinkOutlinedIcon from '@mui/icons-material/PhonelinkOutlined';
import MemoryIcon from '@mui/icons-material/Memory';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import SpeakerOutlinedIcon from '@mui/icons-material/SpeakerOutlined';
import FaxOutlinedIcon from '@mui/icons-material/FaxOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';

export const categories = [
    {
        title: 'Laptop',
        slug: 'laptop',
        icon: <ComputerOutlinedIcon className='cat-icon' />
    },
    {
        title: 'Desktop PC',
        slug: 'desktop-pc',
        icon: <PhonelinkOutlinedIcon className='cat-icon' />
    },
    {
        title: 'Components',
        slug: 'components',
        icon: <MemoryIcon className='cat-icon' />
    },
    {
        title: 'Monitor',
        slug: 'monitor',
        icon: <MonitorOutlinedIcon className='cat-icon' />
    },
    {
        title: 'Accessories',
        slug: 'accessories',
        icon: <KeyboardOutlinedIcon className='cat-icon' />
    },
    {
        title: 'Networking',
        slug: 'networking',
        icon: <WifiOutlinedIcon className='cat-icon' />
    },
    {
        title: 'Printer',
        slug: 'printer',
        icon: <PrintOutlinedIcon className='cat-icon' />
    },
    // {
    //     title: 'Speaker',
    //     slug: 'speaker',
    //     icon: <SpeakerOutlinedIcon />
    // },
    {
        title: 'Office Equipments',
        slug: 'office-equipments',
        icon: <FaxOutlinedIcon className='cat-icon' />
    },
    {
        title: 'Software',
        slug: 'software',
        icon: <AppsOutlinedIcon className='cat-icon' />
    },
]