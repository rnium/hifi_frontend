'use client';
import React from 'react';
import { Fragment } from 'react';
import { categories } from '@/lib/data';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import { Stack, ListItemIcon } from '@mui/material';

const style = {
    py: 0,
    width: '100%',
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
};


export default function Categories() {
    return (
        <List sx={style}>
            <ListItem>
                <ListItemText primary="Featured Categories" sx={{backgroundColor: 'aliceblue', p:1, borderRadius: '5px', textAlign: 'center'}} />
            </ListItem>
            {
                categories.map((cat, idx) => {
                    if (idx == categories.length - 1) {
                        return (
                            <Link key={idx} href="#" className='category-link'>
                                <ListItem>
                                    <ListItemIcon>
                                        {cat.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={cat.title} />
                                </ListItem>
                            </Link>
                        )
                    } else {
                        return (
                            <Fragment>
                                <Link key={idx} href="#" className='category-link'>
                                    <ListItem >
                                        <ListItemIcon>
                                            {cat.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={cat.title} />
                                    </ListItem>
                                </Link>
                                <Divider variant="middle" component="li" />
                            </Fragment>
                        )
                    }
                })
            }
        </List>
    );
}