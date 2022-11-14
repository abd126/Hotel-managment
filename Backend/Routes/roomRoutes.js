const express = require("express");
const { roomCreate, roomGet, roomAllGet, roomUpdate, roomDelete } = require("../Controllers/index")
const roomValidation = require('../Validation/roomValidation')



const router = express.Router();


// HOTEL ROUTES
router.post("/api/addroom/:hotelid", roomValidation, roomCreate)
router.put("/api/updateroom/:id/:hotelid", roomValidation, roomUpdate)
router.delete("/api/deleteroom/:id/:hotelid", roomDelete)
router.get("/api/getroom/:id", roomGet)
router.get("/api/getrooms", roomAllGet)




module.exports = router;