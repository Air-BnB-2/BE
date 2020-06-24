const router = require("express").Router();
const Listings = require("../listings/listingModel");

router.get("/", async (req, res) => {
  const userListings = await Listings.findByUserId(req.user_id);

  res.status(200).json(userListings);
});

router.post("/", async (req, res) => {
  const { property_name, zipcode } = req.body;
  const listing = {
    ...req.body,
    user_id: req.user_id,
    zipcode: Number(zipcode),
  };

  await Listings.add(listing);

  const listingArray = Object.entries(listing).filter((entry) => {
    return entry[0] !== "user_id" && entry[0] !== "property_name";
  });

  const formattedListing = listingArray.map((val) => val[1]);

  res.status(201).json({
    property_name,
    optimal_price: 700,
  });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { property_name, zipcode } = req.body;
  const updates = {
    ...req.body,
    zipcode: Number(zipcode),
  };

  const listing = await Listings.edit(updates, id);

  const listingArray = Object.entries(listing).filter((entry) => {
    return entry[0] !== "user_id" && entry[0] !== "property_name";
  });

  const formattedListing = listingArray.map((val) => val[1]);

  res.status(201).json([formattedListing]);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await Listings.remove(id);

  res.status(200).json(result);
});

module.exports = router;
