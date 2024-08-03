'use client'

import { useEffect } from 'react';
import {
  Modal, Card, Stack, Box, Typography, Button, IconButton
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setQuickviewProduct } from '@/redux/homepageReducer';
import ProductTopSkeleton from '../skeletons/ProductTopSkeleton';
import ProductTop from '../product_page/ProductTop';
import { RiCloseLine, RiArrowRightWideLine } from '@remixicon/react'
import { useGet } from '@/hooks/useApi';
import { api_endpoints } from '@/lib/data';
import Link from 'next/link';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', md: 1000 },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


const ProductGlimpse = () => {
  const dispatch = useDispatch();
  const product_slug = useSelector(state => state.homepage.quickviewProduct);
  const { data: product, perform_get, loaded, reset, setApiUrl, apiUrl } = useGet();
  const handleClose = () => {
    reset()
    dispatch(setQuickviewProduct(null))
  }
  useEffect(() => {
    if (!loaded && product_slug && apiUrl) {
      perform_get();
    }
  }, [loaded, apiUrl])

  useEffect(() => {
    setApiUrl(`${process.env.NEXT_PUBLIC_API_HOST}${api_endpoints.view_product}${product_slug}`)
  }, [product_slug])

  return (
    <Modal
      open={Boolean(product_slug)}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card
        sx={style}
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          sx={{ mb: 0.5 }}
        >
          <Link
            href={`/product/${product_slug}`}
          >
            <Button
              disabled={!loaded}
              endIcon={
                <RiArrowRightWideLine />
              }
            >
              See More
            </Button>
          </Link>
          <IconButton
            disabled={!loaded}
            onClick={handleClose}
            color='error'
          >
            <RiCloseLine />
          </IconButton>
        </Stack>
        {
          loaded ? <ProductTop product={product} inModal /> : <ProductTopSkeleton />
        }
      </Card>
    </Modal>
  )
}

export default ProductGlimpse;