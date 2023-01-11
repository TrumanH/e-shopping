import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategoriesPreviewContainer } from './categories-preview.styles';
import Spinner from '../../components/spinner/spinner.component';


const CategoriesPreview = ()=> {
    const { categoriesMap, isLoading } = useSelector(state => state.categories);
    // console.log("categories:", categories);
    return (
      <Fragment>
        {isLoading ? <Spinner /> : 
        <CategoriesPreviewContainer>{categoriesMap ? 
          Object.keys(categoriesMap).map((title)=>(
          <CategoryPreview key={title} title={title} products={categoriesMap[title]}/>
          )) :
          <div>no products data!</div>}
        </CategoriesPreviewContainer>
        }
      </Fragment>
    );
}

export default CategoriesPreview;