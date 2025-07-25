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
}

const BreitlingStrap: types.Brick<BreitlingStrapProps> = ({
  padding = 'small',
  title,
  description,
  buttonText,
  buttonLink = '#',
  externalImageSrc,
  apiUrl,
}) => {

  // console.log('hello');
  // console.log(externalImageSrc);

  return (
    <div className={`flex w-[75%] mx-auto justify-center items-center ${PADDING_CLASSES[padding]}`}>
      {/* ✅ Image block is now handled by a client component */}
      <div className="flex-1 flex justify-center items-center">
        <DynamicImage
          fallbackSrc="/bricks-preview-images/strap_horizontal.jpeg"
          apiUrl={apiUrl}
          externalImageSrc={externalImageSrc}
        />
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
      name: 'apiUrl',
      label: 'API URL',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default BreitlingStrap
