import * as React from 'react'
import { Repeater, types } from 'react-bricks/rsc'

type Padding = 'small' | 'medium' | 'large'
type Layout = 'row' | 'column'

const paddingClasses: Record<Padding, string> = {
  small: 'p-2',
  medium: 'p-6',
  large: 'p-12',
}

export interface GenderCardProps {
  padding: Padding
  layout: Layout
  cards: types.RepeaterItems
}

const GenderCard: types.Brick<GenderCardProps> = ({
  padding = 'medium',
  layout = 'row',
  cards,
}) => {
  const containerClasses = layout === 'row' 
    ? 'flex flex-col md:flex-row gap-4' 
    : 'flex flex-col gap-4'

  return (
    <div className={`w-full max-w-6xl mx-auto ${paddingClasses[padding]}`}>
      <div className={containerClasses}>
        <Repeater propName="cards" items={cards} />
      </div>
    </div>
  )
}

GenderCard.schema = {
  name: 'gender-card',
  label: 'Gender Card',
  category: 'Layout',
  previewImageUrl: '/bricks-preview-images/card-group.png',
  getDefaultProps: () => ({
    padding: 'medium',
    layout: 'row',
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
      itemType: 'gender-card-item',
      itemLabel: 'Card',
      min: 2,
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

export default GenderCard
