import { Image, Link, Repeater, RichText, types } from 'react-bricks/rsc'

import {
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../LayoutSideProps'
import blockNames from '../blockNames'
import { bgColors, textColors } from '../colors'
import Container from '../shared/components/Container'
import Section from '../shared/components/Section'
import { logos } from '../shared/defaultImages'

interface FooterProps extends LayoutProps {
  siteUrl: string
  logo: types.IImageSource
  copyright: types.TextValue
  columns: types.RepeaterItems
}

const Footer: types.Brick<FooterProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  siteUrl,
  logo,
  copyright,
  columns,
}) => {
  return (
    <footer>
      <Section
        backgroundColor={backgroundColor}
        borderTop={borderTop}
        borderBottom={borderBottom}
      >
        <Container
          paddingTop={paddingTop}
          paddingBottom={paddingBottom}
          className="flex justify-between flex-wrap"
        >
          <div className="w-full mb-12 lg:w-auto lg:mb-0 lg:mr-8">
            <Link href={siteUrl} className="block mb-4">
              <Image
                propName="logo"
                source={logo}
                alt="Logo"
                maxWidth={300}
                imageClassName="w-48 h-7 object-contain object-left"
              />
            </Link>
            <RichText
              propName="copyright"
              value={copyright}
              placeholder="Copyright notice"
              renderBlock={({ children }) => (
                <p className={`text-sm ${textColors.GRAY_500}`}>{children}</p>
              )}
              allowedFeatures={[types.RichTextFeatures.Link]}
              renderLink={({ children, href, target, rel }) => (
                <Link
                  href={href}
                  target={target}
                  rel={rel}
                  className="text-sky-500 hover:text-sky-600 hover:-translate-y-px transition-all ease-out duration-150"
                >
                  {children}
                </Link>
              )}
            />
          </div>
          <Repeater propName="columns" items={columns} />
        </Container>
      </Section>
    </footer>
  )
}

Footer.schema = {
  name: blockNames.Footer,
  label: 'Footer',
  category: 'layout',
  tags: ['footer'],
  previewImageUrl: `/bricks-preview-images/${blockNames.Footer}.png`,
  repeaterItems: [
    {
      name: 'columns',
      itemType: blockNames.FooterColumn,
      max: 4,
    },
  ],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    ...sectionDefaults,
    backgroundColor: bgColors.LIGHT_GRAY.value,
    borderTop: 'full',
    logo: logos.REACT_BRICKS,
    siteUrl: '',
    copyright: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Visual editing CMS for React.',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Proudly made in Italy',
          },
        ],
      },
    ],
    columns: [
      {
        title: 'CUSTOMER SERVICE',
        links: [
          {
            linkText: 'FAQ',
            linkPath: '/',
          },
          {
            linkText: 'Find a boutique',
            linkPath: '/',
          },
          {
            linkText: 'Our services',
            linkPath: '/',
          },
          {
            linkText: 'Check your order',
            linkPath: '/',
          },
          {
            linkText: 'My account',
            linkPath: '/',
          },
          {
            linkText: 'Register your Breitling',
            linkPath: '/',
          },
        ],
      },
      {
        title: 'WATCHES',
        links: [
          {
            linkText: "Women's watches",
            linkPath: '/',
          },
          {
            linkText: "Men's watches",
            linkPath: '/',
          },
          {
            linkText: 'Gold',
            linkPath: '/',
          },
          {
            linkText: 'Limited editions',
            linkPath: '/',
          },
          {
            linkText: 'Novelties',
            linkPath: '/',
          },
          {
            linkText: 'All collections',
            linkPath: '/',
          },
        ],
      },
      {
        title: 'ABOUT',
        links: [
          {
            linkText: 'Breitling Books',
            linkPath: '/',
          },
          {
            linkText: 'Partnerships',
            linkPath: '/',
          },
          {
            linkText: 'Sustainability',
            linkPath: '/',
          },
          {
            linkText: 'Download catalog',
            linkPath: '/',
          },
          {
            linkText: 'Career',
            linkPath: '/',
          },
        ],
      },
      {
        title: 'SOCIAL NETWORKS',
        links: [
          {
            linkText: 'Tutorial',
            linkPath: '/',
          },
          {
            linkText: 'Documentation',
            linkPath: '/',
          },
          {
            linkText: 'Videos',
            linkPath: '/',
          },
          {
            linkText: 'Blog',
            linkPath: '/',
          },
        ],
      },
    ],
  }),

  // Sidebar Edit controls for props
  sideEditProps: [neutralBackgroundSideGroup, paddingBordersSideGroup],
}

export default Footer
