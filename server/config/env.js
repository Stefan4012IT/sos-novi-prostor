require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 5000,
  UIS_WEBHOOK_URL: process.env.UIS_WEBHOOK_URL || ""
};