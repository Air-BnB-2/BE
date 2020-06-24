const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

const restricted = require("../auth/restricted");
const authRouter = require("../auth/authRouter");
const listingRouter = require("../listings/listingRouter");

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api/auth", authRouter);
server.use(
  "/api/:id/listing",
  restricted,
  (req, res, next) => {
    const { id } = req.params;
    req.user_id = id;
    next();
  },
  listingRouter
);

server.get("/", (req, res) => {
  res.status(200).json({ message: "up" });
});

module.exports = server;
