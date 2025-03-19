import { Typography, Box, Stack } from "@mui/material";
import Image from "next/image";
import auth_img from '@/public/images/ic-login.svg';

const NeedsAuthentication = ({ description = "Authentication Required", sx={}, img_w=70 }) => {
    return (
        <Stack
            sx={{ py: 3, ...sx }}
            alignItems="center"
            spacing={1}
        >
            <Image
                src={auth_img}
                alt="Icon"
                width={img_w}
            />
            <Typography color='text.secondary'>
                {description}
            </Typography>
        </Stack>
    )
}

export default NeedsAuthentication