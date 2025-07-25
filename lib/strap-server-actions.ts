import { unstable_cache } from 'next/cache'
import { fetchStrapData } from './api/breitling-api'
import { DEFAULT_API_URL } from '../utils/constants'

// Cached version of the API call for server-side usage
export const getCachedStrapData = unstable_cache(
  async (apiUrl: string = DEFAULT_API_URL) => {
    console.log('getCachedStrapData: Fetching with URL:', apiUrl)
    return await fetchStrapData(apiUrl)
  },
  ['breitling-strap-data'], // cache key
  {
    revalidate: 300, // 5 minutes
    tags: ['breitling-strap'],
  }
)

// Server action to prefetch data
export async function prefetchStrapData(apiUrl: string = DEFAULT_API_URL) {
  'use server'
  
  try {
    const data = await getCachedStrapData(apiUrl)
    return {
      success: true,
      data,
    }
  } catch (error) {
    console.error('Error prefetching strap data:', error)
    return {
      success: false,
      data: null,
    }
  }
}
