const mongoose = require("mongoose");

const server = "127.0.0.1:27017";
const database = "CloudBook";

const mongoURI = "mongodb://localhost:27017/?directConnection=true";

const connectToMongo = async () => {
  //   mongoose.set("strictQuery", false);
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(`mongodb+srv://dipanshhchauhan:0YLVboWumwrsMjRH@cluster0.nf0redb.mongodb.net/?retryWrites=true&w=majority`);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
};

module.exports = connectToMongo;
