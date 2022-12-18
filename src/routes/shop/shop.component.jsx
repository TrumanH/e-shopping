import { useContext } from 'react';
import { ProductContext } from '../../context/product.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';

const Shop = ()=> {
    const { products } = useContext(ProductContext);
    console.log("products:", products);
    return (
    <div className='products-container'>{products ? products.map((product)=>(
        <ProductCard key={product.id} product={product}/>
        )) : <div>no products data!</div>}
    </div>
    );
}

export default Shop;