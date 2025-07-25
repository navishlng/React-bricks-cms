'use client'

import React, { useEffect, useState } from 'react'

interface Props {
  fallbackSrc: string
  apiUrl?: string
  externalImageSrc?: string
}

const fetchImageFromAPI = async (apiUrl: string): Promise<string | null> => {
  console.log('🌐 fetchImageFromAPI (client) called with URL:', apiUrl)

  try {
    const res = await fetch(apiUrl)
    const data = await res.json()

    if (data?.payload?.missingAlts?.[1]?.src) {
      console.log('✅ Image found:', data.payload.missingAlts[1].src)
      return data.payload.missingAlts[1].src
    }

    console.warn('⚠️ Image not found in API response')
    return null
  } catch (err) {
    console.error('❌ API fetch error:', err)
    return null
  }
}

const DynamicImage: React.FC<Props> = ({ fallbackSrc, apiUrl, externalImageSrc }) => {
  const [imageSrc, setImageSrc] = useState(externalImageSrc || fallbackSrc)

  useEffect(() => {
    if (!externalImageSrc && apiUrl) {
      fetchImageFromAPI(apiUrl).then((url) => {
        if (url) setImageSrc(url)
      })
    }
  }, [apiUrl, externalImageSrc])

  return (
    <img
      src={imageSrc}
      alt="Breitling Strap"
      className="w-full max-w-[600px] aspect-video object-cover"
    />
  )
}

export default DynamicImage
