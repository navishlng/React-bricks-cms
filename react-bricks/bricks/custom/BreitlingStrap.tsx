'use client'

import React, { useEffect, useState } from 'react'
import { types, Text, RichText } from 'react-bricks/rsc'
import {
  PADDING_CLASSES,
  DEFAULT_API_URL,
  FALLBACK_IMAGE_SRC,
  FALLBACK_IMAGE_ALT,
} from '../../../utils/constants'

interface BreitlingStrapProps {
  padding?: 'big' | 'medium' | 'small'
  title?: types.TextValue
  description?: types.TextValue
  buttonText?: types.TextValue
  buttonLink?: string
  customImageSrc?: string
  customImageAlt?: string
  apiUrl?: string
}

const BreitlingStrap: types.Brick<BreitlingStrapProps> = ({
  padding = 'small',
  title,
  description,
  buttonText,
  buttonLink = '#',
  customImageSrc,
  customImageAlt,
  apiUrl = DEFAULT_API_URL,
}) => {

  console.log('✅ BreitlingStrap component rendered on page')
  
  const [imageSrc, setImageSrc] = useState<string>(customImageSrc || FALLBACK_IMAGE_SRC)
  const [imageAlt, setImageAlt] = useState<string>(customImageAlt || FALLBACK_IMAGE_ALT)
  const [loading, setLoading] = useState<boolean>(!customImageSrc)

  useEffect(() => {
    if (customImageSrc) {
      setImageSrc(customImageSrc)
      setImageAlt(customImageAlt || FALLBACK_IMAGE_ALT)
      setLoading(false)
      return
    }

    const fetchImage = async () => {
      setLoading(true)
      try {
        const res = await fetch(apiUrl || DEFAULT_API_URL)
        const data = await res.json()

        const imageArray = data?.payload?.missingAlts
        if (Array.isArray(imageArray) && imageArray.length > 0) {
          const index = imageArray.length > 1 ? 1 : 0
          const image = imageArray[index]
          setImageSrc(image?.src || FALLBACK_IMAGE_SRC)
          setImageAlt(image?.alt || FALLBACK_IMAGE_ALT)
        } else {
          setImageSrc(FALLBACK_IMAGE_SRC)
          setImageAlt(FALLBACK_IMAGE_ALT)
        }
      } catch (err) {
        console.error('Error loading image:', err)
        setImageSrc(FALLBACK_IMAGE_SRC)
        setImageAlt(FALLBACK_IMAGE_ALT)
      } finally {
        setLoading(false)
      }
    }

    fetchImage()
  }, [customImageSrc, customImageAlt, apiUrl])

  return (
    <div className={`flex w-[75%] mx-auto justify-center items-center ${PADDING_CLASSES[padding]}`}>
      {/* Image Block */}
      <div className="flex-1 flex justify-center items-center">
        {loading ? (
          <div className="w-full max-w-[600px] aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-300">Loading image...</p>
          </div>
        ) : (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full max-w-[600px] aspect-video object-cover"
            onError={() => {
              setImageSrc(FALLBACK_IMAGE_SRC)
              setImageAlt(FALLBACK_IMAGE_ALT)
            }}
          />
        )}
      </div>

      {/* Text Block */}
      <div className="flex-1 flex flex-col justify-center items-center p-6">
        <Text
          propName="title"
          value={title || []}
          renderBlock={({ children }) => (
            <h2 className="text-3xl font-bold text-black dark:text-white uppercase">
              {children}
            </h2>
          )}
          placeholder="Enter title..."
        />

        <RichText
          propName="description"
          value={description || []}
          renderBlock={({ children }) => (
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{children}</p>
          )}
          placeholder="Enter description..."
          allowedFeatures={[types.RichTextFeatures.Bold]}
        />

        <a
          href={buttonLink}
          className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-6 font-semibold rounded transition"
        >
          <Text
            propName="buttonText"
            value={buttonText || []}
            renderBlock={({ children }) => <span>{children}</span>}
            placeholder="DISCOVER STRAPS"
          />
        </a>
      </div>
    </div>
  )
}

BreitlingStrap.schema = {
  name: 'breitling-strap',
  label: 'Breitling Strap',
  previewImageUrl: '/bricks-preview-images/cards.png',
  getDefaultProps: () => ({
    padding: 'small',
    title: [{ type: 'paragraph', children: [{ text: 'BREITLING STRAP' }] }],
    description: [
      {
        type: 'paragraph',
        children: [
          { text: 'Pursue excellence, embrace our strap collection through Breitling style.' },
        ],
      },
    ],
    buttonText: [{ type: 'paragraph', children: [{ text: 'DISCOVER STRAPS' }] }],
    buttonLink: '#',
    customImageSrc: '',
    customImageAlt: '',
    apiUrl: DEFAULT_API_URL,
  }),
  sideEditProps: [
    {
      name: 'padding',
      label: 'Padding',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'big', label: 'Big Padding' },
          { value: 'medium', label: 'Medium Padding' },
          { value: 'small', label: 'Small Padding' },
        ],
      },
    },
    {
      name: 'buttonLink',
      label: 'Button Link',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'customImageSrc',
      label: 'Custom Image URL (Optional)',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'customImageAlt',
      label: 'Custom Image Alt Text (Optional)',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'apiUrl',
      label: 'API URL',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default BreitlingStrap
