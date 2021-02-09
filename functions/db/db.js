const axios = require("axios");

exports.handler = async (event, context) => {
  const query = event.queryStringParameters.q;
  if (!query) {
    return {
      statusCode: 404,
      body: JSON.stringify({ data: "No hay query" }),
    };
  } else {
    try {
      const data = await axios.get(
        `https://bienesraices-137.herokuapp.com/${query}`
      );
      return {
        statusCode: 200,
        body: JSON.stringify({ data: data.data }),
      };
    } catch (e) {
      return {
        statusCode: 500,
        body: e.toString(),
      };
    }
  }
};
