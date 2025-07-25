import React from 'react'
import { types, Text, Link } from 'react-bricks/rsc'
import GenderCardImage from './GenderCardImage'

export interface GenderCardItemProps {
  picture: types.IImageSource
  highlightedText: types.TextValue
  title: types.TextValue
  buttonText: types.TextValue
  buttonLink: string
  apiUrl?: string
  externalImageSrc?: string
  imageIndex?: number
  defaultImageIndex?: number // For setting different defaults
}

const GenderCardItem: types.Brick<GenderCardItemProps> = ({
  picture,
  highlightedText,
  title,
  buttonText,
  buttonLink,
  apiUrl,
  externalImageSrc,
  imageIndex,
  defaultImageIndex,
}) => {
  return (
    <div className="w-full">
      <div className="relative h-[400px] overflow-hidden">
        <GenderCardImage
          fallbackSrc={picture?.src || '/bricks-preview-images/men.jpg'}
          apiUrl={apiUrl}
          externalImageSrc={externalImageSrc}
          alt={picture?.alt || 'Card image'}
          className="absolute inset-0 w-full h-full object-cover"
          imageIndex={imageIndex ?? defaultImageIndex ?? 5}
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
    apiUrl: 'https://cdn77.api.userway.org/api/img-dscr/v2/WxoHuxQ8KD/1752791/GSZKN1rUeSAJMi91/alts.json?dto=%7B%22sorted%22%3A%5B%7B%22src%22%3A%22https%3A%2F%2Fcdn.cookielaw.org%2Flogos%2Fstatic%2Fot_company_logo.png%22%2C%22alt%22%3A%22Company%20Logo%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2F_next%2Fstatic%2Fimages%2Fbreitling-140.svg%22%2C%22alt%22%3A%22breitling%20Logo%20in%20logo140%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2F_next%2Fstatic%2Fimages%2Finfo-badge.svg%22%2C%22alt%22%3A%22infoBadge%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F1TsNF6RfhWzvX7p04yfFbz%2Fb6e019a3b8e4bb6e6c942d07ed48e429%2Fc_g-sub-banner.jpg%22%2C%22alt%22%3A%22HP%20Sub%20banner%20-%20Cutler%20%26%20Gross%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F2n7vMYbPpLZQqTw4Qml2ib%2Ff393ea70e19060a1660df50d19e0c5a9%2Fnavitimer.png%22%2C%22alt%22%3A%22collection%20-%20Navitimer%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F2pVwY1VARlHQ7i0VZgVSSJ%2F3ea579c72354fef7911518bb45751234%2FHP-women.jpg%22%2C%22alt%22%3A%22Actress%20Charlize%20Theron%20wears%20a%20Breilting%20watch%20on%20her%20wrist.%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F3C061r2amJAuEDrDuXdyMK%2Faf319aa5e66e47e5c7d7e158982ff68a%2FSOH-1.jpg%22%2C%22alt%22%3A%22collection%20-%20Superocean%20Heritage%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F3eNimZWVctpXWto3GLd5nG%2Fb22c6813d0e01c1a11ddc4218f1f02f9%2FAB0146101L1X1.png%22%2C%22alt%22%3A%22collection%20-%20avenger%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F4P8voXAFro4uUrbGZchy5k%2F8758255a666cced60b53668a979fe096%2FAB2510201K1P1.png%22%2C%22alt%22%3A%22collection%20-%20premier%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F4tXhnt2cJEbpA01hXnp297%2F6f9562385fbcac4e18d44614ffe4a4e9%2FHP-men-mobile.jpg%22%2C%22alt%22%3A%22Fu%C3%9Fballspieler%20Erling%20Haaland%20posiert%20mit%20einer%20Breitling%20Uhr%20im%20Stadion.%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F60uZpryfXxo2y5O1KHK9qa%2Fa5415002c11591568d8d792893499c14%2FA17375211B1A1.png%22%2C%22alt%22%3A%22collection%20-%20Superocean%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F6iA8dJJuDKFiJiwn0oSUfn%2F88fc6ca924774a2648904d8ea14b1a89%2FSOH-sub-banner.jpg%22%2C%22alt%22%3A%22HP%20Sub%20banner%20-%20Aloha%20state%20of%20mind%20SOH%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F6Y4mJlVG2GGl4ucLVDblX7%2Fcfef9b869e8f014d684529204f98328b%2FAB3113A71C1A1.png%22%2C%22alt%22%3A%22collection%20-%20Top%20Time%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F6yvTLv5fz1smh3N9Hj6V8x%2Fb3cd654a47241e566207bb93e362f6ef%2FAB0134101L1A1-.png%22%2C%22alt%22%3A%22collection%20-%20Chronomat%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F72CWH0nUf1dLLwqohr03Uy%2F56a72eaafd4714cb0bd01632cd0bef01%2FKS-sub-banner.jpg%22%2C%22alt%22%3A%22HP%20Sub%20banner%20-%20Aloha%20state%20of%20mind%20Kelly%20Slater%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2FcQuJkkUMYx8ldj5yi7xfo%2F23e8818f13d39f6bcf12153a0c2cf439%2FHP-men.jpg%22%2C%22alt%22%3A%22Fu%C3%9Fballspieler%20Erling%20Haaland%20posiert%20mit%20einer%20Breitling%20Uhr%20im%20Stadion.%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2FLgWeopRnOcREuDYh7mVIP%2F5cdf135ac999111d4ed32a9e74ffd311%2FClassic_avi.png%22%2C%22alt%22%3A%22collection%20-%20PLP%20Classic%20AVI%20Collection%20Picture%202%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2Fr44tXO4kAy6T6pN8YjYGk%2F60060e7c6548c4ef88b50af76e19c971%2Fendurance.png%22%2C%22alt%22%3A%22collection%20-%20Professional%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fwww-breitling.eu.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fab31101a1c1s1-soldier_1fb2c469_thumbnail_1024.webp%22%2C%22alt%22%3A%22Superocean%20Heritage%20B31%20Automatic%2040%20Kelly%20Slater%20AB31101A1C1S1%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fwww-breitling.eu.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fab3110361l1s1-soldier_b974f661_thumbnail_1024.webp%22%2C%22alt%22%3A%22Superocean%20Heritage%20B31%20Automatic%2040%20AB3110361L1S1%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fwww-breitling.eu.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fab3111241b1a1-soldier_0510c73d_thumbnail_1024.webp%22%2C%22alt%22%3A%22Superocean%20Heritage%20B31%20Automatic%2042%20AB3111241B1A1%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fwww-breitling.eu.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fub3112161c1s1-soldier_5675be7d_thumbnail_1024.webp%22%2C%22alt%22%3A%22Superocean%20Heritage%20B31%20Automatic%2044%20UB3112161C1S1%22%2C%22dir%22%3A%22RO%22%7D%5D%2C%22tier%22%3A%22PAID_QUOTA_TIER%22%2C%22pageUrl%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fin-en%2F%22%7D',
    imageIndex: 0, // Generic default (Company Logo)
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
    {
      name: 'apiUrl',
      label: 'API URL',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'imageIndex',
      label: 'Image Index',
      type: types.SideEditPropType.Number,
    },
  ],
}

export default GenderCardItem

// Men's Card Component (Image Index 9 - Erling Haaland)
const GenderCardMen: types.Brick<GenderCardItemProps> = (props) => {
  return <GenderCardItem {...props} defaultImageIndex={9} />
}

GenderCardMen.schema = {
  name: 'gender-card-men',
  label: 'Gender Card Men',
  category: 'Layout',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    picture: {
      src: '/bricks-preview-images/men.jpg',
      alt: 'Men Card Image',
    },
    highlightedText: "MEN'S",
    title: 'COLLECTION',
    buttonText: 'DISCOVER',
    buttonLink: '#',
    apiUrl: 'https://cdn77.api.userway.org/api/img-dscr/v2/WxoHuxQ8KD/1752791/GSZKN1rUeSAJMi91/alts.json?dto=%7B%22sorted%22%3A%5B%7B%22src%22%3A%22https%3A%2F%2Fcdn.cookielaw.org%2Flogos%2Fstatic%2Fot_company_logo.png%22%2C%22alt%22%3A%22Company%20Logo%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2F_next%2Fstatic%2Fimages%2Fbreitling-140.svg%22%2C%22alt%22%3A%22breitling%20Logo%20in%20logo140%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2F_next%2Fstatic%2Fimages%2Finfo-badge.svg%22%2C%22alt%22%3A%22infoBadge%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F1TsNF6RfhWzvX7p04yfFbz%2Fb6e019a3b8e4bb6e6c942d07ed48e429%2Fc_g-sub-banner.jpg%22%2C%22alt%22%3A%22HP%20Sub%20banner%20-%20Cutler%20%26%20Gross%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F2n7vMYbPpLZQqTw4Qml2ib%2Ff393ea70e19060a1660df50d19e0c5a9%2Fnavitimer.png%22%2C%22alt%22%3A%22collection%20-%20Navitimer%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F2pVwY1VARlHQ7i0VZgVSSJ%2F3ea579c72354fef7911518bb45751234%2FHP-women.jpg%22%2C%22alt%22%3A%22Actress%20Charlize%20Theron%20wears%20a%20Breilting%20watch%20on%20her%20wrist.%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F3C061r2amJAuEDrDuXdyMK%2Faf319aa5e66e47e5c7d7e158982ff68a%2FSOH-1.jpg%22%2C%22alt%22%3A%22collection%20-%20Superocean%20Heritage%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F3eNimZWVctpXWto3GLd5nG%2Fb22c6813d0e01c1a11ddc4218f1f02f9%2FAB0146101L1X1.png%22%2C%22alt%22%3A%22collection%20-%20avenger%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F4P8voXAFro4uUrbGZchy5k%2F8758255a666cced60b53668a979fe096%2FAB2510201K1P1.png%22%2C%22alt%22%3A%22collection%20-%20premier%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F4tXhnt2cJEbpA01hXnp297%2F6f9562385fbcac4e18d44614ffe4a4e9%2FHP-men-mobile.jpg%22%2C%22alt%22%3A%22Fu%C3%9Fballspieler%20Erling%20Haaland%20posiert%20mit%20einer%20Breitling%20Uhr%20im%20Stadion.%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F60uZpryfXxo2y5O1KHK9qa%2Fa5415002c11591568d8d792893499c14%2FA17375211B1A1.png%22%2C%22alt%22%3A%22collection%20-%20Superocean%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F6iA8dJJuDKFiJiwn0oSUfn%2F88fc6ca924774a2648904d8ea14b1a89%2FSOH-sub-banner.jpg%22%2C%22alt%22%3A%22HP%20Sub%20banner%20-%20Aloha%20state%20of%20mind%20SOH%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F6Y4mJlVG2GGl4ucLVDblX7%2Fcfef9b869e8f014d684529204f98328b%2FAB3113A71C1A1.png%22%2C%22alt%22%3A%22collection%20-%20Top%20Time%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F6yvTLv5fz1smh3N9Hj6V8x%2Fb3cd654a47241e566207bb93e362f6ef%2FAB0134101L1A1-.png%22%2C%22alt%22%3A%22collection%20-%20Chronomat%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F72CWH0nUf1dLLwqohr03Uy%2F56a72eaafd4714cb0bd01632cd0bef01%2FKS-sub-banner.jpg%22%2C%22alt%22%3A%22HP%20Sub%20banner%20-%20Aloha%20state%20of%20mind%20Kelly%20Slater%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2FcQuJkkUMYx8ldj5yi7xfo%2F23e8818f13d39f6bcf12153a0c2cf439%2FHP-men.jpg%22%2C%22alt%22%3A%22Fu%C3%9Fballspieler%20Erling%20Haaland%20posiert%20mit%20einer%20Breitling%20Uhr%20im%20Stadion.%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2FLgWeopRnOcREuDYh7mVIP%2F5cdf135ac999111d4ed32a9e74ffd311%2FClassic_avi.png%22%2C%22alt%22%3A%22collection%20-%20PLP%20Classic%20AVI%20Collection%20Picture%202%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2Fr44tXO4kAy6T6pN8YjYGk%2F60060e7c6548c4ef88b50af76e19c971%2Fendurance.png%22%2C%22alt%22%3A%22collection%20-%20Professional%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fwww-breitling.eu.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fab31101a1c1s1-soldier_1fb2c469_thumbnail_1024.webp%22%2C%22alt%22%3A%22Superocean%20Heritage%20B31%20Automatic%2040%20Kelly%20Slater%20AB31101A1C1S1%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fwww-breitling.eu.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fab3110361l1s1-soldier_b974f661_thumbnail_1024.webp%22%2C%22alt%22%3A%22Superocean%20Heritage%20B31%20Automatic%2040%20AB3110361L1S1%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fwww-breitling.eu.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fab3111241b1a1-soldier_0510c73d_thumbnail_1024.webp%22%2C%22alt%22%3A%22Superocean%20Heritage%20B31%20Automatic%2042%20AB3111241B1A1%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fwww-breitling.eu.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fub3112161c1s1-soldier_5675be7d_thumbnail_1024.webp%22%2C%22alt%22%3A%22Superocean%20Heritage%20B31%20Automatic%2044%20UB3112161C1S1%22%2C%22dir%22%3A%22RO%22%7D%5D%2C%22tier%22%3A%22PAID_QUOTA_TIER%22%2C%22pageUrl%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fin-en%2F%22%7D',
    imageIndex: 9, // Men's image (Erling Haaland)
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
    {
      name: 'apiUrl',
      label: 'API URL',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'imageIndex',
      label: 'Image Index',
      type: types.SideEditPropType.Number,
    },
  ],
}

// Women's Card Component (Image Index 5 - Charlize Theron)
const GenderCardWomen: types.Brick<GenderCardItemProps> = (props) => {
  return <GenderCardItem {...props} defaultImageIndex={5} />
}

GenderCardWomen.schema = {
  name: 'gender-card-women',
  label: 'Gender Card Women',
  category: 'Layout',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    picture: {
      src: '/bricks-preview-images/women.jpg',
      alt: 'Women Card Image',
    },
    highlightedText: "WOMEN'S",
    title: 'COLLECTION',
    buttonText: 'DISCOVER',
    buttonLink: '#',
    apiUrl: 'https://cdn77.api.userway.org/api/img-dscr/v2/WxoHuxQ8KD/1752791/GSZKN1rUeSAJMi91/alts.json?dto=%7B%22sorted%22%3A%5B%7B%22src%22%3A%22https%3A%2F%2Fcdn.cookielaw.org%2Flogos%2Fstatic%2Fot_company_logo.png%22%2C%22alt%22%3A%22Company%20Logo%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2F_next%2Fstatic%2Fimages%2Fbreitling-140.svg%22%2C%22alt%22%3A%22breitling%20Logo%20in%20logo140%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2F_next%2Fstatic%2Fimages%2Finfo-badge.svg%22%2C%22alt%22%3A%22infoBadge%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F1TsNF6RfhWzvX7p04yfFbz%2Fb6e019a3b8e4bb6e6c942d07ed48e429%2Fc_g-sub-banner.jpg%22%2C%22alt%22%3A%22HP%20Sub%20banner%20-%20Cutler%20%26%20Gross%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F2n7vMYbPpLZQqTw4Qml2ib%2Ff393ea70e19060a1660df50d19e0c5a9%2Fnavitimer.png%22%2C%22alt%22%3A%22collection%20-%20Navitimer%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F2pVwY1VARlHQ7i0VZgVSSJ%2F3ea579c72354fef7911518bb45751234%2FHP-women.jpg%22%2C%22alt%22%3A%22Actress%20Charlize%20Theron%20wears%20a%20Breilting%20watch%20on%20her%20wrist.%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F3C061r2amJAuEDrDuXdyMK%2Faf319aa5e66e47e5c7d7e158982ff68a%2FSOH-1.jpg%22%2C%22alt%22%3A%22collection%20-%20Superocean%20Heritage%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F3eNimZWVctpXWto3GLd5nG%2Fb22c6813d0e01c1a11ddc4218f1f02f9%2FAB0146101L1X1.png%22%2C%22alt%22%3A%22collection%20-%20avenger%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F4P8voXAFro4uUrbGZchy5k%2F8758255a666cced60b53668a979fe096%2FAB2510201K1P1.png%22%2C%22alt%22%3A%22collection%20-%20premier%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F4tXhnt2cJEbpA01hXnp297%2F6f9562385fbcac4e18d44614ffe4a4e9%2FHP-men-mobile.jpg%22%2C%22alt%22%3A%22Fu%C3%9Fballspieler%20Erling%20Haaland%20posiert%20mit%20einer%20Breitling%20Uhr%20im%20Stadion.%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F60uZpryfXxo2y5O1KHK9qa%2Fa5415002c11591568d8d792893499c14%2FA17375211B1A1.png%22%2C%22alt%22%3A%22collection%20-%20Superocean%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F6iA8dJJuDKFiJiwn0oSUfn%2F88fc6ca924774a2648904d8ea14b1a89%2FSOH-sub-banner.jpg%22%2C%22alt%22%3A%22HP%20Sub%20banner%20-%20Aloha%20state%20of%20mind%20SOH%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F6Y4mJlVG2GGl4ucLVDblX7%2Fcfef9b869e8f014d684529204f98328b%2FAB3113A71C1A1.png%22%2C%22alt%22%3A%22collection%20-%20Top%20Time%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F6yvTLv5fz1smh3N9Hj6V8x%2Fb3cd654a47241e566207bb93e362f6ef%2FAB0134101L1A1-.png%22%2C%22alt%22%3A%22collection%20-%20Chronomat%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F72CWH0nUf1dLLwqohr03Uy%2F56a72eaafd4714cb0bd01632cd0bef01%2FKS-sub-banner.jpg%22%2C%22alt%22%3A%22HP%20Sub%20banner%20-%20Aloha%20state%20of%20mind%20Kelly%20Slater%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2FcQuJkkUMYx8ldj5yi7xfo%2F23e8818f13d39f6bcf12153a0c2cf439%2FHP-men.jpg%22%2C%22alt%22%3A%22Fu%C3%9Fballspieler%20Erling%20Haaland%20posiert%20mit%20einer%20Breitling%20Uhr%20im%20Stadion.%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2FLgWeopRnOcREuDYh7mVIP%2F5cdf135ac999111d4ed32a9e74ffd311%2FClassic_avi.png%22%2C%22alt%22%3A%22collection%20-%20PLP%20Classic%20AVI%20Collection%20Picture%202%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2Fr44tXO4kAy6T6pN8YjYGk%2F60060e7c6548c4ef88b50af76e19c971%2Fendurance.png%22%2C%22alt%22%3A%22collection%20-%20Professional%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fwww-breitling.eu.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fab31101a1c1s1-soldier_1fb2c469_thumbnail_1024.webp%22%2C%22alt%22%3A%22Superocean%20Heritage%20B31%20Automatic%2040%20Kelly%20Slater%20AB31101A1C1S1%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fwww-breitling.eu.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fab3110361l1s1-soldier_b974f661_thumbnail_1024.webp%22%2C%22alt%22%3A%22Superocean%20Heritage%20B31%20Automatic%2040%20AB3110361L1S1%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fwww-breitling.eu.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fab3111241b1a1-soldier_0510c73d_thumbnail_1024.webp%22%2C%22alt%22%3A%22Superocean%20Heritage%20B31%20Automatic%2042%20AB3111241B1A1%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fwww-breitling.eu.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fub3112161c1s1-soldier_5675be7d_thumbnail_1024.webp%22%2C%22alt%22%3A%22Superocean%20Heritage%20B31%20Automatic%2044%20UB3112161C1S1%22%2C%22dir%22%3A%22RO%22%7D%5D%2C%22tier%22%3A%22PAID_QUOTA_TIER%22%2C%22pageUrl%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fin-en%2F%22%7D',
    imageIndex: 5, // Women's image (Charlize Theron)
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
    {
      name: 'apiUrl',
      label: 'API URL',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'imageIndex',
      label: 'Image Index',
      type: types.SideEditPropType.Number,
    },
  ],
}

export { GenderCardMen, GenderCardWomen }
