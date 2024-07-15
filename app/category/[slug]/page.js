import React from 'react';
import CategoryPage from '@/app/components/category_page/CategoryPage';
import { api_endpoints } from '@/lib/data';
import { getAPIData } from '@/utils/fetchData';


const CategoryPageMain = async ({params}) => {
  const data = await getAPIData(`${api_endpoints.view_category}${params.slug}/`, 'no-store');
  return (
    <CategoryPage params={params} cat_data={data} />
  )
}

export default CategoryPageMain;