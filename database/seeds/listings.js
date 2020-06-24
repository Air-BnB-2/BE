exports.seed = function (knex) {
  return knex("listing")
    .truncate()
    .then(function () {
      return knex("listing").insert([
        {
          property_name: "Test #1",
          user_id: 1,
          property_type: 1,
          amenities: 7,
          room_type: 5,
          accomodates: 5,
          bathrooms: 3,
          cancellation_policy: 1,
          cleaning_fee: 70,
          instant_bookable: 1,
          zipcode: "12345",
          bedrooms: 3,
          beds: 5,
        },
        {
          property_name: "Test #2",
          user_id: 1,
          property_type: 2,
          amenities: 5,
          room_type: 1,
          accomodates: 3,
          bathrooms: 1,
          cancellation_policy: 2,
          cleaning_fee: 50,
          instant_bookable: 2,
          zipcode: "9876",
          bedrooms: 2,
          beds: 3,
        },
      ]);
    });
};
