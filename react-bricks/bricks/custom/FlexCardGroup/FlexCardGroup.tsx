import * as React from 'react'
import { Repeater, types } from 'react-bricks/rsc'

type Padding = 'small' | 'medium' | 'large'
type Layout = 'row' | 'column'

const paddingClasses: Record<Padding, string> = {
  small: 'p-2 sm:p-4 lg:p-6',
  medium: 'p-4 sm:p-6 lg:p-8 xl:p-12',
  large: 'p-6 sm:p-8 lg:p-12 xl:p-16',
}

export interface FlexCardGroupProps {
  padding: Padding
  layout: Layout
  cards: types.RepeaterItems
}

const FlexCardGroup: types.Brick<FlexCardGroupProps> = ({
  padding = 'medium',
  layout = 'row',
  cards,
}) => {
  const containerClasses = layout === 'row' 
    ? 'flex flex-col sm:flex-row lg:flex-row justify-center items-stretch gap-4 sm:gap-6 lg:gap-8' 
    : 'flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center'

  return (
    <div className={`w-full max-w-7xl mx-auto ${paddingClasses[padding]}`}>
      <div className={containerClasses}>
        <Repeater propName="cards" items={cards} />
      </div>
    </div>
  )
}

FlexCardGroup.schema = {
  name: 'flex-card-group',
  label: 'Flex Card Group',
  category: 'Layout',
  previewImageUrl: '/bricks-preview-images/cards.png',
  getDefaultProps: () => ({
    padding: 'medium',
    layout: 'row',
    cards: [
      {
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
      },
      {
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
      },
      {
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
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'cards',
      itemType: 'flex-card-item',
      itemLabel: 'Card',
      min: 1,
      max: 6,
    },
  ],
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [
        {
          name: 'layout',
          label: 'Layout',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { label: 'Row', value: 'row' },
              { label: 'Column', value: 'column' },
            ],
          },
        },
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
      ],
    },
  ],
}

export default FlexCardGroup
