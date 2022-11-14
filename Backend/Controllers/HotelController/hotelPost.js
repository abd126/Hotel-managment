const HotelModel = require("../../Model/HotelSchema");
const { validationResult } = require("express-validator");

const HotelCreate = async (req, res) => {
    const errors = validationResult(req);
    const { name, type, city, address, distacne, title, desc, cheapestprice } = req.body
    if (errors.isEmpty()) {
        await HotelModel.create(req.body)
        return res.json({ message: "Hotel Create successfully" })
    }
    else {
        return res.status(401).json({ errors: errors.array() })
    }

};

const HotelGet = async (req, res) => {
    const { id } = req.params;
    try {
        const Hotel = await HotelModel.findById({ _id: id });
        console.log(Hotel, "Find Singal hotel")
        return res.status(200).json({ product: Hotel });
    } catch (error) {
        console.log(error.message);
    }
};

const HotelAllGet = async (req, res) => {
    try {
        const Hotels = await HotelModel.find({});
        res.send(Hotels)
        console.log(Hotels, "Find All hotel")
        return res.status(200).json({ product: Hotel });
    } catch (error) {
        console.log(error.message);
    }
};


const HotelUpdate = async (req, res) => {
    const errors = validationResult(req);
    const { id } = req.params;
    const { name, type, city, address, distacne, title, desc, cheapestprice } = req.body
    if (errors.isEmpty()) {

        await HotelModel.updateOne({ _id: id }, { $set: req.body })
        return res.status(201).json({ message: 'Your Hotel has updated successfully!!!' })

    } else {
        return res.status(401).json({ errors: errors.array() })
    }
};



const HotelDelete = async (req, res) => {
    const { id } = req.params;
    try {
        await HotelModel.findByIdAndDelete({ _id: id });
        return res.status(200).json({ message: 'Product has deleted successfully' })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json('server initernal error')
    }
};

const countBycity = async (req, res) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city=>{
            return HotelModel.countDocuments({city : city})
        }));
        res.send(list)
        console.log(list, "Count By City")
        return res.status(200).json({ product: list });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    HotelCreate,
    HotelGet,
    HotelAllGet,
    HotelUpdate,
    HotelDelete,
    countBycity
};