import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Payments from '../../components/payments-report/payments-report.component';

const Admin = ()=> {
    const dispatch = useDispatch();
    // get order payment data from stripe
    
    return (
        <Routes>
            <Route index element={<Payments />} />
            {/* <Route path=":payments" element={<OrderPayments />} /> */}
        </Routes>
    );
};

export default Admin;