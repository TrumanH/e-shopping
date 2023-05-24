import { getPaymentReportIns, createPaymentReportIns, updatePaymentReportIns } from '../../utils/firebase/payment-report.utils';
import { paymentReport } from '../../utils/firebase/payment-report.utils';

// run payment report of last month, and record the report into firebase.
export const runReport = async () => {
    // request severless function to get a payment report(of last month).
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth() - 1, 1).getTime() / 1000; // start of last month
    const end = new Date(now.getFullYear(), now.getMonth(), 1).getTime() / 1000;   // start of current month
    const lastMonth = `${now.getFullYear()}-${now.getMonth()-1}`;
    if (await getPaymentReportIns(lastMonth)) { // payment report of last month already exist or triggered.
      return;
    }
    const response = await fetch('/.netlify/functions/run-payment-report', {
      method: 'post',
      headers: {
        'Content_Type': 'application/json',
      },
      body: JSON.stringify({interval_start: start, interval_end: end}),
    }).then(res=> res.json());  
    if (response.statusCode == 400) {
      console.log(response.body.error); // log error
      return;
    }   // statusCode==200, the report status would be pending for a while. 
    // Only when status transformed to 'successed', we can download csv through 'body.result.url'
    // Extract report id from response body.
    console.log(response); // log cuccessed response
    const reportRun = response.reportRun;  
    if (!reportRun.id) {
      return;
    }
    // Insert report record of last month into database(firebase).
    const paymentReport: paymentReport = {
      id: reportRun.id, 
      month: lastMonth, 
      status: reportRun.status,
      url: reportRun.result.url,
      result: null, // TODO: parse and fill content of csv file
    }; // 
    createPaymentReportIns(paymentReport); // create report instance in firebase
    return paymentReport;
};

// retrieve payment report from stripe api, and update it's result into firebase. 
export const retrieveReport = async (month:string, report_id: string)=> {
  const resp = await fetch('./.netlify/functions/retrieve-payment-report', {
    method: 'post',
    headers: {'Content_Type': 'application/json'},
    body: JSON.stringify({report_id}),  
  }).then(res=> res.json());
  console.log(resp); // 
  if (resp.status=='succeeded') {
    const data = {status: 'succeeded', url: resp.result.url};
    updatePaymentReportIns(month, data);
  }
  return resp;
};