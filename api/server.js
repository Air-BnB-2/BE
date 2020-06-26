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

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

server.use("/api/auth", authRouter);
server.use(
  "/api/:id/listings",
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
