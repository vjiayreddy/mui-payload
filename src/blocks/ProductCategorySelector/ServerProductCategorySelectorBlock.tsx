import ProductCategorySelectorBlock from './ProductCategorySelectorBlock'
import {
  Category,
  ProductCategorySelectorBlock as ProductCategorySelectorBlockType,
} from '@/payload-types'

const ServerProductCategorySelectorBlock = (props: ProductCategorySelectorBlockType) => {
  return <ProductCategorySelectorBlock categories={(props.categories ?? []) as Category[]} />
}
export default ServerProductCategorySelectorBlock
