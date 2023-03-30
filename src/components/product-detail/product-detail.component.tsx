import { FC } from "react";
import { ProductDetail } from "../../store/categories/categories.slice";

type ProductDetailProps = {
    product: ProductDetail,
}

const ProductDetails: FC<ProductDetailProps> = ({product}) => {
    return (
        <div>
            <h2>Product detail page: {product.title}</h2>
            {product.category}
            {product.name}
            {product.price}
            {product.desc}
        </div>
    );
};

export default ProductDetails;