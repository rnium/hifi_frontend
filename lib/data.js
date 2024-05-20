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

export const products = [
    {
        id: 1,
        title: 'Lenovo Legion Slim 5i 16IRH8 Intel Core i5 Gaming Laptop',
        banner: 'https://www.ryans.com/storage/products/small/lenovo-legion-slim-5i-16irh8-intel-core-i5-13500h-11709715097.webp',
        price: 93000,
        discount: 3250,
    },
    {
        id: 2,
        title: 'Dell E2423H 24 Inch FHD DP VGA VA Monitor',
        banner: 'https://www.ryans.com/storage/products/main/dell-e2423h-24-inch-fhd-dp-vga-va-31697453191.webp',
        price: 23000,
        discount: 1200,
    },
    {
        id: 3,
        title: 'Lenovo IdeaPad Gaming Modern Backpack for 16" Laptop',
        banner: 'https://www.startech.com.bd/image/cache/catalog/laptop-accessories/backpack/lenovo/ideapad-gaming-modern/ideapad-gaming-modern-01-500x500.webp',
        price: 2220,
        discount: 0,
    },
    {
        id: 4,
        title: 'Infinix INBOOK Y2 Plus Intel Core i5 1155G7 8GB RAM, 512GB SSD 15.6 Inch FHD Display Silver Laptop',
        banner: 'https://www.ryans.com/storage/products/main/infinix-inbook-y2-plus-intel-core-i5-1155g7-8gb-11702464042.webp',
        price: 58000,
        discount: 2500,
    },
]