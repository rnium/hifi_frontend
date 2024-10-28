import { Box } from "@mui/material";
import Link from "next/link";
import React from 'react';
import { nav_categories } from "@/lib/data";
import CatLists from "./CatLists";


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
                                        <CatLists 
                                            items={cat.subcategories}
                                        />
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