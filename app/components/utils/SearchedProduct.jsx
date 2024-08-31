import Image from "next/image"
import Link from "next/link"
import { Stack, Typography } from "@mui/material"

const SearchedProduct = ({ product }) => {
    return (
        <Link href={`/product/${product.slug}`}>
            <Stack
                direction='row'
                spacing={1}
            >
                <Image
                    src={product.cover}
                    width={60}
                    height={60}
                    className="object-cover"
                />
                <Stack
                    spacing={1}
                    alignItems='center'
                    justifyContent='center'
                >
                    <Typography
                        variant="body2"
                        className="transition-all hover:text-red-600"
                    >
                        {product.title}
                    </Typography>
                </Stack>
            </Stack>
        </Link>
    )
}

export default SearchedProduct