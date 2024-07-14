import React from 'react';
import CategoryPage from '@/app/components/category_page/CategoryPage';
import { api_endpoints } from '@/lib/data';

const getData = async (slug) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}${api_endpoints.view_category}${slug}/`);
  const res_code = res.status;
  if (!res.ok) {
    throw new Error(`${res_code} (${res.statusText})`);
  }
  return res.json();
}

const CategoryPageMain = async ({params}) => {
  const data = await getData(params?.slug);
  return (
    <CategoryPage params={params} cat_data={data} />
  )
}

export default CategoryPageMain;