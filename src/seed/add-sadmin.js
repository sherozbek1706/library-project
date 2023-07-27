const { hashSync } = require("bcryptjs");
const mongoose = require("mongoose");
const Admins = require("../modules/admins/Admins");
const config = require("../shared/config");
const uri = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;
const data = [
  {
    full_name: "Sherozbek",
    username: "sherozbek.17",
    password: hashSync("1234", 10),
    is_super: true,
    is_deleted: false,
  },
];
async function seedData() {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.log("error", err);
    });

  const seedDB = async () => {
    await Admins.insertMany(data);
  };

  seedDB().then(() => {
    mongoose.connection.close();
  });
}

seedData();
