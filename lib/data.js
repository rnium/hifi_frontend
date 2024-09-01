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
    RiPrinterLine, RiContrastDrop2Line, RiRouterLine, RiHeadphoneLine, RiArtboard2Line
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
        slug: 'pc-component',
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
    {
        title: 'Accessories',
        slug: 'accessories',
        subcategories: [
            {
                'title': 'Keyboard',
                'slug': 'keyboard',
            },
            {
                'title': 'Mouse',
                'slug': 'mouse',
            },
            {
                'title': 'UPS',
                'slug': 'ups',
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
    search_product: 'api/searchproduct/',
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
        slug: 'ram'
    },
    {
        title: 'SSD',
        icon: <RiHardDriveLine size={30} className='icon' />,
        slug: 'ssd'
    },
    {
        title: 'Keyboard',
        icon: <KeyboardAltOutlined style={{ fontSize: 30 }} className='icon' />,
        slug: 'keyboard'
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
        slug: 'toner-ink'
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

export const blurdata_base64 = "data:image/jpeg;base64,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"