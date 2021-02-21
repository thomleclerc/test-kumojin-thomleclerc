const moment = require("moment-timezone");

const getTimezoneAction = (req, res, next) => {
  try {
    const city = req.query.city;

    if (!city) return res.sendStatus(400).end();

    const timezones = moment.tz.names();
    const selectedTimezone = timezones.find((tz) =>
      tz.toLowerCase().includes(city.toString().toLowerCase())
    );

    if (!selectedTimezone) return res.sendStatus(204).end();

    return res.send({ timezone: selectedTimezone }).end();
  } catch {
    res.sendStatus(404).end();
  }
};

module.exports = getTimezoneAction;
