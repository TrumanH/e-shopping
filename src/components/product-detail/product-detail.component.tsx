import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../store/categories/categories.slice';


const ProductDetail: FC = () => {
    const { category, id } = useParams();
    return (
    <div> {category}, {id} </div>
    );
}

export default ProductDetail;