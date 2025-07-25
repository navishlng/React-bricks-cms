import React from 'react'
import { types, Text, RichText } from 'react-bricks/rsc'
import { PADDING_CLASSES, DEFAULT_API_URL } from '../../../utils/constants'
import DynamicImage from './DynamicImage'

interface BreitlingStrapProps {
  padding?: 'big' | 'medium' | 'small'
  title?: types.TextValue
  description?: types.TextValue
  buttonText?: types.TextValue
  buttonLink?: string
  apiUrl?: string
  externalImageSrc?: string
  imageIndex?: number
}

const BreitlingStrap: types.Brick<BreitlingStrapProps> = ({
  padding = 'small',
  title,
  description,
  buttonText,
  buttonLink = '#',
  externalImageSrc,
  apiUrl,
  imageIndex,
}) => {
  return (
    <div className={`flex flex-col lg:flex-row w-full max-w-6xl mx-auto justify-center items-center ${PADDING_CLASSES[padding]}`}>
      {/* ✅ Image block is now handled by a client component */}
      <div className="w-full lg:flex-1 flex justify-center items-center mb-6 lg:mb-0">
        <DynamicImage
          fallbackSrc="/bricks-preview-images/strap_horizontal.jpeg"
          apiUrl={apiUrl}
          externalImageSrc={externalImageSrc}
          imageIndex={imageIndex}
        />
      </div>

      {/* Text Block */}
      <div className="w-full lg:flex-1 flex flex-col justify-center items-center p-4 lg:p-6">
        <Text
          propName="title"
          value={title || []}
          renderBlock={({ children }) => (
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white uppercase text-center">
              {children}
            </h2>
          )}
          placeholder="Enter title..."
        />

        <RichText
          propName="description"
          value={description || []}
          renderBlock={({ children }) => (
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-2 text-center max-w-md">
              {children}
            </p>
          )}
          placeholder="Enter description..."
          allowedFeatures={[types.RichTextFeatures.Bold]}
        />

        <a
          href={buttonLink}
          className="mt-4 lg:mt-6 bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 md:px-6 font-semibold rounded transition text-sm md:text-base"
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
    apiUrl: DEFAULT_API_URL,
    imageIndex: 1, // Default to the strap image (index 1)
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
      name: 'apiUrl',
      label: 'API URL',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'imageIndex',
      label: 'Image Index',
      type: types.SideEditPropType.Number,
    },
  ],
}

export default BreitlingStrap
