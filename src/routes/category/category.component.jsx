import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContainer } from  './category.styles';
import Spinner from '../../components/spinner/spinner.component';
import { Fragment } from 'react';

const Category = ()=> {
  const { categoriesMap, isLoading } = useSelector(state => state.categories);
  const { category } = useParams();
  const [ products, setProducts ] = useState([]);
  
  useEffect(()=>{
    categoriesMap && setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <Fragment>
      <h2>{category.toUpperCase()}</h2>
      {isLoading ? <Spinner /> : 
        <CategoryContainer>
          {products ? products.map((product)=><ProductCard key={product.id} product={product}/>) : <h2>No Products!</h2>}
        </CategoryContainer>
      }
    </Fragment>
  );
}

export default Category;