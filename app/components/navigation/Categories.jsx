'use client';
import React from 'react';
import { Fragment } from 'react';
import { categories } from '@/lib/data';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CategoryIcon from '@mui/icons-material/Category';
import Link from 'next/link';
import { Stack, ListItemIcon } from '@mui/material';
import { cat_icon_mapping } from '@/lib/data';

const style = {
    py: 0,
    width: '100%',
    borderRadius: 0,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
    zIndex: 0
};


export default function Categories({ cat_data }) {
    return (
        <List sx={style}>
            {
                cat_data.map((cat, idx) => (
                    <Fragment key={idx}>
                        <Link key={idx} href={`/category/${cat.slug}`} className='category-link'>
                            <ListItem >
                                <ListItemIcon>
                                    {cat_icon_mapping[cat.slug] || <CategoryIcon />}
                                </ListItemIcon>
                                <ListItemText className='cat-text' primary={cat.title} />
                            </ListItem>
                        </Link>
                        {
                            idx < cat_data.length - 1 ? <Divider variant="middle" component="li" /> : null
                        }
                    </Fragment>
                ))
            }
        </List>
    );
}