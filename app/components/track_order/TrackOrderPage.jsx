'use client'

import { useEffect } from 'react'
import OrderIdInput from './OrderIdInput';
import { useGet } from '@/hooks/useApi';
import { api_endpoints } from '@/lib/data';
import { message } from 'antd';
import OrderDetails from './OrderDetails';

const TrackOrderPage = () => {
  const { data, perform_get, success, loading, error, apiUrl, setApiUrl, reset } = useGet(null);
  const setUrl = orderId => {
    setApiUrl(process.env.NEXT_PUBLIC_API_HOST + api_endpoints.order_detail_prefix + orderId + '/');
  }

  const retrackOrder = () => {
    reset();
    setApiUrl(null);
  }

  useEffect(() => {
    if (apiUrl) {
      perform_get();
    }
  }, [apiUrl, perform_get])

  useEffect(() => {
    if (error) {
      message.error(error?.detail || "Error Occured");
      reset();
    }
  }, [error])

  if (success && data) {
    return (
      <OrderDetails
        data={data}
        retrack={retrackOrder}
      />
    )
  }
  
  return (
    <OrderIdInput
      setUrl={setUrl}
      loading={loading}
    />
  )
}

export default TrackOrderPage