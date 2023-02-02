import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategoriesPreviewContainer } from './categories-preview.styles';
import Spinner from '../../components/spinner/spinner.component';
import { RootState } from '../../store/store';
import { selectCategoriesMap } from '../../store/categories/categories.slice';


const CategoriesPreview = ()=> {
    const isLoading = useSelector((state: RootState) => state.categories.isLoading);
    const categoriesMap = useSelector(selectCategoriesMap);
    console.log("categories:", categoriesMap);
    return (
      <Fragment>
        {isLoading ? <Spinner /> : 
        <CategoriesPreviewContainer>{categoriesMap ? 
          Object.keys(categoriesMap).map((title)=>(
          <CategoryPreview key={title} title={title} products={categoriesMap[title as keyof typeof categoriesMap]}/>
          )) :
          <div>no products data!</div>}
        </CategoriesPreviewContainer>
        }
      </Fragment>
    );
}

export default CategoriesPreview;