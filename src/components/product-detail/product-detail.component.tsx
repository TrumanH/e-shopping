import { FC } from "react";
import { ProductDetail } from "../../store/categories/categories.slice";
import { ItemContainer, TitleBox, ImageBox, DescBox, DetailBox, AddCartButton, 
    DescHead, Price, Shipping, Description, ColorsBox, ColorBlock, MoreInfo, DetailHead,
    DetailContents, DetailItem
 } from './product-detail.styles';
import { addItem } from "../../store/cart/cart.slice";
import { useDispatch } from "react-redux";
import { BUTTON_TYPES } from '../../components/button/button.component';

type ProductDetailProps = {
    product: ProductDetail,
}

const ProductDetails: FC<ProductDetailProps> = ({product}) => {
    const dispatch = useDispatch();
    const addToCart = ()=> {
        dispatch(addItem({...product, quantity: 1}));
    }
    return (
        <ItemContainer>
            <TitleBox>{product.title}</TitleBox>
            <ImageBox imgUrl={product.imageUrl} />
            <DescBox>
                <DescHead>
                    <Price>${product.price}</Price>
                    <Shipping>FREE SHIPPING</Shipping>
                </DescHead>
                <Description>Ready to dress up or down, this fashion product "{product.name}" is poping up now,
                    it's been collected in our "{product.category}" category.
                </Description>
                <MoreInfo href="#">More information &rarr; </MoreInfo>
                <ColorsBox>
                    <ColorBlock color='black'/>
                    <ColorBlock color='blue'/>
                    <ColorBlock color='red'/>
                    <ColorBlock color='yellow'/>
                    <ColorBlock color='green'/>
                    <ColorBlock color='brown'/>
                </ColorsBox>
            </DescBox>
            <DetailBox>
                <DetailHead>product details</DetailHead>
                <DetailContents>
                    <DetailItem>Poping up fashion item in our catetory {product.category} collection.</DetailItem>
                    <DetailItem>Category: {product.category}.</DetailItem>
                    <DetailItem>Product name: {product.name}.</DetailItem>
                    <DetailItem>Shipping fee: Free shipping.</DetailItem>
                </DetailContents>
            </DetailBox>
            <AddCartButton buttonType={BUTTON_TYPES.inverted} onClick={addToCart}>ADD TO CART</AddCartButton>
        </ItemContainer>
    );
};

export default ProductDetails;

