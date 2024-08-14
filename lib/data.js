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
} from '@remixicon/react';

export const localstorage_keys = {
    auth_token: 'hifi_user_t',
    cartid: 'cart_id',
    cart: 'cart',
};

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
            {
                'title': 'PC Casing',
                'slug': 'pc-casing',
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

export const api_host = process.env.NEXT_PUBLIC_API_HOST;

export const api_endpoints = {
    homepage: 'api/homepage/',
    main_categories: 'api/categories/?parent=null',
    view_category: 'api/categories/',
    view_tag_category: 'api/t/',
    cartproducts: 'api/cartproducts/',
    apply_coupon: 'api/applycoupon/',
    view_product: 'api/product/',
    confirm_order: 'api/order/confirm/',
};

export const auth_endpoints = {
    login: 'auth/token/login',
    signup: 'auth/users/',
    logout: 'auth/token/logout/'
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

export const checkout_informations = [
    'All orders are currently cash on delivery. Please pay when you receive the product.',
    'Orders are processed within 1-2 business days',
    'Ensure your billing address matches your payment method to avoid delays',
    'Tracking information will be provided once your order ships',
    'Items can be returned within 7 days of receipt if applicable',
    'Sale items are final sale and cannot be returned or exchanged',
    'Contact customer support for any questions or issues with your order',
    'By confirming your order, you agree to our terms and conditions',
    'Please review your order details carefully before submitting',
];

export const shipping_charges = {
    inside: 60,
    outside: 120
}