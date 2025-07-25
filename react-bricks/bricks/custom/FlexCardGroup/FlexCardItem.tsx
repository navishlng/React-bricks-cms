import React from 'react'
import { Image, RichText, Text, types } from 'react-bricks/rsc'

type Padding = 'big' | 'medium' | 'small'

export interface FlexCardItemProps {
  padding: Padding
  image: types.IImageSource
  highlightedTitle: types.TextValue
  title: types.TextValue
  description: types.TextValue
  buttonText: types.TextValue
  buttonLink: string
  showImage: boolean
  showHighlightedTitle: boolean
  showTitle: boolean
  showDescription: boolean
  showButton: boolean
}

const FlexCardItem: types.Brick<FlexCardItemProps> = ({
  padding = 'medium',
  image,
  highlightedTitle,
  title,
  description,
  buttonText,
  buttonLink,
  showImage = true,
  showHighlightedTitle = true,
  showTitle = true,
  showDescription = true,
  showButton = true,
}) => {
  const paddingClasses = {
    big: 'p-4 sm:p-6 lg:p-8',
    medium: 'p-3 sm:p-4 lg:p-6',
    small: 'p-2 sm:p-3 lg:p-4',
  }

  return (
    <div className={`w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg ${paddingClasses[padding]} text-center`}>
      {/* Image */}
      {showImage && (
        <div>
          <Image
            propName="image"
            source={image}
            alt="Card Image"
            maxWidth={600}
            aspectRatio={16 / 9}
            imageClassName="w-full object-cover"
          />
        </div>
      )}

      {/* Title with highlighted part */}
      {(showHighlightedTitle || showTitle) && (
        <div className="w-full flex flex-col sm:flex-row justify-center items-center mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl font-semibold leading-snug gap-x-1 sm:gap-x-2 gap-y-1">
          {showHighlightedTitle && (
            <Text
              propName="highlightedTitle"
              value={highlightedTitle}
              renderBlock={(props) => (
                <span className="text-yellow-500">{props.children}</span>
              )}
              placeholder="Enter highlighted title..."
            />
          )}

          {showTitle && (
            <Text
              propName="title"
              value={title}
              renderBlock={(props) => (
                <span className="text-gray-900 dark:text-white">{props.children}</span>
              )}
              placeholder="Enter title..."
            />
          )}
        </div>
      )}

      {/* Description */}
      {showDescription && (
        <RichText
          propName="description"
          value={description}
          renderBlock={(props) => (
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 mt-2 sm:mt-3 px-2 sm:px-0">
              {props.children}
            </p>
          )}
          placeholder="Enter description..."
          allowedFeatures={[types.RichTextFeatures.Bold]}
        />
      )}

      {/* Button */}
      {showButton && (
        <a
          href={buttonLink || '#'}
          className="mt-3 sm:mt-4 lg:mt-6 inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 sm:py-3 px-4 sm:px-6 lg:px-8 rounded text-sm sm:text-base transition-colors duration-200"
        >
          <Text
            propName="buttonText"
            value={buttonText}
            renderBlock={(props) => <span>{props.children}</span>}
            placeholder="Discover"
          />
        </a>
      )}
    </div>
  )
}

FlexCardItem.schema = {
  name: 'flex-card-item',
  label: 'Flex Card Item',
  category: 'Layout',
  hideFromAddMenu: true,
  previewImageUrl: `/bricks-preview-images/cards.png`,
  getDefaultProps: () => ({
    padding: 'medium',
    highlightedTitle: 'SUPEROCEAN',
    title: 'HERITAGE, REFINED',
    description: 'New design, streamlined sizes. Built for life at sea.',
    buttonText: 'DISCOVER',
    buttonLink: '#',
    image: {
      src: '/bricks-preview-images/superocean.jpg',
      alt: 'Default Card Image'
    },
    showImage: true,
    showHighlightedTitle: true,
    showTitle: true,
    showDescription: true,
    showButton: true,
  }),
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [
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
      ],
    },
    {
      groupName: 'Visibility',
      defaultOpen: false,
      props: [
        {
          name: 'showImage',
          label: 'Show Image',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'showHighlightedTitle',
          label: 'Show Highlighted Title',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'showTitle',
          label: 'Show Title',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'showDescription',
          label: 'Show Description',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'showButton',
          label: 'Show Button',
          type: types.SideEditPropType.Boolean,
        },
      ],
    },
    {
      groupName: 'Content',
      defaultOpen: false,
      props: [
        {
          name: 'buttonLink',
          label: 'Button Link',
          type: types.SideEditPropType.Text,
        },
      ],
    },
  ],
}

export default FlexCardItem

// Superocean Card Component
const FlexCardSuperocean: types.Brick<FlexCardItemProps> = (props) => {
  return <FlexCardItem {...props} />
}

FlexCardSuperocean.schema = {
  name: 'flex-card-superocean',
  label: 'Flex Card Superocean',
  category: 'Layout',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    padding: 'medium',
    highlightedTitle: 'SUPEROCEAN',
    title: 'HERITAGE, REFINED',
    description: 'New design, streamlined sizes. Built for life at sea.',
    buttonText: 'DISCOVER',
    buttonLink: '#',
    image: {
      src: '/bricks-preview-images/superocean.jpg',
      alt: 'Superocean'
    },
    showImage: true,
    showHighlightedTitle: true,
    showTitle: true,
    showDescription: true,
    showButton: true,
  }),
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [
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
      ],
    },
    {
      groupName: 'Visibility',
      defaultOpen: false,
      props: [
        {
          name: 'showImage',
          label: 'Show Image',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'showHighlightedTitle',
          label: 'Show Highlighted Title',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'showTitle',
          label: 'Show Title',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'showDescription',
          label: 'Show Description',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'showButton',
          label: 'Show Button',
          type: types.SideEditPropType.Boolean,
        },
      ],
    },
    {
      groupName: 'Content',
      defaultOpen: false,
      props: [
        {
          name: 'buttonLink',
          label: 'Button Link',
          type: types.SideEditPropType.Text,
        },
      ],
    },
  ],
}

// Tropical Dial Card Component
const FlexCardTropical: types.Brick<FlexCardItemProps> = (props) => {
  return <FlexCardItem {...props} />
}

FlexCardTropical.schema = {
  name: 'flex-card-tropical',
  label: 'Flex Card Tropical',
  category: 'Layout',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    padding: 'medium',
    highlightedTitle: 'TROPICAL DIAL',
    title: 'LEGENDARY NAME',
    description: 'The Superocean Heritage Kelly Slater, limited to 500 pieces.',
    buttonText: 'DISCOVER',
    buttonLink: '#',
    image: {
      src: '/bricks-preview-images/tropical_dial.jpg',
      alt: 'Tropical Dial'
    },
    showImage: true,
    showHighlightedTitle: true,
    showTitle: true,
    showDescription: true,
    showButton: true,
  }),
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [
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
      ],
    },
    {
      groupName: 'Visibility',
      defaultOpen: false,
      props: [
        {
          name: 'showImage',
          label: 'Show Image',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'showHighlightedTitle',
          label: 'Show Highlighted Title',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'showTitle',
          label: 'Show Title',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'showDescription',
          label: 'Show Description',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'showButton',
          label: 'Show Button',
          type: types.SideEditPropType.Boolean,
        },
      ],
    },
    {
      groupName: 'Content',
      defaultOpen: false,
      props: [
        {
          name: 'buttonLink',
          label: 'Button Link',
          type: types.SideEditPropType.Text,
        },
      ],
    },
  ],
}

// Austin Butler Card Component
const FlexCardAustin: types.Brick<FlexCardItemProps> = (props) => {
  return <FlexCardItem {...props} />
}

FlexCardAustin.schema = {
  name: 'flex-card-austin',
  label: 'Flex Card Austin',
  category: 'Layout',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    padding: 'medium',
    highlightedTitle: 'AUSTIN BUTLER',
    title: 'WEARS THE ALL-PURPOSE CHRONOMAT',
    description: '',
    buttonText: 'DISCOVER',
    buttonLink: '#',
    image: {
      src: '/bricks-preview-images/austin_butler.jpg',
      alt: 'Austin Butler'
    },
    showImage: true,
    showHighlightedTitle: true,
    showTitle: true,
    showDescription: false,
    showButton: true,
  }),
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [
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
      ],
    },
    {
      groupName: 'Visibility',
      defaultOpen: false,
      props: [
        {
          name: 'showImage',
          label: 'Show Image',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'showHighlightedTitle',
          label: 'Show Highlighted Title',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'showTitle',
          label: 'Show Title',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'showDescription',
          label: 'Show Description',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'showButton',
          label: 'Show Button',
          type: types.SideEditPropType.Boolean,
        },
      ],
    },
    {
      groupName: 'Content',
      defaultOpen: false,
      props: [
        {
          name: 'buttonLink',
          label: 'Button Link',
          type: types.SideEditPropType.Text,
        },
      ],
    },
  ],
}

export { FlexCardSuperocean, FlexCardTropical, FlexCardAustin }
