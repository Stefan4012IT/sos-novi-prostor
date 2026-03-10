const express = require("express");
const router = express.Router();

const { submitForm } = require("../controllers/form.controller");

router.post("/", submitForm);

module.exports = router;