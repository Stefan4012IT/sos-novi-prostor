const axios = require("axios");

const sendToUIS = async (formData) => {
  const webhookUrl = process.env.UIS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.log("UIS_WEBHOOK_URL nije postavljen. Vraćam mock response.");
    console.log("Primljeni podaci:", formData);

    return {
      mocked: true,
      received: formData
    };
  }

  const response = await axios.post(webhookUrl, formData, {
    headers: {
      "Content-Type": "application/json"
    },
    timeout: 15000
  });

  return {
    mocked: false,
    status: response.status,
    response: response.data
  };
};

module.exports = {
  sendToUIS
};