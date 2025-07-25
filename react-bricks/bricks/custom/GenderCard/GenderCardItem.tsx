import React from 'react'
import { types, Text, Link, Image } from 'react-bricks/rsc'

export interface GenderCardItemProps {
  picture: types.IImageSource
  highlightedText: types.TextValue
  title: types.TextValue
  buttonText: types.TextValue
  buttonLink: string
}

const GenderCardItem: types.Brick<GenderCardItemProps> = ({
  picture,
  highlightedText,
  title,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="w-full">
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
                  <span className="text-yellow-400 font-extrabold">{children}</span>
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
    </div>
  )
}

GenderCardItem.schema = {
  name: 'gender-card-item',
  label: 'Gender Card Item',
  category: 'Layout',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    picture: {
      src: '/bricks-preview-images/men.jpg',
      alt: 'Card Image',
    },
    highlightedText: "HIGHLIGHTED",
    title: 'TITLE',
    buttonText: 'DISCOVER',
    buttonLink: '#',
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

export default GenderCardItem
