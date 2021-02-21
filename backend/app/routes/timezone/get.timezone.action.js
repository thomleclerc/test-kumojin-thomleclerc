const getTimezoneAction = (req, res, next) => {
  try {
    if (!req.query.city) return res.sendStatus(400).end();

    if (req.query.city.toString().toLowerCase() !== "tokyo")
      return res.sendStatus(204).end();

    return res.send({ timezone: "Asia/Tokyo" }).end();
  } catch {
    res.sendStatus(404).end();
  }
};

module.exports = getTimezoneAction;
