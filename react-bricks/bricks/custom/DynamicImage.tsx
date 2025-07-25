'use client'

import React, { useEffect, useState } from 'react'

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
      alt="Breitling Strap"
      className="w-full max-w-lg md:max-w-xl lg:max-w-4xl xl:max-w-5xl aspect-video object-cover"
    />
  )
}

export default DynamicImage
