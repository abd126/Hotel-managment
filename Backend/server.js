const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");


const {authRoutes , hotelRoutes , roomRoutes} = require("./Routes/index");
const Database_Connection = require("./Config/database")

const app = express();
const PORT = process.env.PORT || 5000;

//Allow body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Database Connection
Database_Connection();

///all routes
app.use(authRoutes);
app.use(hotelRoutes);
app.use(roomRoutes);


app.listen(PORT, () => console.log(`server running on localhost:${PORT}`));