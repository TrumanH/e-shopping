import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import ProdcutDetail from '../../components/product-detail/product-detail.component';
import { getCategoriesStart } from '../../store/categories/categories.slice';
import { useDispatch } from 'react-redux';

const Shop = ()=> {
    const dispatch = useDispatch();
    useEffect(()=> { dispatch(getCategoriesStart()); }
    , [dispatch])
    
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
            <Route path=":category/:id" element={<ProdcutDetail />}/>
        </Routes>
    );
};

export default Shop;