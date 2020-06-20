const db = require("../database/dbConfig");
const USER = require("./userModel");

describe("add()", () => {
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

describe("findById()", () => {
  beforeAll(async () => {
    await db("user").truncate();
  });

  it("should not find user with the id and return a falsy value", async () => {
    const id = 1;

    const actual = await USER.findById(id);

    expect(actual).toBeFalsy();
  });

  it("should find the user with id and return it", async () => {
    const user = {
      username: "foobar",
      password: "foobar",
    };
    const id = 1;

    await USER.add(user);

    const actual = await USER.findById(id);
    expected = {
      ...user,
      id,
    };

    expect(actual).toEqual(expected);
  });
});
