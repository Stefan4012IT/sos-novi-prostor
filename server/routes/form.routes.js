const express = require("express");
const router = express.Router();

const { submitForm } = require("../controllers/form.controller");
const { formLimiter } = require("../middleware/rateLimit.middleware");
const { dedupeFormSubmission } = require("../middleware/dedupe.middleware");

router.post("/", formLimiter, dedupeFormSubmission, submitForm);

module.exports = router;