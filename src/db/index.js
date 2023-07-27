const mongoose = require("mongoose");
const config = require("../shared/config");
module.exports = () => {
  mongoose
    .connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`)
    .then(() => {
      console.log("DATABASE CONNECTED");
    })
    .catch((error) => {
      console.log(error);
    });
};
