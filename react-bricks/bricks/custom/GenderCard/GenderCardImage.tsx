'use client'

import React, { useEffect, useState } from 'react'

interface GenderCardImageProps {
  fallbackSrc: string
  apiUrl?: string
  externalImageSrc?: string
  alt?: string
  className?: string
  imageIndex?: number // NEW: index of image to display from API
}

const fetchImageFromAPI = async (apiUrl: string, imageIndex: number = 0): Promise<string | null> => {
  console.log('🌐 fetchImageFromAPI (GenderCard) called with URL:', apiUrl)

  try {
    const res = await fetch(apiUrl)
    const data = await res.json()

    if (data?.payload?.missingAlts?.[imageIndex]?.src) {
      console.log('✅ Gender card image found:', data.payload.missingAlts[imageIndex].src)
      return data.payload.missingAlts[imageIndex].src
    }

    console.warn('⚠️ Gender card image not found in API response')
    return null
  } catch (err) {
    console.error('❌ Gender card API fetch error:', err)
    return null
  }
}

const GenderCardImage: React.FC<GenderCardImageProps> = ({ 
  fallbackSrc, 
  apiUrl, 
  externalImageSrc,
  alt = "Card image",
  className = "absolute inset-0 w-full h-full object-cover",
  imageIndex = 0 // NEW: default to first image
}) => {
  const [imageSrc, setImageSrc] = useState(externalImageSrc || fallbackSrc)

  useEffect(() => {
    if (!externalImageSrc && apiUrl) {
      fetchImageFromAPI(apiUrl, imageIndex).then((url) => {
        if (url) setImageSrc(url)
      })
    }
  }, [apiUrl, externalImageSrc, imageIndex])

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
    />
  )
}

export default GenderCardImage
