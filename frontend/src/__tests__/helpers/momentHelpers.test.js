import moment from "moment-timezone";
import MockDate from "mockdate";

import {
  getDateTimeFromTimezone,
  getBrowserTimezone,
} from "../../helpers/momentHelpers";

describe("getBrowserTimezone", () => {
  it("should return Asia/Tokyo for the local timezone", () => {
    moment.tz.guess = jest.fn().mockReturnValue("Asia/Tokyo");

    const result = getBrowserTimezone();

    expect(result).toEqual("Asia/Tokyo");
    expect(moment.tz.guess).toHaveBeenCalled();
  });
});

describe("getDateTimeFromTimezone", () => {
  beforeEach(() => {
    MockDate.set("2020-05-13T12:00:00.000Z");
  });

  it("should return the mocked date in the Toronto timezone", () => {
    const result = getDateTimeFromTimezone("America/Toronto");

    expect(result).toEqual("2020-05-13 08:00:00");
  });

  it("should return the mocked date in the Tokyo timezone", () => {
    const result = getDateTimeFromTimezone("Asia/Tokyo");

    expect(result).toEqual("2020-05-13 21:00:00");
  });

  it("should return the mocked date in the Paris timezone", () => {
    const result = getDateTimeFromTimezone("Europe/Paris");

    expect(result).toEqual("2020-05-13 14:00:00");
  });

  it("should return an empty string if no timezone is passed", () => {
    const result = getDateTimeFromTimezone();

    expect(result).toEqual("");
  });
});
