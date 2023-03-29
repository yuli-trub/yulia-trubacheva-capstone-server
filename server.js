const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const knex = require("knex")(require("./knexfile.js").development);

const app = express();
const PORT = process.env.PORT || 5050;

require("dotenv").config();

app.use(express.json());

app.use(helmet());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
