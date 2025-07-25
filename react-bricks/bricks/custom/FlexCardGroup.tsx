// components/FlexCardGroup.tsx
import dynamic from 'next/dynamic'
import React from 'react'
import { types } from 'react-bricks/rsc'

const FlexCard = dynamic(() => import('./FlexCard'))

const FlexCardGroup: types.Brick = () => {
  return (
    <div className="flex flex-row md:flex-row justify-center items-stretch gap-8 p-8">
      {/* Card 1 */}
      <FlexCard
        padding="medium"
        image={{ src: '/bricks-preview-images/superocean.jpg', alt: 'Superocean' }}
        highlightedTitle="SUPEROCEAN"
        title={[
          {
            type: 'text',
            text: 'SUPEROCEAN ',
            styles: { color: '#fbbf24', fontWeight: 'bold' },
          },
          {
            type: 'text',
            text: 'HERITAGE, REFINED',
            styles: { fontWeight: 'bold' },
          },
        ]}
        description={[
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'New design, streamlined sizes. Built for life at sea.',
              },
            ],
          },
        ]}
        buttonText={[{ type: 'text', text: 'DISCOVER' }]}
        buttonLink="#"
      />

      {/* Card 2 */}
      <FlexCard
        padding="medium"
        image={{ src: '/bricks-preview-images/tropical_dial.jpg', alt: 'Tropical Dial' }}
        highlightedTitle="TROPICAL DIAL"
        title={[
          {
            type: 'text',
            text: 'TROPICAL DIAL ',
            styles: { color: '#fbbf24', fontWeight: 'bold' },
          },
          {
            type: 'text',
            text: 'LEGENDARY NAME',
            styles: { fontWeight: 'bold' },
          },
        ]}
        description={[
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text:
                  'The Superocean Heritage Kelly Slater, limited to 500 pieces.',
              },
            ],
          },
        ]}
        buttonText={[{ type: 'text', text: 'DISCOVER' }]}
        buttonLink="#"
      />

      {/* Card 3 */}
      <FlexCard
        padding="medium"
        image={{ src: '/bricks-preview-images/austin_butler.jpg', alt: 'Austin Butler' }}
        highlightedTitle="AUSTIN BUTLER"
        title={[
          {
            type: 'text',
            text: 'AUSTIN BUTLER ',
            styles: { color: '#fbbf24', fontWeight: 'bold' },
          },
          {
            type: 'text',
            text: 'WEARS THE ALL-PURPOSE CHRONOMAT',
            styles: { fontWeight: 'bold' },
          },
        ]}
        description={[
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: '',
              },
            ],
          },
        ]}
        buttonText={[{ type: 'text', text: 'DISCOVER' }]}
        buttonLink="#"
      />
    </div>
  )
}

FlexCardGroup.schema = {
  name: 'flex-card-group',
  label: 'Flex Card Group',
  category: 'Layout',
  previewImageUrl: '/bricks-preview-images/card-group.png',
  getDefaultProps: () => ({}),
  sideEditProps: [],
}

export default FlexCardGroup
