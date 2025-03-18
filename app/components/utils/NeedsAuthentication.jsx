import { Typography, Box, Stack } from "@mui/material";
import Image from "next/image";
import auth_img from '@/public/images/login.png';

const NeedsAuthentication = ({ description = "Authentication Required", sx={} }) => {
    return (
        <Stack
            sx={{ py: 3, ...sx }}
            alignItems="center"
            spacing={1}
        >
            <Image
                src={auth_img}
                alt="Icon"
                width={50}
            />
            <Typography color='text.secondary'>
                {description}
            </Typography>
        </Stack>
    )
}

export default NeedsAuthentication