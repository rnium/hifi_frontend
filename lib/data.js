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
        id: 8,
        title: 'Dell OptiPlex 3000 Micro 12th Gen Intel Core i5 12500T 8GB DDR4, 1TB HDD Black Micro Tower Brand PC',
        banner: 'https://www.ryans.com/storage/products/main/dell-optiplex-3000-micro-12th-gen-intel-core-i5-21700572627.webp',
        price: 57000,
        discount: 0,
    },
    {
        id: 3,
        title: 'TP-Link TL-WR841N 300Mbps Wireless Router',
        banner: 'https://www.ryans.com/storage/products/main/tp-link-tl-wr841n-300mbps-wireless-11591163398.webp',
        price: 2220,
        discount: 0,
    },
    {
        id: 5,
        title: 'Asus VivoBook 15 K513EA Intel Core i3 1115G4 4GB RAM 512GB SSD Laptop',
        banner: 'https://www.ryans.com/storage/products/main/asus-vivobook-15-k513ea-intel-core-i3-1115g4-156-11667387358.webp',
        price: 61000,
        discount: 2500,
    },
    {
        id: 6,
        title: 'Asus VivoBook S15 S513EA Intel Core i3 1115G4 8GB RAM, 512GB SSD 15.6 Inch FHD OLED Display Indie Black Laptop',
        banner: 'https://www.ryans.com/storage/products/main/asus-vivobook-s15-s513ea-intel-core-i3-1115g4-8gb-11699861371.webp',
        price: 63800,
        discount: 540,
    },
    {
        id: 7,
        title: ' Huawei Matepad SE 10.4 (Wi-Fi) 4GB RAM 10.4 Inch FHD+Display, Graphite Black Tablet',
        banner: 'https://www.ryans.com/storage/products/main/huawei-matepad-se-104-wi-fi-4gb-ram-104-inch-11688905468.webp',
        price: 26500,
        discount: 240,
    },
    {
        id: 4,
        title: 'Infinix INBOOK Y2 Plus Intel Core i5 1155G7 8GB RAM, 512GB SSD 15.6 Inch FHD Display Silver Laptop',
        banner: 'https://www.ryans.com/storage/products/main/infinix-inbook-y2-plus-intel-core-i5-1155g7-8gb-11702464042.webp',
        price: 58000,
        discount: 2500,
    }
]