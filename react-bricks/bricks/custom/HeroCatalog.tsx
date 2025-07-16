import { types, Text } from 'react-bricks/rsc'
import { MdKeyboardArrowRight } from 'react-icons/md'

interface HeroCatalogProps {
  videoUrl: string
  highlightedTitle: types.TextValue
  title: types.TextValue
  description: types.TextValue
  buttonText: types.TextValue
  buttonLink: string
}

const HeroCatalog: types.Brick<HeroCatalogProps> = ({
  videoUrl,
  highlightedTitle,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="relative w-100vw h-100vh overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute z-10 w-full h-full flex flex-col justify-center items-center bg-black/40 text-center px-4">
        <div className="flex justify-center items-center gap-2 mb-4 flex-wrap">
          <Text
            propName="highlightedTitle"
            renderBlock={(props) => (
              <span className="text-amber-300 font-bold uppercase text-3xl">
                {props.children}
              </span>
            )}
            placeholder="Enter highlighted title..."
            value={highlightedTitle}
          />
          <Text
            propName="title"
            renderBlock={(props) => (
              <span className="text-white font-bold uppercase text-3xl">
                {props.children}
              </span>
            )}
            placeholder="Enter title..."
            value={title}
          />
        </div>

        <Text
          propName="description"
          renderBlock={(props) => (
            <p className="text-white text-lg max-w-2xl mb-4 flex justify-center items-center">
              {props.children}
            </p>
          )}
          placeholder="Enter description..."
          value={description}
        />

        <a
          href={buttonLink || '#'}
          className="mt-2 inline-flex items-center gap-1 text-white hover:text-amber-300 transition-colors"
        >
          <Text
            propName="buttonText"
            renderBlock={(props) => (
              <span className="border-b-2 border-amber-300">{props.children}</span>
            )}
            placeholder="Enter button text"
            value={buttonText}
          />
          <MdKeyboardArrowRight color="#fbbf24" size={24} />
        </a>
      </div>
    </div>
  )
}

HeroCatalog.schema = {
  name: 'hero-catalog',
  label: 'Hero Catalog',
  category: 'hero',
  previewImageUrl: '/bricks-preview-images/video-carousel.png',
  getDefaultProps: () => ({
    videoUrl:
      'https://www.breitling.com/api/image-proxy/videos.ctfassets.net/11yu5j5b14kx/6EBkFF88MAYqsbaTPF2sDy/dc30f78ff40d85d08a5d0c5cd9b5bfe0/SOH_LE_HERO_BANNER_DESKTOP_02.mp4',
    highlightedTitle: "THE KELLY SLATER",
    title: 'LIMITED EDITION',
    description:
    'HONORING THE SURF LEGEND, INSPIRED BY HAWAII.',
    buttonText: 'Discover',
    buttonLink: '/',
  }),
  sideEditProps: [
    {
      name: 'videoUrl',
      label: 'Video URL (MP4)',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'buttonLink',
      label: 'Button Link',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default HeroCatalog
