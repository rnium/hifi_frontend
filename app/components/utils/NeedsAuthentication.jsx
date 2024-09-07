import { Typography, Box, Stack } from "@mui/material";
import Image from "next/image";
import auth_img from '@/public/images/key.svg';

const NeedsAuthentication = ({ description = "Authentication Required" }) => {
    return (
        <Stack
            sx={{ py: 3 }}
            alignItems="center"
            spacing={1}
        >
            <Image
                src={auth_img}
                alt="Icon"
                width={60}
            />
            <Typography color='text.secondary'>
                {description}
            </Typography>
        </Stack>
    )
}

export default NeedsAuthentication