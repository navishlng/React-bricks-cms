import { types } from 'react-bricks/rsc'

import HeroUnit from './custom/MyHeroUnit'
import Pokemon from './custom/Pokemon'
import FlexCardGroup from './custom/FlexCardGroup/FlexCardGroup'
import FlexCardItem, { FlexCardSuperocean, FlexCardTropical, FlexCardAustin } from './custom/FlexCardGroup/FlexCardItem'
// import RegisterBrick from './custom/RegisterBrick/RegisterBrick'
import reactBricksUITheme from './react-bricks-ui'
// import GenderCatalog from './custom/GenderCatalog'
// import GenderCard from './custom/GenderCard'
import FlexCard from './custom/FlexCard'
import HeroCatalog from './custom/HeroCatalog'
import BreitlingStrap from './custom/BreitlingStrap/BreitlingStrap'
import GenderCard from './custom/GenderCard'
import GenderCardItem, { GenderCardMen, GenderCardWomen } from './custom/GenderCard/GenderCardItem'



const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Custom bricks',
        bricks: [
          FlexCard,
          HeroUnit,
          Pokemon,
          FlexCardGroup,
          FlexCardItem,
          FlexCardSuperocean,
          FlexCardTropical,
          FlexCardAustin,
          // GenderCatalog,
          // GenderCard,
          HeroCatalog,
          BreitlingStrap,
          GenderCard,
          GenderCardItem,
          GenderCardMen,
          GenderCardWomen,
        ],
      },
    ],
  },
]

export default bricks
