import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategoriesPreviewContainer } from './categories-preview.styles';

const CategoriesPreview = ()=> {
    const categoriesMap = useSelector(state => state.categories.categoriesMap);
    // console.log("categories:", categories);
    return (
    <CategoriesPreviewContainer>{categoriesMap ? 
        Object.keys(categoriesMap).map((title)=>(
        <CategoryPreview key={title} title={title} products={categoriesMap[title]}/>
        )) :
        <div>no products data!</div>}
    </CategoriesPreviewContainer>
    );
}

export default CategoriesPreview;