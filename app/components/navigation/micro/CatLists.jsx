import React from 'react';
import Link from "next/link";


const GROUP_LENGTH = 8


const CatLists = ({ items }) => {
    const item_groups = Array.from({ length: Math.ceil(items.length / GROUP_LENGTH) }, (_, i) => {
        return items.slice(i * GROUP_LENGTH, (i * GROUP_LENGTH) + GROUP_LENGTH);
    })
    return (
        <>
            {
                item_groups.map(grp_cats => (
                    <ul>
                        {
                            grp_cats.map(scat => (
                                <li key={scat.slug}>
                                    <Link href={`/category/${scat.slug}`}>{scat.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                ))
            }
        </>
    )
}

export default CatLists