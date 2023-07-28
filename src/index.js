const express = require("express");
const config = require("./shared/config");
const db = require("./db");
const app = express();

db();

const adminsRoute = require("./modules/admins/_api");
const borrowsRoute = require("./modules/borrower/_api");
const publisherRoute = require("./modules/publisher/_api");
app.use(express.json());

app.use(adminsRoute);
app.use(borrowsRoute);
app.use(publisherRoute);

app.listen(config.port, () =>
  console.log(`SERVER HAS BEEN STARTED ON PORT ${config.port}`)
);
