const notFound = (req, res, next) => {
  const error = new Error(`Ruta nije pronađena: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Server error"
  });
};

module.exports = {
  notFound,
  errorHandler
};