'use client'

import React from 'react'
import { DEFAULT_API_URL } from '../../../utils/constants'

interface ApiImageLoaderProps {
  apiUrl?: string
  onImageLoaded?: (imageSrc: string, imageAlt: string) => void
  enabled?: boolean
}

/**
 * Client component for loading images from the Breitling API
 * This component can be used to enhance the BreitlingStrap component with API functionality
 * 
 * Usage:
 * - Import this component in a client-side page or component
 * - Use it to fetch image data and pass to BreitlingStrap via customImageSrc prop
 */
export const ApiImageLoader: React.FC<ApiImageLoaderProps> = ({
  apiUrl = DEFAULT_API_URL,
  onImageLoaded,
  enabled = true,
}) => {
  React.useEffect(() => {
    if (!enabled || !apiUrl || !onImageLoaded) return

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        if (data?.payload?.missingAlts && Array.isArray(data.payload.missingAlts)) {
          const imageIndex = data.payload.missingAlts.length > 1 ? 1 : 0
          const imageData = data.payload.missingAlts[imageIndex]
          
          if (imageData?.src) {
            console.log('ApiImageLoader: Successfully got image from API:', imageData.src)
            onImageLoaded(imageData.src, imageData.alt || 'Breitling strap collection')
          } else {
            throw new Error('No valid image data found in API response')
          }
        } else {
          throw new Error('Invalid API response structure')
        }
      })
      .catch(error => {
        console.error('ApiImageLoader: Error fetching image data:', error)
      })
  }, [apiUrl, onImageLoaded, enabled])

  // This component doesn't render anything visible
  // It's just for API logic
  return null
}

/**
 * Hook for using API image loading in React components
 * 
 * Usage:
 * const { imageSrc, imageAlt, isLoading, error } = useApiImage(apiUrl)
 */
export const useApiImage = (apiUrl: string = DEFAULT_API_URL, enabled: boolean = true) => {
  const [imageSrc, setImageSrc] = React.useState<string | null>(null)
  const [imageAlt, setImageAlt] = React.useState<string | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (!enabled || !apiUrl) return

    setIsLoading(true)
    setError(null)

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        if (data?.payload?.missingAlts && Array.isArray(data.payload.missingAlts)) {
          const imageIndex = data.payload.missingAlts.length > 1 ? 1 : 0
          const imageData = data.payload.missingAlts[imageIndex]
          
          if (imageData?.src) {
            console.log('useApiImage: Successfully got image from API:', imageData.src)
            setImageSrc(imageData.src)
            setImageAlt(imageData.alt || 'Breitling strap collection')
          } else {
            throw new Error('No valid image data found in API response')
          }
        } else {
          throw new Error('Invalid API response structure')
        }
      })
      .catch(error => {
        console.error('useApiImage: Error fetching image data:', error)
        setError(error.message)
        setImageSrc(null)
        setImageAlt(null)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [apiUrl, enabled])

  return { imageSrc, imageAlt, isLoading, error }
}

export default ApiImageLoader
