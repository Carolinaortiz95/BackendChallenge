const request = require("supertest");
const app = require("../src/app.js");

describe("GET /game", () => {
  it("respond with json games", (done) => {
    request(app)
      .get("/game")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("POST /game", () => {
  it("respond with 200 created", (done) => {
    const data = {
      game: {
        state: {
          code: "1",
          description: "CREATED",
        },
      },
      cells: [],
    };
    request(app)
      .post("/game")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
