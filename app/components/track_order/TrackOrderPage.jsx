'use client'

import { useEffect } from 'react'
import OrderIdInput from './OrderIdInput';
import { useGet } from '@/hooks/useApi';
import { api_endpoints } from '@/lib/data';
import { message } from 'antd';
import OrderDetails from './OrderDetails';

const TrackOrderPage = () => {
  const { data, perform_get, success, error, apiUrl, setApiUrl, reset } = useGet(null);
  const setUrl = orderId => {
    setApiUrl(process.env.NEXT_PUBLIC_API_HOST + api_endpoints.order_detail_prefix + orderId + '/');
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
      />
    )
  }
  
  return (
    <OrderIdInput
      setUrl={setUrl}
    />
  )
}

export default TrackOrderPage