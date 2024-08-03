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
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import { KeyboardAltOutlined, Inbox } from '@mui/icons-material'

import {
    RiMacbookLine, RiRamLine, RiComputerLine, RiHardDriveLine, RiWebcamLine,
    RiPrinterLine, RiContrastDrop2Line, RiRouterLine, RiHeadphoneLine
} from '@remixicon/react'


export const nav_categories = [
    {
        title: 'Laptop',
        slug: 'laptop',
        subcategories: [
            {
                title: 'Asus',
                slug: 'asus',
            },
            {
                title: 'Dell',
                slug: 'dell',
            },
            {
                title: 'Lenovo',
                slug: 'lenovo',
            },
            {
                title: 'HP',
                slug: 'hp',
            },
            {
                title: 'All Brands',
                slug: 'all-laptop',
            },
            {
                title: 'Gaming Laptop',
                slug: 'gaming-laptop',
            },
        ]
    },
    {
        title: 'Components',
        slug: 'components',
        subcategories: [
            {
                'title': 'Processor',
                'slug': 'processor',
            },
            {
                'title': 'Ram',
                'slug': 'ram',
            },
            {
                'title': 'Motherboard',
                'slug': 'motherboard',
            },
        ]
    },
    {
        title: 'Monitor',
        slug: 'monitor',
        subcategories: [
            {
                'title': 'HP',
                'slug': 'hp-monitor',
            },
            {
                'title': 'MSI',
                'slug': 'msi-monitor',
            },
            {
                'title': 'Acer',
                'slug': 'acer-monitor',
            },
            {
                'title': 'Asus',
                'slug': 'asus-monitor',
            },
            {
                'title': 'Dahua',
                'slug': 'dahua-monitor',
            },
            {
                'title': 'All Brands',
                'slug': 'monitor',
            },
        ]
    },
];

export const cat_icon_mapping = {
    laptop: <ComputerOutlinedIcon className='cat-icon' />,
    desktop: <PhonelinkOutlinedIcon className='cat-icon' />,
    'pc-component': <MemoryIcon className='cat-icon' />,
    monitor: <MonitorOutlinedIcon className='cat-icon' />,
    accessories: <KeyboardOutlinedIcon className='cat-icon' />,
    networking: <WifiOutlinedIcon className='cat-icon' />,
    printer: <PrintOutlinedIcon className='cat-icon' />,
    'sound-system': <SpeakerOutlinedIcon className='cat-icon' />,
    'office-equipment': <FaxOutlinedIcon className='cat-icon' />,
    software: <AppsOutlinedIcon className='cat-icon' />
};

export const product_section_icon_mapping = {
    trending: <TrendingUpIcon color='primary' fontSize='medium' />,
    featured: <BookmarksOutlinedIcon color='primary' fontSize='medium' />
}


export const products = [
    {
        id: 1,
        title: 'Lenovo Legion Slim 5i 16IRH8 Intel Core i5 Gaming Laptop',
        banner: 'https://www.ryans.com/storage/products/small/lenovo-legion-slim-5i-16irh8-intel-core-i5-13500h-11709715097.webp',
        price: 93000,
        discount: 3250,
        slug: 'lenovo-slim-5i'
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
        title: 'Samsung 980 Pro 500GB M.2 2280 NVMe PCIe Gen4X4 SSD #MZ-V8P500',
        banner: 'https://www.ryans.com/storage/products/main/samsung-980-pro-500gb-m2-2280-nvme-pcie-gen4x4-11616396384.webp',
        price: 58000,
        discount: 2500,
    }
]

export const api_endpoints = {
    homepage: 'api/homepage/',
    main_categories: 'api/categories/?parent=null',
    view_category: 'api/categories/',
    view_tag_category: 'api/t/',
    view_product: 'api/product/',
}

export const api_suffixes = {
    all_products: '/allproducts/'
}


export const featured_cats = [
    {
        title: 'Laptop',
        icon: <RiMacbookLine size={30} className='icon' />,
        slug: 'laptop'
    },
    {
        title: 'Monitor',
        icon: <RiComputerLine size={30} className='icon' />,
        slug: 'monitor'
    },
    {
        title: 'Processor',
        icon: <MemoryIcon style={{ fontSize: 30 }} className='icon' />,
        slug: 'processor'
    },
    {
        title: 'RAM',
        icon: <RiRamLine size={30} className='icon' />,
        slug: 'processor'
    },
    {
        title: 'SSD',
        icon: <RiHardDriveLine size={30} className='icon' />,
        slug: 'ssd'
    },
    {
        title: 'Keyboard',
        icon: <KeyboardAltOutlined style={{ fontSize: 30 }} className='icon' />,
        slug: 'processor'
    },
    {
        title: 'Accessories',
        icon: <DevicesOtherIcon style={{ fontSize: 30 }} className='icon' />,
        slug: 'accessories'
    },
    {
        title: 'CC Camera',
        icon: <RiWebcamLine size={30} className='icon' />,
        slug: 'cc-camera'
    },
    {
        title: 'Printer',
        icon: <RiPrinterLine size={30} className='icon' />,
        slug: 'printer'
    },
    {
        title: 'Toner & Ink',
        icon: <RiContrastDrop2Line size={30} className='icon' />,
        slug: 'printer'
    },
    {
        title: 'Wifi Router',
        icon: <RiRouterLine size={30} className='icon' />,
        slug: 'wifi-router'
    },
    {
        title: 'Headphone',
        icon: <RiHeadphoneLine size={30} className='icon' />,
        slug: 'headphone'
    },
]