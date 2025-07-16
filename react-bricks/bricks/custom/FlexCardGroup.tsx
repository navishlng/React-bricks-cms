// components/FlexCardGroup.tsx
import dynamic from 'next/dynamic'
import { types } from 'react-bricks/rsc'

const FlexCard = dynamic(() => import('./FlexCard'))

const FlexCardGroup: types.Brick = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 p-8">
      {/* Card 1 */}
      <FlexCard
        padding="medium"
        image={{ src: '/images/superocean.jpg', alt: 'Superocean' }}
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
        image={{ src: '/images/kelly-slate.jpg', alt: 'Kelly Slater' }}
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
        image={{ src: '/images/chronomat.jpg', alt: 'Chronomat' }}
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
        description={[]}
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
}

export default FlexCardGroup
