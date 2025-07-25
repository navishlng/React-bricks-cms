import React from 'react'
import { types, Text, Link, Image, Repeater } from 'react-bricks/rsc'

type Padding = 'small' | 'medium' | 'large'

const paddingClasses: Record<Padding, string> = {
  small: 'p-2',
  medium: 'p-6',
  large: 'p-12',
}

// Individual Card Component
export interface OverlayCardProps {
  picture: types.IImageSource
  highlightedText: types.TextValue
  title: types.TextValue
  buttonText: types.TextValue
  buttonLink: string
}

const OverlayCard: types.Brick<OverlayCardProps> = ({
  picture,
  highlightedText,
  title,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <Image
        propName="picture"
        source={picture}
        alt="Card image"
        imageClassName="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-x-0 bottom-8 flex flex-col items-center">
        <div className="text-center max-w-full">
          <div className="flex items-center justify-center space-x-2 text-2xl font-bold mb-3">
            <Text
              propName="highlightedText"
              placeholder="HIGHLIGHTED"
              value={highlightedText}
              renderBlock={({ children }) => (
                <span className="text-yellow-400">{children}</span>
              )}
            />
            <Text
              propName="title"
              placeholder="TITLE"
              value={title}
              renderBlock={({ children }) => (
                <h2 className="text-white">{children}</h2>
              )}
            />
          </div>
          <Link href={buttonLink} className="group inline-flex items-center">
            <Text
              propName="buttonText"
              placeholder="BUTTON"
              value={buttonText}
              renderBlock={({ children }) => (
                <span className="text-white border-b border-yellow-400 text-sm transition-colors duration-300 group-hover:text-yellow-400">
                  {children}
                </span>
              )}
            />
            <span className="text-white mx-2 transition-colors duration-300 group-hover:text-yellow-400">
              &gt;
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

OverlayCard.schema = {
  name: 'overlay-card',
  label: 'Overlay Card',
  category: 'Layout',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    highlightedText: 'FEATURED',
    title: 'PRODUCT',
    buttonText: 'DISCOVER',
    buttonLink: '#',
    picture: {
      src: '/bricks-preview-images/placeholder.jpg',
      alt: 'Card image',
    },
  }),
  sideEditProps: [
    {
      name: 'highlightedText',
      label: 'Highlighted Text',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'title',
      label: 'Title',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'buttonText',
      label: 'Button Text',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'buttonLink',
      label: 'Button Link',
      type: types.SideEditPropType.Text,
    },
  ],
}

// Main Dynamic Card Group Component
interface DynamicCardGroupProps {
  padding: Padding
  maxCards: number
  cards: types.RepeaterItems
}

const DynamicCardGroup: types.Brick<DynamicCardGroupProps> = ({ 
  padding = 'medium',
  maxCards = 5,
  cards
}) => {
  const cardCount = cards?.length || 2
  
  const getGridClass = () => {
    switch (cardCount) {
      case 1: return 'grid-cols-1'
      case 2: return 'grid-cols-2'
      case 3: return 'grid-cols-3'
      case 4: return 'grid-cols-4'
      case 5: return 'grid-cols-5'
      default: return 'grid-cols-2'
    }
  }

  return (
    <div className="w-[70%] mx-auto">
      <div className={`grid ${getGridClass()} gap-0`}>
        <Repeater 
          propName="cards" 
          items={cards}
          renderWrapper={(items) => <>{items}</>}
          renderItemWrapper={(item, index) => (
            <div key={index} className={paddingClasses[padding]}>
              {item}
            </div>
          )}
        />
      </div>
    </div>
  )
}

DynamicCardGroup.schema = {
  name: 'dynamic-card-group',
  label: 'Dynamic Card Group',
  category: 'Layout',
  previewImageUrl: '/bricks-preview-images/card-group.png',
  getDefaultProps: () => ({
    padding: 'medium',
    maxCards: 5,
    cards: [
      {
        highlightedText: "MEN'S",
        title: 'WATCHES',
        buttonText: 'DISCOVER',
        buttonLink: '#',
        picture: {
          src: '/bricks-preview-images/men.jpg',
          alt: 'Men',
        },
      },
      {
        highlightedText: "WOMEN'S",
        title: 'WATCHES',
        buttonText: 'DISCOVER',
        buttonLink: '#',
        picture: {
          src: '/bricks-preview-images/women.jpg',
          alt: 'Women',
        },
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'cards',
      itemType: 'overlay-card',
      itemLabel: 'Card',
      min: 2,
      max: 5,
    },
  ],
  sideEditProps: [
    {
      name: 'padding',
      label: 'Padding',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { label: 'Small', value: 'small' },
          { label: 'Medium', value: 'medium' },
          { label: 'Large', value: 'large' },
        ],
      },
    },
    {
      name: 'maxCards',
      label: 'Maximum Cards',
      type: types.SideEditPropType.Number,
      validate: (value) => value >= 2 && value <= 5,
    },
  ],
}

export { OverlayCard }
export default DynamicCardGroup