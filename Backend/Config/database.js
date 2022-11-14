const mongoose =  require("mongoose");
const dotenv = require("dotenv");


dotenv.config();

const Database_Connection = async () =>{
    // mongoose.connection.on("connected", () => console.log("mongoose connected"));
    // mongoose.connection.on("error", (error) => console.log(error));
  // Database Connection
const DBURI = process.env.DB_URI;
mongoose.connect(DBURI);
mongoose.connection.on("connected", () => console.log("mongoose connected"));
mongoose.connection.on("error", (error) => console.log(error));
}

module.exports = Database_Connection;