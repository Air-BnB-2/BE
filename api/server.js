const express = require("express");
const helmet = require("helmet");

const server = express();

const authRouter = require("../auth/authRouter");

server.use(helmet());
server.use(express.json());
server.use("/api/auth", authRouter);

module.exports = server;
