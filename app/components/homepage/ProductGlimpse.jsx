'use client'

import {
  Modal, Card, Box, Typography
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setQuickviewProduct } from '@/redux/homepageReducer';
import ProductDetailTop from '../skeletons/ProductDetailTop'; 

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
  const product = useSelector(state => state.homepage.quickviewProduct);
  const handleClose = () => {
    dispatch(setQuickviewProduct(null))
  }
  return (
    <Modal
      open={Boolean(product)}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card
        sx={style}
      >
        <ProductDetailTop />
      </Card>
    </Modal>
  )
}

export default ProductGlimpse;