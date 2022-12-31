import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContainer } from  './category.styles';

const Category = ()=> {
    const categoriesMap = useSelector(state => state.categories.categories);
    const { category } = useParams();
    const [ products, setProducts ] = useState([]);
    
    useEffect(()=>{
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category]);

    return (
        <div>
            <h2>{category.toUpperCase()}</h2>
            <CategoryContainer>
                {products ? products.map((product)=><ProductCard key={product.id} product={product}/>) : <h2>No Products!</h2>}
            </CategoryContainer>
        </div>
    );
}

export default Category;