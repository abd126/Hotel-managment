const UserModel = require("../../Model/UserSchema");
const { validationResult } = require("express-validator");
const { hashPassword } = require("../../Services/index");

const SignupController = async (req, res) => {
  // console.log("hitttttttttttt", req.body);
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { name, email, password } = req.body
    const emailExist = await UserModel.findOne({ email })
    try {
      if (!emailExist) {
        const hashed = await hashPassword(password)
        const user = await UserModel.create({
          name,
          email,
          password: hashed
        })
        console.log(user)
        // const token = createToken({id : user._id , name : user.name})
        return res.status(201).json({ msg: "your account has been created", user })
      } else {

        return res.status(401).json({ errors: [{ msg: `${email} is already taken` }] })
      }
    } catch (errors) {
      console.log(errors.message)
      return res.status(500).json()
    }

  } else {
    //validation failed
    return res.status(400).json({ errors: errors.array() })
  }
};





module.exports = SignupController;