import React from 'react';
import CategoryPage from '@/app/components/category_page/CategoryPage';

const page = ({params}) => {
  console.log(params);
  return (
    <CategoryPage params={params} />
  )
}

export default page