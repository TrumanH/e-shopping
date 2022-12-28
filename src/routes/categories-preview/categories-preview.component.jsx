import { useContext } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategoriesPreviewContainer } from './categories-preview.styles';

const CategoriesPreview = ()=> {
    const { categories } = useContext(CategoriesContext);
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