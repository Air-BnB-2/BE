const supertest = require("supertest");
const jwt = require("jsonwebtoken");
const server = require("./server");
const db = require("../database/dbConfig");
const USER = require("../users/userModel");

describe("POST listing", () => {
  beforeAll(async () => {
    await db("user").truncate();
    await db("listing").truncate();

    const user = {
      username: "admin",
      password: "admin",
    };

    const res = await USER.add(user);
  });

  it("returns name and optimal price", async () => {
    const token = createToken();
    return supertest(server)
      .post("/api/1/listings")
      .set("Authorization", token)
      .send({
        property_name: "foobar",
        property_type: 1,
        amenities: 2,
        room_type: 3,
        accomodates: 4,
        bathrooms: 5,
        cancellation_policy: 6,
        cleaning_fee: 7,
        instant_bookable: 8,
        zipcode: 9,
        bedrooms: 10,
        beds: 11,
      })
      .then((res) => {
        const expected = {
          property_name: "foobar",
          optimal_price: 700,
        };
        expect(res.body).toEqual(expected);
      });
  });
});

function createToken() {
  const payload = {
    subject: "test token",
  };
  const secret = process.env.JWT_SECRET || "dev secret";
  const options = {
    expiresIn: "8h",
  };

  return jwt.sign(payload, secret, options);
}
