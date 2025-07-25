export interface StrapData {
  image: {
    src: string
    alt: string
  }
}

export async function fetchStrapData(apiUrl: string): Promise<StrapData | null> {
  console.log('fetchStrapData: Starting fetch with URL:', apiUrl)
  
  if (!apiUrl) {
    console.log('fetchStrapData: No API URL provided')
    return null
  }
  
  try {
    console.log('fetchStrapData: Making fetch request...')
    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      // Cache for 5 minutes in Next.js
      next: { revalidate: 300 }
    })
    
    console.log('fetchStrapData: Response status:', response.status)
    
    if (!response.ok) {
      console.error(`API request failed with status: ${response.status}`)
      return null
    }
    
    const data = await response.json()
    console.log('fetchStrapData: Raw API response:', data)
    
    // Extract the specific data structure based on your API response
    // The API returns payload.missingAlts array with image objects
    if (data?.payload?.missingAlts && Array.isArray(data.payload.missingAlts)) {
      // Use the second image (index 1) which appears to be the strap image
      // or fall back to the first image if only one exists
      const imageIndex = data.payload.missingAlts.length > 1 ? 1 : 0
      const imageData = data.payload.missingAlts[imageIndex]
      
      if (imageData?.src) {
        const result = {
          image: {
            src: imageData.src,
            alt: imageData.alt || "Breitling strap collection"
          }
        }
        console.log('fetchStrapData: Extracted data:', result)
        return result
      }
    }
    
    console.log('fetchStrapData: No valid data found in API response')
    return null
  } catch (error) {
    console.error('fetchStrapData: Error fetching strap data:', error)
    return null
  }
}

// Client-side version for React Bricks admin
export async function fetchStrapDataClient(apiUrl: string): Promise<StrapData | null> {
  console.log('fetchStrapDataClient: Starting client fetch with URL:', apiUrl)
  
  if (!apiUrl) {
    console.log('fetchStrapDataClient: No API URL provided')
    return null
  }
  
  try {
    console.log('fetchStrapDataClient: Making client fetch request...')
    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    
    console.log('fetchStrapDataClient: Response status:', response.status)
    
    if (!response.ok) {
      console.error(`Client API request failed with status: ${response.status}`)
      return null
    }
    
    const data = await response.json()
    console.log('fetchStrapDataClient: Raw API response:', data)
    
    // Extract the specific data structure based on your API response
    if (data?.payload?.missingAlts && Array.isArray(data.payload.missingAlts)) {
      const imageIndex = data.payload.missingAlts.length > 1 ? 1 : 0
      const imageData = data.payload.missingAlts[imageIndex]
      
      if (imageData?.src) {
        const result = {
          image: {
            src: imageData.src,
            alt: imageData.alt || "Breitling strap collection"
          }
        }
        console.log('fetchStrapDataClient: Extracted data:', result)
        return result
      }
    }
    
    console.log('fetchStrapDataClient: No valid data found in API response')
    return null
  } catch (error) {
    console.error('fetchStrapDataClient: Error fetching strap data:', error)
    return null
  }
}