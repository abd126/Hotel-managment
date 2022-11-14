const loginController = require("./AuthController/login");
const allUser = require("./AuthController/allUser");
const SignupController = require("./AuthController/signup");
const { HotelCreate, HotelUpdate, HotelDelete, HotelGet, HotelAllGet,countBycity } = require('./HotelController/hotelPost')
const { userGet, userAllGet, userUpdate, userDelete } = require('./AuthController/allUser')
const { roomCreate, roomGet, roomAllGet, roomUpdate, roomDelete } = require('./RoomController/roomPost')



module.exports = {
    loginController: loginController,
    SignupController: SignupController,
    allUser: allUser,
    HotelCreate: HotelCreate,
    HotelUpdate: HotelUpdate,
    HotelDelete: HotelDelete,
    HotelGet: HotelGet,
    HotelAllGet: HotelAllGet,
    userGet: userGet,
    userAllGet: userAllGet,
    userUpdate: userUpdate,
    userDelete: userDelete,
    roomCreate :roomCreate,
    roomGet : roomGet,
    roomAllGet,
    roomUpdate,
    roomDelete,
    countBycity

}