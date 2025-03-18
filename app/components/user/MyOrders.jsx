import { useCallback, useEffect } from 'react';
import OrdersTable from './OrdersTable';
import { useGet } from '@/hooks/useApi';
import { api_endpoints } from '@/lib/data';
import Spinner from '../utils/Spinner';

const order_get_params = {
    page_size: 10,
}

const MyOrders = () => {
    const { data, loading, loaded, perform_get: get_orders } = useGet(process.env.NEXT_PUBLIC_API_HOST + api_endpoints.my_orders, true);

    const fetchOrders = useCallback((params = {}) => {
        get_orders({
            ...order_get_params,
            ...params,
        })
    }, [get_orders])

    useEffect(() => {
        if (!loaded) {
            fetchOrders();
        }
    }, [loaded, fetchOrders])

    if (!loaded && loading) {
        return (
            <Spinner 
                description='Loading your orders...'
            />
        )
    }
        
    return (
        <div>
            <OrdersTable data={data} fetchOrders={fetchOrders} />
        </div>
    )
}

export default MyOrders;