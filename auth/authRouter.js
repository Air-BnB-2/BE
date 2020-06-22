const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

const Users = require("../users/userModel");

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    if (typeof password !== "string") {
      return res.status(400).json({ message: "Password must be alphanumeric" });
    }

    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcryptjs.hashSync(password, rounds);
    const credentials = {
      username,
      password: hash,
    };

    const user = await Users.add(credentials);

    const token = createToken(user);

    res.status(201).json({
      message: "successfully registered.",
      id: user.id,
      username: user.username,
      token,
    });
  } else {
    res.status(400).json({
      message: "Please provide username and password",
    });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findBy({ username });

  if (user && bcryptjs.compareSync(password, user.password)) {
    const token = createToken(user);

    res.status(200).json({
      message: "successfully logged in.",
      id: user.id,
      username: user.username,
      token,
    });
  } else {
    res.status(401).json({ message: "Incorrect credentials" });
  }
});

function createToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  };
  const secret = process.env.JWT_SECRET || "dev secret";
  const options = {
    expiresIn: "8h",
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
