const RoomModel = require("../../Model/RoomSchema");
const HotelModel = require("../../Model/HotelSchema");
const { validationResult } = require("express-validator");

const roomCreate = async (req, res) => {
    const errors = validationResult(req);
    const hotelId = req.params.hotelid
    console.log(hotelId)
    const { maxPeople, title, desc, price } = req.body
    if (errors.isEmpty()) {
        try {
            const savedRoom = await RoomModel.create(req.body)
            try {
                await HotelModel.findByIdAndUpdate(hotelId, {
                    $push: { rooms: savedRoom._id }
                })
            } catch (error) {
                return res.status(401).json({ errors: errors.array()})
            }
        } catch (err) {
            return res.status(401).json({ errors: errors.array()})
        }
        return res.json({ message: "Room Create successfully" })
    }
    else {
        return res.status(401).json({ errors: errors.array() })
    }
};


const roomGet = async (req, res) => {
    const { id } = req.params;
    try {
        const Room = await RoomModel.findById({ _id: id });
        console.log(Room, "Find Singal hotel")
        return res.status(200).json({ product: Room });
    } catch (error) {
        console.log(error.message);
    }
};

const roomAllGet = async (req, res) => {
    try {
        const Rooms = await RoomModel.find({});
        res.send(Rooms)
        console.log(Hotels, "Find All Rooms")
        return res.status(200).json({ product: Rooms });
    } catch (error) {
        console.log(error.message);
    }
};


const roomUpdate = async (req, res) => {
    const errors = validationResult(req);
    const { id } = req.params;
    const { maxPeople, title, desc, price } = req.body
    if (errors.isEmpty()) {

        await RoomModel.updateOne({ _id: id }, { $set: req.body })
        return res.status(201).json({ message: 'Your Room has updated successfully!!!' })

    } else {
        return res.status(401).json({ errors: errors.array() })
    }
};



const roomDelete = async (req, res) => {
    const { id } = req.params;
    try {
        await RoomModel.findByIdAndDelete({ _id: id });
        return res.status(200).json({ message: 'Room has deleted successfully' })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json('server initernal error')
    }
};





module.exports = {
    roomCreate,
    roomGet,
    roomAllGet,
    roomUpdate,
    roomDelete
}