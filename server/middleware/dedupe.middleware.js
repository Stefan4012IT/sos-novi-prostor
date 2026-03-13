const recentSubmissions = new Map();

const DEDUPE_WINDOW_MS = 10 * 60 * 1000;

const dedupeFormSubmission = (req, res, next) => {
  const email = String(req.body.email || "").trim().toLowerCase();
  const phone = [
    String(req.body["country-code"] || "").trim(),
    String(req.body["area-code"] || "").trim(),
    String(req.body["phone-number"] || "").trim(),
  ].join("");

  const key = `${email}::${phone}`;
  const now = Date.now();

  if (!email || !phone) {
    return next();
  }

  const existing = recentSubmissions.get(key);

  if (existing && now - existing < DEDUPE_WINDOW_MS) {
    return res.status(429).json({
      success: false,
      message: "Prijava sa istim podacima je već poslata skoro.",
    });
  }

  recentSubmissions.set(key, now);

  for (const [storedKey, timestamp] of recentSubmissions.entries()) {
    if (now - timestamp > DEDUPE_WINDOW_MS) {
      recentSubmissions.delete(storedKey);
    }
  }

  next();
};

module.exports = {
  dedupeFormSubmission,
};