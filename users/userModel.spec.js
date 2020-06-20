const db = require("../database/dbConfig");
const USER = require("./userModel");

describe("user", () => {
  beforeAll(async () => {
    await db("user").truncate();
  });

  it("should add a new user to the database and return the newly created user", async () => {
    const user = {
      username: "foobar",
      password: "foobar",
    };

    const actual = await USER.add(user);
    const expected = {
      ...user,
      id: 1,
    };

    expect(actual).toEqual(expected);
  });
});
