'use client'

import React, { useEffect, useState } from 'react'
import { useSafeMount } from '../hooks/useSafeMount'

interface Props {
  fallbackSrc: string
  apiUrl?: string
  externalImageSrc?: string
  imageIndex?: number
}

const fetchImageFromAPI = async (apiUrl: string, imageIndex: number = 1): Promise<string | null> => {
  console.log('🌐 fetchImageFromAPI (client) called with URL:', apiUrl)

  try {
    const res = await fetch(apiUrl)
    const data = await res.json()

    if (data?.payload?.missingAlts?.[imageIndex]?.src) {
      console.log('✅ Image found:', data.payload.missingAlts[imageIndex].src)
      return data.payload.missingAlts[imageIndex].src
    }

    console.warn('⚠️ Image not found in API response')
    return null
  } catch (err) {
    console.error('❌ API fetch error:', err)
    return null
  }
}

const DynamicImage: React.FC<Props> = ({ fallbackSrc, apiUrl, externalImageSrc, imageIndex = 1 }) => {
  const [imageSrc, setImageSrc] = useState(externalImageSrc || fallbackSrc)
  const [isLoading, setIsLoading] = useState(false)
  const { safeSetState } = useSafeMount()

  useEffect(() => {
    if (!externalImageSrc && apiUrl) {
      safeSetState(() => setIsLoading(true))
      
      fetchImageFromAPI(apiUrl, imageIndex)
        .then((url) => {
          if (url) {
            safeSetState(() => setImageSrc(url))
          }
        })
        .catch((error) => {
          console.error('Error fetching image:', error)
        })
        .finally(() => {
          safeSetState(() => setIsLoading(false))
        })
    }
  }, [apiUrl, externalImageSrc, imageIndex, safeSetState])

  return (
    <div className="relative w-full">
      <img
        src={imageSrc}
        alt="Breitling Strap"
        className="w-full max-w-lg md:max-w-xl lg:max-w-4xl xl:max-w-5xl aspect-video object-cover"
        onError={(e) => {
          // Fallback to default image if loading fails
          if (e.currentTarget.src !== fallbackSrc) {
            e.currentTarget.src = fallbackSrc
          }
        }}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75">
          <div className="text-sm text-gray-600">Loading...</div>
        </div>
      )}
    </div>
  )
}

export default DynamicImage
