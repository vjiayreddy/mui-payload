import LazyImage from '@/components/Shared/LazyImage'
import { CategoryTitle, Wrapper, CategoryTitleWrapper } from './styled'

const ProductCategoryCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <>
      <Wrapper>
        <LazyImage src={image} width={100} height={100} alt="category" />
      </Wrapper>
      <CategoryTitleWrapper>
        <CategoryTitle className="category-title">
          <p>{title}</p>
        </CategoryTitle>
      </CategoryTitleWrapper>
    </>
  )
}

export default ProductCategoryCard
