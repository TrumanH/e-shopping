import { useContext } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import './categories-preview.styles.scss';

const CategoriesPreview = ()=> {
    const { categories } = useContext(CategoriesContext);
    // console.log("categories:", categories);
    return (
    <div className='categories-preview-container'>{categories ? 
        Object.keys(categories).map((title)=>(
        <CategoryPreview key={title} title={title} products={categories[title]}/>
        )) :
        <div>no products data!</div>}
    </div>
    );
}

export default CategoriesPreview;