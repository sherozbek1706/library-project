const express = require("express");
const config = require("./shared/config");
const db = require("./db");
const app = express();

db();

const adminsRoute = require("./modules/admins/_api");
const borrowsRoute = require("./modules/borrower/_api");
const publisherRoute = require("./modules/publisher/_api");
const authorsRoute = require("./modules/authors/_api");
const booksRoute = require("./modules/books/_api");
const loansRoute = require("./modules/loans/_api");
app.use(express.json());

app.use(adminsRoute);
app.use(borrowsRoute);
app.use(publisherRoute);
app.use(authorsRoute);
app.use(booksRoute);
app.use(loansRoute);

app.listen(config.port, () =>
  console.log(`SERVER HAS BEEN STARTED ON PORT ${config.port}`)
);
