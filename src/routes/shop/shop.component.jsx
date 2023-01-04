import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
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
        </Routes>
    );
};

export default Shop;