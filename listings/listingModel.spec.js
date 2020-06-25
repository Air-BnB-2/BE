const db = require("../database/dbConfig");
const LISTING = require("./listingModel");
const USER = require("../users/userModel");

describe("add()", () => {
  beforeAll(async () => {
    await db("user").truncate();
    await db("listing").truncate();

    const user = {
      username: "admin",
      password: "admin",
    };

    await USER.add(user);
  });

  it("should add a listing to the database", async () => {
    const listing = {
      user_id: 1,
      property_name: "foobar",
      property_type: 1,
      room_type: 1,
      amenities: 3,
      accomodates: 1,
      bathrooms: 3,
      cancellation_policy: 2,
      cleaning_fee: 2,
      instant_bookable: 1,
      zipcode: "26101",
      bedrooms: 4,
      beds: 6,
    };

    const actual = await LISTING.add(listing);
    const expected = [1];

    expect(actual).toEqual(expected);
  });
});

describe("findById()", () => {
  beforeAll(async () => {
    await db("user").truncate();
    await db("listing").truncate();

    const user = {
      username: "admin",
      password: "admin",
    };

    await USER.add(user);

    const listing = {
      user_id: 1,
      property_name: "foobar",
      property_type: 1,
      room_type: 1,
      amenities: 3,
      accomodates: 1,
      bathrooms: 3,
      cancellation_policy: 2,
      cleaning_fee: 2,
      instant_bookable: 1,
      zipcode: "26101",
      bedrooms: 4,
      beds: 6,
    };

    await LISTING.add(listing);
  });

  it("should add a listing to the database", async () => {
    const id = 1;

    const actual = await LISTING.findById(id);
    const expected = 1;

    expect(actual.id).toBe(expected);
  });
});
