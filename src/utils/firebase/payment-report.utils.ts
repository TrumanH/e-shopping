import {
    doc, 
    getDoc,
    setDoc,
    collection,
    query,
    where,
    getDocs,
    updateDoc,
    } from 'firebase/firestore';
import { db } from './firebase.utils';

export interface paymentReport {
    id: string // report id from stripe reponse
    month: string // i.e: '2023-4', May 2023
    status: string // i.e: 'pending', 'succeeded', 'failed'
    url: string // only available when status is 'succeeded'
    result: object | null
};

// get payment report, can also judge if exist 
export const getPaymentReportIns = async (month: string) => {
    const docRef = doc(db, "payment_report", month);
    const docSnap = await getDoc(docRef);
    // if (docSnap.exists()) {
    //     console.log("Document data:", docSnap.data());
    // } else {
    //     // docSnap.data() will be undefined in this case
    //     console.log("No such document!");
    // }
    return docSnap.data();
};

export const createPaymentReportIns = async (report: paymentReport) => {
    setDoc(doc(db, "payment_report", report.month), report);
};

export const updatePaymentReportIns = async (month: string, data: object) => {
    const reportRef = doc(db, "payment_report", month);
    await updateDoc(reportRef, data);
};