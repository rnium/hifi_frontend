import { Box } from "@mui/material";
import Link from "next/link";
import React from 'react';
import { nav_categories } from "@/lib/data";

const CategoryNav = () => {
    return (
        <Box className="product-categories">
            <div className="content">
                <ul>
                    {
                        nav_categories.map((cat, idx) => (
                            <li key={idx}>
                                <div className="cat-item">
                                    <Link href={ cat?.slug ? `/category/${cat.slug}` : '#'}>{cat.title}</Link>
                                    <div className="sub-menu">
                                        <ul>
                                            {
                                                cat.subcategories.map(scat => (
                                                    <li key={scat.slug}>
                                                        <Link href={`/category/${scat.slug}`}>{scat.title}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Box>
    )
}

export default CategoryNav