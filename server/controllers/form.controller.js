const { sendToUIS } = require("../services/uis.service");

const submitForm = async (req, res, next) => {
  try {
    const formData = req.body;

    if (!formData || Object.keys(formData).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Request body je prazan."
      });
    }

    const result = await sendToUIS(formData);

    return res.status(200).json({
      success: true,
      message: "Forma je primljena.",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitForm
};