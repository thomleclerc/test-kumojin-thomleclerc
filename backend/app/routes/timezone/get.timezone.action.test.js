const createServer = require("../../../server");
const supertest = require("supertest");

const app = createServer();

const url = "/api/timezone";

describe("GET /api/timezone", () => {
  it("should return an object when tokyo is passed", async () => {
    await supertest(app)
      .get(`${url}?city=tokyo`)
      .expect(200)
      .then((response) => {
        const timezone = response.body.timezone;

        expect(timezone).toEqual("Asia/Tokyo");
      });
  });

  it("should return 204 (no content) when any other city is passed", async () => {
    await supertest(app).get(`${url}?city=boston`).expect(204);
  });

  it("should return 400 (bad request) when a different parameter is used", async () => {
    await supertest(app).get(`${url}?country=usa`).expect(400);
  });

  it("should return 204 (no content) when numbers are passed", async () => {
    await supertest(app).get(`${url}?city=1234`).expect(204);
  });

  it("should return 404 response status if the route does not exist", async () => {
    await supertest(app).get(`${url}o`).expect(404);
  });
});
