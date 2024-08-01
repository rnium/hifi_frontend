import React from 'react';
import CategoryPage from '@/app/components/category_page/CategoryPage';
import { api_endpoints } from '@/lib/data';
import { getAPIData } from '@/utils/fetchData';


export const generateMetadata = async ({ params }) => {
  const data = await getAPIData(`${api_endpoints.view_category}${params.slug}/`, 'no-store');
  return {
    title: data?.title,
    description: data.description || `Buy ${data?.title} at the best price from HiFi Computer`,
    openGraph: {
      title: data?.seo_title || data?.title,
      siteName: 'HiFi Computer',
      type: 'website',
    }
  }
}

const CategoryPageMain = async ({params}) => {
  const data = await getAPIData(`${api_endpoints.view_category}${params.slug}/`, 'no-store');
  return (
    <CategoryPage params={params} cat_data={data} />
  )
}

export default CategoryPageMain;