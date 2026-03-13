const { sendToUIS } = require("../services/uis.service");
const { validateFormData } = require("../utils/validateFormData");

const submitForm = async (req, res, next) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Request body je prazan.",
      });
    }

    const { isValid, errors, sanitizedData } = validateFormData(req.body);

    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: "Validacija nije prošla.",
        errors,
      });
    }

    const result = await sendToUIS(sanitizedData);

    return res.status(200).json({
      success: true,
      message: "Podaci su uspješno poslani.",
      webhookResponse: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitForm,
};