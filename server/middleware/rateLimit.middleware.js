const rateLimit = require("express-rate-limit");

const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Previše pokušaja. Pokušajte ponovo kasnije.",
  },
});

module.exports = {
  formLimiter,
};