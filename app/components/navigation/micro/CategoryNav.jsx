import { Box } from "@mui/material";
import Link from "next/link";
import React from 'react';
import { with_subcategories } from "@/lib/data";

const CategoryNav = () => {
    return (
        <Box className="product-categories">
            <div className="content">
                <ul>
                    {
                        with_subcategories.map((cat, idx) => (
                            <li key={idx}>
                                <div className="cat-item">
                                    <div className="title">{cat.title}</div>
                                    <div className="sub-menu">
                                        <ul>
                                            {
                                                cat.subcategories.map(scat => (
                                                    <li key={scat.slug}>
                                                        <Link href="#">{scat.title}</Link>
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