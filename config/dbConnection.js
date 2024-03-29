const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      "Database connected: ",
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
