const moment = require("moment");

// Improvement : Have a parameter in the request for the timezone instead of having a specific route for Japan, that way, you'll have one route for all timezones
const getTimezoneAction = (req, res, next) => {
  // logic here

  res.send().end();
};

module.exports = getTimezoneAction;
