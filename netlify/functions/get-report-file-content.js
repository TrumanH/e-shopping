require("dotenv").config();

// download report csv file and return content of it.

exports.handler = async (event) => {
  try {
    const { url } = JSON.parse(event.body);
    const heads = {'Authorization': 'Bearer ' + process.env.STRIPE_SECRET_KEY}
    const content = await fetch(url, {method:'GET', headers: heads}).then(resp=>resp.text());
    return {
      statusCode: 200,
      body: JSON.stringify({ content }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};