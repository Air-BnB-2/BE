exports.seed = function (knex) {
  return knex("user")
    .truncate()
    .then(function () {
      return knex("user").insert([
        {
          id: 1,
          username: "admin",
          password:
            "$2y$08$kr2xen4QuCMe6FJOLF9/heOsitY00v8plwfXGAzir.D7oXHRmLEU.",
        },
      ]);
    });
};
