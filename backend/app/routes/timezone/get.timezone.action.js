const getTimezoneAction = (req, res, next) => {
  console.log(req.query.city);
  if (!req.query.city) return res.sendStatus(400).end();

  if (req.query.city.toString().toLowerCase() !== "tokyo")
    return res.sendStatus(204).end();

  return res.send({ timezone: "Asia/Tokyo" }).end();
};

module.exports = getTimezoneAction;
