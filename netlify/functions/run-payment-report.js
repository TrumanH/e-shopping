require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { interval_start, interval_end } = JSON.parse(event.body);
    // Timestamps are for 2020-01-01 00:00 PST and 2020-02-01 00:00 PST.
    // The columns parameter is optional. A default set of columns will be provided if you don't specify a value.
    const reportRun = await stripe.reporting.reportRuns.create({
      report_type: 'balance_change_from_activity.itemized.3',
      parameters: {
        interval_start: interval_start, // i.e: '1577865600',
        interval_end: interval_end, // '1580544000',
        timezone: 'America/Los_Angeles',
        columns: ['balance_transaction_id', 'created', 'available_on', 'currency', 'gross', 'fee', 'net', 'reporting_category'],
      },
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ reportRun }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};