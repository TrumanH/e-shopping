import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import './category.styles.scss';

const Category = ()=> {
    const { categories } = useContext(CategoriesContext);
    const { category } = useParams();
    const [ products, setProducts ] = useState([]);
    
    useEffect(()=>{
        setProducts(categories[category]);
    }, [categories, category]);

    return (
        <div>
            <h2>{category.toUpperCase()}</h2>
            <div className='category-container'>
            {products ? products.map((product)=><ProductCard key={product.id} product={product}/>) : <h2>No Products!</h2>}
            </div>
        </div>
    );
}

export default Category;