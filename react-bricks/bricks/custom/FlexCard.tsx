import { Image, RichText, Text, types } from 'react-bricks/rsc'

type Padding = 'big' | 'medium' | 'small'

interface FlexCardProps {
  padding: Padding
  image: types.IImageSource
  highlightedTitle: types.TextValue
  title: types.TextValue
  description: types.TextValue
  buttonText: types.TextValue
  buttonLink: string
}

const FlexCard: types.Brick<FlexCardProps> = ({
  padding,
  image,
  highlightedTitle,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  const paddingClasses = {
    big: 'p-8',
    medium: 'p-6',
    small: 'p-4',
  }

  return (
    <div className={`w-full max-w-sm ${paddingClasses[padding]} text-center`}>
      {/* Image */}
      <div>
        <Image
          propName="image"
          source={image}
          alt="Card Image"
          maxWidth={600}
          aspectRatio={16 / 9}
          imageClassName="w-full object-cover rounded-md"
        />
      </div>

      {/* Title with highlighted part */}
      <div className="flex justify-center items-center mt-4 text-lg font-semibold leading-snug gap-x-2">
        <Text
          propName="highlightedTitle"
          value={highlightedTitle}
          renderBlock={(props) => (
            <span className="text-yellow-500">{props.children}</span>
          )}
          placeholder="Enter highlighted title..."
        />

        <Text
          propName="title"
          value={title}
          renderBlock={(props) => (
            <span className="text-gray-900 dark:text-white">{props.children}</span>
          )}
          placeholder="Enter title..."
        />
      </div>

      {/* Description */}
      <RichText
        propName="description"
        value={description}
        renderBlock={(props) => (
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            {props.children}
          </p>
        )}
        placeholder="Enter description..."
        allowedFeatures={[types.RichTextFeatures.Bold]}
      />

      {/* Button */}
      <a
        href={buttonLink || '#'}
        className="mt-4 inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded transition-colors duration-200"
      >
        <Text
          propName="buttonText"
          value={buttonText}
          renderBlock={(props) => <span>{props.children}</span>}
          placeholder="Discover"
        />
      </a>
    </div>
  )
}

FlexCard.schema = {
  name: 'flex-card',
  label: 'Flex Card',
  previewImageUrl: `/bricks-preview-images/cards.png`,
  getDefaultProps: () => ({
    padding: 'medium',
    highlightedTitle: 'SUPEROCEAN',
    title: 'HERITAGE, REFINED',
    description: 'New design, streamlined sizes. Built for life at sea.',
    buttonText: 'DISCOVER',
    buttonLink: '#',
    image: {
      src: '/bricks-preview-images/cards.png',
      alt: 'Default Card Image'
    },
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
  ],
}

export default FlexCard
