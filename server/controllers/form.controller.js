const { sendToUIS } = require("../services/uis.service");

const submitForm = async (req, res, next) => {
  try {
    const formData = req.body;

    if (!formData) {
      return res.status(400).json({
        success: false,
        message: "Request body je prazan."
      });
    }

    if (!formData.name || !formData.email) {
      return res.status(400).json({
        success: false,
        message: "Polja name i email su obavezna."
      });
    }

    const result = await sendToUIS(formData);

    return res.status(200).json({
      success: true,
      message: "Podaci su uspješno poslani na UIS webhook.",
      webhookResponse: result
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitForm
};