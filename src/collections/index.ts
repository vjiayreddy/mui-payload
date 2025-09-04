import { CollectionConfig } from 'payload'
import { Users } from './Users'
import { Media } from './Media'
import { Categories } from './Categories'
import { Pages } from './Pages'
import { Products } from './Products'
import { FilterCategories } from './Filters/Categories'
import { FilterAttributes } from './Filters/Attributes'

export const collections: CollectionConfig[] = [
  Users,
  Media,
  Categories,
  Pages,
  FilterCategories,
  FilterAttributes,
  Products,
]
