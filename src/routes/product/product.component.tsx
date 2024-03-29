import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetail } from '../../store/categories/categories.slice';
import { getProductDetail } from '../../utils/firebase/firebase.utils';
import ProductDetails from '../../components/product-detail/product-detail.component';
import Spinner from '../../components/spinner/spinner.component';

const defaultPs: ProductDetail[] = [];

const Product: FC = () => {
    const { category, id } = useParams();
    const [ps, setPs] = useState(defaultPs);
    const getProduct = async () => {
        const products = await getProductDetail(category!, id!);
        setPs(products);
    }
    useEffect(() => {
        getProduct();
    }, []);
    return ( 
        ps.length >0 ? (<ProductDetails product={ps[0]} />) : <Spinner />
    );
}

export default Product;