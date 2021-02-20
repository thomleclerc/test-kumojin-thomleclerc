const { getServerTimezone } = require("../../helpers/momentHelpers");

// Improvement : Have a parameter in the request for the timezone instead of having a specific route for Japan, that way, you'll have one route for all timezones
const getTimezoneAction = (req, res, next) => {
  const serverTimezone = getServerTimezone();

  res.send(serverTimezone).end();
};

module.exports = getTimezoneAction;
