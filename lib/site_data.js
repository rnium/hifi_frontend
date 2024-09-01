import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const links = {
    company: [
        {
            title: 'About Us',
            uri: '#'
        },
        {
            title: 'Our Services',
            uri: '#'
        },
        {
            title: 'Terms & Conditions',
            uri: '#'
        },
        {
            title: 'Privacy Policy',
            uri: '#'
        },
        {
            title: 'Google Map Location',
            uri: 'https://maps.app.goo.gl/pXWBALuZfw3KV5D46',
            outside: true,
        },
        {
            title: 'Feedback',
            uri: '#'
        }
    ],
    socials: [
        {
            name: 'Facebook',
            icon: <FacebookIcon />,
            url: 'https://www.facebook.com/hificomputerbd'
        },
        {
            name: 'Whatsapp',
            icon: <WhatsAppIcon />,
            url: 'https://api.whatsapp.com/send/?phone=%2B8801716530452&text&type=phone_number&app_absent=0'
        },
    ]
}