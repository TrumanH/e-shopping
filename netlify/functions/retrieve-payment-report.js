require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { report_id } = JSON.parse(event.body);
    const report = await stripe.reporting.reportRuns.retrieve(report_id);
    return {
      statusCode: 200,
      body: JSON.stringify({ report }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};