'use client'

import { useEffect } from 'react';
import {
  Modal, Card, Box, Typography
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setQuickviewProduct } from '@/redux/homepageReducer';
import ProductTopSkeleton from '../skeletons/ProductTopSkeleton'; 
import ProductTop from '../product_page/ProductTop';
import { useGet } from '@/hooks/useApi';
import { api_endpoints } from '@/lib/data';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs: '90%', md: 1000},
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


const ProductGlimpse = () => {
  const dispatch = useDispatch();
  const product_slug = useSelector(state => state.homepage.quickviewProduct);
  const {data: product, perform_get, loaded, reset} = useGet(`${process.env.NEXT_PUBLIC_API_HOST}${api_endpoints.view_product}${product_slug}`);
  const handleClose = () => {
    reset()
    dispatch(setQuickviewProduct(null))
  }
  useEffect(() => {
    if (!loaded) {
      perform_get();
    }
  }, [loaded])
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
        {
          loaded ? <ProductTop product={product} /> : <ProductTopSkeleton />
        }
      </Card>
    </Modal>
  )
}

export default ProductGlimpse;