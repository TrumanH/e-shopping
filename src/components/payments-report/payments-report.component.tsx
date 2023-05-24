import { useState } from 'react';
import Button from '../button/button.component';
import { ReportContainer, Header, BtsBox } from './payment-report.styles';
import { runReport, retrieveReport } from '../../utils/stripe/payment-report.utils';
import { getPaymentReportIns } from '../../utils/firebase/payment-report.utils';

// from itemized balance change activity report.
const PaymentsReport = () => {
  const [lastMonth, setLastMonth ] = useState("");
  const [reportId, setReportId ] = useState("");
  
  const runReportHandler = async ()=> {
    const report = await runReport();
    if (!report) { return; }
    const { month, id } = report;
    setLastMonth(month);
    setReportId(id);
  }

  const retrieveReportHandler = async () => {
    const now = new Date();
    // retrieve report from firebase 
    const report = await getPaymentReportIns(`${now.getFullYear()}-${now.getMonth()-1}`);
    if (report) {
      console.log(report);
      return report;
    }
    await retrieveReport(lastMonth, reportId);
  }
    
  return (
      <ReportContainer>
        <Header>Payments UI</Header>
        <BtsBox>
          <p>Run payment report of last month</p>
          <Button onClick={runReportHandler}>Run</Button>
          <br/>
          <p>Retrieve payment report of last month</p>
          <Button onClick={retrieveReportHandler}>Retrieve</Button>
        </BtsBox>
      </ReportContainer>
      
  )
}

export default PaymentsReport;