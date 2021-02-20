// Improvement : Have a parameter in the request for the timezone instead of having a specific route for Japan, that way, you'll have one route for all timezones
const getTokyoAction = (req, res, next) => {
  const tokyoTimezone = { timezone: "Asia/Tokyo" };

  res.send(tokyoTimezone).end();
};

module.exports = getTokyoAction;
