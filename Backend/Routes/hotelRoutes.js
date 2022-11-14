const express = require("express");
const { HotelCreate , HotelUpdate , HotelDelete , HotelAllGet ,HotelGet,countBycity} = require("../Controllers/index")
const  hotelValidation  = require("../Validation/hotelValidation")



const router = express.Router();


// HOTEL ROUTES
router.post("/api/addhotel", hotelValidation, HotelCreate)
router.put("/api/updatehotel/:id", hotelValidation, HotelUpdate)
router.delete("/api/deletehotel/:id", HotelDelete )
router.get("/api/gethotel/find/:id" , HotelGet)
router.get("/api/gethotels" , HotelAllGet)

router.get("/api/countbycity" ,countBycity)
router.get("/api/countbytype" , HotelAllGet)





module.exports = router;