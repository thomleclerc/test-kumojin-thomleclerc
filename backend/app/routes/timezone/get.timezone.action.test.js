const axios = require("axios");

const url = "http://localhost:3009/api/timezone";

describe("GET /api/timezone", () => {
  it("should return an object when tokyo is passed", async () => {
    const response = await axios.get(`${url}?city=tokyo`);

    const timezone = response.data.timezone;

    expect(response.status).toEqual(200);
    expect(timezone).toEqual("Asia/Tokyo");
  });

  it("should return 204 (no content) when any other city is passed", async () => {
    const response = await axios.get(`${url}?city=boston`);

    expect(response.status).toEqual(204);
  });

  it("should return 400 (bad request) when a different parameter is used", async () => {
    const response = await axios.get(`${url}?country=usa`).catch((err) => err);

    const status = response.response.status;

    expect(status).toEqual(400);
  });

  it("should return 204 (no content) when numbers are passed", async () => {
    const response = await axios.get(`${url}?city=1234`);

    expect(response.status).toEqual(204);
  });

  it("should return 404 response status if the route does not exist", async () => {
    const response = await axios.get(url + "o").catch((err) => err);

    const status = response.response.status;

    expect(status).toEqual(404);
  });
});
