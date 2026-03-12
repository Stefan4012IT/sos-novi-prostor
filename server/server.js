const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const formRoutes = require("./routes/form.routes");
const { notFound, errorHandler } = require("./middleware/error.middleware");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server radi."
  });
});

app.use("/api/form", formRoutes);

// Posluži statične fajlove iz React builda
app.use(express.static(path.join(__dirname, "../client/build")));

// Sve što nije /api neka ide na React
app.get("/{*splat}", (req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// 404 i error handler tek na kraju
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});