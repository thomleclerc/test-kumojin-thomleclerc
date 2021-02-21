import moment from "moment-timezone";

// Overkill function
export const getBrowserTimezone = () => {
  return moment.tz.guess();
};

export const getDateTimeFromTimezone = (timezone) => {
  return timezone ? moment().tz(timezone).format("YYYY-MM-DD HH:mm:ss") : "";
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getBrowserTimezone, getDateTimeFromTimezone };
