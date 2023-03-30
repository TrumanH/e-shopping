import { FC } from 'react';
import ProductCard from '../product-card/product-card.component';
import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles';
import { Product } from '../../store/categories/categories.slice';

type categoryPreviewProps = {
  title: string,
  products: Product[],
}

const CategoryPreview: FC<categoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>
          {title.toUpperCase()} 
        </Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} linkto={`${title}/${product.id}`}/>
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;