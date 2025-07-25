import { types } from 'react-bricks/rsc'

import HeroUnit from './custom/MyHeroUnit'
import Pokemon from './custom/Pokemon'
import FlexCardGroup from './custom/FlexCardGroup'
// import RegisterBrick from './custom/RegisterBrick/RegisterBrick'
import reactBricksUITheme from './react-bricks-ui'
// import GenderCatalog from './custom/GenderCatalog'
// import GenderCard from './custom/GenderCard'
import FlexCard from './custom/FlexCard'
import HeroCatalog from './custom/HeroCatalog'
import BreitlingStrap from './custom/BreitlingStrap'
import GenderCard from './custom/GenderCard'



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
          // GenderCatalog,
          // GenderCard,
          HeroCatalog,
          BreitlingStrap,
          GenderCard,
        ],
      },
    ],
  },
]

export default bricks
