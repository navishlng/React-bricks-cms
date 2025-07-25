import React from 'react'
import { types, Text, Link } from 'react-bricks/rsc'

type Padding = 'small' | 'medium' | 'large'

const paddingClasses: Record<Padding, string> = {
  small: 'p-2',
  medium: 'p-6',
  large: 'p-12',
}

interface OverlayCardProps {
  image: { src: string; alt: string }
  highlightedTextProp: string
  titleProp: string
  buttonTextProp: string
  buttonLink: string
  highlightedText: types.TextValue
  title: types.TextValue
  buttonText: types.TextValue
  padding: Padding
}

const OverlayCard: React.FC<OverlayCardProps> = ({
  image,
  highlightedTextProp,
  titleProp,
  buttonTextProp,
  buttonLink,
  highlightedText,
  title,
  buttonText,
  padding,
}) => {
  return (
    <div className={`w-1/2 ${paddingClasses[padding]}`}>
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute inset-x-0 bottom-8 flex flex-col items-center">
          <div className="text-center max-w-full">
            <div className="flex items-center justify-center space-x-2 text-2xl font-bold mb-3">
              <Text
                propName={highlightedTextProp}
                placeholder="HIGHLIGHTED"
                value={highlightedText}
                renderBlock={({ children }) => (
                  <span className="text-yellow-400">{children}</span>
                )}
              />
              <Text
                propName={titleProp}
                placeholder="TITLE"
                value={title}
                renderBlock={({ children }) => (
                  <h2 className="text-white">{children}</h2>
                )}
              />
            </div>
            <Link href={buttonLink} className="group inline-flex items-center">
              <Text
                propName={buttonTextProp}
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

interface GenderCardProps {
  padding: Padding
  menHighlightedText: types.TextValue
  menTitle: types.TextValue
  menButtonText: types.TextValue
  menButtonLink: string
  womenHighlightedText: types.TextValue
  womenTitle: types.TextValue
  womenButtonText: types.TextValue
  womenButtonLink: string
}

const GenderCard: types.Brick<GenderCardProps> = ({ 
  padding = 'medium',
  menHighlightedText,
  menTitle,
  menButtonText,
  menButtonLink,
  womenHighlightedText,
  womenTitle,
  womenButtonText,
  womenButtonLink
}) => {
  return (
    <div className="w-[70%] mx-auto">
      <div className="flex flex-row">
        <OverlayCard
          image={{ src: '/bricks-preview-images/men.jpg', alt: 'Men' }}
          highlightedTextProp="menHighlightedText"
          titleProp="menTitle"
          buttonTextProp="menButtonText"
          buttonLink={menButtonLink}
          highlightedText={menHighlightedText}
          title={menTitle}
          buttonText={menButtonText}
          padding={padding}
        />
        <OverlayCard
          image={{ src: '/bricks-preview-images/women.jpg', alt: 'Women' }}
          highlightedTextProp="womenHighlightedText"
          titleProp="womenTitle"
          buttonTextProp="womenButtonText"
          buttonLink={womenButtonLink}
          highlightedText={womenHighlightedText}
          title={womenTitle}
          buttonText={womenButtonText}
          padding={padding}
        />
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
    menHighlightedText: [{ type: 'text', text: "MEN'S" }],
    menTitle: [{ type: 'text', text: 'WATCHES' }],
    menButtonText: [{ type: 'text', text: 'DISCOVER' }],
    menButtonLink: '#',
    womenHighlightedText: [{ type: 'text', text: "WOMEN'S" }],
    womenTitle: [{ type: 'text', text: 'WATCHES' }],
    womenButtonText: [{ type: 'text', text: 'DISCOVER' }],
    womenButtonLink: '#',
  }),
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
      name: 'menHighlightedText',
      label: "Men's Highlighted Text",
      type: types.SideEditPropType.Text,
    },
    {
      name: 'menTitle',
      label: "Men's Title",
      type: types.SideEditPropType.Text,
    },
    {
      name: 'menButtonText',
      label: "Men's Button Text",
      type: types.SideEditPropType.Text,
    },
    {
      name: 'menButtonLink',
      label: "Men's Button Link",
      type: types.SideEditPropType.Text,
    },
    {
      name: 'womenHighlightedText',
      label: "Women's Highlighted Text",
      type: types.SideEditPropType.Text,
    },
    {
      name: 'womenTitle',
      label: "Women's Title",
      type: types.SideEditPropType.Text,
    },
    {
      name: 'womenButtonText',
      label: "Women's Button Text",
      type: types.SideEditPropType.Text,
    },
    {
      name: 'womenButtonLink',
      label: "Women's Button Link",
      type: types.SideEditPropType.Text,
    },
  ],
}

export default GenderCard