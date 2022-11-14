const UserModel = require("../../Model/UserSchema");
const { validationResult } = require("express-validator");


const userGet = async (req, res) => {
    const { id } = req.params;
    try {
        const User = await UserModel.findById({ _id: id });
        console.log(User, "Find Singal User")
        return res.status(200).json({ user: User });
    } catch (error) {
        console.log(error.message);
    }
};

const userAllGet = async (req, res) => {
    
    try {
        const Users = await UserModel.find({});
        res.send(Users)
        // console.log(Users, "Find All user")
        return res.status(200).json({ users: Users });
    } catch (error) {
        console.log(error.message);
    }
};


const userUpdate = async (req, res) => {
    const errors = validationResult(req);
    const { id } = req.params;
    const { name, email, password } = req.body
    // console.log(name ,  email , password)
    if (errors.isEmpty()) {
        await UserModel.updateOne({ _id: id }, { $set: req.body })
        return res.status(201).json({ message: 'Your user has updated successfully!!!' })

    } else {
        return res.status(401).json({ errors: errors.array() })
    }
};



const userDelete = async (req, res) => {
    const { id } = req.params;
    try {
        await UserModel.findByIdAndDelete({ _id: id });
        return res.status(200).json({ message: 'User has deleted successfully' })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json('server initernal error')
    }
};


module.exports = {
    userGet,
    userAllGet,
    userUpdate,
    userDelete
};