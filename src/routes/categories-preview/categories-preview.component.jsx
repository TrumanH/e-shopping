import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategoriesPreviewContainer } from './categories-preview.styles';

const CategoriesPreview = ()=> {
    const categories = useSelector(state => state.categories.categories);
    // console.log("categories:", categories);
    return (
    <CategoriesPreviewContainer>{categories ? 
        Object.keys(categories).map((title)=>(
        <CategoryPreview key={title} title={title} products={categories[title]}/>
        )) :
        <div>no products data!</div>}
    </CategoriesPreviewContainer>
    );
}

export default CategoriesPreview;